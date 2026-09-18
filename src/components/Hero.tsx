import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, MapPin, Calendar, Compass, Shield, Terminal } from 'lucide-react';
import { HeroVisual } from './HeroVisual';
import { TECHFEST_CONFIG } from '../data/techfestData';

interface HeroProps {
  onOpenRegister: () => void;
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister, onExplore }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Countdown timer to 16 Dec 2026 09:00 AM IST
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-12-16T09:00:00+05:30').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const normX = (clientX / innerWidth) * 2 - 1;
    const normY = (clientY / innerHeight) * 2 - 1;
    setMousePos({ x: normX, y: normY });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex flex-col justify-center items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-tech-grid"
    >
      {/* 2D/2.5D Animated SVG Astrolabe & Orbital Core Visual */}
      <HeroVisual mousePos={mousePos} />

      {/* Top Telemetry Mission Strip */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex items-center justify-between font-mono text-[10px] sm:text-xs text-slate-400/80 mb-6 sm:mb-10 px-2">
        <div className="flex items-center gap-2 sm:gap-3 bg-black/40 border border-white/10 px-3 sm:px-4 py-1.5 rounded-full backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-cyan-300 font-semibold tracking-wider">TELEMETRY: D-MINUS ACTIVE</span>
          <span className="text-white/30 hidden sm:inline">|</span>
          <span className="text-slate-400 hidden sm:inline">LAT 19.1334° N • LON 72.9133° E</span>
        </div>

        <div className="flex items-center gap-2 bg-black/40 border border-amber-500/20 px-3 py-1.5 rounded-full backdrop-blur-md text-amber-200/90">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span className="tracking-widest font-semibold">30TH ANNIVERSARY SPECIAL</span>
        </div>
      </div>

      {/* Primary Hero Typography Core */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Eyebrow Label */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 font-mono text-[11px] sm:text-xs tracking-[0.3em] uppercase mb-4 sm:mb-6 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>IIT BOMBAY PRESENTS</span>
        </div>

        {/* Main Headline: TECHFEST 30 with 30 visually dominant */}
        <div className="relative mb-2 sm:mb-3">
          <h1 className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 font-cinzel font-black tracking-tight text-white select-none">
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.12em] text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 drop-shadow-2xl">
              TECHFEST
            </span>

            {/* Visually dominant "30" as 30th edition identity */}
            <span className="relative inline-flex items-center justify-center">
              <span className="font-cinzel text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-tr from-amber-300 via-amber-200 to-cyan-300 text-glow-gold filter drop-shadow-[0_0_35px_rgba(226,184,102,0.4)]">
                30
              </span>
              <span className="absolute -top-1 -right-4 sm:-top-2 sm:-right-6 font-mono text-[10px] sm:text-xs text-cyan-300 border border-cyan-400/40 bg-[#06090e] px-1.5 py-0.5 rounded tracking-widest">
                XXX
              </span>
            </span>
          </h1>
        </div>

        {/* Theme Headline: AN AETHERIAL RENAISSANCE */}
        <div className="relative my-2 sm:my-3">
          <div className="inline-block relative">
            <h2 className="font-cinzel text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-amber-200">
              AN AETHERIAL RENAISSANCE
            </h2>
            {/* Subtle Renaissance filigree indicator line */}
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent mt-2" />
          </div>
        </div>

        {/* Core Creative Thesis & Subtitle */}
        <p className="max-w-2xl text-slate-300 text-sm sm:text-base md:text-lg font-light leading-relaxed tracking-wide my-4 sm:my-6">
          <span className="font-mono text-cyan-300 text-xs tracking-widest block mb-1">
            SCIENCE × TECHNOLOGY × HUMAN IMAGINATION
          </span>
          Asia’s largest science and technology festival embarks on its milestone 30th epoch. A three-day confluence of frontier intelligence, heavyweight combat robotics, and the reimagining of human capability.
        </p>

        {/* Dates & Location */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 font-mono text-xs sm:text-sm text-slate-200 bg-white/[0.03] border border-white/10 rounded-xl px-6 py-3 mb-8 sm:mb-10 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-cyan-400" />
            <span className="font-semibold tracking-wider text-white">16 — 18 DECEMBER 2026</span>
          </div>
          <span className="text-white/20 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span className="text-slate-300">IIT BOMBAY • MUMBAI, INDIA</span>
          </div>
        </div>

        {/* Action Buttons: Primary & Secondary CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          {/* Primary CTA: REGISTER NOW */}
          <button
            onClick={onOpenRegister}
            className="w-full sm:w-auto relative group px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-sky-400 text-slate-950 font-mono text-xs sm:text-sm font-bold tracking-[0.2em] uppercase shadow-[0_0_35px_rgba(0,240,255,0.4)] hover:shadow-[0_0_50px_rgba(0,240,255,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center justify-center gap-3">
              <span>REGISTER NOW</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
            {/* Edge technical frame corners */}
            <span className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-white" />
            <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-white" />
          </button>

          {/* Secondary CTA: EXPLORE TECHFEST */}
          <button
            onClick={onExplore}
            className="w-full sm:w-auto relative group px-7 py-4 rounded-xl bg-white/[0.04] border border-white/15 text-slate-200 font-mono text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase hover:bg-white/[0.08] hover:border-cyan-400/50 hover:text-white transition-all duration-300 backdrop-blur-md cursor-pointer"
          >
            <div className="flex items-center justify-center gap-2.5">
              <Compass className="w-4 h-4 text-amber-300 group-hover:rotate-45 transition-transform duration-500" />
              <span>EXPLORE TECHFEST</span>
            </div>
          </button>
        </div>

        {/* Real-Time Countdown Telemetry */}
        <div className="mt-12 sm:mt-16 w-full max-w-xl">
          <div className="text-[10px] font-mono tracking-[0.25em] text-slate-400 uppercase mb-3 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>COUNTDOWN TO CONVOCATION HALL LIFTOFF</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          </div>

          <div className="grid grid-cols-4 gap-2 sm:gap-4 font-mono">
            {[
              { label: 'DAYS', val: timeLeft.days },
              { label: 'HOURS', val: timeLeft.hours },
              { label: 'MINUTES', val: timeLeft.minutes },
              { label: 'SECONDS', val: timeLeft.seconds },
            ].map((slot) => (
              <div
                key={slot.label}
                className="bg-black/50 border border-white/10 rounded-lg p-2.5 sm:p-3 backdrop-blur-md flex flex-col items-center"
              >
                <span className="text-xl sm:text-3xl font-bold text-white text-glow-cyan tracking-tight">
                  {String(slot.val).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-[10px] text-slate-400 tracking-widest mt-1">
                  {slot.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Mission Control Grid Strip */}
      <div className="relative z-10 w-full max-w-6xl mx-auto mt-12 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-mono">
        {TECHFEST_CONFIG.stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="text-lg sm:text-2xl font-bold font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-amber-200">
              {stat.value}
            </span>
            <span className="text-[10px] sm:text-xs text-cyan-300 font-semibold tracking-wider mt-0.5">
              {stat.label}
            </span>
            <span className="text-[9px] text-slate-500 tracking-wide mt-0.5">
              {stat.hint}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
