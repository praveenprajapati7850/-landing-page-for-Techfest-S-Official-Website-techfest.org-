import React from 'react';
import { EXHIBITIONS } from '../data/techfestData';
import { Eye, MapPin, Sparkles, Shield, Cpu, Flame } from 'lucide-react';

export const ExhibitionsSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#070910] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-[0.25em] uppercase mb-2">
              <Eye className="w-3.5 h-3.5 text-cyan-400" />
              <span>FRONTIER HARDWARE & INTERACTIVE INSTALLATIONS</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              IMMERSIVE EXPERIENCES
            </h2>
            <p className="font-mono text-xs sm:text-sm text-slate-400 tracking-wider mt-1">
              WITNESS UNRELEASED GLOBAL PROTOTYPES LIVE ON CAMPUS
            </p>
          </div>

          <div className="font-mono text-xs text-slate-400 max-w-sm">
            Interactive demonstrations from Switzerland, Japan, USA, and India’s premier space and defense research agencies.
          </div>
        </div>

        {/* Exhibition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EXHIBITIONS.map((item, idx) => (
            <div
              key={item.id}
              className="group relative rounded-2xl bg-gradient-to-br from-[#0c101a] via-[#090d15] to-[#05070b] border border-white/10 hover:border-cyan-400/40 p-8 transition-all duration-300 shadow-xl overflow-hidden"
            >
              {/* Corner Telemetry Notch */}
              <div className="absolute top-0 right-0 p-3 font-mono text-[10px] text-slate-500 border-b border-l border-white/10 bg-black/40 rounded-bl-xl">
                EXHIBIT 0{idx + 1}
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs mb-4">
                <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-semibold uppercase">
                  {item.category}
                </span>
                <span className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-400/30 text-amber-300">
                  {item.origin}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-200 transition-colors mb-3">
                {item.title}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                {item.description}
              </p>

              {/* Feature Highlights */}
              <div className="space-y-2 mb-6">
                <span className="font-mono text-[11px] text-slate-400 tracking-wider uppercase block">
                  KEY FEATURES:
                </span>
                {item.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 font-mono text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Location Tag */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-slate-400">
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{item.location}</span>
                </div>
                <span className="text-amber-300 font-semibold">ALL ACCESS</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
