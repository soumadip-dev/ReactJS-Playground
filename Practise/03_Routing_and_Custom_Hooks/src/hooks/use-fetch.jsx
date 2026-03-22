import { useState, useEffect } from 'react';

export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(url, { ...options });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const resultData = await response.json();

      if (resultData) {
        setData(resultData);
      }
    } catch (error) {
      console.log(error);
      setError(error);
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
}
