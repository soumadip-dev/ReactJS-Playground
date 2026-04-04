import { useEffect, useRef } from 'react';

const usePrev = value => {
  // 1.
  const ref = useRef();

  // 3.
  useEffect(() => {
    // Update ref.current after render commits, so next render gets the latest value
    ref.current = value;
  }, [value]);

  // 2. During render, ref.current still holds the previous value
  return ref.current;
};

export default usePrev;

// The component function runs during the render phase and returns. At this time, useEffect has not run yet, so ref.current still contains the previous value. After the render is committed to the DOM, useEffect runs and updates ref.current.
