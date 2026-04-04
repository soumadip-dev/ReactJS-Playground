import { useEffect, useReducer } from 'react';

const useRefetchableFetch = (url, retryTime = 0) => {
  const initialState = {
    loading: true,
    error: null,
    data: null,
  };
  // Reducer function for updating state
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case 'FETCH_SUCCESS':
        return { loading: false, data: payload, error: null };
      case 'FETCH_ERROR':
        return { loading: false, error: payload, data: null };
      case 'FETCH_LOADING':
        return { ...state, loading: true };
      default:
        return state;
    }
  };

  // Use the useReducer hook to manage state and dispatch actions
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch data from the API
  const fetchData = async () => {
    try {
      fetch(url);
      const res = await fetch(url);
      if (!res.ok) throw new Error('Http error! Status: ' + res.status);
      const data = await res.json();
      dispatch({ type: 'FETCH_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message });
    }
  };

  // Fetch data when the URL changes
  useEffect(() => {
    fetchData();
  }, [url]);

  // Refetch data after a certain time interval
  useEffect(() => {
    if (!retryTime || retryTime <= 0) return;

    const interval = setInterval(() => {
      fetchData();
    }, retryTime * 1000);

    return () => clearInterval(interval);
  }, [url, retryTime]);

  return state;
};
export default useRefetchableFetch;
