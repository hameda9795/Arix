"use client";

import { useRef, useEffect, useState } from "react";
import { Calendar, Award, CheckCircle, ThumbsUp } from "lucide-react";

const stats = [
  { icon: Calendar, value: 10, suffix: "+", label: "Jaar ervaring" },
  { icon: Award, value: 3, suffix: " jaar", label: "Garantie op werk" },
  { icon: CheckCircle, value: 100, suffix: "%", label: "Strak resultaat" },
  { icon: ThumbsUp, value: 99, suffix: "%", label: "Klanttevredenheid" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasStarted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.unobserve(el);
        }
      },
      { rootMargin: "-50px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [hasStarted, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / rect.height + 1));
      setScrollY(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgY = (scrollY - 0.5) * 30;

  return (
    <section
      ref={containerRef}
      className="relative py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-[-20%] w-[140%] h-[140%] will-change-transform"
          style={{ transform: `translateY(${bgY}%)` }}
        >
          <img
            src="/images/contact-bg.jpg"
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-[family-name:var(--font-serif)]">
            Cijfers die <span className="text-gold italic">spreken</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-5 rounded-2xl bg-gold/15 flex items-center justify-center border border-gold/20">
                <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 text-gold" />
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-1 sm:mb-2 font-[family-name:var(--font-serif)]">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-white/50 text-xs sm:text-sm font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
