import React, { useState } from 'react';
import { X, Check, ShieldCheck, Download, Sparkles, QrCode, Terminal, ArrowRight } from 'lucide-react';
import { PassOption, Competition, Workshop } from '../types';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPass?: PassOption | null;
  preselectedComp?: Competition | null;
  preselectedWorkshop?: Workshop | null;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  preselectedPass,
  preselectedComp,
  preselectedWorkshop,
}) => {
  const [step, setStep] = useState<'form' | 'ticket'>('form');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    institution: '',
    city: '',
    role: preselectedComp ? 'Competitor' : preselectedWorkshop ? 'Workshop Attendee' : 'General Visitor',
    teamName: '',
  });

  const [ticketId, setTicketId] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomHex = Math.floor(100000 + Math.random() * 900000);
    setTicketId(`TF30-IITB-${randomHex}`);
    setStep('ticket');
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl rounded-2xl bg-[#090d16] border border-cyan-500/30 shadow-2xl overflow-hidden my-8">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40 font-mono text-xs text-cyan-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-semibold tracking-wider">TECHFEST 30 DELEGATE PORTAL</span>
          </div>
          <button
            onClick={handleReset}
            className="text-slate-400 hover:text-white p-1 rounded transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8">
            <div className="mb-6">
              <span className="font-mono text-xs text-amber-400 uppercase tracking-widest block mb-1">
                {preselectedComp
                  ? `COMPETITION REGISTRATION: ${preselectedComp.name}`
                  : preselectedWorkshop
                  ? `WORKSHOP RESERVATION: ${preselectedWorkshop.title}`
                  : preselectedPass
                  ? `PASS TYPE: ${preselectedPass.title}`
                  : 'OFFICIAL FESTIVAL REGISTRATION'}
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                CLAIM YOUR ENTRY PASS
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-1">
                Access to 16–18 December 2026 at IIT Bombay Campus, Mumbai.
              </p>
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div>
                <label className="block text-slate-300 mb-1.5 uppercase tracking-wider">
                  Full Legal Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maya Ramanujan"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 mb-1.5 uppercase tracking-wider">
                    Institutional Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@university.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1.5 uppercase tracking-wider">
                    Mobile Contact *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 mb-1.5 uppercase tracking-wider">
                    University / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. IIT Bombay / MIT / BITS"
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1.5 uppercase tracking-wider">
                    City & Country *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Mumbai, India"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              {preselectedComp && (
                <div>
                  <label className="block text-slate-300 mb-1.5 uppercase tracking-wider">
                    Team Name (For Competition Roster) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vortex Robotics"
                    value={formData.teamName}
                    onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 font-mono text-[10px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Encrypted with SHA-256 campus gate pass validation.</span>
              </div>

              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-mono text-xs font-bold tracking-wider uppercase transition-colors shrink-0 cursor-pointer shadow-lg shadow-cyan-500/20"
              >
                GENERATE PASS
              </button>
            </div>
          </form>
        ) : (
          /* Digital Delegate Ticket Screen */
          <div className="p-6 sm:p-8 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center mb-4">
              <Check className="w-6 h-6 text-emerald-400" />
            </div>

            <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase mb-1">
              REGISTRATION CONFIRMED
            </span>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-2">
              WELCOME TO TECHFEST 30
            </h3>
            <p className="font-mono text-xs text-slate-400 max-w-md mb-6">
              Your digital delegate credentials have been issued. Present this at Main Gate 1 or Kanjurmarg Shuttle Station.
            </p>

            {/* Futuristic Boarding Pass Card */}
            <div className="w-full max-w-md rounded-2xl bg-gradient-to-b from-[#131926] to-[#0a0e17] border-2 border-cyan-400/40 p-6 relative shadow-2xl text-left font-mono">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div>
                  <span className="text-[10px] text-amber-300 font-bold tracking-widest block">
                    IIT BOMBAY • 30TH EDITION
                  </span>
                  <span className="font-cinzel text-lg font-bold text-white">
                    AN AETHERIAL RENAISSANCE
                  </span>
                </div>
                <div className="p-2 rounded bg-black/50 border border-white/10">
                  <QrCode className="w-7 h-7 text-cyan-400" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs mb-4">
                <div>
                  <span className="text-[10px] text-slate-500 block">DELEGATE NAME</span>
                  <span className="font-bold text-white uppercase">{formData.fullName}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block">TICKET ID</span>
                  <span className="font-bold text-cyan-300">{ticketId}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block">INSTITUTION</span>
                  <span className="text-slate-300 truncate block">{formData.institution}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block">VALIDITY</span>
                  <span className="text-emerald-400 font-bold">16–18 DEC 2026</span>
                </div>
              </div>

              <div className="pt-3 border-t border-dashed border-white/20 flex items-center justify-between text-[10px] text-slate-400">
                <span>SECTOR: GENERAL ADMISSION + ALL ARENAS</span>
                <span className="text-amber-400">VERIFIED</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => alert(`Pass ${ticketId} saved to your device cache!`)}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono text-xs flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD WALLET PASS</span>
              </button>

              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-mono text-xs font-bold cursor-pointer"
              >
                DONE
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
