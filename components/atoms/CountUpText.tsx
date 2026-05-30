'use client';

import { useEffect, useRef, useState } from 'react';
import type { CountUpTextProps } from '@/types';

export default function CountUpText({
  targetNumber,
  durationSeconds = 2,
  prefix = '',
  suffix = '',
  className = '',
}: CountUpTextProps) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const duration = durationSeconds * 1000;

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCurrent(Math.floor(eased * targetNumber));

            if (progress < 1) requestAnimationFrame(tick);
            else setCurrent(targetNumber);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [targetNumber, durationSeconds]);

  // Format large numbers with dots as thousand separator (Indonesian style)
  const formatted = current.toLocaleString('id-ID');

  return (
    <span ref={ref} className={className}>
      {prefix}{formatted}{suffix}
    </span>
  );
}
