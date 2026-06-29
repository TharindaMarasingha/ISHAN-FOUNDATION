"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export function CursorGlow() {
  const [isHovering, setIsHovering] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);

  // Mouse coords
  const mouse = useRef({ x: 0, y: 0 });
  // Blob coords
  const blob = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check for fine pointer and reduced motion
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isFinePointer || isReducedMotion) {
      setShouldRender(false);
      return;
    }

    setShouldRender(true);

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      // Update dot exactly (no lag)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
      }

      // Check hover target
      const target = e.target as HTMLElement;
      const isHoverTarget = target.closest("a, button, [role='button']");
      setIsHovering(!!isHoverTarget);
    };

    let animationFrameId: number;
    const loop = () => {
      // Lerp blob towards mouse
      blob.current.x += (mouse.current.x - blob.current.x) * 0.15;
      blob.current.y += (mouse.current.y - blob.current.y) * 0.15;

      if (blobRef.current) {
        blobRef.current.style.transform = `translate3d(calc(${blob.current.x}px - 50%), calc(${blob.current.y}px - 50%), 0)`;
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMouseMove);
    animationFrameId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <>
      {/* Blob */}
      <div
        ref={blobRef}
        className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none z-[-1] mix-blend-multiply"
        style={{
          background: "radial-gradient(circle, rgba(156, 63, 0, 0.1) 0%, rgba(201, 168, 76, 0.05) 40%, rgba(0,0,0,0) 70%)",
          willChange: "transform",
        }}
      />
      
      {/* Dot */}
      <div 
        ref={dotRef} 
        className="fixed top-0 left-0 pointer-events-none z-[60]" 
        style={{ willChange: "transform" }}
      >
        <motion.div
          className="rounded-full"
          style={{ width: 9, height: 9 }}
          animate={{
            scale: isHovering ? 2.5 : 1,
            backgroundColor: isHovering ? "var(--color-sacredGold)" : "var(--color-burntOrange)",
          }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        />
      </div>
    </>
  );
}
