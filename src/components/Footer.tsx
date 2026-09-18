import React from 'react';
import { TECHFEST_CONFIG } from '../data/techfestData';
import { ArrowUp, ShieldCheck, Mail, Phone, MapPin, Globe, Compass } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#04060a] border-t border-white/10 pt-20 pb-12 px-4 sm:px-6 lg:px-8 font-mono text-xs">
      <div className="max-w-7xl mx-auto">
        {/* Patronage Endorsement Showcase */}
        <div className="pb-16 border-b border-white/10 mb-16">
          <div className="text-center mb-8">
            <span className="font-mono text-xs text-amber-400 tracking-[0.25em] uppercase block mb-1">
              OFFICIAL GOVERNMENT & INTERNATIONAL PATRONAGE
            </span>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
              RECOGNIZED FOR ADVANCING GLOBAL STEM & INNOVATION
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TECHFEST_CONFIG.patronages.map((p, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-between hover:border-white/15 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2 text-cyan-300 font-bold tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>{p.name}</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Col 1 & 2: Branding & Coordinates */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center font-bold text-cyan-300">
                30
              </div>
              <div>
                <span className="font-cinzel text-xl font-bold tracking-[0.18em] text-white block">
                  TECHFEST XXX
                </span>
                <span className="text-[10px] text-slate-400 tracking-widest">
                  IIT BOMBAY • AN AETHERIAL RENAISSANCE
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Asia’s largest science and technology festival, organized completely by the student body of the Indian Institute of Technology Bombay under the patronage of UNESCO and UNICEF.
            </p>

            <div className="space-y-1.5 text-[11px] text-slate-400 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>IIT Bombay, Powai, Mumbai, Maharashtra 400076</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-cyan-400" />
                <span>Coordinates: {TECHFEST_CONFIG.geo.lat}, {TECHFEST_CONFIG.geo.lng}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>general@techfest.org • info@iitb.ac.in</span>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="font-cinzel text-sm font-bold text-white tracking-widest uppercase mb-4">
              DISCOVER
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li><a href="#events" className="hover:text-cyan-300 transition-colors">72h Schedule</a></li>
              <li><a href="#competitions" className="hover:text-cyan-300 transition-colors">Robowars & Competitions</a></li>
              <li><a href="#workshops" className="hover:text-cyan-300 transition-colors">Masterclass Labs</a></li>
              <li><a href="#speakers" className="hover:text-cyan-300 transition-colors">Convocation Hall Summits</a></li>
              <li><a href="#experience" className="hover:text-cyan-300 transition-colors">ISRO & Tech Exhibits</a></li>
            </ul>
          </div>

          {/* Col 4: Campus Services */}
          <div>
            <h4 className="font-cinzel text-sm font-bold text-white tracking-widest uppercase mb-4">
              CAMPUS & PASSES
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li><a href="#accommodation" className="hover:text-cyan-300 transition-colors">Student Accommodation</a></li>
              <li><a href="#accommodation" className="hover:text-cyan-300 transition-colors">Free General Visitor Pass</a></li>
              <li><a href="#accommodation" className="hover:text-cyan-300 transition-colors">Campus Ambassador Program</a></li>
              <li><a href="#accommodation" className="hover:text-cyan-300 transition-colors">Hospitality & Rules</a></li>
              <li><a href="#accommodation" className="hover:text-cyan-300 transition-colors">Emergency Protocol</a></li>
            </ul>
          </div>

          {/* Col 5: Telemetry Status & Back to Top */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="font-cinzel text-sm font-bold text-white tracking-widest uppercase mb-4">
                SERVER STATUS
              </h4>
              <div className="p-3 rounded-xl bg-black/50 border border-white/10 space-y-2 text-[10px]">
                <div className="flex items-center justify-between text-slate-400">
                  <span>GATE REGISTRATION:</span>
                  <span className="text-emerald-400 font-bold">ONLINE</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>CAMPUS GRID:</span>
                  <span className="text-cyan-300 font-bold">SYNCHRONIZED</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>SYSTEM LATENCY:</span>
                  <span className="text-slate-300">12ms</span>
                </div>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400 text-slate-300 transition-all cursor-pointer"
            >
              <span>BACK TO SUMMIT</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            © 1998 — 2026 Techfest, IIT Bombay. All Rights Reserved. 30th Edition.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300">Privacy Policy</span>
            <span className="hover:text-slate-300">Code of Conduct</span>
            <span className="hover:text-slate-300">IIT Bombay Official Portal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
