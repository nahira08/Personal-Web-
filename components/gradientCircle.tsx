"use client";

import { useState, useEffect } from "react";

export default function Circle() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTargetPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrame: number;
    
    const updatePosition = () => {
      setPos((prev) => ({
        x: prev.x + (targetPos.x - prev.x) * 0.08, // Ubah 0.08 buat atur kecepatan
        y: prev.y + (targetPos.y - prev.y) * 0.08,
      }));
      animationFrame = requestAnimationFrame(updatePosition);
    };

    animationFrame = requestAnimationFrame(updatePosition);
    return () => cancelAnimationFrame(animationFrame);
  }, [targetPos]);

  return (
    <div
      className="bg-pink-400 blur-3xl fixed z-0 rounded-full w-40 h-40"
      style={{
        transform: `translate(${pos.x - 80}px, ${pos.y - 80}px)`,
        transition: "transform 0.05s linear",
      }}
    />
  );
}
