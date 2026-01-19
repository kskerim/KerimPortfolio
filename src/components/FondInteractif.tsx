import React, { useEffect, useRef } from 'react';

// fond canvas discret avec particules qui suivent légèrement la souris
export function FondInteractif() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const ATTRACTION_RADIUS_SQ = 500 * 500; // évite sqrt à chaque frame
    const ATTRACTION_RADIUS = 500;

    // récupère la couleur depuis les variables css
    const getParticleColor = () => {
      return getComputedStyle(document.documentElement)
        .getPropertyValue('--particules-color').trim() || 'rgba(82,113,255,0.25)';
    };

    const particules = Array.from({ length: 220 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: 1 + Math.random() * 2.5,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      baseX: Math.random() * window.innerWidth,
      baseY: Math.random() * window.innerHeight
    }));

    const souris = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const redim = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      for (const p of particules) {
        p.baseX = Math.random() * canvas.width;
        p.baseY = Math.random() * canvas.height;
      }
    };

    const survol = (e: MouseEvent) => {
      souris.x = e.clientX;
      souris.y = e.clientY;
    };

    let particleColor = getParticleColor();
    let frameCount = 0;

    function dessiner() {
      if (!canvas || !ctx) return;
      
      const w = canvas.width;
      const h = canvas.height;

      // mise à jour couleur toutes les 60 frames pour suivre le thème
      frameCount++;
      if (frameCount % 60 === 0) {
        particleColor = getParticleColor();
      }

      ctx.clearRect(0, 0, w, h);

      ctx.fillStyle = particleColor;
      ctx.beginPath();

      for (const p of particules) {
        const dx = souris.x - p.x;
        const dy = souris.y - p.y;
        const distSq = dx * dx + dy * dy;

        // attraction seulement si proche
        const attractionForce = distSq < ATTRACTION_RADIUS_SQ
          ? 0.0025 * (1 - Math.sqrt(distSq) / ATTRACTION_RADIUS)
          : 0;

        p.x += p.vx + dx * attractionForce + (p.baseX - p.x) * 0.001;
        p.y += p.vy + dy * attractionForce + (p.baseY - p.y) * 0.001;

        if (p.x < 0) p.x = w;
        else if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        else if (p.y > h) p.y = 0;

        ctx.moveTo(p.x + p.r, p.y);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      }

      ctx.fill();
      animationId = requestAnimationFrame(dessiner);
    }

    redim();
    window.addEventListener('resize', redim);
    window.addEventListener('mousemove', survol);
    dessiner();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', redim);
      window.removeEventListener('mousemove', survol);
    };
  }, []);

  return <canvas ref={ref} className="fond-interactif" aria-hidden />;
}
