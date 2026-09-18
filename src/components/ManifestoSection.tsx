import React, { useState } from 'react';
import { Atom, Cpu, Dna, Sparkles, Orbit, Binary, Compass, ArrowRight } from 'lucide-react';

export const ManifestoSection: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number>(0);

  const pillars = [
    {
      id: 'science',
      title: 'QUANTUM INTELLECTION',
      icon: Atom,
      subtitle: 'The Frontier of Particle & Computational Physics',
      concept: 'Just as the Renaissance was catalyzed by the telescope and celestial mechanics, the Aetherial Renaissance is spurred by superposition, topological qubits, and quantum entanglement.',
      stats: '127+ Superconducting Qubits Benchmarked',
      accentColor: 'text-cyan-400',
      borderColor: 'border-cyan-400/40',
      bgGlow: 'from-cyan-950/40',
    },
    {
      id: 'technology',
      title: 'SYNTHETIC COGNITION',
      icon: Cpu,
      subtitle: 'Autonomous Agentic Architectures & Neuromorphic Systems',
      concept: 'Moving beyond deterministic programming into self-adapting neural silicon. IIT Bombay researchers and global competitors engineer algorithms that deliberate, extrapolate, and solve systemic planetary bottlenecks.',
      stats: '36-Hour Continuous Frontier Hackathon',
      accentColor: 'text-amber-400',
      borderColor: 'border-amber-400/40',
      bgGlow: 'from-amber-950/40',
    },
    {
      id: 'imagination',
      title: 'AETHERIAL ARCHITECTURE',
      icon: Orbit,
      subtitle: 'Kinetic Art Installations & Human-Machine Symbiosis',
      concept: 'Technology stripped of human soul is mere mechanism. Here, engineers fuse cybernetic precision with artistic transcendence—transforming campus courtyards into living light-and-sound monoliths.',
      stats: '1,024 Robotic Kinetic Light Nodes',
      accentColor: 'text-violet-400',
      borderColor: 'border-violet-400/40',
      bgGlow: 'from-violet-950/40',
    },
    {
      id: 'competition',
      title: 'TITANIUM HARDWARE RIGOR',
      icon: Binary,
      subtitle: 'Combative Kinetics & Precision Aerospace',
      concept: 'Theoretical rigor tested at maximum kinetic velocity. In the Robowars polycarbonate ring and the drone race courses, code becomes torque, stress tensors, and victory.',
      stats: '60kg Combat Bots • 140+ km/h FPV Drones',
      accentColor: 'text-emerald-400',
      borderColor: 'border-emerald-400/40',
      bgGlow: 'from-emerald-950/40',
    },
  ];

  return (
    <section id="manifesto" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#07090f] border-t border-white/10 overflow-hidden">
      {/* Background Architectural Watermark */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-[600px] h-[600px] pointer-events-none opacity-5">
        <svg viewBox="0 0 500 500" fill="none" stroke="currentColor" className="w-full h-full text-white">
          <circle cx="250" cy="250" r="240" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="250" cy="250" r="180" strokeWidth="1.5" />
          <polygon points="250,50 423,350 77,350" strokeWidth="1" />
          <polygon points="250,450 77,150 423,150" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 tracking-[0.25em] uppercase mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>THE 30TH EDITION CURATORIAL MANIFESTO</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              THE FUTURE IS BEING REBUILT.
            </h2>
            <p className="font-mono text-xs sm:text-sm text-cyan-300 tracking-wider mt-2">
              AN AETHERIAL RENAISSANCE • IIT BOMBAY • 1998 — 2026
            </p>
          </div>

          <div className="max-w-md text-slate-400 text-xs sm:text-sm leading-relaxed">
            Five centuries after the Florentine rebirth of art and empirical science, civilization stands at the precipice of a second renaissance—one forged in silicon, quantum states, synthetic genomes, and autonomous kinetic machines.
          </div>
        </div>

        {/* Interactive Curatorial Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Nav Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <span className="font-mono text-[11px] text-slate-400 tracking-widest uppercase mb-1">
              SELECT RENAISSANCE VECTOR:
            </span>
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isSelected = activeNode === idx;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveNode(idx)}
                  className={`text-left p-5 rounded-xl border transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                    isSelected
                      ? `bg-white/[0.06] ${pillar.borderColor} shadow-lg shadow-black/40`
                      : 'bg-white/[0.015] border-white/5 hover:bg-white/[0.04] hover:border-white/20'
                  }`}
                >
                  {/* Subtle active glow bar */}
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-amber-300" />
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-black/40 border border-white/10 ${pillar.accentColor}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-cinzel text-base sm:text-lg font-bold tracking-wider text-white">
                        {pillar.title}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-slate-400 group-hover:text-cyan-300">
                      0{idx + 1}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 line-clamp-1 pl-11">
                    {pillar.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Curatorial Display Card */}
          <div className="lg:col-span-7">
            {(() => {
              const current = pillars[activeNode];
              const Icon = current.icon;
              return (
                <div className={`relative p-8 sm:p-10 rounded-2xl bg-gradient-to-br ${current.bgGlow} via-[#0a0d16] to-[#07090f] border ${current.borderColor} shadow-2xl overflow-hidden`}>
                  {/* Top Telemetry Header */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10 font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      <span className="text-white font-semibold tracking-wider">
                        MISSION SECTOR // 0{activeNode + 1}
                      </span>
                    </div>
                    <span className={`${current.accentColor} font-bold tracking-widest`}>
                      {current.stats}
                    </span>
                  </div>

                  {/* Main Display Body */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3.5 rounded-xl bg-black/60 border border-white/10 ${current.accentColor} shadow-inner`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white tracking-wide">
                        {current.title}
                      </h3>
                      <p className="font-mono text-xs sm:text-sm text-cyan-300 mt-1">
                        {current.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-8">
                    {current.concept}
                  </p>

                  {/* Renaissance vs Quantum Engineering Axiom */}
                  <div className="p-4 rounded-xl bg-black/50 border border-white/10 font-mono text-xs text-slate-300 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
                      <span>TECHFEST 30 VERIFIED ACCREDITATION: PREMIER ACADEMIC COUNCIL</span>
                    </div>
                    <span className="text-cyan-400 font-bold hidden sm:inline">IIT BOMBAY</span>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
};
