import { useRef, useEffect } from 'react';

const useDebounce = (callback, delay, deps = []) => {
  const handler = useRef();

  useEffect(() => {
    if (handler.current) clearTimeout(handler.current);
    handler.current = setTimeout(() => {
      callback();
    }, delay);

    return () => clearTimeout(handler.current);
  }, [delay, ...deps]);
};
export default useDebounce;
