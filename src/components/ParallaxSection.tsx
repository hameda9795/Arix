"use client";

import { useRef, useEffect, useState, ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
}

export default function ParallaxSection({
  children,
  className = "",
  speed = 0.3,
  direction = "up",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / rect.height + 1));
      setScrollY(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const multiplier = direction === "up" ? -1 : 1;
  const y = (scrollY - 0.5) * speed * 100 * multiplier;

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div className="will-change-transform" style={{ transform: `translateY(${y}%)` }}>
        {children}
      </div>
    </div>
  );
}
