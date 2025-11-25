import React, { useEffect, useRef } from 'react';

// Fond canvas discret avec particules qui suivent légèrement la souris.
export function FondInteractif() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationId: number;
    const particules = Array.from({ length: 40 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: 1 + Math.random() * 2,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2
    }));
    const souris = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const redim = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    redim();
    window.addEventListener('resize', redim);
    const survol = (e: MouseEvent) => {
      souris.x = e.clientX;
      souris.y = e.clientY;
    };
    window.addEventListener('mousemove', survol);
    function dessiner() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(28,31,78,0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      particules.forEach(p => {
        // attraction douce vers la souris
        p.x += p.vx + (souris.x - p.x) * 0.0005;
        p.y += p.vy + (souris.y - p.y) * 0.0005;
  if (p.x < 0) p.x = canvas.width;
  if (p.x > canvas.width) p.x = 0;
  if (p.y < 0) p.y = canvas.height;
  if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(82,113,255,0.25)';
        ctx.fill();
      });
      animationId = requestAnimationFrame(dessiner);
    }
    dessiner();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', redim);
      window.removeEventListener('mousemove', survol);
    };
  }, []);
  return <canvas ref={ref} className="fond-interactif" aria-hidden />;
}
