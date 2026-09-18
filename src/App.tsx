import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ManifestoSection } from './components/ManifestoSection';
import { CompetitionsSection } from './components/CompetitionsSection';
import { SpeakersSection } from './components/SpeakersSection';
import { WorkshopsSection } from './components/WorkshopsSection';
import { ExhibitionsSection } from './components/ExhibitionsSection';
import { ScheduleSection } from './components/ScheduleSection';
import { AccommodationSection } from './components/AccommodationSection';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';
import { Competition, Workshop, PassOption } from './types';
import { Volume2, VolumeX, ShieldAlert, Sparkles } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [registerModalOpen, setRegisterModalOpen] = useState<boolean>(false);
  const [preselectedPass, setPreselectedPass] = useState<PassOption | null>(null);
  const [preselectedComp, setPreselectedComp] = useState<Competition | null>(null);
  const [preselectedWorkshop, setPreselectedWorkshop] = useState<Workshop | null>(null);
  const [audioActive, setAudioActive] = useState<boolean>(false);

  // Subtle web audio synthesizer for futuristic telemetry ambience (optional toggle)
  const toggleAmbientSound = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;

      if (!audioActive) {
        const ctx = new AudioContextClass();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(174, ctx.currentTime); // 174 Hz solfeggio healing/renaissance tone
        gain.gain.setValueAtTime(0.015, ctx.currentTime);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();

        // Brief telemetry chime
        const chime = ctx.createOscillator();
        const chimeGain = ctx.createGain();
        chime.type = 'triangle';
        chime.frequency.setValueAtTime(880, ctx.currentTime);
        chime.frequency.exponentialRampToValueAtTime(1760, ctx.currentTime + 0.15);
        chimeGain.gain.setValueAtTime(0.03, ctx.currentTime);
        chimeGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.35);
        chime.connect(chimeGain);
        chimeGain.connect(ctx.destination);
        chime.start();
        chime.stop(ctx.currentTime + 0.4);

        setAudioActive(true);
      } else {
        setAudioActive(false);
      }
    } catch {
      setAudioActive(!audioActive);
    }
  };

  // Track active section for nav highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['manifesto', 'competitions', 'speakers', 'workshops', 'experience', 'events', 'accommodation'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenGeneralRegister = () => {
    setPreselectedPass(null);
    setPreselectedComp(null);
    setPreselectedWorkshop(null);
    setRegisterModalOpen(true);
  };

  const handleRegisterCompetition = (comp: Competition) => {
    setPreselectedComp(comp);
    setPreselectedPass(null);
    setPreselectedWorkshop(null);
    setRegisterModalOpen(true);
  };

  const handleRegisterWorkshop = (workshop: Workshop) => {
    setPreselectedWorkshop(workshop);
    setPreselectedComp(null);
    setPreselectedPass(null);
    setRegisterModalOpen(true);
  };

  const handleSelectPass = (pass: PassOption) => {
    setPreselectedPass(pass);
    setPreselectedComp(null);
    setPreselectedWorkshop(null);
    setRegisterModalOpen(true);
  };

  const handleExplore = () => {
    const el = document.getElementById('manifesto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#05070b] text-[#e5e9f0] selection:bg-cyan-500/30 selection:text-cyan-200 relative bg-noise">
      {/* Top Fixed Navigation */}
      <Navbar
        onOpenRegister={handleOpenGeneralRegister}
        activeSection={activeSection}
      />

      {/* Hero Section */}
      <main>
        <Hero
          onOpenRegister={handleOpenGeneralRegister}
          onExplore={handleExplore}
        />

        {/* Section 2: Manifesto & Renaissance Theme */}
        <ManifestoSection />

        {/* Section 3: Flagship Competitions */}
        <CompetitionsSection
          onRegisterCompetition={handleRegisterCompetition}
        />

        {/* Section 4: Keynote Luminaries */}
        <SpeakersSection />

        {/* Section 5: Masterclass Workshops */}
        <WorkshopsSection
          onRegisterWorkshop={handleRegisterWorkshop}
        />

        {/* Section 6: Immersive Experiences & Exhibitions */}
        <ExhibitionsSection />

        {/* Section 7: 72-Hour Timeline & Campus Map */}
        <ScheduleSection />

        {/* Section 8: Passes & Student Accommodation */}
        <AccommodationSection
          onSelectPass={handleSelectPass}
        />
      </main>

      {/* Official Footer with Patronages & Credits */}
      <Footer />

      {/* Floating Audio Telemetry Toggle & Direct Pass Bar */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <button
          onClick={toggleAmbientSound}
          className="p-3 rounded-full bg-[#090d16]/90 border border-white/15 text-slate-300 hover:text-cyan-300 hover:border-cyan-400 shadow-xl backdrop-blur-md transition-all cursor-pointer"
          title={audioActive ? 'Mute Telemetry Frequency' : 'Initialize Telemetry Soundscape (174Hz)'}
          aria-label="Toggle telemetry soundscape"
        >
          {audioActive ? (
            <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" />
          ) : (
            <VolumeX className="w-4 h-4 text-slate-400" />
          )}
        </button>
      </div>

      {/* Registration & Delegate Pass Modal */}
      <RegistrationModal
        isOpen={registerModalOpen}
        onClose={() => setRegisterModalOpen(false)}
        preselectedPass={preselectedPass}
        preselectedComp={preselectedComp}
        preselectedWorkshop={preselectedWorkshop}
      />
    </div>
  );
}
