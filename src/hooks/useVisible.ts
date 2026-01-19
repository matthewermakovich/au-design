import { useEffect, useRef, useState } from "react";

export const useVisible = (threshold = 0.9) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;

        if (ratio >= threshold && !visible) {
          setVisible(true);
        } else if (ratio < threshold && visible) {
          setVisible(false);
        }
      },
      { threshold },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold, visible]);

  return { ref, visible };
};
