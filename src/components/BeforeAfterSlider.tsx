"use client";

import { useState, useRef, useCallback } from "react";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  title?: string;
  aspectRatio?: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Voor",
  afterAlt = "Na",
  title,
  aspectRatio = "4/3",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    handleMove(e.touches[0].clientX);
  };

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (isDragging) handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <div className="w-full">
      {title && (
        <h3 className="text-sm sm:text-base font-semibold text-text mb-3 px-1">
          {title}
        </h3>
      )}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl cursor-ew-resize select-none shadow-lg shadow-black/5 group"
        style={{ aspectRatio }}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={(e) => handleMove(e.clientX)}
      >
        {/* After image (full background) */}
        <img
          src={afterSrc}
          alt={afterAlt}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
          loading="lazy"
        />

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={beforeSrc}
            alt={beforeAlt}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/5" />
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-black/60 text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full uppercase tracking-wider backdrop-blur-sm pointer-events-none">
          Voor
        </div>
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-gold text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full uppercase tracking-wider pointer-events-none">
          Na
        </div>

        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 sm:w-1 bg-white shadow-lg z-10"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          {/* Handle */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-full shadow-xl flex items-center justify-center cursor-ew-resize touch-none transition-transform group-hover:scale-110"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <MoveHorizontal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-text" />
          </div>
        </div>
      </div>
    </div>
  );
}
