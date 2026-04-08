import Container from './UI/Container.tsx';
import { useTimersContext, type Timer as TimerProps } from '../store/timer-context.tsx';
import { useEffect, useRef, useState } from 'react';

export default function Timer({ name, duration }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration * 1000);

  const interval = useRef<number | null>(null);

  const { isRunning } = useTimersContext();

  useEffect(() => {
    let timer: number;
    if (isRunning) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 50) {
            if (interval.current) {
              clearInterval(interval.current);
            }
            return 0;
          }
          return prev - 50;
        });
      }, 50);

      interval.current = timer;
    } else if (!isRunning && interval.current) {
      clearInterval(interval.current);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  const formatedReminingTime = (timeLeft / 1000).toFixed(2);

  return (
    <Container
      as="article"
      style={{
        padding: '1.5rem',
        background: '#6366F1',
        borderRadius: '16px',
        flex: '1 1 calc(33.333% - 1rem)',
        minWidth: '220px',
        textAlign: 'center',
        cursor: 'pointer',
      }}
    >
      <h2
        style={{
          margin: '0 0 0.75rem 0',
          fontSize: '1.75rem',
          fontWeight: '700',
          background: 'linear-gradient(135deg, #fff 0%, #f0f0f0 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          letterSpacing: '-0.02em',
        }}
      >
        {name}
      </h2>

      <p
        style={{
          margin: '0',
          fontSize: '2rem',
          fontWeight: '600',
          color: '#fff',
        }}
      >
        <progress
          max={duration * 1000}
          value={timeLeft}
          style={{
            width: '100%',
            height: '12px',
            borderRadius: '6px',
            overflow: 'hidden',
          }}
        />
      </p>

      <p
        style={{
          color: '#fff',
          fontSize: '1.25rem',
          marginTop: '0.5rem',
          fontWeight: '500',
        }}
      >
        {formatedReminingTime}s
      </p>
    </Container>
  );
}
