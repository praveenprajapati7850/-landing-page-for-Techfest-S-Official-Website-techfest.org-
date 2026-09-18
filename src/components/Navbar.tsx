import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenRegister: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'EVENTS', href: '#events' },
    { label: 'COMPETITIONS', href: '#competitions' },
    { label: 'WORKSHOPS', href: '#workshops' },
    { label: 'SPEAKERS', href: '#speakers' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'ACCOMMODATION', href: '#accommodation' },
    { label: 'ABOUT', href: '#manifesto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#05070b]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/40 py-3'
          : 'bg-transparent py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Identity */}
          <a
            href="#"
            className="group flex items-center gap-3.5 text-left focus:outline-none"
            aria-label="Techfest IIT Bombay Home"
          >
            {/* Techfest Iconic Hexagon Emblem */}
            <div className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-500/10 border border-cyan-400/40 group-hover:border-cyan-400 transition-colors">
              <span className="font-mono text-xs font-bold tracking-tighter text-cyan-300">
                30
              </span>
              <div className="absolute -inset-0.5 rounded-lg bg-cyan-400/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-cinzel text-lg sm:text-xl font-black tracking-[0.2em] text-white group-hover:text-cyan-200 transition-colors">
                  TECHFEST
                </span>
                <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 border border-amber-400/40 text-amber-300 font-semibold">
                  XXX
                </span>
              </div>
              <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] text-slate-400 -mt-0.5">
                IIT BOMBAY • ASIA’S LARGEST
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-mono text-[11px] xl:text-[12px] tracking-widest text-slate-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative py-1 transition-colors hover:text-cyan-300 ${
                    isActive ? 'text-cyan-400 font-semibold' : 'text-slate-300'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-amber-300" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Telemetry info + Register CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-2 font-mono text-[11px] text-slate-400 px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>16-18 DEC 2026</span>
            </div>

            <button
              onClick={onOpenRegister}
              className="relative group px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:brightness-110 active:scale-95 cursor-pointer"
            >
              <div className="flex items-center gap-2 text-slate-950">
                <span>REGISTER NOW</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <button
              onClick={onOpenRegister}
              className="px-3 py-1.5 rounded bg-cyan-400 text-slate-950 font-mono text-[11px] font-bold tracking-wider"
            >
              REGISTER
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#070a10]/98 backdrop-blur-2xl border-b border-white/15 px-6 py-8 shadow-2xl transition-all">
          <div className="flex flex-col gap-4 font-mono text-sm tracking-wider">
            <div className="pb-3 border-b border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                SYSTEM LOCK: IIT BOMBAY
              </span>
              <span className="text-amber-300 font-semibold">EDITION 30</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-slate-200 hover:text-cyan-300 hover:translate-x-2 transition-all flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegister();
                }}
                className="w-full py-3 rounded-lg bg-cyan-400 text-slate-950 font-mono text-sm font-bold tracking-widest uppercase hover:bg-cyan-300 text-center"
              >
                REGISTER NOW — FESTIVAL PASS
              </button>
              <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Patronized by UNESCO & UNICEF</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
