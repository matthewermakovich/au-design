import { useEffect, useRef, useState } from "react";

export const useVisible = <T extends Element>(threshold = 0.9) => {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;

        if (ratio >= threshold) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      { threshold },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
};
