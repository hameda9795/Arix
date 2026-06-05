"use client";

import { useRef, useEffect, useState } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  overlay?: React.ReactNode;
}

export default function ParallaxImage({
  src,
  alt,
  className = "",
  speed = 0.3,
  overlay,
}: ParallaxImageProps) {
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

  const y = (scrollY - 0.5) * speed * 60;

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute inset-[-20%] w-[140%] h-[140%] will-change-transform"
        style={{ transform: `translateY(${y}%)` }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      {overlay}
    </div>
  );
}
