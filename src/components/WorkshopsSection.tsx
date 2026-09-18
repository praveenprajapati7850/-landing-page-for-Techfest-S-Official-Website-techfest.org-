import React, { useState } from 'react';
import { WORKSHOPS } from '../data/techfestData';
import { Workshop } from '../types';
import { BookOpen, Clock, Users, Award, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface WorkshopsSectionProps {
  onRegisterWorkshop: (workshop: Workshop) => void;
}

export const WorkshopsSection: React.FC<WorkshopsSectionProps> = ({ onRegisterWorkshop }) => {
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop>(WORKSHOPS[0]);

  return (
    <section id="workshops" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#05070b] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-[0.25em] uppercase mb-2">
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              <span>HANDS-ON DEEPTECH CERTIFICATION LABS</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              MASTERCLASS WORKSHOPS
            </h2>
            <p className="font-mono text-xs sm:text-sm text-amber-300 tracking-wider mt-1">
              OFFICIAL CERTIFICATION ENDORSED BY IIT BOMBAY
            </p>
          </div>

          <div className="font-mono text-xs text-slate-400 max-w-sm">
            Rigorous, laboratory-grade training under the guidance of elite scientists, hardware architects, and industry researchers.
          </div>
        </div>

        {/* Masterclass Selection & Deep Lab Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Workshop Tab List */}
          <div className="lg:col-span-5 space-y-3">
            {WORKSHOPS.map((ws) => {
              const isSelected = selectedWorkshop.id === ws.id;
              return (
                <button
                  key={ws.id}
                  onClick={() => setSelectedWorkshop(ws)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-white/[0.08] to-cyan-950/20 border-cyan-400/80 shadow-lg shadow-cyan-900/20'
                      : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-[11px] mb-2">
                    <span className="px-2 py-0.5 rounded bg-white/5 text-amber-300 border border-white/10">
                      {ws.date}
                    </span>
                    <span className="text-cyan-400 font-semibold">{ws.level}</span>
                  </div>

                  <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white mb-1 leading-snug">
                    {ws.title}
                  </h3>
                  <p className="font-mono text-xs text-slate-400">
                    Lead: {ws.instructor} • <span className="text-slate-500">{ws.affiliation}</span>
                  </p>
                </button>
              );
            })}
          </div>

          {/* Detailed Syllabus & Seat Reservation View */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-[#0d121c] to-[#080b12] border border-white/15 shadow-2xl relative">
              {/* Top Meta Strip */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 font-mono text-xs text-slate-400 mb-6">
                <div className="flex items-center gap-2 text-cyan-300 font-semibold">
                  <Clock className="w-4 h-4" />
                  <span>{selectedWorkshop.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-amber-300 font-semibold">
                  <Users className="w-4 h-4" />
                  <span>{selectedWorkshop.seats}</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-300 font-semibold">
                  <Award className="w-4 h-4" />
                  <span>IIT Bombay Certificate</span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-2">
                {selectedWorkshop.title}
              </h3>
              <p className="font-mono text-xs text-cyan-300 mb-6">
                Instructed by {selectedWorkshop.instructor} ({selectedWorkshop.affiliation})
              </p>

              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                {selectedWorkshop.description}
              </p>

              {/* Prerequisites Grid */}
              <div className="mb-6">
                <h4 className="font-mono text-xs font-bold tracking-widest text-slate-400 uppercase mb-3">
                  PREREQUISITE BACKGROUND:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedWorkshop.prerequisites.map((req, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 font-mono text-xs text-slate-300"
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Deliverables & Certificate */}
              <div className="mb-8">
                <h4 className="font-mono text-xs font-bold tracking-widest text-slate-400 uppercase mb-3">
                  CERTIFIED DELIVERABLES:
                </h4>
                <div className="space-y-2">
                  {selectedWorkshop.takeaways.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 font-mono text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to action */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs font-mono text-slate-400">
                  <span className="text-amber-300 font-bold">LIMITED SEATS:</span> Verification strictly verified at entry.
                </div>

                <button
                  onClick={() => onRegisterWorkshop(selectedWorkshop)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-mono text-xs font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20"
                >
                  <span>RESERVE LAB BENCH</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
