import React from 'react';
import { PASS_OPTIONS } from '../data/techfestData';
import { PassOption } from '../types';
import { Check, ShieldCheck, Building2, Wifi, Coffee, HeartPulse, ArrowRight } from 'lucide-react';

interface AccommodationSectionProps {
  onSelectPass: (pass: PassOption) => void;
}

export const AccommodationSection: React.FC<AccommodationSectionProps> = ({ onSelectPass }) => {
  return (
    <section id="accommodation" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#070a13] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-amber-400 tracking-[0.25em] uppercase mb-2">
              <Building2 className="w-3.5 h-3.5 text-amber-400" />
              <span>CAMPUS LIVING & ENTRY PROTOCOLS</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              PASSES & ACCOMMODATION
            </h2>
            <p className="font-mono text-xs sm:text-sm text-cyan-300 tracking-wider mt-1">
              STAY INSIDE THE ICONIC GREEN IIT BOMBAY CAMPUS
            </p>
          </div>

          <div className="font-mono text-xs text-slate-400 max-w-sm">
            Guaranteed secure lodging in student hostels, 24x7 medical infrastructure, high-speed network connectivity, and direct walking access to all festival arenas.
          </div>
        </div>

        {/* Passes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {PASS_OPTIONS.map((pass) => (
            <div
              key={pass.id}
              className={`relative rounded-2xl p-7 sm:p-8 flex flex-col justify-between border transition-all duration-300 shadow-xl ${
                pass.isPopular
                  ? 'bg-gradient-to-b from-[#111827] via-[#090d16] to-[#05070b] border-cyan-400/80 shadow-cyan-900/20 ring-1 ring-cyan-400/50'
                  : 'bg-gradient-to-b from-[#0c101a] to-[#07090f] border-white/10 hover:border-white/20'
              }`}
            >
              {pass.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-cyan-400 text-slate-950 font-mono text-[10px] font-bold tracking-widest uppercase shadow-md shadow-cyan-500/30">
                  RECOMMENDED FOR GENERAL VISITORS
                </div>
              )}

              <div>
                <div className="font-mono text-[11px] text-slate-400 uppercase tracking-widest mb-2">
                  OFFICIAL DELEGATE PASS
                </div>
                <h3 className="font-cinzel text-2xl font-bold text-white mb-2">
                  {pass.title}
                </h3>
                <div className="font-mono text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-cyan-300 mb-4">
                  {pass.price}
                </div>
                <p className="font-mono text-xs text-slate-400 pb-4 border-b border-white/10 mb-6">
                  {pass.eligibility}
                </p>

                {/* Benefits List */}
                <div className="space-y-3 mb-8">
                  <span className="font-mono text-[10px] text-slate-500 tracking-wider uppercase block">
                    INCLUSIONS:
                  </span>
                  {pass.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectPass(pass)}
                className={`w-full py-3.5 rounded-xl font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  pass.isPopular
                    ? 'bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-500/20'
                    : 'bg-white/5 border border-white/10 hover:bg-white/10 text-white'
                }`}
              >
                <span>CLAIM THIS PASS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Campus Stay Amenities Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl bg-black/40 border border-white/10 font-mono text-xs">
          <div className="flex items-center gap-3">
            <Wifi className="w-5 h-5 text-cyan-400 shrink-0" />
            <div>
              <span className="text-white font-bold block">Gigabit Campus Wi-Fi</span>
              <span className="text-slate-500 text-[10px]">High-speed internet in hostels</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Coffee className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <span className="text-white font-bold block">Subsidized Dining</span>
              <span className="text-slate-500 text-[10px]">Campus messes & night canteens</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <HeartPulse className="w-5 h-5 text-red-400 shrink-0" />
            <div>
              <span className="text-white font-bold block">24/7 IIT Hospital</span>
              <span className="text-slate-500 text-[10px]">On-premise emergency care</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <span className="text-white font-bold block">Round-the-Clock Security</span>
              <span className="text-slate-500 text-[10px]">Gated IIT Bombay security escort</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
