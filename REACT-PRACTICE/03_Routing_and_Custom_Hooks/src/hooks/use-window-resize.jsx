import { useLayoutEffect, useState } from 'react';

export default function useWindowResize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  // useLayoutEffect is similar to useEffect, but it runs before the browser paints the screen.
  // useEffect runs after the browser paints the screen (renders the DOM).
  useLayoutEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}
