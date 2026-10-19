import React, { useState } from 'react';
import {
  BookOpen, Target, Clock, Users, Award, Download,
  CheckCircle2, ArrowRight, Sparkles, FileText, Compass,
  ExternalLink, Trophy
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PROGRAMS = [
  {
    id: 'jee',
    title: 'IIT-JEE (Main & Advanced)',
    targetAudience: 'Classes 11th, 12th & Long Term Aspirants',
    duration: '2-Year Integrated / 1-Year Intensive',
    batchSize: 'Max 30 Students Per Cohort',
    badge: 'Flagship Engineering Program',
    description: 'Designed by IIT Madras & NIT Warangal faculty to build first-principles conceptual thinking. Covers complete NCERT, JEE Main high-speed accuracy, and multi-concept JEE Advanced problem solving.',
    highlights: [
      'Taught directly by IITians & NITians (Zero junior tutors)',
      'Weekly JEE Main & Advanced pattern computer-based tests',
      'Daily Practice Problem (DPP) sheets with individualized review',
      'Integrated CBSE / Telangana IPE Board syllabus coverage',
      'Personal error-analysis logbook for every student'
    ],
    schedule: '6 Days/Week • Integrated College & Coaching / Evening Batches',
    brochureUrl: '/assets/images/brochure/Class XI Brochure JEE 2027-28 SRSMA .pdf',
    brochureName: 'Download Class XI JEE Brochure (PDF)'
  },
  {
    id: 'neet',
    title: 'NEET (UG Medical Comprehensive)',
    targetAudience: 'Classes 11th, 12th & Long Term Medical Aspirants',
    duration: '2-Year Integrated / 1-Year Repeaters',
    batchSize: 'Max 30 Students Per Cohort',
    badge: 'Premier Medical Program',
    description: 'Mastery over NCERT line-by-line in Biology, coupled with deep numerical confidence in Physics and Chemistry. Guided by medical counselors to maintain steady focus without burnout.',
    highlights: [
      'Line-by-line NCERT diagrammatic dissection in Botany & Zoology',
      'High-yield Physics problem solving simplified for medical aspirants',
      '10,000+ NCERT-based question bank with chapterwise tests',
      'Regular full-length timed NEET mock tests on OMR sheets',
      'Stress management and test-anxiety counseling by certified experts'
    ],
    schedule: '6 Days/Week • In-depth Classrooms & Laboratory Concepts',
    brochureUrl: '/assets/images/brochure/Class XI Brochure NEET 27-28 SRSMA.pdf',
    brochureName: 'Download Class XI NEET Brochure (PDF)'
  },
  {
    id: 'foundation',
    title: 'Junior Foundation & Olympiads',
    targetAudience: 'Classes 8th, 9th & 10th (CBSE / ICSE / State)',
    duration: '1-Year / Multi-Year Systematic Foundation',
    batchSize: 'Max 25 Students',
    badge: 'Early Aptitude Builder',
    description: 'Builds razor-sharp mathematical aptitude and intuitive scientific curiosity. Bridges school curricula with competitive exams like NSEJS, PRMO/IOQM, NTSE, and sets up effortless JEE/NEET success.',
    highlights: [
      'KRMO Rank 7 and IITian mentors teaching high-school Math & Physics',
      'Critical thinking, logic puzzles, and experiential science experiments',
      'Comprehensive Board preparation (CBSE / ICSE) ensuring 95%+ marks',
      'Early exposure to competitive exam patterns without excessive pressure',
      'Small interactive classes where every child asks questions freely'
    ],
    schedule: 'After-School Evening Batches + Weekend Workshops',
    brochureUrl: '/assets/images/brochure/Board Readiness Challenge Pamphlet.pdf',
    brochureName: 'Download Foundation & Challenge Pamphlet (PDF)'
  },
  {
    id: 'arjuna',
    title: 'SRSMA Arjuna Super-30 Cohort',
    targetAudience: 'Merit-Selected Top 30 Aspirants',
    duration: 'Intensive Rankers Acceleration Program',
    batchSize: 'Strictly Capped at 30 Enrolled Students',
    badge: 'Exclusive Merit Batch',
    description: 'Our premier flagship batch for high-potential students aiming for Top-500 All India Ranks in JEE Advanced and NEET. Includes special problem-solving sessions and direct chief mentor supervision.',
    highlights: [
      'Special masterclasses by Guest Faculty and Olympiad Medalists',
      'Curated Irodov, Pathfinder, and Advanced problem discussions',
      '1-on-1 strategic consultation with Academic Director & Maths HOD Mr. Amal M Das',
      'Hostel facility with distraction-free round-the-clock study environment',
      'Diagnostic evaluation & concept roadmap via SRSMA Board Readiness Challenge'
    ],
    schedule: 'Full-Day Immersive Coaching & Supervised Self-Study',
    brochureUrl: '/assets/images/brochure/SRSMA ARJUNA batch Brochure.pdf',
    brochureName: 'Download SRSMA Arjuna Super-30 Brochure (PDF)'
  }
];

const CLASS_OPTIONS = [
  { id: '8', label: 'Class 8th', desc: 'Junior Foundation' },
  { id: '9', label: 'Class 9th', desc: 'Pre-JEE / NEET' },
  { id: '10', label: 'Class 10th', desc: 'Boards + Foundation' },
  { id: '11', label: 'Class 11th', desc: '2-Year Integrated' },
  { id: '12', label: 'Class 12th', desc: 'Fast-Track Rankers' },
  { id: 'repeater', label: 'Long Term', desc: 'Repeater Intensive' },
];

const GOAL_OPTIONS = [
  { id: 'jee', label: 'IIT-JEE (Main & Adv)', icon: '📐' },
  { id: 'neet', label: 'NEET Medical', icon: '🩺' },
  { id: 'foundation', label: 'Olympiads & STEM', icon: '🔬' },
  { id: 'dual', label: 'JEE + Board Topper', icon: '🏆' },
];

const PREP_LEVELS = [
  { id: 'beginner', label: 'Building Basics', desc: 'Need conceptual clarity & fundamental confidence' },
  { id: 'intermediate', label: 'School Topper', desc: 'Strong in school syllabus, ready for competition' },
  { id: 'advanced', label: 'Aspiring Ranker', desc: 'Aiming for Top-500 All India Rank & Elite IIT/AIIMS' },
];

export default function ProgramsSection({ onOpenDiagnostic }) {
  const [activeTab, setActiveTab] = useState('jee');
  const [selectedClass, setSelectedClass] = useState('11');
  const [selectedGoal, setSelectedGoal] = useState('jee');
  const [selectedPrep, setSelectedPrep] = useState('intermediate');
  const challengeUrl = 'https://exams.srsma.in/boardChallenge';

  const selectedProgram = PROGRAMS.find((p) => p.id === activeTab) || PROGRAMS[0];

  const getRecommendation = () => {
    let batchName = '2-Year Integrated JEE Excellence Batch';
    let targetTab = 'jee';
    let batchCap = 'Max 30 Students';
    let focus = 'First-principles conceptual mastery, dual board integration, NCERT alignment, and weekly online tests.';
    let brochureUrl = '/assets/images/brochure/Class XI Brochure JEE 2027-28 SRSMA .pdf';
    let brochureName = 'Download Class XI JEE Brochure (PDF)';

    if (selectedPrep === 'advanced' || selectedClass === '12' || selectedClass === 'repeater') {
      batchName = 'SRSMA Arjuna Super-30 Cohort';
      targetTab = 'arjuna';
      batchCap = 'Strictly Capped at 30 Enrolled Students';
      focus = 'Advanced multi-concept problem solving with Guest Olympiad faculty and direct Chief Mentor supervision.';
      brochureUrl = '/assets/images/brochure/SRSMA ARJUNA batch Brochure.pdf';
      brochureName = 'Download Arjuna Super-30 Brochure (PDF)';
    } else if (selectedClass === '8' || selectedClass === '9' || selectedClass === '10' || selectedGoal === 'foundation') {
      batchName = 'Junior Foundation & Olympiad Accelerator';
      targetTab = 'foundation';
      batchCap = 'Max 25 Students';
      focus = 'Mathematical rigor, PRMO/NSEJS exposure, and school board 95%+ marks guarantee.';
      brochureUrl = '/assets/images/brochure/Board Readiness Challenge Pamphlet.pdf';
      brochureName = 'Download Foundation & Challenge Pamphlet (PDF)';
    } else if (selectedGoal === 'neet') {
      batchName = 'NEET Medical Comprehensive Ranker Batch';
      targetTab = 'neet';
      batchCap = 'Max 30 Students';
      focus = 'Line-by-line NCERT diagrammatic dissection, Botany & Zoology depth, and Physics numerical shortcuts.';
      brochureUrl = '/assets/images/brochure/Class XI Brochure NEET 27-28 SRSMA.pdf';
      brochureName = 'Download Class XI NEET Brochure (PDF)';
    }

    return { batchName, targetTab, batchCap, focus, brochureUrl, brochureName };
  };

  const matchedRecommendation = getRecommendation();

  return (
    <section id="programs" className="py-6 md:py-8 bg-white dark:bg-navy-950 border-b border-slate-200 dark:border-white/[0.08] relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 dark:bg-gold-500/10 dark:border-gold-500/30 dark:text-gold-400 text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Curriculum & Pathways</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Academic Programs Engineered for <span className="text-gradient-gold">Rank Maximization</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            From Class 8 foundation to high-stakes Class 12 JEE Advanced and NEET, every course is curated with precision syllabus breakdown, dual board integration, and personal attention.
          </p>
        </div>

        {/* Running Announcement Ticker: Early Bird & Board Readiness Challenge */}
        <div className="mb-8 rounded-2xl bg-gradient-to-r from-blue-900 via-navy-900 to-indigo-950 dark:from-navy-950 dark:via-navy-900 dark:to-slate-950 border border-blue-500/30 dark:border-gold-500/30 py-3 px-4 overflow-hidden shadow-md">
          <div className="flex w-max animate-marquee space-x-10 text-xs font-semibold text-slate-200">
            <span className="flex items-center gap-2">
              <span className="text-amber-400 font-extrabold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                EARLY BIRD DISCOUNT:
              </span>
              <span>Avail special concessions for students registering before <strong className="text-white underline decoration-amber-400">October 31st</strong>!</span>
            </span>
            <span className="text-gold-400 font-black">•</span>
            <span className="flex items-center gap-2">
              <span className="text-emerald-400 font-extrabold flex items-center gap-1">
                <Trophy className="w-3.5 h-3.5 text-emerald-400" />
                FREE BOARD READINESS CHALLENGE:
              </span>
              <span>20-min conceptual test for Class 10 with an instant 5-page diagnostic report at <strong className="text-white">exams.srsma.in</strong>.</span>
            </span>
            <span className="text-gold-400 font-black">•</span>
            <span className="flex items-center gap-2">
              <span className="text-sky-300 font-bold">LIMITED SEATS:</span>
              <span>Strictly capped at 25–30 students per batch for direct IITian mentorship.</span>
            </span>
            <span className="text-gold-400 font-black">•</span>
            {/* Loop duplicate for smooth animation */}
            <span className="flex items-center gap-2">
              <span className="text-amber-400 font-extrabold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                EARLY BIRD DISCOUNT:
              </span>
              <span>Avail special concessions for students registering before <strong className="text-white underline decoration-amber-400">October 31st</strong>!</span>
            </span>
            <span className="text-gold-400 font-black">•</span>
            <span className="flex items-center gap-2">
              <span className="text-emerald-400 font-extrabold flex items-center gap-1">
                <Trophy className="w-3.5 h-3.5 text-emerald-400" />
                FREE BOARD READINESS CHALLENGE:
              </span>
              <span>20-min conceptual test for Class 10 with an instant 5-page diagnostic report at <strong className="text-white">exams.srsma.in</strong>.</span>
            </span>
            <span className="text-gold-400 font-black">•</span>
            <span className="flex items-center gap-2">
              <span className="text-sky-300 font-bold">LIMITED SEATS:</span>
              <span>Strictly capped at 25–30 students per batch for direct IITian mentorship.</span>
            </span>
          </div>
        </div>

        {/* Program Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
          {PROGRAMS.map((prog) => {
            const isActive = activeTab === prog.id;
            return (
              <button
                key={prog.id}
                onClick={() => setActiveTab(prog.id)}
                className={`relative px-5 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${isActive
                  ? 'text-white dark:text-navy-950 shadow-md shadow-blue-500/20 dark:shadow-glow-champagne'
                  : 'bg-slate-100 dark:bg-navy-950/80 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:white hover:bg-slate-200 dark:hover:bg-navy-900 border border-slate-200 dark:border-white/[0.08]'
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="programActiveTab"
                    className="absolute inset-0 bg-blue-600 dark:bg-gradient-to-r dark:from-gold-300 dark:via-gold-400 dark:to-gold-500 rounded-xl"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{prog.title.split('(')[0]}</span>
                {prog.id === 'arjuna' && (
                  <span className={`relative z-10 text-[10px] px-1.5 py-0.5 rounded font-black uppercase ${isActive ? 'bg-navy-950 text-blue-200 dark:text-navy-950' : 'bg-blue-100 text-blue-700 dark:bg-gold-500/20 dark:text-gold-400'
                    }`}>
                    Super 30
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Program Showcase Card */}
        <div className="bg-white dark:bg-navy-950/90 border border-slate-200 dark:border-white/[0.08] rounded-3xl p-6 sm:p-10 shadow-lg dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_25px_50px_-12px_rgba(0,0,0,0.7)] transition-colors duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-blue-50 text-blue-700 border border-blue-200 dark:bg-gold-500/15 dark:text-gold-400 dark:border-gold-500/30">
                    {selectedProgram.badge}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-trust-500/15 text-trust-700 dark:text-trust-400 border border-trust-500/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Dual Excellence (Boards + Competitive)</span>
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white">
                  {selectedProgram.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  {selectedProgram.description}
                </p>
              </div>

              {/* Quick Spec Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-navy-900/80 border border-slate-200 dark:border-white/[0.06] shadow-xs">
                  <div className="flex items-center gap-2 text-blue-600 dark:text-gold-400 text-xs font-semibold mb-1">
                    <Target className="w-3.5 h-3.5" />
                    <span>Target Cohort</span>
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">{selectedProgram.targetAudience}</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-navy-900/80 border border-slate-200 dark:border-white/[0.06] shadow-xs">
                  <div className="flex items-center gap-2 text-trust-600 dark:text-trust-400 text-xs font-semibold mb-1">
                    <Users className="w-3.5 h-3.5" />
                    <span>Batch Capacity</span>
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">{selectedProgram.batchSize}</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-navy-900/80 border border-slate-200 dark:border-white/[0.06] shadow-xs">
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Program Duration</span>
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">{selectedProgram.duration}</div>
                </div>
              </div>

              {/* Curriculum & Pedagogy Highlights */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-300">
                  What Makes This Program Unbeatable:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProgram.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-gold-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Card: Actions, Board Readiness Challenge & Brochure Download */}
            <div className="lg:col-span-4 flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-navy-900/90 border border-slate-200 dark:border-white/[0.08] space-y-6 shadow-xs">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-blue-600 dark:text-gold-400 text-xs font-bold uppercase tracking-wider">
                  <Compass className="w-4 h-4" />
                  <span>Batch Schedule</span>
                </div>
                <div className="text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-navy-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                  {selectedProgram.schedule}
                </div>

                {/* Board Readiness Challenge Spotlight Box */}
                <div className="p-4 rounded-xl bg-blue-50 dark:bg-gold-500/10 border border-blue-200 dark:border-gold-500/30 text-xs text-slate-800 dark:text-slate-200 space-y-2.5">
                  <div className="font-bold text-blue-900 dark:text-gold-300 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Trophy className="w-3.5 h-3.5 text-blue-600 dark:text-gold-500" />
                      <span>Take Board Readiness Challenge</span>
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-trust-500 text-navy-950 font-black">
                      100% FREE
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    Appear for our conceptual screening test on <strong className="text-blue-700 dark:text-gold-300">exams.srsma.in/boardChallenge</strong> to identify conceptual blind spots, test speed & accuracy, and receive your instant 5-page diagnostic report.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <a
                      href={challengeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-700 dark:text-gold-400 hover:underline"
                    >
                      <span>Launch Online Test</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <span className="text-slate-400 dark:text-slate-600">•</span>
                    <a
                      href="/assets/images/brochure/Board Readiness Challenge Pamphlet.pdf"
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-gold-300 transition-colors"
                    >
                      <Download className="w-3 h-3 text-blue-600 dark:text-gold-400" />
                      <span>Download Pamphlet (PDF)</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={selectedProgram.brochureUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-750 border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 dark:hover:border-gold-500/50 text-slate-800 dark:text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 group shadow-xs"
                >
                  <Download className="w-4 h-4 text-blue-600 dark:text-gold-400 group-hover:translate-y-0.5 transition-transform" />
                  <span>{selectedProgram.brochureName}</span>
                </a>

                <button
                  onClick={onOpenDiagnostic}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-orange-500 text-white font-bold text-xs tracking-wide shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Apply for This Program</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Merged Section: Find the Ideal Program Interactive Matcher */}
        <div id="program-matcher" className="mt-12 bg-slate-50 dark:bg-navy-900/60 border border-slate-200 dark:border-white/[0.08] rounded-3xl p-6 sm:p-10 shadow-md transition-colors duration-200">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 dark:bg-gold-500/10 dark:border-gold-500/30 dark:text-gold-400 text-xs font-semibold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>Personalized Track Finder</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-extrabold text-slate-900 dark:text-white">
              Find the Ideal Program for <span className="text-gradient-gold">Your Child</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Select your child's current grade, target goal, and conceptual confidence level to instantly match with the right cohort.
            </p>
          </div>

          {/* 2-Column Matcher Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: 3 Questions (Step 4 slider removed) */}
            <div className="lg:col-span-7 bg-white dark:bg-navy-950/90 border border-slate-200 dark:border-white/[0.08] rounded-2xl p-5 sm:p-7 space-y-6 shadow-xs">

              {/* Step 1: Grade Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-600 dark:bg-gradient-to-br dark:from-gold-300 dark:to-gold-500 text-white dark:text-navy-950 flex items-center justify-center text-[11px] font-black">1</span>
                  <span>Select Current Class / Grade:</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {CLASS_OPTIONS.map((c) => {
                    const isSelected = selectedClass === c.id;
                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setSelectedClass(c.id)}
                        className={`p-3 rounded-xl text-left border transition-all ${isSelected
                          ? 'bg-blue-50 border-blue-500 text-blue-800 dark:bg-gold-500/15 dark:border-gold-500/50 dark:text-gold-200 font-bold ring-1 ring-blue-500/40 dark:ring-gold-500/50 shadow-xs'
                          : 'bg-slate-50 dark:bg-navy-900/70 border-slate-200 dark:border-white/[0.06] text-slate-700 dark:text-slate-300 hover:border-blue-400 dark:hover:border-gold-500/40 hover:bg-slate-100/70 dark:hover:bg-navy-850'
                          }`}
                      >
                        <div className="text-xs font-bold">{c.label}</div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">{c.desc}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Goal Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-600 dark:bg-gradient-to-br dark:from-gold-300 dark:to-gold-500 text-white dark:text-navy-950 flex items-center justify-center text-[11px] font-black">2</span>
                  <span>Primary Target Goal:</span>
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {GOAL_OPTIONS.map((g) => {
                    const isSelected = selectedGoal === g.id;
                    return (
                      <button
                        key={g.id}
                        type="button"
                        onClick={() => setSelectedGoal(g.id)}
                        className={`p-3 rounded-xl text-left border flex items-center gap-2.5 transition-all ${isSelected
                          ? 'bg-blue-50 border-blue-500 text-blue-800 dark:bg-gold-500/15 dark:border-gold-500/50 dark:text-gold-200 font-bold ring-1 ring-blue-500/40 dark:ring-gold-500/50 shadow-xs'
                          : 'bg-slate-50 dark:bg-navy-900/70 border-slate-200 dark:border-white/[0.06] text-slate-700 dark:text-slate-300 hover:border-blue-400 dark:hover:border-gold-500/40 hover:bg-slate-100/70 dark:hover:bg-navy-850'
                          }`}
                      >
                        <span className="text-lg">{g.icon}</span>
                        <span className="text-xs font-semibold">{g.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Current Prep Level */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-600 dark:bg-gradient-to-br dark:from-gold-300 dark:to-gold-500 text-white dark:text-navy-950 flex items-center justify-center text-[11px] font-black">3</span>
                  <span>Current Conceptual Confidence:</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {PREP_LEVELS.map((p) => {
                    const isSelected = selectedPrep === p.id;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setSelectedPrep(p.id)}
                        className={`p-3 rounded-xl text-left border transition-all ${isSelected
                          ? 'bg-blue-50 border-blue-500 text-blue-800 dark:bg-gold-500/15 dark:border-gold-500/50 dark:text-gold-200 font-bold ring-1 ring-blue-500/40 dark:ring-gold-500/50 shadow-xs'
                          : 'bg-slate-50 dark:bg-navy-900/70 border-slate-200 dark:border-white/[0.06] text-slate-700 dark:text-slate-300 hover:border-blue-400 dark:hover:border-gold-500/40 hover:bg-slate-100/70 dark:hover:bg-navy-850'
                          }`}
                      >
                        <div className="text-xs font-bold">{p.label}</div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">{p.desc}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right: Dynamic Recommendation Card */}
            <div className="lg:col-span-5 bg-white dark:bg-navy-950/95 border-2 border-blue-500/30 dark:border-gold-500/35 rounded-2xl p-6 sm:p-7 shadow-lg space-y-4 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-blue-50 text-blue-800 dark:bg-gold-500/20 dark:text-gold-300 border border-blue-200 dark:border-gold-500/40">
                  Recommended Cohort Match
                </span>
                <span className="text-xs text-trust-600 dark:text-trust-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Admissions Open</span>
                </span>
              </div>

              <div>
                <h4 className="text-xl font-display font-black text-slate-900 dark:text-white leading-tight">
                  {matchedRecommendation.batchName}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                  {matchedRecommendation.focus}
                </p>
              </div>

              {/* Key Specs */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-navy-900/80 border border-slate-200 dark:border-white/[0.08] space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Batch Limit:</span>
                  <span className="text-slate-900 dark:text-white font-bold">{matchedRecommendation.batchCap}</span>
                </div>
                <div className="flex items-center justify-between border-t border-slate-200 dark:border-white/[0.06] pt-2">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Core Mentors:</span>
                  <span className="text-slate-900 dark:text-white font-bold">100% IIT & NIT Alumni</span>
                </div>
              </div>

              {/* Early Bird & Diagnostic Assessment Highlight Box */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-yellow-500/10 dark:from-gold-500/15 dark:via-amber-500/10 dark:to-gold-500/5 border border-amber-300 dark:border-gold-500/30 space-y-2 text-xs">
                <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500 dark:text-gold-400" />
                  <span>Special Admissions Benefits</span>
                </div>
                <div className="space-y-1.5 text-[11px] text-slate-700 dark:text-slate-300">
                  <p>
                    🔥 <strong className="text-amber-700 dark:text-amber-300">Early Bird Discount:</strong> Avail exclusive tuition concessions for registrations confirmed before <strong className="text-slate-900 dark:text-white">October 31st</strong>.
                  </p>
                  <p>
                    🎯 <strong className="text-emerald-700 dark:text-emerald-300">Free Diagnostic Assessment:</strong> Take the 20-min Board Readiness Challenge for Class 10 to receive an instant 5-page performance report and 1-on-1 consultation.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab(matchedRecommendation.targetTab);
                    const el = document.getElementById('programs');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-gradient-to-r dark:from-gold-300 dark:to-gold-500 text-white dark:text-navy-950 font-bold text-xs tracking-wide shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>View Full Curriculum & Details Above</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href={challengeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-[11px] transition-all flex items-center justify-center gap-1.5 text-center shadow-xs"
                  >
                    <span>Take Free Test</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <button
                    type="button"
                    onClick={onOpenDiagnostic}
                    className="py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-navy-900 hover:bg-slate-200 dark:hover:bg-navy-850 border border-slate-200 dark:border-white/[0.08] text-slate-800 dark:text-slate-200 font-bold text-[11px] transition-colors text-center"
                  >
                    <span>Director Counseling</span>
                  </button>
                </div>

                <div className="pt-1 flex flex-col gap-1.5 text-[11px]">
                  <a
                    href={matchedRecommendation.brochureUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-blue-700 dark:text-gold-400 hover:underline font-semibold"
                  >
                    <Download className="w-3.5 h-3.5 text-blue-600 dark:text-gold-400" />
                    <span>{matchedRecommendation.brochureName}</span>
                  </a>
                  <a
                    href="/assets/images/brochure/Board Readiness Challenge Pamphlet.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-gold-300 font-medium"
                  >
                    <Download className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                    <span>Download Board Readiness Challenge Pamphlet (PDF)</span>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
