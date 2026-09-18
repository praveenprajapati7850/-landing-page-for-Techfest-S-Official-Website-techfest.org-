import React, { useState } from 'react';
import { COMPETITIONS } from '../data/techfestData';
import { Competition } from '../types';
import { Trophy, Users, MapPin, Calendar, ArrowRight, ShieldAlert, CheckCircle2, Search, Filter } from 'lucide-react';

interface CompetitionsSectionProps {
  onRegisterCompetition: (comp: Competition) => void;
}

export const CompetitionsSection: React.FC<CompetitionsSectionProps> = ({ onRegisterCompetition }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalComp, setActiveModalComp] = useState<Competition | null>(null);

  const categories = ['All', 'Robotics', 'AI & Computing', 'Aeromodelling', 'Innovation & BioTech', 'Design & Strategy'];

  const filtered = COMPETITIONS.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="competitions" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#05070b] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-[0.25em] uppercase mb-2">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>₹50,00,000+ PRIZE POOL • GLOBAL STAGE</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              FLAGSHIP COMPETITIONS
            </h2>
            <p className="font-mono text-xs sm:text-sm text-slate-400 tracking-wider mt-1">
              PROVE YOUR METTLE AGAINST ASIA’S SHARPEST MINDS
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search challenges..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 font-mono focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg font-mono text-xs tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(0,240,255,0.3)]'
                  : 'bg-white/[0.03] border border-white/10 text-slate-300 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Competitions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((comp) => {
            const isClosingSoon = comp.registrationStatus === 'Closing Soon';
            const isFillingFast = comp.registrationStatus === 'Filling Fast';

            return (
              <div
                key={comp.id}
                className="group relative rounded-2xl bg-gradient-to-b from-[#0e131d] to-[#07090f] border border-white/10 hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 shadow-xl overflow-hidden hover:-translate-y-1"
              >
                {/* Accent top gradient line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent group-hover:via-cyan-400 transition-all" />

                <div>
                  {/* Card Telemetry Meta */}
                  <div className="flex items-center justify-between gap-2 mb-4 font-mono text-[11px]">
                    <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-cyan-300 font-semibold tracking-wider uppercase">
                      {comp.category}
                    </span>

                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase border ${
                        isClosingSoon
                          ? 'bg-red-500/10 border-red-500/30 text-red-300'
                          : isFillingFast
                          ? 'bg-amber-500/10 border-amber-500/30 text-amber-300'
                          : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                      }`}
                    >
                      {comp.registrationStatus}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold tracking-wide text-white group-hover:text-cyan-200 transition-colors mb-2">
                    {comp.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-6">
                    {comp.tagline}
                  </p>

                  {/* Prize and Team Stats */}
                  <div className="grid grid-cols-2 gap-3 py-3 border-y border-white/5 font-mono mb-6 bg-white/[0.015] rounded-lg px-3">
                    <div>
                      <span className="text-[10px] text-slate-500 block">PRIZE POOL</span>
                      <span className="text-sm sm:text-base font-bold text-amber-300">
                        {comp.prizePool}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 block">TEAM SIZE</span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-200">
                        {comp.teamSize}
                      </span>
                    </div>
                  </div>

                  {/* Venue and Date hints */}
                  <div className="space-y-1.5 font-mono text-[11px] text-slate-400 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{comp.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="truncate">{comp.venue}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => setActiveModalComp(comp)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-slate-200 font-mono text-xs font-semibold tracking-wider text-center transition-colors cursor-pointer"
                  >
                    DETAILS & RULES
                  </button>

                  <button
                    onClick={() => onRegisterCompetition(comp)}
                    className="py-2.5 px-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-mono text-xs font-bold tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer shadow-md shadow-cyan-500/20"
                  >
                    <span>REGISTER</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 font-mono text-sm text-slate-500">
            No competitions found matching your search parameters.
          </div>
        )}
      </div>

      {/* Rules & Details Modal */}
      {activeModalComp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#090d16] border border-white/15 p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 font-mono text-xs text-cyan-400">
              <span>COMPETITION DOSSIER // {activeModalComp.category}</span>
              <button
                onClick={() => setActiveModalComp(null)}
                className="text-slate-400 hover:text-white text-lg font-bold px-2 py-0.5 rounded cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="mt-4">
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-1">
                {activeModalComp.name}
              </h3>
              <p className="font-mono text-xs text-amber-300 mb-4">{activeModalComp.tagline}</p>
              
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {activeModalComp.description}
              </p>

              {/* Specs and Key Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10 font-mono text-xs mb-6">
                <div>
                  <span className="text-slate-500 block text-[10px]">TOTAL PRIZE</span>
                  <span className="font-bold text-amber-300 text-base">{activeModalComp.prizePool}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">ALLOWED SQUAD</span>
                  <span className="text-slate-200 font-semibold">{activeModalComp.teamSize}</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-slate-500 block text-[10px]">CAMPUS VENUE</span>
                  <span className="text-cyan-300 text-[11px] truncate block">{activeModalComp.venue}</span>
                </div>
              </div>

              {/* Official Technical Rules Highlights */}
              <div className="mb-6">
                <h4 className="font-mono text-xs font-bold tracking-widest text-slate-300 uppercase mb-3 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-cyan-400" />
                  <span>REGULATORY SCRUTINY & CODE OF COMPETITION</span>
                </h4>
                <ul className="space-y-2">
                  {activeModalComp.rulesSnippet.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => setActiveModalComp(null)}
                  className="px-5 py-2.5 rounded-xl border border-white/10 text-slate-300 font-mono text-xs hover:bg-white/5 cursor-pointer"
                >
                  CLOSE
                </button>
                <button
                  onClick={() => {
                    const c = activeModalComp;
                    setActiveModalComp(null);
                    onRegisterCompetition(c);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-mono text-xs font-bold tracking-wider flex items-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/25"
                >
                  <span>REGISTER TEAM NOW</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
