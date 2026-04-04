import { useEffect, useReducer } from 'react';
const useFetch = url => {
  // Initial state for the reducer
  const initialState = {
    loading: true,
    error: null,
    data: {},
  };
  // Reducer function for updating state
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case 'FETCH_SUCCESS':
        return { loading: false, data: payload, error: null };
      case 'FETCH_ERROR':
        return { loading: false, error: payload, data: {} };
      default:
        return state;
    }
  };

  // Use the useReducer hook to manage state and dispatch actions
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch data from the API
  useEffect(() => {
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
    fetchData();
  }, [url]);

  return state;
};
export default useFetch;
