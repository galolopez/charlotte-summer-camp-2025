import { useEffect, useRef, useState } from 'react';

export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit & { once?: boolean }) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  const triggeredRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggeredRef.current) {
          setInView(true);
          triggeredRef.current = true;
          if (options?.once) {
            observer.disconnect();
          }
        }
      },
      options
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView] as const;
} 