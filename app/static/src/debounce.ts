import { useState, useEffect } from 'react';

// https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci

export default function useDebounce(valueToDebounce: any, delay: number): any {
  const [debouncedValue, setDebouncedValue] = useState(valueToDebounce);

  useEffect(() => {
    // value only set after delay
    const handler = setTimeout(() => {
      setDebouncedValue(valueToDebounce);
    }, delay);

    // cleaned up after useEffect called
    return () => clearTimeout(handler);
    // useEffect will only be called when
    // valueToDebounce will change which won't change
    // until the delay is complete
    }, [valueToDebounce, delay]
  );

  return debouncedValue;
}