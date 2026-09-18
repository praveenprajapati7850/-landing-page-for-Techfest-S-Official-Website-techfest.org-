import React, { useState } from 'react';
import { SCHEDULE, CAMPUS_LOCATIONS } from '../data/techfestData';
import { Calendar, Clock, MapPin, Tag, Compass, Bell, Check, Navigation } from 'lucide-react';

export const ScheduleSection: React.FC = () => {
  const [activeDay, setActiveDay] = useState<1 | 2 | 3>(1);
  const [selectedType, setSelectedType] = useState<string>('All');
  const [bookmarkedEvents, setBookmarkedEvents] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState(CAMPUS_LOCATIONS[0]);

  const toggleBookmark = (id: string) => {
    setBookmarkedEvents((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const categories = ['All', 'Keynote', 'Competition', 'Workshop', 'Exhibit', 'Pronite & Show'];

  const filteredEvents = SCHEDULE.filter((item) => {
    const matchesDay = item.day === activeDay;
    const matchesType = selectedType === 'All' || item.category === selectedType;
    return matchesDay && matchesType;
  });

  return (
    <section id="events" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#05070b] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-[0.25em] uppercase mb-2">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              <span>THE 72-HOUR ITINERARY</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              FESTIVAL TIMELINE & MAP
            </h2>
            <p className="font-mono text-xs sm:text-sm text-slate-400 tracking-wider mt-1">
              DECEMBER 16 — 18, 2026 • IIT BOMBAY POWAI CAMPUS
            </p>
          </div>

          {/* Day Selector Navigation */}
          <div className="flex items-center gap-2 bg-white/[0.03] border border-white/10 p-1.5 rounded-xl font-mono text-xs">
            {[
              { day: 1 as const, label: 'DAY 01', date: 'DEC 16' },
              { day: 2 as const, label: 'DAY 02', date: 'DEC 17' },
              { day: 3 as const, label: 'DAY 03', date: 'DEC 18' },
            ].map((d) => (
              <button
                key={d.day}
                onClick={() => setActiveDay(d.day)}
                className={`px-4 py-2.5 rounded-lg transition-all duration-200 cursor-pointer ${
                  activeDay === d.day
                    ? 'bg-cyan-400 text-slate-950 font-bold shadow-lg shadow-cyan-400/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="block font-bold">{d.label}</span>
                <span className="text-[10px] opacity-80">{d.date}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedType(cat)}
              className={`px-3.5 py-1.5 rounded-lg font-mono text-xs tracking-wider whitespace-nowrap transition-colors cursor-pointer ${
                selectedType === cat
                  ? 'bg-amber-400 text-slate-950 font-bold'
                  : 'bg-white/[0.02] border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Schedule Timeline and Campus Map split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Timeline List */}
          <div className="lg:col-span-7 space-y-4">
            {filteredEvents.map((event) => {
              const isSaved = bookmarkedEvents.includes(event.id);
              return (
                <div
                  key={event.id}
                  className="group relative p-5 rounded-xl bg-gradient-to-r from-white/[0.03] to-transparent border border-white/10 hover:border-cyan-400/40 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    {/* Time block */}
                    <div className="w-24 shrink-0 font-mono text-xs text-cyan-300 font-bold pt-0.5">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{event.time}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <div className="flex items-center gap-2 mb-1 font-mono text-[10px]">
                        <span className="px-2 py-0.5 rounded bg-white/5 text-amber-300 border border-white/10">
                          {event.category}
                        </span>
                        {event.speakerOrHost && (
                          <span className="text-slate-400">Featuring {event.speakerOrHost}</span>
                        )}
                      </div>
                      <h4 className="font-cinzel text-base sm:text-lg font-bold text-white group-hover:text-cyan-200 transition-colors">
                        {event.title}
                      </h4>
                      <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{event.venue}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bookmark / Alert button */}
                  <div className="shrink-0 flex sm:flex-col items-end gap-2">
                    <button
                      onClick={() => toggleBookmark(event.id)}
                      className={`p-2 rounded-lg border text-xs font-mono transition-colors flex items-center gap-1.5 cursor-pointer ${
                        isSaved
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                          : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                      }`}
                      title="Add to personal itinerary"
                    >
                      {isSaved ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-cyan-400" />
                          <span className="text-[10px]">SAVED</span>
                        </>
                      ) : (
                        <>
                          <Bell className="w-3.5 h-3.5" />
                          <span className="text-[10px]">REMIND</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}

            {filteredEvents.length === 0 && (
              <div className="p-8 text-center font-mono text-xs text-slate-500 border border-dashed border-white/10 rounded-xl">
                No events found matching this filter for Day 0{activeDay}.
              </div>
            )}
          </div>

          {/* Campus Map & Telemetry HUD */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#090d16] border border-white/15 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 font-mono text-xs mb-4">
                <div className="flex items-center gap-2 text-cyan-300">
                  <Navigation className="w-4 h-4 text-cyan-400" />
                  <span className="font-semibold tracking-wider">IIT BOMBAY CAMPUS LOCATOR</span>
                </div>
                <span className="text-slate-500">POWAI, MUMBAI</span>
              </div>

              {/* Graphical Schematic of IIT Bombay Lake Campus */}
              <div className="relative aspect-video rounded-xl bg-gradient-to-br from-[#0b101c] to-[#040609] border border-cyan-500/20 p-4 mb-5 overflow-hidden flex flex-col justify-between">
                {/* Visual grid & Lake Powai contour line */}
                <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 400 220" fill="none">
                  {/* Subtle topography lines */}
                  <path d="M 0,160 Q 120,130 200,170 T 400,120" stroke="#00f0ff" strokeWidth="1.5" strokeDasharray="3 3" />
                  <path d="M 0,90 Q 180,60 260,110 T 400,60" stroke="#e2b866" strokeWidth="1" strokeDasharray="4 6" />
                  {/* Main Boulevard */}
                  <line x1="20" y1="200" x2="380" y2="40" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.3" />
                  {/* Lake contour */}
                  <text x="310" y="200" fill="#38bdf8" fontSize="10" fontFamily="var(--font-mono)">POWAI LAKE</text>
                </svg>

                {/* Radar sweep indicator */}
                <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span className="text-cyan-300 font-bold">GRID: ZONE A-30</span>
                  <span className="text-amber-300">LIVE SATELLITE CAD</span>
                </div>

                <div className="relative z-10 p-3 rounded-lg bg-black/70 border border-white/10 backdrop-blur-md">
                  <span className="font-mono text-[10px] text-cyan-400 block">{selectedLocation.code}</span>
                  <h5 className="font-cinzel text-base font-bold text-white">{selectedLocation.name}</h5>
                  <p className="font-mono text-[10px] text-slate-300">{selectedLocation.type}</p>
                  <p className="font-mono text-[9px] text-amber-300 mt-1">{selectedLocation.coords}</p>
                </div>
              </div>

              {/* Interactive Venue Points */}
              <div className="space-y-2 font-mono text-xs">
                <span className="text-slate-400 text-[10px] tracking-wider block mb-2">
                  CLICK CAMPUS SECTOR TO VIEW:
                </span>
                {CAMPUS_LOCATIONS.map((loc) => {
                  const isCur = selectedLocation.code === loc.code;
                  return (
                    <button
                      key={loc.code}
                      onClick={() => setSelectedLocation(loc)}
                      className={`w-full text-left px-3 py-2 rounded-lg border transition-colors flex items-center justify-between cursor-pointer ${
                        isCur
                          ? 'bg-cyan-500/20 border-cyan-400 text-white font-semibold'
                          : 'bg-white/[0.02] border-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span className="text-cyan-400 text-[10px]">{loc.code}</span>
                        <span className="truncate">{loc.name}</span>
                      </div>
                      <span className="text-[10px] text-slate-500 shrink-0">{loc.type.split('&')[0]}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
