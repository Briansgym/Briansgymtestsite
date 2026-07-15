"use client";

import { useEffect, useRef, useState } from "react";

type StatCounterProps = {
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
};

export default function StatCounter({
  target,
  suffix = "",
  prefix = "",
  label,
  duration = 1600,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.round(eased * target));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-4xl font-extrabold text-white sm:text-5xl">
        {prefix}
        {value.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-medium uppercase tracking-widest text-primary-light/90">
        {label}
      </div>
    </div>
  );
}
