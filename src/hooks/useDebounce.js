import { useState, useEffect } from 'react';

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)
  const [render, setRender] = useState(false)
  const [loadingDebounce, setLoadingDebounce] = useState(false)

  useEffect(() => {
    if(render){
      setLoadingDebounce(true)
    }

    const handler = setTimeout(() => {
      setRender(true)
      setDebouncedValue(value)
      setLoadingDebounce(false)
    }, delay)

    return () => {
      clearTimeout(handler)
    }

  }, [value, delay])

  return { debouncedValue, loadingDebounce }
}
