import React, { useEffect, useRef, useState } from 'react';

interface HeroVisualProps {
  mousePos: { x: number; y: number };
}

export const HeroVisual: React.FC<HeroVisualProps> = ({ mousePos }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [ticks] = useState(() => 
    Array.from({ length: 72 }, (_, i) => ({
      angle: (i * 360) / 72,
      isMajor: i % 6 === 0,
      isQuarter: i % 18 === 0,
    }))
  );

  // Micro particle field on canvas for lightweight, smooth 60fps ambient starlight / aether motes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      baseAlpha: number;
      color: string;
      life: number;
      maxLife: number;
    }> = [];

    const colors = ['#00f0ff', '#e2b866', '#a78bfa', '#ffffff'];

    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3 - 0.1,
        size: Math.random() * 1.8 + 0.6,
        alpha: Math.random() * 0.6 + 0.2,
        baseAlpha: Math.random() * 0.6 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: Math.random() * 100,
        maxLife: 100 + Math.random() * 100,
      });
    }

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Subtle parallax offset based on normalized mouse
      const ox = mousePos.x * 25;
      const oy = mousePos.y * 25;

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life += 0.5;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const pulse = Math.sin(frame * 0.03 + p.x) * 0.2;
        const currentAlpha = Math.max(0.05, Math.min(0.9, p.baseAlpha + pulse));

        ctx.beginPath();
        ctx.arc(p.x + ox * 0.5, p.y + oy * 0.5, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = currentAlpha;
        ctx.fill();
      });

      // Subtle connecting constellation lines between close points near center
      ctx.globalAlpha = 0.08;
      ctx.strokeStyle = '#00f0ff';
      ctx.lineWidth = 0.5;

      const centerX = width / 2 + ox;
      const centerY = height / 2 + oy;

      for (let i = 0; i < particles.length; i += 3) {
        const p1 = particles[i];
        const distToCenter = Math.hypot(p1.x - centerX, p1.y - centerY);
        if (distToCenter < 240) {
          ctx.beginPath();
          ctx.moveTo(p1.x + ox * 0.5, p1.y + oy * 0.5);
          ctx.lineTo(centerX, centerY);
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos]);

  // Subtle 2.5D tilt transform
  const parallaxTransform = `translate3d(${mousePos.x * 28}px, ${mousePos.y * 28}px, 0)`;
  const counterTransform = `translate3d(${-mousePos.x * 15}px, ${-mousePos.y * 15}px, 0)`;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Ambient background light cones */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] sm:w-[980px] sm:h-[980px] rounded-full bg-radial from-cyan-950/25 via-violet-950/20 to-transparent blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] sm:w-[580px] sm:h-[580px] rounded-full bg-radial from-amber-500/10 via-cyan-500/5 to-transparent blur-2xl" />

      {/* Particle Canvas Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" />

      {/* Primary SVG Astrolabe & Quantum Orbital Apparatus */}
      <div 
        className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-out"
        style={{ transform: parallaxTransform }}
      >
        <svg
          className="w-[780px] h-[780px] sm:w-[960px] sm:h-[960px] max-w-none opacity-85"
          viewBox="0 0 1000 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0.6" />
            </linearGradient>

            <linearGradient id="goldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e2b866" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#c69234" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#fef08a" stopOpacity="0.8" />
            </linearGradient>

            <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.25" />
              <stop offset="40%" stopColor="#4c1d95" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#05070b" stopOpacity="0" />
            </radialGradient>

            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Central Radial Atmosphere */}
          <circle cx="500" cy="500" r="380" fill="url(#coreGlow)" />

          {/* OUTER RING (R=470): Degree Ticks & Coordinate Grid */}
          <g className="origin-center animate-spin-slow">
            <circle
              cx="500"
              cy="500"
              r="470"
              stroke="#00f0ff"
              strokeOpacity="0.18"
              strokeWidth="1"
              strokeDasharray="4 8"
            />
            {ticks.map((t, idx) => {
              const rad = (t.angle * Math.PI) / 180;
              const r1 = 470;
              const r2 = t.isQuarter ? 452 : t.isMajor ? 460 : 465;
              const x1 = 500 + r1 * Math.cos(rad);
              const y1 = 500 + r1 * Math.sin(rad);
              const x2 = 500 + r2 * Math.cos(rad);
              const y2 = 500 + r2 * Math.sin(rad);
              return (
                <line
                  key={`tick-${idx}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={t.isQuarter ? '#e2b866' : t.isMajor ? '#38bdf8' : '#64748b'}
                  strokeOpacity={t.isQuarter ? 0.8 : t.isMajor ? 0.4 : 0.2}
                  strokeWidth={t.isQuarter ? 1.5 : 1}
                />
              );
            })}

            {/* Quadrant Roman Numerals (XXX / 30th theme identity) */}
            <text x="500" y="44" fill="#e2b866" fillOpacity="0.75" fontSize="12" fontFamily="var(--font-cinzel)" textAnchor="middle" letterSpacing="4">N • 000° // RENAISSANCE</text>
            <text x="960" y="504" fill="#00f0ff" fillOpacity="0.65" fontSize="11" fontFamily="var(--font-mono)" textAnchor="middle" letterSpacing="2">E • 090°</text>
            <text x="500" y="964" fill="#e2b866" fillOpacity="0.75" fontSize="12" fontFamily="var(--font-cinzel)" textAnchor="middle" letterSpacing="4">S • 180° // TECHFEST XXX</text>
            <text x="40" y="504" fill="#00f0ff" fillOpacity="0.65" fontSize="11" fontFamily="var(--font-mono)" textAnchor="middle" letterSpacing="2">W • 270°</text>
          </g>

          {/* INTERMEDIATE RING (R=390): Counter-rotating Renaissance Astrolabe track */}
          <g className="origin-center animate-spin-reverse-slow">
            <circle
              cx="500"
              cy="500"
              r="390"
              stroke="url(#goldGrad)"
              strokeWidth="1.2"
              strokeDasharray="180 20 60 20 30 15"
            />
            <circle
              cx="500"
              cy="500"
              r="400"
              stroke="#ffffff"
              strokeOpacity="0.08"
              strokeWidth="0.8"
            />
            {/* Planetary nodal markers */}
            <circle cx="500" cy="110" r="4.5" fill="#e2b866" filter="url(#softGlow)" />
            <circle cx="890" cy="500" r="3.5" fill="#00f0ff" />
            <circle cx="500" cy="890" r="4.5" fill="#e2b866" />
            <circle cx="110" cy="500" r="3.5" fill="#00f0ff" />
          </g>

          {/* INNER ORBITAL (R=310): Segmented Quantum Collider ring */}
          <g className="origin-center animate-spin-slow">
            <circle
              cx="500"
              cy="500"
              r="310"
              stroke="#38bdf8"
              strokeOpacity="0.28"
              strokeWidth="2"
              strokeDasharray="40 16 10 16"
            />
            {/* Small technical telemetry blocks */}
            <path
              d="M 500,190 A 310,310 0 0,1 719,281"
              stroke="#00f0ff"
              strokeWidth="3.5"
              strokeOpacity="0.75"
              strokeLinecap="round"
              filter="url(#softGlow)"
            />
            <path
              d="M 500,810 A 310,310 0 0,1 281,719"
              stroke="#e2b866"
              strokeWidth="2.5"
              strokeOpacity="0.75"
              strokeLinecap="round"
            />
          </g>

          {/* GOLDEN RATIO SPIRAL & RENAISSANCE GEOMETRY (R=220) */}
          <g className="origin-center opacity-40">
            <circle cx="500" cy="500" r="220" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="1" />
            <circle cx="500" cy="500" r="160" stroke="#e2b866" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="3 6" />
            <circle cx="500" cy="500" r="100" stroke="#00f0ff" strokeOpacity="0.35" strokeWidth="1" />

            {/* Sacred Renaissance Hexagram / Polyhedral projection lines */}
            <polygon
              points="500,280 690,610 310,610"
              fill="none"
              stroke="#00f0ff"
              strokeOpacity="0.14"
              strokeWidth="1"
            />
            <polygon
              points="500,720 310,390 690,390"
              fill="none"
              stroke="#e2b866"
              strokeOpacity="0.14"
              strokeWidth="1"
            />
          </g>

          {/* CROSSHAIRS & MISSION CONTROL ALIGNMENT AXES */}
          <line x1="500" y1="20" x2="500" y2="980" stroke="#00f0ff" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="6 8" />
          <line x1="20" y1="500" x2="980" y2="500" stroke="#00f0ff" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="6 8" />

          {/* Diagonal Ray Ticks */}
          <line x1="250" y1="250" x2="280" y2="280" stroke="#e2b866" strokeOpacity="0.4" strokeWidth="1.5" />
          <line x1="750" y1="250" x2="720" y2="280" stroke="#00f0ff" strokeOpacity="0.4" strokeWidth="1.5" />
          <line x1="250" y1="750" x2="280" y2="720" stroke="#00f0ff" strokeOpacity="0.4" strokeWidth="1.5" />
          <line x1="750" y1="750" x2="720" y2="720" stroke="#e2b866" strokeOpacity="0.4" strokeWidth="1.5" />

          {/* CENTRAL CORE: The 30th Edition Singularity Node */}
          <g className="origin-center">
            <circle cx="500" cy="500" r="44" fill="#06090e" stroke="#00f0ff" strokeWidth="1.5" strokeOpacity="0.7" />
            <circle cx="500" cy="500" r="36" fill="none" stroke="#e2b866" strokeWidth="1" strokeOpacity="0.6" strokeDasharray="5 5" />
            <circle cx="500" cy="500" r="8" fill="#ffffff" filter="url(#softGlow)" />
            <circle cx="500" cy="500" r="18" fill="#00f0ff" fillOpacity="0.25" className="animate-ping" style={{ animationDuration: '3s' }} />
          </g>
        </svg>
      </div>

      {/* Floating HUD Telemetry Corners in 2.5D space */}
      <div 
        className="absolute inset-0 flex justify-between p-6 sm:p-12 pointer-events-none transition-transform duration-500 ease-out text-[10px] sm:text-xs font-mono tracking-widest text-slate-400"
        style={{ transform: counterTransform }}
      >
        <div className="flex flex-col gap-1.5 opacity-60">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-300 font-semibold">IIT BOMBAY // SYSTEM ONLINE</span>
          </div>
          <span className="text-slate-500">LAT: 19.1334° N • LON: 72.9133° E</span>
          <span className="text-slate-500">ALT: 34M • EPOCH: 30.0_RENAISSANCE</span>
        </div>

        <div className="flex flex-col items-end gap-1.5 opacity-60">
          <span className="text-amber-300/90 font-semibold">EDITION: XXX // 1998–2026</span>
          <span className="text-slate-500">ASIA'S LARGEST SCI-TECH FEST</span>
          <span className="text-slate-500">STATUS: ORBITAL SYNCHRONIZATION</span>
        </div>
      </div>
    </div>
  );
};
