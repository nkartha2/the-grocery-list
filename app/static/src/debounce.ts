import { useState, useEffect } from 'react';

// https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci

export default function useDebounce(value: any, delay: number): any {
  const [debouncedValue, setDebouncedValue] = useState("value");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay)

    return () => clearTimeout(handler);
  }, [value]);

  return debouncedValue;
}