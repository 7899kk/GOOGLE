import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  Navigation,
} from 'lucide-react';
import {
  ASHOK_IMAGES,
  JourneyMilestone,
  LocationPoint,
} from '../data/portfolioData';

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
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<string>(
    milestones[0]?.id || 'anvesa-hot'
  );
  const [selectedLocationId, setSelectedLocationId] = useState<
    'hyderabad' | 'usa' | 'australia' | 'emea'
  >('hyderabad');
  const [isFolded, setIsFolded] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [zoom, setZoom] = useState<number>(1);
  const [panOrigin, setPanOrigin] = useState<{ x: number; y: number }>({
    x: 50,
    y: 50,
  });
  const [mapImgError, setMapImgError] = useState<boolean>(false);

  const activeMilestone =
    milestones.find((m) => m.id === selectedMilestoneId) || milestones[0];

  const activeLocation: LocationPoint =
    activeMilestone.locations.find((loc) => loc.id === selectedLocationId) ||
    activeMilestone.locations[0];

  const handleSelectMilestone = (milestone: JourneyMilestone) => {
    setSelectedMilestoneId(milestone.id);
    // Keep current location if available in this milestone, otherwise default to first location
    const matchingLoc =
      milestone.locations.find((l) => l.id === selectedLocationId) ||
      milestone.locations[0];
    setSelectedLocationId(matchingLoc.id);
    setPanOrigin(matchingLoc.coordinates);
  };

  const handleSelectLocation = (
    milestone: JourneyMilestone,
    loc: LocationPoint
  ) => {
    setSelectedMilestoneId(milestone.id);
    setSelectedLocationId(loc.id);
    setPanOrigin(loc.coordinates);
    setZoom((prev) => (prev < 1.15 ? 1.2 : prev));
  };

  const handleZoomIn = () =>
    setZoom((z) => Math.min(1.65, Number((z + 0.2).toFixed(2))));
  const handleZoomOut = () =>
    setZoom((z) => Math.max(1, Number((z - 0.2).toFixed(2))));
  const handleZoomReset = () => {
    setZoom(1);
    setPanOrigin({ x: 50, y: 50 });
  };

  // Distinct, non-overlapping positions on the world map for the 3 career era banners
  const eraBadges: {
    milestoneId: string;
    yearTag: string;
    companyShort: string;
    x: number;
    y: number;
  }[] = [
    {
      milestoneId: 'cognizant-amex',
      yearTag: '2014 – 2017',
      companyShort: 'Cognizant · AmEx',
      x: 20,
      y: 26,
    },
    {
      milestoneId: 'aureus-happiest-minds',
      yearTag: '2017 – 2024',
      companyShort: 'Aureus → Happiest Minds',
      x: 34,
      y: 35,
    },
    {
      milestoneId: 'anvesa-hot',
      yearTag: '2024 – PRESENT',
      companyShort: 'Anvesa (Global)',
      x: 56,
      y: 26,
    },
  ];

  const hqCoords = { x: 35.0, y: 47.0 }; // Hyderabad, India

  return (
    <section
      id="journey"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto scroll-mt-20"
    >
      {/* Top Banner matching Frame 00:06 "My Journey" Neo-Brutalist Box */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.35 }}
        className={`border-2 border-zinc-900 shadow-[6px_6px_0px_0px_#18181b] px-6 py-5 mb-10 flex flex-wrap items-center justify-between gap-4 ${
          darkMode ? 'bg-[#1F212A] text-zinc-100' : 'bg-white text-zinc-900'
        }`}
      >
        <div className="flex items-center gap-3.5">
          <span className="inline-flex items-center justify-center w-10 h-10 bg-[#FDE047] text-zinc-900 border-2 border-zinc-900 shadow-[2px_2px_0px_0px_#18181b] font-display font-extrabold text-sm">
            <Compass className="w-5 h-5" />
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
              Click any role or location (India, United States, Australia, Europe) to explore on the map
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsFolded((prev) => !prev)}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold border-2 border-zinc-900 bg-[#FDE047] text-zinc-900 shadow-[3px_3px_0px_0px_#18181b] hover:translate-x-[1px] hover:translate-y-[1px] transition-transform whitespace-nowrap shrink-0 cursor-pointer"
          >
            {isFolded ? (
              <>
                <BookOpen className="w-4 h-4" />
                Open Map View
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
            className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold border-2 border-zinc-900 shadow-[3px_3px_0px_0px_#18181b] hover:translate-x-[1px] hover:translate-y-[1px] transition-transform whitespace-nowrap shrink-0 cursor-pointer ${
              darkMode
                ? 'bg-zinc-800 text-zinc-100'
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
                Full Screen
              </>
            )}
          </button>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {/* Folded Vintage Map Book View (from Frame 00:06) */}
        {isFolded ? (
          <motion.div
            key="folded-map"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsFolded(false)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setIsFolded(false);
            }}
            className="max-w-4xl mx-auto bg-[#F5E6C8] text-zinc-900 border-3 border-zinc-900 shadow-[8px_8px_0px_0px_#18181b] p-6 sm:p-10 cursor-pointer group"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-zinc-900 bg-[#FAF0DC]">
              {/* Left Fold */}
              <div className="p-6 sm:p-8 border-b-2 md:border-b-0 md:border-r-2 border-dashed border-zinc-800 flex flex-col justify-between min-h-[300px] relative">
                <div className="flex items-center justify-between">
                  <Compass className="w-10 h-10 text-amber-900" />
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-900 font-semibold">
                    2014 — PRESENT
                  </span>
                </div>

                <div className="my-6">
                  <h3 className="text-2xl font-display font-extrabold text-zinc-900 mb-2">
                    Global Career Atlas
                  </h3>
                  <p className="text-sm text-zinc-700 leading-relaxed">
                    Click to unfold the interactive map covering 2014–2017 (Cognizant · American Express), 2017–2024 (Aureus → Happiest Minds), and 2024–Present (Anvesa) across India, the US, Europe, and Australia.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold text-zinc-900 bg-[#FDE047] border-2 border-zinc-900 px-3.5 py-2 w-fit shadow-[2px_2px_0px_0px_#18181b]">
                  <span>Unfold Interactive Map</span>
                  <span>→</span>
                </div>
              </div>

              {/* Right Fold Preview */}
              <div className="relative min-h-[300px] overflow-hidden bg-[#2AA198] flex items-center justify-center p-6">
                {!mapImgError && (
                  <img
                    src={ASHOK_IMAGES.treasureMap}
                    alt="World cartography map preview"
                    referrerPolicy="no-referrer"
                    onError={() => setMapImgError(true)}
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                <div className="relative z-10 flex flex-col items-center gap-2 bg-[#FFFDF7]/95 border-2 border-zinc-900 p-4 shadow-[4px_4px_0px_0px_#18181b]">
                  <span className="w-9 h-9 rounded-full bg-[#67E8F9] border-2 border-zinc-900 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-zinc-900" />
                  </span>
                  <span className="bg-[#FDE047] border border-zinc-900 px-2.5 py-0.5 text-xs font-mono font-bold text-zinc-900">
                    2014 · 2017 · 2024
                  </span>
                  <span className="text-xs font-bold text-zinc-800">
                    India · USA · Australia · Europe
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          /* Unfolded Split View (Frames 00:07 - 00:09): Left Journey Timeline + Right Interactive Cartography Map */
          <motion.div
            key="unfolded-map"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.3 }}
            className={`border-2 border-zinc-900 shadow-[8px_8px_0px_0px_#18181b] overflow-hidden ${
              isFullscreen
                ? 'fixed inset-4 z-50 bg-[#FFFDF7] flex flex-col'
                : darkMode
                ? 'bg-[#1F212A]'
                : 'bg-white'
            }`}
          >
            {isFullscreen && (
              <div className="bg-[#FDE047] text-zinc-900 border-b-2 border-zinc-900 px-6 py-3.5 flex items-center justify-between">
                <div className="font-display font-extrabold text-lg">
                  Ashok Kumar Kunchala — Global Career Atlas (2014 – Present)
                </div>
                <button
                  type="button"
                  onClick={() => setIsFullscreen(false)}
                  className="px-4 py-1.5 bg-white border-2 border-zinc-900 font-bold text-xs shadow-[2px_2px_0px_0px_#18181b] cursor-pointer"
                >
                  Exit Full View
                </button>
              </div>
            )}

            <div
              className={`grid grid-cols-1 ${
                isFullscreen
                  ? 'lg:grid-cols-12 flex-1 overflow-hidden'
                  : 'lg:grid-cols-12'
              }`}
            >
              {/* LEFT COLUMN: Journey Timeline with Clickable Location Buttons */}
              <div
                className={`lg:col-span-5 border-b-2 lg:border-b-0 lg:border-r-2 border-zinc-900 p-6 sm:p-7 overflow-y-auto ${
                  isFullscreen ? 'max-h-full' : 'max-h-[740px]'
                } ${
                  darkMode
                    ? 'bg-[#1F212A] text-zinc-100'
                    : 'bg-[#FFFDF7] text-zinc-900'
                }`}
              >
                <div className="flex items-center justify-between pb-3.5 mb-6 border-b-2 border-zinc-900">
                  <h3 className="text-lg sm:text-xl font-display font-extrabold tracking-tight">
                    Journey Timeline
                  </h3>
                  <span className="text-xs font-mono tabular-nums opacity-75">
                    2014 – Present
                  </span>
                </div>

                <div className="relative pl-6 space-y-6 before:content-[''] before:absolute before:left-[9px] before:top-2 before:bottom-2 before:w-0 before:border-l-2 before:border-dashed before:border-zinc-500">
                  {milestones.map((item) => {
                    const isSelected = item.id === activeMilestone.id;
                    const matchesSkill =
                      activeSkillFilter &&
                      item.stack.some((s) =>
                        s
                          .toLowerCase()
                          .includes(activeSkillFilter.toLowerCase())
                      );

                    return (
                      <div key={item.id} className="relative">
                        {/* Timeline Node Circle */}
                        <span
                          className={`absolute -left-[23px] top-4 w-4 h-4 rounded-full border-2 border-zinc-900 transition-transform duration-200 ${
                            isSelected
                              ? 'bg-[#F472B6] scale-125'
                              : 'bg-[#FDE047]'
                          }`}
                        />

                        <div
                          onClick={() => handleSelectMilestone(item)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              handleSelectMilestone(item);
                            }
                          }}
                          className={`w-full text-left p-5 border-2 border-zinc-900 transition-all duration-150 cursor-pointer ${
                            isSelected
                              ? darkMode
                                ? 'bg-zinc-800 shadow-[4px_4px_0px_0px_#FDE047] -translate-y-0.5'
                                : 'bg-[#FEF9C3] shadow-[4px_4px_0px_0px_#18181b] -translate-y-0.5'
                              : darkMode
                              ? 'bg-zinc-900/80 hover:bg-zinc-800/70'
                              : 'bg-white hover:bg-amber-50/50'
                          }`}
                        >
                          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
                            <h4 className="font-display font-extrabold text-base leading-snug">
                              {item.role}{' '}
                              <span className="text-teal-600 dark:text-teal-400">
                                @ {item.company}
                              </span>
                            </h4>
                          </div>

                          {/* Period & Subtitle */}
                          <div
                            className={`text-xs font-mono font-bold tabular-nums mb-3 ${
                              darkMode ? 'text-[#FDE047]' : 'text-zinc-700'
                            }`}
                          >
                            <span>{item.period}</span>
                            <span aria-hidden="true"> · </span>
                            <span>{item.subtitle}</span>
                          </div>

                          <p
                            className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                              darkMode ? 'text-zinc-300' : 'text-zinc-700'
                            }`}
                          >
                            {item.description}
                          </p>

                          {/* Interactive Clickable Location Buttons for this Role */}
                          <div className="pt-2.5 border-t border-dashed border-zinc-400">
                            <div className="text-[11px] font-mono font-bold mb-2 opacity-80">
                              Click a location to inspect on map:
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {item.locations.map((loc) => {
                                const isLocActive =
                                  isSelected &&
                                  activeLocation.id === loc.id;
                                return (
                                  <button
                                    key={loc.id}
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleSelectLocation(item, loc);
                                    }}
                                    className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold border-2 border-zinc-900 shadow-[2px_2px_0px_0px_#18181b] transition-transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap shrink-0 ${
                                      isLocActive
                                        ? 'bg-[#67E8F9] text-zinc-900'
                                        : 'bg-white text-zinc-900 hover:bg-[#FDE047]'
                                    }`}
                                  >
                                    <MapPin className="w-3 h-3 text-rose-600 shrink-0" />
                                    <span>{loc.shortLabel}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          {matchesSkill && (
                            <div className="mt-2.5 pt-2 border-t border-dashed border-zinc-400 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                              Matches active filter: {activeSkillFilter}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* RIGHT COLUMN: Clean, Spacious Interactive Cartography Map */}
              <div className="lg:col-span-7 flex flex-col justify-between bg-[#1D9A9F] min-h-[580px] sm:min-h-[680px] relative overflow-hidden select-none">
                {/* Top Control Bar: Era Selector Pills + Zoom Controls */}
                <div className="relative z-20 p-4 flex flex-wrap items-start justify-between gap-3 pointer-events-none">
                  {/* Left: Zoom Controls (Exact match to Frame 00:07) */}
                  <div className="flex flex-col border-2 border-zinc-900 bg-white text-zinc-900 shadow-[3px_3px_0px_0px_#18181b] pointer-events-auto">
                    <button
                      type="button"
                      onClick={handleZoomIn}
                      title="Zoom in map"
                      aria-label="Zoom in map"
                      className="p-2.5 hover:bg-[#FDE047] border-b-2 border-zinc-900 transition-colors cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleZoomOut}
                      title="Zoom out map"
                      aria-label="Zoom out map"
                      className="p-2.5 hover:bg-[#FDE047] border-b-2 border-zinc-900 transition-colors cursor-pointer"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleZoomReset}
                      title="Reset map view"
                      aria-label="Reset map view"
                      className="p-2.5 hover:bg-[#FDE047] transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Right: Quick Era & Location Switcher Bar */}
                  <div className="pointer-events-auto flex flex-wrap items-center gap-2">
                    {eraBadges.map((eb) => {
                      const m = milestones.find(
                        (item) => item.id === eb.milestoneId
                      );
                      const isCurrentEra =
                        activeMilestone.id === eb.milestoneId;
                      return (
                        <button
                          key={eb.milestoneId}
                          type="button"
                          onClick={() => m && handleSelectMilestone(m)}
                          className={`px-3 py-1.5 text-xs font-mono font-bold border-2 border-zinc-900 shadow-[2px_2px_0px_0px_#18181b] cursor-pointer transition-transform hover:-translate-y-0.5 whitespace-nowrap shrink-0 ${
                            isCurrentEra
                              ? 'bg-[#FDE047] text-zinc-900'
                              : 'bg-white text-zinc-900 hover:bg-amber-100'
                          }`}
                        >
                          {eb.yearTag}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Interactive Map Canvas */}
                <div
                  className="absolute inset-0 transition-transform duration-300 ease-out"
                  style={{
                    transform: `scale(${zoom})`,
                    transformOrigin: `${panOrigin.x}% ${panOrigin.y}%`,
                  }}
                >
                  {!mapImgError ? (
                    <img
                      src={ASHOK_IMAGES.treasureMap}
                      alt="Clean vintage watercolor world cartography map"
                      referrerPolicy="no-referrer"
                      onError={() => setMapImgError(true)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#239BA7] via-[#E5C99B] to-[#1D8A94]" />
                  )}

                  {/* SVG Dotted Flight / Deployment Routes from Hyderabad HQ to Active Era's Locations */}
                  <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="absolute inset-0 w-full h-full pointer-events-none"
                  >
                    {activeMilestone.locations.map((loc) => {
                      if (loc.id === 'hyderabad') return null;
                      const isTargetSelected = activeLocation.id === loc.id;
                      return (
                        <line
                          key={loc.id}
                          x1={hqCoords.x}
                          y1={hqCoords.y}
                          x2={loc.coordinates.x}
                          y2={loc.coordinates.y}
                          stroke={isTargetSelected ? '#E11D48' : '#18181b'}
                          strokeWidth={isTargetSelected ? '0.75' : '0.45'}
                          strokeDasharray="1.5 1.1"
                        />
                      );
                    })}
                  </svg>

                  {/* 3 Distinct Era Markers (2014–2017, 2017–2024, 2024–PRESENT) Always Visible */}
                  {eraBadges.map((eb) => {
                    const m = milestones.find(
                      (item) => item.id === eb.milestoneId
                    );
                    const isCurrentEra = activeMilestone.id === eb.milestoneId;
                    return (
                      <button
                        key={eb.milestoneId}
                        type="button"
                        onClick={() => m && handleSelectMilestone(m)}
                        style={{
                          left: `${eb.x}%`,
                          top: `${eb.y}%`,
                        }}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer transition-transform duration-200 ${
                          isCurrentEra
                            ? 'scale-110 z-20'
                            : 'opacity-90 hover:scale-105'
                        }`}
                      >
                        <div
                          className={`px-2.5 py-1 border-2 border-zinc-900 shadow-[3px_3px_0px_0px_#18181b] text-left whitespace-nowrap ${
                            isCurrentEra
                              ? 'bg-[#FDE047] text-zinc-900'
                              : 'bg-white/95 text-zinc-900'
                          }`}
                        >
                          <div className="text-[11px] font-mono font-extrabold leading-none">
                            {eb.yearTag}
                          </div>
                          <div className="text-[10px] font-bold opacity-85 mt-0.5">
                            {eb.companyShort}
                          </div>
                        </div>
                      </button>
                    );
                  })}

                  {/* Interactive Location Markers for the Active Milestone (Hyderabad, USA, Australia, Europe) */}
                  {activeMilestone.locations.map((loc) => {
                    const isSelectedLoc = activeLocation.id === loc.id;
                    return (
                      <button
                        key={loc.id}
                        type="button"
                        onClick={() =>
                          handleSelectLocation(activeMilestone, loc)
                        }
                        style={{
                          left: `${loc.coordinates.x}%`,
                          top: `${loc.coordinates.y}%`,
                        }}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform duration-200 ${
                          isSelectedLoc
                            ? 'scale-115 z-30'
                            : 'z-20 hover:scale-110'
                        }`}
                      >
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-9 h-9 rounded-full border-2 border-zinc-900 shadow-[3px_3px_0px_0px_#18181b] flex items-center justify-center ${
                              isSelectedLoc
                                ? 'bg-[#F472B6] text-zinc-900'
                                : 'bg-[#67E8F9] text-zinc-900'
                            }`}
                          >
                            <MapPin className="w-4 h-4" />
                          </div>
                          <span
                            className={`mt-1 px-2.5 py-0.5 text-[11px] font-mono font-extrabold border-2 border-zinc-900 shadow-[2px_2px_0px_0px_#18181b] whitespace-nowrap ${
                              isSelectedLoc
                                ? 'bg-[#FDE047] text-zinc-900'
                                : 'bg-[#FFFDF7] text-zinc-900'
                            }`}
                          >
                            {loc.shortLabel}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Bottom Overlay: Pirate Captain As-Is (Left) + Selected Location Detail Spotlight (Right) */}
                <div className="relative z-20 p-4 sm:p-5 mt-auto flex flex-col sm:flex-row items-start sm:items-end gap-4 pointer-events-none">
                  {/* Pirate Captain Image As-Is (Bottom-Left matching 00:07 - 00:09) */}
                  <div className="pointer-events-auto shrink-0 w-28 h-28 sm:w-36 sm:h-36 border-3 border-zinc-900 shadow-[5px_5px_0px_0px_#18181b] overflow-hidden bg-[#5BBDC8]">
                    <img
                      src={ASHOK_IMAGES.pirateCaptain}
                      alt="Pirate Captain guide"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Functional Location Detail Spotlight Card */}
                  <motion.div
                    key={`${activeMilestone.id}-${activeLocation.id}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="pointer-events-auto flex-1 bg-[#FFFDF7]/95 text-zinc-900 border-2 border-zinc-900 shadow-[5px_5px_0px_0px_#18181b] p-4 sm:p-5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-extrabold bg-[#FDE047] border border-zinc-900 px-2.5 py-0.5">
                        <Navigation className="w-3 h-3" />
                        {activeLocation.name}
                      </span>
                      <span className="text-xs font-mono font-bold text-teal-800">
                        {activeLocation.eraLabel}
                      </span>
                    </div>

                    <h4 className="font-display font-extrabold text-sm sm:text-base text-zinc-900 mb-1">
                      {activeLocation.headline}
                    </h4>

                    <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed mb-3">
                      {activeLocation.details}
                    </p>

                    {/* Quick Location Switcher Pills inside the Map Card */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-dashed border-zinc-300">
                      <span className="text-[11px] font-mono font-bold text-zinc-500 mr-1">
                        Switch location:
                      </span>
                      {activeMilestone.locations.map((loc) => (
                        <button
                          key={loc.id}
                          type="button"
                          onClick={() =>
                            handleSelectLocation(activeMilestone, loc)
                          }
                          className={`px-2 py-0.5 text-[11px] font-bold border border-zinc-900 cursor-pointer whitespace-nowrap shrink-0 ${
                            activeLocation.id === loc.id
                              ? 'bg-[#67E8F9] text-zinc-900'
                              : 'bg-white text-zinc-700 hover:bg-amber-50'
                          }`}
                        >
                          {loc.shortLabel}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
