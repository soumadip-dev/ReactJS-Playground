import { useEffect, useRef, useState } from 'react';

const CountDown = () => {
  const [target, setTarget] = useState<string | null>(null);
  const [diff, setDiff] = useState<number>(0);
  const id = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  function handleSubmit() {
    clearInterval(id.current);
    if (!target) return;
    id.current = setInterval(() => {
      setDiff(new Date(target).getTime() - new Date().getTime());
    }, 1000);
  }
  useEffect(() => {
    if (diff < 0) {
      clearInterval(id.current);
      setDiff(0);
    }
  }, [diff]);

  const getDays = () => {
    return Math.floor(diff / (1000 * 60 * 60 * 24))
      .toString()
      .padStart(2, '0');
  };

  const getHours = () => {
    const hoursInMs = diff % (1000 * 60 * 60 * 24);
    return Math.floor(hoursInMs / (1000 * 60 * 60))
      .toString()
      .padStart(2, '0');
  };

  const getMinutes = () => {
    const minutesInMs = diff % (1000 * 60 * 60);
    return Math.floor(minutesInMs / (1000 * 60))
      .toString()
      .padStart(2, '0');
  };

  const getSeconds = () => {
    const secondsInMs = diff % (1000 * 60);
    return Math.floor(secondsInMs / 1000)
      .toString()
      .padStart(2, '0');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Countdown Timer
          </h1>
          <p className="mt-2 text-sm text-gray-600">Set a date and time for your countdown</p>
        </div>
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <input
              type="datetime-local"
              onChange={e => setTarget(e.target.value)}
              className="flex-1 min-w-0 block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <button
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
            focus:ring-blue-500 transition-colors duration-200 ease-in-out"
              onClick={handleSubmit}
            >
              Start Countdown
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <li className="flex flex-col items-center p-4 rounded-lg bg-gray-50">
                <span className="text-5xl font-bold text-gray-900 mb-1">{getDays()}</span>
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Days
                </span>
              </li>
              <li className="flex flex-col items-center p-4 rounded-lg bg-gray-50">
                <span className="text-5xl font-bold text-gray-900 mb-1">{getHours()}</span>
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hours
                </span>
              </li>
              <li className="flex flex-col items-center p-4 rounded-lg bg-gray-50">
                <span className="text-5xl font-bold text-gray-900 mb-1">{getMinutes()}</span>
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Minutes
                </span>
              </li>
              <li className="flex flex-col items-center p-4 rounded-lg bg-gray-50">
                <span className="text-5xl font-bold text-gray-900 mb-1">{getSeconds()}</span>
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Seconds
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
