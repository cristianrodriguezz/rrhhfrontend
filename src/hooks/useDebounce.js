import { useState, useEffect } from 'react';

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const [loadings, setLoadings] = useState(false);

  useEffect(() => {
    setLoadings(true);

    const handler = setTimeout(() => {
      setDebouncedValue(value);
      setLoadings(false);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return { debouncedValue, loadings };
}
