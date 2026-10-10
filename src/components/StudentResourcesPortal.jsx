import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  BookOpen, Calculator, Atom, FlaskConical, Dna,
  Search, X, ExternalLink, FileText, ArrowLeft,
  Sparkles, Calendar, Filter, ArrowUpRight,
  Sun, Moon, RefreshCw, CheckCircle2, Phone, Trophy, ArrowUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  RESOURCE_CLASSES,
  SUBJECT_METADATA,
  fetchClassResources,
  formatDate,
  parseDate,
  isRecent,
  formatUrl
} from '../services/resourcesService';

export default function StudentResourcesPortal({
  initialClass = 'Class8',
  onBack,
  theme,
  onToggleTheme,
  onOpenDiagnostic
}) {
  const [selectedClass, setSelectedClass] = useState(initialClass);
  const [activeSubject, setActiveSubject] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [resourceTypeFilter, setResourceTypeFilter] = useState('all'); // 'all' | 'notes' | 'assignments'
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Sticky Floating Bar State
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [isStickySearchOpen, setIsStickySearchOpen] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  // Local persistence of completed assignments per class
  const [completedAssignments, setCompletedAssignments] = useState(() => {
    try {
      const saved = localStorage.getItem(`srsma_completed_${initialClass}`);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const canvasRef = useRef(null);
  const searchInputRef = useRef(null);

  // Scroll listener to toggle floating sticky pill bar
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync with prop when it changes
  useEffect(() => {
    if (initialClass && RESOURCE_CLASSES[initialClass]) {
      setSelectedClass(initialClass);
      try {
        const saved = localStorage.getItem(`srsma_completed_${initialClass}`);
        setCompletedAssignments(saved ? JSON.parse(saved) : {});
      } catch {
        setCompletedAssignments({});
      }
    }
  }, [initialClass]);

  // Load resources for the active class
  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    fetchClassResources(selectedClass)
      .then((data) => {
        if (isMounted) {
          setResources(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          console.error('Failed to load class resources:', err);
          setError('Failed to load resources from Google Sheets. Please try refreshing.');
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [selectedClass, reloadKey]);

  const toggleAssignmentCompleted = (itemKey) => {
    setCompletedAssignments((prev) => {
      const next = { ...prev, [itemKey]: !prev[itemKey] };
      try {
        localStorage.setItem(`srsma_completed_${selectedClass}`, JSON.stringify(next));
      } catch (e) {
        console.error('Failed to save assignment progress:', e);
      }
      return next;
    });
  };

  const currentClassConfig = RESOURCE_CLASSES[selectedClass] || RESOURCE_CLASSES.Class8;

  // Calculate detailed stats per subject (notes, assignments, completed)
  const subjectStats = useMemo(() => {
    const stats = {
      Maths: { total: 0, notes: 0, assignments: 0, completed: 0 },
      Physics: { total: 0, notes: 0, assignments: 0, completed: 0 },
      Chemistry: { total: 0, notes: 0, assignments: 0, completed: 0 },
      Biology: { total: 0, notes: 0, assignments: 0, completed: 0 },
      Total: { total: 0, notes: 0, assignments: 0, completed: 0 },
    };

    resources.forEach((item) => {
      const subj = item.subject || 'Maths';
      const targetSubj = stats[subj] ? subj : 'Maths';

      if (item.topic || item.name) {
        stats[targetSubj].notes++;
        stats[targetSubj].total++;
        stats.Total.notes++;
        stats.Total.total++;
      }
      if (item.assignment) {
        const itemKey = `${item.date || ''}_${subj}_${item.assignment}`;
        stats[targetSubj].assignments++;
        stats[targetSubj].total++;
        stats.Total.assignments++;
        stats.Total.total++;
        if (completedAssignments[itemKey]) {
          stats[targetSubj].completed++;
          stats.Total.completed++;
        }
      }
    });

    return stats;
  }, [resources, completedAssignments]);

  // Backwards-compatible subject counts
  const subjectCounts = useMemo(() => ({
    Maths: subjectStats.Maths.total,
    Physics: subjectStats.Physics.total,
    Chemistry: subjectStats.Chemistry.total,
    Biology: subjectStats.Biology.total,
    Total: subjectStats.Total.total,
  }), [subjectStats]);

  // Filter resources
  const filteredResources = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return resources.filter((item) => {
      // Subject filter
      if (activeSubject !== 'All' && item.subject !== activeSubject) {
        return false;
      }

      // Type filter
      if (resourceTypeFilter === 'notes' && !item.topic && !item.name) {
        return false;
      }
      if (resourceTypeFilter === 'assignments' && !item.assignment) {
        return false;
      }

      // Search query filter
      if (q) {
        const topicMatch = (item.topic || item.name || '').toLowerCase().includes(q);
        const assignMatch = (item.assignment || '').toLowerCase().includes(q);
        const subjMatch = (item.subject || '').toLowerCase().includes(q);
        const dateMatch = (item.date || '').toLowerCase().includes(q);
        if (!topicMatch && !assignMatch && !subjMatch && !dateMatch) {
          return false;
        }
      }

      return true;
    });
  }, [resources, activeSubject, resourceTypeFilter, searchQuery]);

  // Group by date
  const groupedByDate = useMemo(() => {
    const groups = new Map();

    filteredResources.forEach((item) => {
      const dateKey = item.date || 'no-date';
      if (!groups.has(dateKey)) {
        groups.set(dateKey, {
          rawDate: item.date,
          displayDate: formatDate(item.date),
          items: [],
        });
      }
      groups.get(dateKey).items.push(item);
    });

    return Array.from(groups.values()).sort((a, b) => {
      return parseDate(b.rawDate).getTime() - parseDate(a.rawDate).getTime();
    });
  }, [filteredResources]);

  // Interactive Particle Canvas in Hero
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const symbols = {
      Maths: ['+', '−', '×', '÷', '∑', '√', 'x', 'y', 'π', 'Δ', '∫', 'sin', 'cos', 'θ', '∞'],
      Physics: ['λ', 'Ω', 'F', 'a', 'v', 'E', 'mc²', 'h', 'G', 'c', 'J', 'W', 'eV', 'Hz'],
      Chemistry: ['H₂O', 'CO₂', 'NaCl', 'C', 'O', 'N', 'H', 'Fe', 'Au', 'mol', 'pH', 'Cu'],
      Biology: ['DNA', 'cell', 'gene', 'RNA', 'leaf', 'organ', 'heart', 'brain', 'bio'],
      All: ['∑', 'π', 'Δ', 'E=mc²', 'H₂O', 'DNA', '√x', 'Ω', 'λ', '∫dx', 'pH', 'CO₂', '∞']
    };

    const colors = {
      Maths: '#3b82f6',
      Physics: '#f97316',
      Chemistry: '#10b981',
      Biology: '#8b5cf6',
      All: '#eab308'
    };

    const activeSymbols = symbols[activeSubject] || symbols.All;
    const activeColor = colors[activeSubject] || '#eab308';

    const particles = Array.from({ length: 28 }, () => ({
      text: activeSymbols[Math.floor(Math.random() * activeSymbols.length)],
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.floor(Math.random() * 10) + 12,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: -(Math.random() * 0.4 + 0.2),
      opacity: Math.random() * 0.4 + 0.15,
      color: activeColor,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.y < -20) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 10;
        if (p.x > width + 20) p.x = -10;

        ctx.save();
        ctx.font = `600 ${p.size}px 'Montserrat', sans-serif`;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fillText(p.text, p.x, p.y);
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [activeSubject, selectedClass]);

  const subjectIcons = {
    Maths: Calculator,
    Physics: Atom,
    Chemistry: FlaskConical,
    Biology: Dna,
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-navy-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">

      {/* Top Portal Navigation Header (Glassmorphic) */}
      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-white/80 dark:bg-navy-950/80 border-b border-slate-200/70 dark:border-white/10 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-4">

          {/* Left: Back Button & SRSMA Brand */}
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200/80 dark:border-white/15 bg-white/70 dark:bg-navy-900/70 backdrop-blur-md hover:bg-slate-100 dark:hover:bg-navy-800 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all shadow-xs hover:shadow-sm active:scale-95 group"
              title="Return to SRSMA Home"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Home</span>
            </button>

            <div className="h-6 w-px bg-slate-300/80 dark:bg-slate-700/80 hidden sm:block"></div>

            <div className="flex items-center gap-2">
              <img
                src="/assets/images/logowhite.jpeg"
                alt="SRSMA"
                className="w-8 h-8 rounded-lg object-cover border border-gold-500/40 bg-white shadow-xs"
              />
              <span className="font-display font-extrabold text-sm sm:text-base text-slate-900 dark:text-white hidden md:inline">
                SRSMA Study Portals
              </span>
            </div>
          </div>

          {/* Right: Theme Toggle & Diagnostic Link (Hidden for Class 8 and Class 9) */}
          <div className="flex items-center gap-2">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-xl border border-slate-200/80 dark:border-white/15 bg-white/70 dark:bg-navy-900/70 backdrop-blur-md text-slate-700 dark:text-gold-400 hover:bg-slate-100 dark:hover:bg-navy-800 transition-all shadow-xs active:scale-95"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {onOpenDiagnostic && selectedClass !== 'Class8' && selectedClass !== 'Class9' && (
              <button
                onClick={onOpenDiagnostic}
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold text-xs shadow-sm hover:shadow-md transition-all active:scale-95"
              >
                <Trophy className="w-3.5 h-3.5" />
                <span>Diagnostic Test</span>
              </button>
            )}
          </div>

        </div>
      </header>

      {/* Hero Section with Interactive Floating Math/Science Canvas */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-100/90 via-white to-slate-50 dark:from-navy-900/90 dark:via-navy-950 dark:to-navy-950 border-b border-slate-200/70 dark:border-white/10 py-10 md:py-14">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none opacity-40 dark:opacity-30"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

            <div className="space-y-3 max-w-2xl">
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {currentClassConfig.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                {currentClassConfig.desc} Verified syllabus-aligned resources direct from our IITian & NITian mentors.
              </p>
            </div>

            {/* Quick Stats Pill (Glassmorphic) */}
            <div className="backdrop-blur-2xl bg-white/70 dark:bg-navy-900/70 p-4 sm:p-5 rounded-3xl border border-white/80 dark:border-white/10 shadow-xl shadow-navy-950/5 flex items-center gap-4 transition-all hover:shadow-2xl">
              <div className="w-12 h-12 rounded-2xl bg-gold-500/20 text-gold-600 dark:text-gold-400 flex items-center justify-center font-extrabold text-xl shadow-inner">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {loading ? '...' : subjectCounts.Total}
                </div>
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Total Resources
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-8 w-full">

        {/* 1. Subject Dashboard Cards with Glassmorphism & Hover Glow Sheen */}
        <div>
          <div className="mb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <Filter className="w-4 h-4" />
              <span>Filter by Subject</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {['Maths', 'Physics', 'Chemistry', 'Biology'].map((subj) => {
              const meta = SUBJECT_METADATA[subj];
              const Icon = subjectIcons[subj] || BookOpen;
              const count = subjectCounts[subj] || 0;
              const subjData = subjectStats[subj];
              const isActive = activeSubject === subj;

              const totalAssignments = subjData?.assignments || 0;
              const completedAssignmentsCount = subjData?.completed || 0;

              // Progress ring logic: If assignments exist, track completion %; otherwise track resource volume
              const circumference = 138.2;
              let percent = 0;
              let isCompletedAll = false;

              if (totalAssignments > 0) {
                percent = completedAssignmentsCount / totalAssignments;
                isCompletedAll = completedAssignmentsCount === totalAssignments && totalAssignments > 0;
              } else {
                percent = Math.min(count / 20, 1);
              }
              const strokeOffset = circumference * (1 - percent);

              return (
                <div
                  key={subj}
                  onClick={() => setActiveSubject(isActive ? 'All' : subj)}
                  className={`p-4 sm:p-5 rounded-3xl border cursor-pointer select-none relative overflow-hidden transition-all duration-300 group ${isActive
                      ? meta.activeCardClass + ' shadow-xl border-transparent scale-[1.02]'
                      : 'backdrop-blur-xl bg-white/70 dark:bg-navy-900/60 border-slate-200/80 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:shadow-xl hover:-translate-y-1'
                    }`}
                >
                  {/* Subtle radial sheen glow on hover */}
                  <div
                    className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(300px circle at top left, ${meta.color}15, transparent 70%)`
                    }}
                  />

                  <div className="flex items-center justify-between gap-3 relative z-10">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5">
                        <Icon className="w-4 h-4 transition-transform group-hover:scale-110" style={{ color: meta.color }} />
                        <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
                          {subj}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {loading
                          ? 'Loading...'
                          : totalAssignments > 0
                            ? `${completedAssignmentsCount}/${totalAssignments} Homework Done`
                            : `${count} Resources`}
                      </p>
                    </div>

                    {/* Progress Ring with Icon Overlay & Glow */}
                    <div
                      className="relative w-12 h-12 flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                      style={{ filter: `drop-shadow(0 0 6px ${isCompletedAll ? '#22c55e' : meta.color}35)` }}
                      title={totalAssignments > 0 ? `Assignment Completion: ${completedAssignmentsCount} of ${totalAssignments}` : `${count} Resources`}
                    >
                      <svg className="w-12 h-12 transform -rotate-90">
                        <circle
                          cx="24"
                          cy="24"
                          r="20"
                          stroke="currentColor"
                          strokeWidth="3.5"
                          className="text-slate-200/80 dark:text-slate-800 fill-transparent"
                        />
                        <circle
                          cx="24"
                          cy="24"
                          r="20"
                          stroke={isCompletedAll ? '#22c55e' : meta.color}
                          strokeWidth="3.5"
                          strokeDasharray={circumference}
                          strokeDashoffset={loading ? circumference : strokeOffset}
                          strokeLinecap="round"
                          className="fill-transparent transition-all duration-700 ease-out"
                        />
                      </svg>
                      {isCompletedAll ? (
                        <CheckCircle2 className="w-4 h-4 text-trust-500 absolute" />
                      ) : (
                        <span className="absolute text-[10px] font-extrabold text-slate-700 dark:text-slate-300">
                          {totalAssignments > 0 ? `${Math.round(percent * 100)}%` : count}
                        </span>
                      )}
                    </div>
                  </div>

                  {isActive && (
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1.5 rounded-full"
                      style={{ backgroundColor: meta.color }}
                    ></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Search & Filter Bar (Glassmorphic) */}
        <div className="backdrop-blur-2xl bg-white/80 dark:bg-navy-900/80 p-3.5 sm:p-4 rounded-3xl border border-white/80 dark:border-white/10 shadow-lg shadow-navy-950/5 flex flex-col md:flex-row items-center justify-between gap-3 transition-all">

          {/* Search Input with Focus Glow */}
          <div className="relative w-full md:w-80 group">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-gold-500 transition-colors" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search topics in ${activeSubject === 'All' ? selectedClass : activeSubject}...`}
              className="w-full pl-9 pr-9 py-2 rounded-2xl bg-slate-100/80 dark:bg-navy-950/80 border border-slate-200/70 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Resource Type Filter Pills */}
          <div className="flex items-center gap-1.5 w-full md:w-auto overflow-x-auto scrollbar-none">
            {[
              { id: 'all', label: 'All Resources' },
              { id: 'notes', label: 'Notes Only' },
              { id: 'assignments', label: 'Assignments Only' },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setResourceTypeFilter(filter.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all active:scale-95 ${resourceTypeFilter === filter.id
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-navy-950 shadow-md font-bold'
                    : 'bg-slate-100/90 dark:bg-navy-950/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60'
                  }`}
              >
                {filter.label}
              </button>
            ))}

            <div className="h-4 w-px bg-slate-300 dark:bg-slate-700 hidden sm:block mx-1"></div>

            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 whitespace-nowrap px-1">
              Showing {filteredResources.length} items
            </span>
          </div>

        </div>

        {/* 3. Resources Timeline View with Glassmorphic Cards & Micro-Interactions */}
        <div className="space-y-6">

          {/* Loading State Skeleton */}
          {loading && (
            <div className="space-y-6 animate-pulse">
              {[1, 2, 3].map((n) => (
                <div key={n} className="flex gap-4">
                  <div className="w-24 h-6 bg-slate-200 dark:bg-navy-800 rounded-lg"></div>
                  <div className="flex-1 p-5 rounded-3xl bg-slate-200/70 dark:bg-navy-800/60 space-y-3">
                    <div className="w-1/3 h-4 bg-slate-300 dark:bg-navy-700 rounded"></div>
                    <div className="w-2/3 h-5 bg-slate-300 dark:bg-navy-700 rounded"></div>
                    <div className="w-28 h-8 bg-slate-300 dark:bg-navy-700 rounded-xl"></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Error State */}
          {!loading && error && (
            <div className="p-8 text-center bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 rounded-3xl space-y-3">
              <p className="text-red-600 dark:text-red-400 text-sm font-semibold">{error}</p>
              <button
                onClick={() => setReloadKey((k) => k + 1)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs active:scale-95 transition-all shadow-sm"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Retry Connection</span>
              </button>
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && groupedByDate.length === 0 && (
            <div className="p-12 text-center backdrop-blur-xl bg-white/70 dark:bg-navy-900/70 rounded-3xl border border-slate-200 dark:border-white/10 space-y-4 shadow-sm">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gold-500/10 text-gold-500 flex items-center justify-center">
                <Search className="w-7 h-7" />
              </div>
              <h3 className="font-display font-extrabold text-lg text-slate-900 dark:text-white">
                No matching resources found
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                {searchQuery
                  ? `No notes or assignments match "${searchQuery}" in ${activeSubject === 'All' ? selectedClass : activeSubject}.`
                  : `Resources for ${selectedClass} ${activeSubject !== 'All' ? `(${activeSubject})` : ''} are currently being synchronized.`}
              </p>
              {(searchQuery || activeSubject !== 'All' || resourceTypeFilter !== 'all') && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveSubject('All');
                    setResourceTypeFilter('all');
                  }}
                  className="px-4 py-2 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs shadow-sm hover:shadow-md active:scale-95 transition-all"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          )}

          {/* Timeline Nodes */}
          {!loading && !error && groupedByDate.length > 0 && (
            <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200/80 dark:border-slate-800/80 space-y-8">
              {groupedByDate.map((group, groupIdx) => (
                <motion.div
                  key={group.rawDate + groupIdx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: Math.min(groupIdx * 0.04, 0.4) }}
                  className="relative group/timeline"
                >

                  {/* Pulsing Glowing Timeline Node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-gold-500/25 animate-ping absolute" />
                    <div className="w-4 h-4 rounded-full bg-gold-400/40 blur-xs absolute" />
                    <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 border-2 border-white dark:border-navy-950 shadow-md relative z-10 transition-transform group-hover/timeline:scale-125" />
                  </div>

                  {/* Date Header with Glassmorphic Pill */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl backdrop-blur-md bg-white/80 dark:bg-navy-800/80 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-300 font-bold text-xs shadow-xs">
                      <Calendar className="w-3.5 h-3.5 text-gold-500" />
                      <span>{group.displayDate}</span>
                    </div>
                  </div>

                  {/* Resource Cards for this Date */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {group.items.map((item, itemIdx) => {
                      const subjectMeta = SUBJECT_METADATA[item.subject] || SUBJECT_METADATA.Maths;
                      const hasNotes = item.topic || item.name;
                      const hasAssignment = item.assignment;
                      const notesUrl = formatUrl(item['topic link'] || item.link);
                      const assignmentUrl = formatUrl(item['assignment link'] || item.link);
                      const recent = isRecent(item.date);
                      const itemKey = `${item.date || ''}_${item.subject || 'Maths'}_${item.assignment}`;
                      const isCompleted = !!completedAssignments[itemKey];

                      return (
                        <React.Fragment key={itemIdx}>

                          {/* Class Notes Card (Ultra-Modern Glassmorphic with Gradient Border) */}
                          {hasNotes && (resourceTypeFilter === 'all' || resourceTypeFilter === 'notes') && (
                            <div className="group/card relative rounded-3xl p-[1px] bg-gradient-to-br from-slate-200/90 via-slate-100/50 to-transparent dark:from-white/15 dark:via-white/5 dark:to-transparent hover:from-gold-500/40 hover:via-gold-500/20 hover:to-transparent transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1">
                              <div className="rounded-[23px] backdrop-blur-2xl bg-white/85 dark:bg-navy-900/80 p-5 flex flex-col justify-between gap-4 h-full relative overflow-hidden">

                                {/* Soft hover glow background */}
                                <div
                                  className="absolute -inset-px rounded-[23px] opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none"
                                  style={{
                                    background: `radial-gradient(350px circle at top left, ${subjectMeta.color}15, transparent 70%)`
                                  }}
                                />

                                <div className="space-y-2 relative z-10">
                                  <div className="flex items-center justify-between gap-2">
                                    <span className={`inline-flex items-center gap-1 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full border ${subjectMeta.bgClass} shadow-xs`}>
                                      {item.subject} Notes
                                    </span>
                                    {recent && (
                                      <span className="inline-flex items-center gap-1 text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-trust-500/15 text-trust-600 dark:text-trust-400 border border-trust-500/30 animate-pulse shadow-xs">
                                        <Sparkles className="w-2.5 h-2.5 text-trust-500" />
                                        NEW
                                      </span>
                                    )}
                                  </div>

                                  <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm sm:text-base leading-snug group-hover/card:text-gold-600 dark:group-hover/card:text-gold-400 transition-colors">
                                    {item.topic || item.name}
                                  </h4>
                                </div>

                                <div className="pt-2 border-t border-slate-100 dark:border-white/10 flex items-center justify-between relative z-10">
                                  {notesUrl ? (
                                    <a
                                      href={notesUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs shadow-sm hover:shadow-md transition-all active:scale-95 group/btn"
                                    >
                                      <FileText className="w-3.5 h-3.5" />
                                      <span>View Notes</span>
                                      <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                    </a>
                                  ) : (
                                    <span className="text-xs text-slate-400 italic">Notes link pending</span>
                                  )}

                                  <span className="text-[11px] text-slate-400 font-medium">
                                    Class Handout
                                  </span>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Assignment Card (Ultra-Modern Glassmorphic with Micro-Interaction Toggle) */}
                          {hasAssignment && (resourceTypeFilter === 'all' || resourceTypeFilter === 'assignments') && (
                            <div className="group/card relative rounded-3xl p-[1px] bg-gradient-to-br from-slate-200/90 via-slate-100/50 to-transparent dark:from-white/15 dark:via-white/5 dark:to-transparent hover:from-gold-500/40 hover:via-gold-500/20 hover:to-transparent transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1">
                              <div className="rounded-[23px] backdrop-blur-2xl bg-white/85 dark:bg-navy-900/80 p-5 flex flex-col justify-between gap-4 h-full relative overflow-hidden">

                                {/* Soft hover glow background */}
                                <div
                                  className="absolute -inset-px rounded-[23px] opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none"
                                  style={{
                                    background: `radial-gradient(350px circle at top left, ${subjectMeta.color}15, transparent 70%)`
                                  }}
                                />

                                <div className="space-y-2 relative z-10">
                                  <div className="flex items-center justify-between gap-2">
                                    <span className="inline-flex items-center gap-1 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-gold-500/15 text-gold-700 dark:text-gold-300 border border-gold-500/30 shadow-xs">
                                      {item.subject} Assignment
                                    </span>

                                    <div className="flex items-center gap-2">
                                      {recent && (
                                        <span className="inline-flex items-center gap-1 text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-trust-500/15 text-trust-600 dark:text-trust-400 border border-trust-500/30 animate-pulse shadow-xs">
                                          <Sparkles className="w-2.5 h-2.5 text-trust-500" />
                                          NEW
                                        </span>
                                      )}

                                      {/* Micro-Interaction: Homework Completion Toggle */}
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          toggleAssignmentCompleted(itemKey);
                                        }}
                                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-all active:scale-90 ${isCompleted
                                            ? 'bg-trust-500/15 text-trust-600 dark:text-trust-400 border border-trust-500/30 hover:bg-trust-500/25 shadow-xs'
                                            : 'bg-slate-100 hover:bg-slate-200 dark:bg-navy-800 dark:hover:bg-navy-750 text-slate-500 dark:text-slate-400 border border-slate-200/80 dark:border-white/10 group/mark'
                                          }`}
                                        title={isCompleted ? 'Mark as to-do' : 'Mark as done'}
                                      >
                                        {isCompleted ? (
                                          <>
                                            <CheckCircle2 className="w-3 h-3 text-trust-500" />
                                            <span>Done</span>
                                          </>
                                        ) : (
                                          <>
                                            <span className="w-2.5 h-2.5 rounded-full border border-slate-400 dark:border-slate-500 group-hover/mark:border-gold-500 transition-colors" />
                                            <span>To Do</span>
                                          </>
                                        )}
                                      </button>
                                    </div>
                                  </div>

                                  <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm sm:text-base leading-snug group-hover/card:text-gold-600 dark:group-hover/card:text-gold-400 transition-colors">
                                    {item.assignment}
                                  </h4>
                                </div>

                                <div className="pt-2 border-t border-slate-100 dark:border-white/10 flex items-center justify-between relative z-10">
                                  {assignmentUrl ? (
                                    <a
                                      href={assignmentUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-navy-800 dark:hover:bg-navy-750 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-bold text-xs transition-all shadow-xs hover:shadow-sm active:scale-95 group/btn"
                                    >
                                      <ExternalLink className="w-3.5 h-3.5 text-gold-500" />
                                      <span>View Assignment</span>
                                      <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                    </a>
                                  ) : (
                                    <span className="text-xs text-slate-400 italic">Assignment link pending</span>
                                  )}

                                  <span className="text-[11px] text-slate-400 font-medium">
                                    Homework / DPP
                                  </span>
                                </div>
                              </div>
                            </div>
                          )}

                        </React.Fragment>
                      );
                    })}
                  </div>

                </motion.div>
              ))}
            </div>
          )}

        </div>

      </main>

      {/* 4. Sticky Floating Filter & Quick-Search Pill (Pinned Bottom) */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: 80, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 80, opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-6 inset-x-0 mx-auto z-40 max-w-2xl px-4 pointer-events-none"
          >
            <div className="pointer-events-auto backdrop-blur-2xl bg-white/90 dark:bg-navy-900/90 border border-white/80 dark:border-white/15 shadow-[0_20px_50px_rgba(15,23,42,0.22)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.65)] rounded-full p-1.5 flex items-center justify-between gap-1.5 ring-1 ring-black/5 dark:ring-white/10">

              {/* Quick Subject Tabs with Framer Motion layoutId for sliding active pill */}
              <div className="flex items-center gap-1 overflow-x-auto scrollbar-none px-1">
                {['Maths', 'Physics', 'Chemistry', 'Biology'].map((subj) => {
                  const meta = SUBJECT_METADATA[subj];
                  const isActive = activeSubject === subj;
                  const count = subjectCounts[subj] || 0;

                  return (
                    <button
                      key={subj}
                      onClick={() => setActiveSubject(subj === activeSubject ? 'All' : subj)}
                      className={`relative px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap active:scale-95 z-10 ${isActive
                          ? 'text-white dark:text-navy-950 font-extrabold'
                          : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-navy-800'
                        }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="activeStickySubject"
                          transition={{ type: 'spring', damping: 26, stiffness: 350 }}
                          className="absolute inset-0 bg-slate-900 dark:bg-white rounded-full shadow-md -z-10"
                        />
                      )}
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: meta?.color || '#eab308' }}
                      />
                      <span>{subj}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${isActive
                          ? 'bg-white/20 dark:bg-black/15 text-white dark:text-navy-950'
                          : 'bg-slate-200/70 dark:bg-navy-800 text-slate-500 dark:text-slate-400'
                        }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Quick Search Toggle / Mini Input */}
              <div className="flex items-center gap-1 shrink-0 pl-1 border-l border-slate-200/80 dark:border-white/10">
                <AnimatePresence mode="wait">
                  {isStickySearchOpen ? (
                    <motion.div
                      key="search-input"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 'auto', opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-1.5 bg-slate-100 dark:bg-navy-950 rounded-full px-3 py-1 border border-slate-200 dark:border-white/10"
                    >
                      <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search topic..."
                        autoFocus
                        className="w-28 sm:w-40 bg-transparent text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
                      />
                      {searchQuery && (
                        <button
                          onClick={() => setSearchQuery('')}
                          className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5"
                          title="Clear search"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      )}
                      <button
                        onClick={() => setIsStickySearchOpen(false)}
                        className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 pl-1 border-l border-slate-300 dark:border-slate-700 text-[11px] font-semibold"
                        title="Close search"
                      >
                        ✕
                      </button>
                    </motion.div>
                  ) : (
                    <button
                      key="search-btn"
                      onClick={() => setIsStickySearchOpen(true)}
                      className={`p-2 rounded-full hover:bg-slate-100 dark:hover:bg-navy-800 text-slate-600 dark:text-slate-300 transition-colors active:scale-95 relative ${searchQuery ? 'bg-gold-500/20 text-gold-600 dark:text-gold-400' : ''
                        }`}
                      title={searchQuery ? `Filtered: "${searchQuery}"` : "Quick Search"}
                    >
                      <Search className="w-4 h-4" />
                      {searchQuery && (
                        <span className="w-2 h-2 rounded-full bg-gold-500 absolute top-1 right-1 animate-pulse" />
                      )}
                    </button>
                  )}
                </AnimatePresence>

                {/* Scroll to Top */}
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-navy-800 text-slate-600 dark:text-slate-300 hover:text-gold-500 dark:hover:text-gold-400 transition-all active:scale-90 group/top"
                  title="Scroll to Top"
                >
                  <ArrowUp className="w-4 h-4 group-hover/top:-translate-y-0.5 transition-transform" />
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Support Banner */}
      <footer className="mt-auto border-t border-slate-200/70 dark:border-white/10 backdrop-blur-md bg-white/70 dark:bg-navy-900/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-trust-500" />
            <span>Official SRSMA Student Portal • Direct Drive sync for Sun City campus students.</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+918463911854"
              className="hover:text-gold-500 flex items-center gap-1 font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-gold-500" />
              <span>Academic Helpline: +91 84639 11854</span>
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
