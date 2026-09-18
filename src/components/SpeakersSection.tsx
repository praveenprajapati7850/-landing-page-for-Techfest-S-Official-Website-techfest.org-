import React, { useState } from 'react';
import { SPEAKERS } from '../data/techfestData';
import { Speaker } from '../types';
import { Calendar, MapPin, Sparkles, ExternalLink, Mic, Quote } from 'lucide-react';

export const SpeakersSection: React.FC = () => {
  const [activeSpeaker, setActiveSpeaker] = useState<Speaker>(SPEAKERS[0]);

  return (
    <section id="speakers" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#070a12] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-amber-400 tracking-[0.25em] uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE CONVOCATION HALL SUMMIT</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              KEYNOTE LUMINARIES
            </h2>
            <p className="font-mono text-xs sm:text-sm text-cyan-300 tracking-wider mt-1">
              WORLD REVOLUTIONARIES SHAPING THE 21ST CENTURY
            </p>
          </div>

          <div className="font-mono text-xs text-slate-400 max-w-sm">
            Hear directly from the architects of particle physics, interplanetary flight, and neuro-synthetic intelligence in open amphitheatre dialogues.
          </div>
        </div>

        {/* Featured Speaker Interactive Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-[#0f1422] via-[#090d16] to-[#05070b] border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          {/* Subtle Astrolabe SVG Watermark */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 pointer-events-none opacity-10">
            <svg viewBox="0 0 200 200" fill="none" stroke="#00f0ff" className="w-full h-full animate-spin-slow">
              <circle cx="100" cy="100" r="90" strokeDasharray="4 8" />
              <circle cx="100" cy="100" r="70" />
              <polygon points="100,20 180,150 20,150" />
            </svg>
          </div>

          {/* Portrait Column */}
          <div className="lg:col-span-4 relative group">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-white/15 shadow-xl">
              <img
                src={activeSpeaker.image}
                alt={activeSpeaker.name}
                className="w-full h-full object-cover object-center filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070b] via-transparent to-transparent opacity-80" />

              {/* Holographic Badge */}
              <div className="absolute top-3 left-3">
                <span className="font-mono text-[10px] px-2.5 py-1 rounded bg-black/70 border border-cyan-400/50 text-cyan-300 font-semibold tracking-widest backdrop-blur-md">
                  {activeSpeaker.badge}
                </span>
              </div>
            </div>
          </div>

          {/* Discourse Details Column */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <div className="flex items-center gap-4 font-mono text-xs text-slate-400 mb-3">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <Calendar className="w-3.5 h-3.5" />
                {activeSpeaker.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-amber-300">
                <MapPin className="w-3.5 h-3.5" />
                {activeSpeaker.venue}
              </span>
            </div>

            <h3 className="font-cinzel text-2xl sm:text-4xl font-bold text-white tracking-wide mb-1">
              {activeSpeaker.name}
            </h3>

            <p className="font-mono text-xs sm:text-sm text-cyan-300 mb-4">
              {activeSpeaker.title} • <span className="text-slate-300">{activeSpeaker.organization}</span>
            </p>

            <div className="p-4 rounded-xl bg-black/40 border border-white/10 mb-6">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-300 uppercase tracking-wider mb-1.5">
                <Mic className="w-3.5 h-3.5 text-amber-400" />
                <span>KEYNOTE DISCOURSE TOPIC:</span>
              </div>
              <p className="font-cinzel text-base sm:text-xl text-slate-100 font-semibold">
                “{activeSpeaker.topic}”
              </p>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-light">
              {activeSpeaker.bio}
            </p>

            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-slate-400">
                ALL FESTIVAL PASS HOLDERS ADMITTED ON FIRST-COME SEATING
              </span>
            </div>
          </div>
        </div>

        {/* Quick Speaker Selector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SPEAKERS.map((sp) => {
            const isCurrent = activeSpeaker.id === sp.id;
            return (
              <button
                key={sp.id}
                onClick={() => setActiveSpeaker(sp)}
                className={`text-left p-4 rounded-xl border transition-all duration-300 flex items-center gap-3.5 cursor-pointer ${
                  isCurrent
                    ? 'bg-white/[0.08] border-cyan-400 shadow-lg shadow-cyan-500/10'
                    : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:border-white/20'
                }`}
              >
                <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-white/15">
                  <img
                    src={sp.image}
                    alt={sp.name}
                    className="w-full h-full object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="font-cinzel text-sm font-bold text-white truncate">
                    {sp.name}
                  </h4>
                  <p className="font-mono text-[10px] text-slate-400 truncate">
                    {sp.organization}
                  </p>
                  <span className="font-mono text-[9px] text-cyan-300 tracking-wider">
                    {sp.badge.split('//')[1] || 'LUMINARY'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
