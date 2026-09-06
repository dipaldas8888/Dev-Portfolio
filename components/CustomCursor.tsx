"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on touch / coarse pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    const glow = glowRef.current;

    if (!dot || !ring || !glow) return;

    let reqId: number;
    let mouseX = -100;
    let mouseY = -100;

    let ringX = -100;
    let ringY = -100;

    let glowX = -100;
    let glowY = -100;

    let targetScale = 1;
    let currentScale = 1;

    let targetOpacity = 0;
    let currentOpacity = 0;

    let prevMouseX = -100;
    let prevMouseY = -100;

    let isHovered = false;
    let isClicked = false;

    // Linear interpolation
    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      targetOpacity = 1;
    };

    const onMouseDown = () => {
      isClicked = true;
    };

    const onMouseUp = () => {
      isClicked = false;
    };

    const onMouseLeave = () => {
      targetOpacity = 0;
    };

    const onMouseEnter = () => {
      targetOpacity = 1;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, input, textarea, select, [role="button"], .cursor-pointer, [data-cursor]'
      );

      if (interactive) {
        isHovered = true;
      } else {
        isHovered = false;
      }
    };

    // GPU-accelerated requestAnimationFrame loop for ultra smooth 120fps performance
    const animate = () => {
      // Smooth position lerp (Ring lags slightly, Glow lags more for depth effect)
      ringX = lerp(ringX, mouseX, 0.2);
      ringY = lerp(ringY, mouseY, 0.2);

      glowX = lerp(glowX, mouseX, 0.08);
      glowY = lerp(glowY, mouseY, 0.08);

      // Calculate velocity & movement angle for dynamic fluid stretch
      const velocityX = mouseX - prevMouseX;
      const velocityY = mouseY - prevMouseY;
      prevMouseX = mouseX;
      prevMouseY = mouseY;

      const speed = Math.sqrt(velocityX * velocityX + velocityY * velocityY);
      const angle = Math.atan2(velocityY, velocityX) * (180 / Math.PI);

      if (isClicked) {
        targetScale = 0.75;
      } else if (isHovered) {
        targetScale = 1.6;
      } else {
        targetScale = 1;
      }

      currentScale = lerp(currentScale, targetScale, 0.15);
      currentOpacity = lerp(currentOpacity, targetOpacity, 0.15);

      // Stretch ring along direction of speed (fluid stretch effect)
      const stretch = Math.min(speed * 0.015, 0.45);
      const scaleX = currentScale + stretch;
      const scaleY = Math.max(0.6, currentScale - stretch * 0.4);

      // Direct GPU transform manipulation (Zero React state re-renders = Ultra Fast)
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${
        isClicked ? 1.4 : isHovered ? 0.5 : 1
      })`;
      dot.style.opacity = `${currentOpacity}`;

      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) rotate(${angle}deg) scale(${scaleX}, ${scaleY})`;
      ring.style.opacity = `${currentOpacity}`;

      glow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%) scale(${
        isHovered ? 1.8 : 1
      })`;
      glow.style.opacity = `${currentOpacity * (isHovered ? 0.35 : 0.18)}`;

      // Dynamic color updates based on hover state
      if (isHovered) {
        ring.style.borderColor = "rgba(168, 85, 247, 0.85)";
        ring.style.backgroundColor = "rgba(168, 85, 247, 0.12)";
        ring.style.boxShadow =
          "0 0 25px rgba(168, 85, 247, 0.5), inset 0 0 12px rgba(168, 85, 247, 0.2)";
        dot.style.backgroundColor = "#c084fc";
        dot.style.boxShadow = "0 0 15px #c084fc, 0 0 25px #c084fc";
      } else {
        ring.style.borderColor = "rgba(56, 189, 248, 0.55)";
        ring.style.backgroundColor = "rgba(56, 189, 248, 0.05)";
        ring.style.boxShadow =
          "0 0 18px rgba(56, 189, 248, 0.3), inset 0 0 8px rgba(56, 189, 248, 0.1)";
        dot.style.backgroundColor = "#38bdf8";
        dot.style.boxShadow = "0 0 10px #38bdf8, 0 0 18px #38bdf8";
      }

      reqId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave, { passive: true });
    document.addEventListener("mouseenter", onMouseEnter, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });

    reqId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(reqId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Ambient Spotlight Glow Background */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-3xl pointer-events-none will-change-transform transition-opacity duration-300"
        style={{ opacity: 0 }}
      />

      {/* Fluid Trailing Velocity Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-11 h-11 rounded-full border border-cyan-400/50 bg-cyan-500/10 backdrop-blur-[1px] pointer-events-none will-change-transform transition-colors duration-200"
        style={{ opacity: 0 }}
      />

      {/* Precision Core Cursor Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#38bdf8] pointer-events-none will-change-transform transition-colors duration-200"
        style={{ opacity: 0 }}
      />
    </div>
  );
}
