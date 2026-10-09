import React, { useState } from 'react';
import {
  Compass,
  Maximize2,
  Minimize2,
  Plus,
  Minus,
  RotateCcw,
  MapPin,
  BookOpen,
  FoldHorizontal,
  CheckCircle2,
} from 'lucide-react';
import { ASHOK_IMAGES, JourneyMilestone } from '../data/portfolioData';

interface JourneyTreasureMapProps {
  milestones: JourneyMilestone[];
  darkMode: boolean;
  activeSkillFilter: string | null;
}

export const JourneyTreasureMap: React.FC<JourneyTreasureMapProps> = ({
  milestones,
  darkMode,
  activeSkillFilter,
}) => {
  const [selectedId, setSelectedId] = useState<string>(milestones[0]?.id || 'anvesa-hot');
  const [isFolded, setIsFolded] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [zoom, setZoom] = useState<number>(1);
  const [mapImgError, setMapImgError] = useState<boolean>(false);
  const [pirateImgError, setPirateImgError] = useState<boolean>(false);

  const activeMilestone =
    milestones.find((m) => m.id === selectedId) || milestones[0];

  const handleZoomIn = () => setZoom((z) => Math.min(1.6, Number((z + 0.2).toFixed(2))));
  const handleZoomOut = () => setZoom((z) => Math.max(1, Number((z - 0.2).toFixed(2))));
  const handleZoomReset = () => setZoom(1);

  return (
    <section
      id="journey"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto"
    >
      {/* Top Banner matching 00:06 "My Journey" Neo-Brutalist Box */}
      <div
        className={`border-2 border-zinc-900 shadow-[5px_5px_0px_0px_#18181b] px-6 py-4 mb-8 flex flex-wrap items-center justify-between gap-4 ${
          darkMode ? 'bg-zinc-800 text-zinc-100' : 'bg-white text-zinc-900'
        }`}
      >
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-9 h-9 bg-[#FDE047] text-zinc-900 border-2 border-zinc-900 font-display font-extrabold text-sm">
            02
          </span>
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">
              My Journey
            </h2>
            <p
              className={`text-xs sm:text-sm ${
                darkMode ? 'text-zinc-400' : 'text-zinc-600'
              }`}
            >
              13+ Years · From Cognizant Batch Topper to Head of Technology at Anvesa · 3 Continents
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsFolded((prev) => !prev)}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold border-2 border-zinc-900 bg-[#FDE047] text-zinc-900 shadow-[3px_3px_0px_0px_#18181b] hover:translate-x-[1px] hover:translate-y-[1px] transition-transform whitespace-nowrap shrink-0 cursor-pointer"
          >
            {isFolded ? (
              <>
                <BookOpen className="w-4 h-4" />
                Unfold Treasure Map
              </>
            ) : (
              <>
                <FoldHorizontal className="w-4 h-4" />
                Fold Map Cover
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => setIsFullscreen((prev) => !prev)}
            className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold border-2 border-zinc-900 shadow-[3px_3px_0px_0px_#18181b] hover:translate-x-[1px] hover:translate-y-[1px] transition-transform whitespace-nowrap shrink-0 cursor-pointer ${
              darkMode
                ? 'bg-zinc-700 text-zinc-100'
                : 'bg-[#67E8F9] text-zinc-900'
            }`}
          >
            {isFullscreen ? (
              <>
                <Minimize2 className="w-4 h-4" />
                Exit Full View
              </>
            ) : (
              <>
                <Maximize2 className="w-4 h-4" />
                Expand Map
              </>
            )}
          </button>
        </div>
      </div>

      {/* Folded Vintage Map Book View (from Frame 00:06) */}
      {isFolded ? (
        <div
          onClick={() => setIsFolded(false)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') setIsFolded(false);
          }}
          className="max-w-3xl mx-auto bg-[#F5E6C8] text-zinc-900 border-3 border-zinc-900 shadow-[8px_8px_0px_0px_#18181b] p-6 sm:p-10 cursor-pointer group transition-transform hover:-translate-y-0.5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-zinc-900 bg-[#FAF0DC]">
            {/* Left Fold */}
            <div className="p-6 sm:p-8 border-b-2 md:border-b-0 md:border-r-2 border-dashed border-zinc-800 flex flex-col justify-between min-h-[280px] relative">
              <div className="flex items-center justify-between">
                <Compass className="w-10 h-10 text-amber-900" />
                <span className="text-xs font-mono uppercase tracking-wider text-amber-900 font-semibold">
                  Hyderabad · US · Australia
                </span>
              </div>

              <div className="my-6">
                <h3 className="text-2xl font-display font-extrabold text-zinc-900 mb-2">
                  The Architect&apos;s Expedition Log
                </h3>
                <p className="text-sm text-zinc-700 leading-relaxed">
                  Click anywhere on this folded chart to inspect 13+ years of production systems across Cognizant (American Express), Aureus Tech Systems, Happiest Minds, and Anvesa.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-zinc-900 bg-[#FDE047] border-2 border-zinc-900 px-3 py-1.5 w-fit shadow-[2px_2px_0px_0px_#18181b]">
                <span>Click to Open Interactive Map</span>
                <span>→</span>
              </div>
            </div>

            {/* Right Fold Preview */}
            <div className="relative min-h-[280px] overflow-hidden bg-[#EBD5B3] flex items-center justify-center p-6">
              {!mapImgError && (
                <img
                  src={ASHOK_IMAGES.treasureMap}
                  alt="Vintage treasure map preview"
                  referrerPolicy="no-referrer"
                  onError={() => setMapImgError(true)}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
                />
              )}
              <div className="relative z-10 flex flex-col items-center gap-2 bg-[#FFFDF7]/95 border-2 border-zinc-900 p-4 shadow-[4px_4px_0px_0px_#18181b]">
                <span className="text-red-600 font-display font-extrabold text-2xl">
                  ✕
                </span>
                <span className="bg-[#FDE047] border border-zinc-900 px-2.5 py-0.5 text-xs font-mono font-bold text-zinc-900">
                  2014 — 2026
                </span>
                <span className="text-xs font-bold text-zinc-800">
                  3 Career Chapters · 15+ Clients
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Unfolded Split View (Frames 00:07 - 00:09): Left Journey Timeline + Right Interactive Treasure Map */
        <div
          className={`border-2 border-zinc-900 shadow-[8px_8px_0px_0px_#18181b] overflow-hidden transition-all ${
            isFullscreen
              ? 'fixed inset-4 z-50 bg-[#FFFDF7] flex flex-col'
              : darkMode
              ? 'bg-zinc-900'
              : 'bg-white'
          }`}
        >
          {isFullscreen && (
            <div className="bg-[#FDE047] text-zinc-900 border-b-2 border-zinc-900 px-6 py-3 flex items-center justify-between">
              <div className="font-display font-extrabold text-lg">
                Ashok Kumar Kunchala — Global Career Expedition Map (2014 – Present)
              </div>
              <button
                type="button"
                onClick={() => setIsFullscreen(false)}
                className="px-3 py-1.5 bg-white border-2 border-zinc-900 font-bold text-xs shadow-[2px_2px_0px_0px_#18181b] cursor-pointer"
              >
                Close Fullscreen ✕
              </button>
            </div>
          )}

          <div
            className={`grid grid-cols-1 ${
              isFullscreen ? 'lg:grid-cols-12 flex-1 overflow-hidden' : 'lg:grid-cols-12'
            }`}
          >
            {/* LEFT COLUMN: Journey Timeline (Matching 00:07 - 00:09) */}
            <div
              className={`lg:col-span-5 border-b-2 lg:border-b-0 lg:border-r-2 border-zinc-900 p-5 sm:p-6 overflow-y-auto ${
                isFullscreen ? 'max-h-full' : 'max-h-[680px]'
              } ${darkMode ? 'bg-zinc-900 text-zinc-100' : 'bg-[#FFFDF7] text-zinc-900'}`}
            >
              <div className="flex items-center justify-between pb-3 mb-5 border-b-2 border-zinc-900">
                <h3 className="text-lg font-display font-extrabold tracking-tight">
                  Journey Timeline
                </h3>
                <span className="text-xs font-mono tabular-nums opacity-75">
                  3 Chapters · 13+ Yrs
                </span>
              </div>

              <div className="relative pl-6 space-y-6 before:content-[''] before:absolute before:left-[9px] before:top-2 before:bottom-2 before:w-0 before:border-l-2 before:border-dashed before:border-zinc-500">
                {milestones.map((item) => {
                  const isSelected = item.id === activeMilestone.id;
                  const matchesSkill =
                    activeSkillFilter &&
                    item.stack.some((s) =>
                      s.toLowerCase().includes(activeSkillFilter.toLowerCase())
                    );

                  return (
                    <div key={item.id} className="relative">
                      {/* Timeline Node Circle */}
                      <span
                        className={`absolute -left-[23px] top-4 w-4 h-4 rounded-full border-2 border-zinc-900 transition-transform ${
                          isSelected
                            ? 'bg-[#F472B6] scale-125'
                            : 'bg-[#FDE047]'
                        }`}
                      />

                      <button
                        type="button"
                        onClick={() => setSelectedId(item.id)}
                        className={`w-full text-left p-4 border-2 border-zinc-900 transition-all cursor-pointer ${
                          isSelected
                            ? darkMode
                              ? 'bg-zinc-800 shadow-[4px_4px_0px_0px_#FDE047] -translate-y-0.5'
                              : 'bg-[#FEF9C3] shadow-[4px_4px_0px_0px_#18181b] -translate-y-0.5'
                            : darkMode
                            ? 'bg-zinc-900/80 hover:bg-zinc-800/70'
                            : 'bg-white hover:bg-amber-50/50'
                        }`}
                      >
                        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                          <h4 className="font-display font-extrabold text-base leading-snug">
                            {item.role}{' '}
                            <span className="text-teal-600 dark:text-teal-400">
                              @ {item.company}
                            </span>
                          </h4>
                        </div>

                        {/* Unboxed Metadata with · separators */}
                        <div
                          className={`text-xs font-mono tabular-nums mb-2.5 ${
                            darkMode ? 'text-zinc-400' : 'text-zinc-600'
                          }`}
                        >
                          <span>{item.period}</span>
                          <span aria-hidden="true"> · </span>
                          <span>{item.subtitle}</span>
                        </div>

                        <p
                          className={`text-xs sm:text-sm leading-relaxed mb-3 ${
                            darkMode ? 'text-zinc-300' : 'text-zinc-700'
                          }`}
                        >
                          {item.description}
                        </p>

                        {/* Location & Region Line */}
                        <div className="flex items-center gap-1.5 text-xs font-medium text-rose-600 dark:text-rose-400">
                          <MapPin className="w-3.5 h-3.5 shrink-0" />
                          <span>
                            {item.location} · Regions: {item.regions}
                          </span>
                        </div>

                        {matchesSkill && (
                          <div className="mt-2 pt-2 border-t border-dashed border-zinc-400 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                            Matches active filter: {activeSkillFilter}
                          </div>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT COLUMN: Interactive Cartography Treasure Map (Matching 00:07 - 00:09) */}
            <div className="lg:col-span-7 relative bg-[#E6CFA8] min-h-[480px] sm:min-h-[560px] flex flex-col justify-between overflow-hidden select-none">
              {/* Top-Left Map Zoom Controls (exact match to 00:07) */}
              <div className="relative z-20 p-4 flex items-center justify-between pointer-events-none">
                <div className="flex flex-col border-2 border-zinc-900 bg-white text-zinc-900 shadow-[3px_3px_0px_0px_#18181b] pointer-events-auto">
                  <button
                    type="button"
                    onClick={handleZoomIn}
                    title="Zoom in map"
                    aria-label="Zoom in map"
                    className="p-2 hover:bg-[#FDE047] border-b-2 border-zinc-900 transition-colors cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleZoomOut}
                    title="Zoom out map"
                    aria-label="Zoom out map"
                    className="p-2 hover:bg-[#FDE047] border-b-2 border-zinc-900 transition-colors cursor-pointer"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleZoomReset}
                    title="Reset map zoom"
                    aria-label="Reset map zoom"
                    className="p-2 hover:bg-[#FDE047] transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>

                {/* Active Chapter Indicator Badge */}
                <div className="pointer-events-auto bg-[#FFFDF7] text-zinc-900 border-2 border-zinc-900 shadow-[3px_3px_0px_0px_#18181b] px-3.5 py-2 text-xs font-bold">
                  <span className="font-mono text-rose-600 mr-1.5">✕</span>
                  <span>Active Route: {activeMilestone.company}</span>
                  <span className="mx-1.5">·</span>
                  <span className="font-mono tabular-nums">{activeMilestone.regions}</span>
                </div>
              </div>

              {/* Interactive Zoomable Map Canvas */}
              <div
                className="absolute inset-0 transition-transform duration-200 ease-out"
                style={{ transform: `scale(${zoom})`, transformOrigin: 'center center' }}
              >
                {!mapImgError ? (
                  <img
                    src={ASHOK_IMAGES.treasureMap}
                    alt="Illustrated vintage world treasure map showing India, US, Europe, and Australia"
                    referrerPolicy="no-referrer"
                    onError={() => setMapImgError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#F3E3C3] via-[#E5C99B] to-[#C2D8D5]" />
                )}

                {/* SVG Dotted Trade / Deployment Routes */}
                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                >
                  {/* Route from Hyderabad HQ to Secondary Regions of Active Milestone */}
                  {activeMilestone.secondaryPins.map((pin) => (
                    <g key={pin.label}>
                      <line
                        x1={activeMilestone.mapPosition.x}
                        y1={activeMilestone.mapPosition.y}
                        x2={pin.x}
                        y2={pin.y}
                        stroke="#991B1B"
                        strokeWidth="0.6"
                        strokeDasharray="1.5 1.2"
                      />
                    </g>
                  ))}
                </svg>

                {/* Primary Career Chapter X Markers on the Map */}
                {milestones.map((m) => {
                  const isCurrent = m.id === activeMilestone.id;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setSelectedId(m.id)}
                      style={{
                        left: `${m.mapPosition.x}%`,
                        top: `${m.mapPosition.y}%`,
                      }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 z-10 group cursor-pointer transition-transform ${
                        isCurrent ? 'scale-110 z-20' : 'opacity-90 hover:scale-105'
                      }`}
                    >
                      <div className="flex flex-col items-center">
                        <span
                          className={`text-xl sm:text-2xl font-display font-black leading-none drop-shadow-[2px_2px_0px_#fff] ${
                            isCurrent ? 'text-red-600' : 'text-zinc-900'
                          }`}
                        >
                          ✕
                        </span>
                        <span
                          className={`mt-0.5 px-2 py-0.5 text-[11px] font-mono font-bold border-2 border-zinc-900 shadow-[2px_2px_0px_0px_#18181b] whitespace-nowrap ${
                            isCurrent
                              ? 'bg-[#FDE047] text-zinc-900'
                              : 'bg-white text-zinc-900'
                          }`}
                        >
                          {m.yearTag}
                        </span>
                      </div>
                    </button>
                  );
                })}

                {/* Secondary Client Fleet Pins for the Active Milestone (US, Australia, EMEA) */}
                {activeMilestone.secondaryPins.map((pin) => (
                  <div
                    key={pin.label}
                    style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-base font-display font-black text-red-700 drop-shadow-[1px_1px_0px_#fff]">
                        ✕
                      </span>
                      <span className="px-1.5 py-0.5 text-[10px] font-mono font-bold bg-[#67E8F9] text-zinc-900 border border-zinc-900 shadow-[2px_2px_0px_0px_#18181b] whitespace-nowrap">
                        {pin.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Overlay: Pirate Captain Guide + Active Chapter Achievements (Matching 00:07 - 00:09) */}
              <div className="relative z-20 p-4 mt-auto flex flex-col sm:flex-row items-start sm:items-end gap-4 pointer-events-none">
                {/* Pirate Captain Sticker (Bottom-Left just like 00:07-00:09) */}
                <div className="pointer-events-auto shrink-0 w-24 h-24 sm:w-28 sm:h-28 bg-[#FAF0DC] border-2 border-zinc-900 shadow-[4px_4px_0px_0px_#18181b] overflow-hidden flex items-center justify-center">
                  {!pirateImgError ? (
                    <img
                      src={ASHOK_IMAGES.pirateCaptain}
                      alt="Pirate Captain expedition guide"
                      referrerPolicy="no-referrer"
                      onError={() => setPirateImgError(true)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Compass className="w-12 h-12 text-amber-900" />
                  )}
                </div>

                {/* Captain's Log Detail Box */}
                <div className="pointer-events-auto flex-1 bg-[#FFFDF7]/95 text-zinc-900 border-2 border-zinc-900 shadow-[4px_4px_0px_0px_#18181b] p-3.5 sm:p-4">
                  <div className="text-xs font-mono font-bold text-amber-900 mb-1">
                    Captain&apos;s Log · {activeMilestone.role} @ {activeMilestone.company}
                  </div>
                  <p className="text-xs font-semibold text-zinc-800 mb-2">
                    {activeMilestone.captainNote}
                  </p>
                  <ul className="space-y-1">
                    {activeMilestone.highlights.slice(0, 2).map((h, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-zinc-700 flex items-start gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
