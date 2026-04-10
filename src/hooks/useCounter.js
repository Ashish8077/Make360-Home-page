import { useEffect, useState } from "react";

export function useCounter(end = 2600) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0;
      const step = Math.ceil(end / 60);

      const interval = setInterval(() => {
        start += step;
        if (start >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(start);
        }
      }, 20);
    }, 600);

    return () => clearTimeout(timer);
  }, [end]);

  return count;
}
