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
    brochureUrl: '/assets/images/brochure/SRSMA ARJUNA batch Brochure.pdf',
    brochureName: 'Download JEE Arjuna Batch Brochure (PDF)'
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
    brochureUrl: '/assets/images/brochure/SRSMA ARJUNA batch Brochure.pdf',
    brochureName: 'Download Foundation Syllabus & Guide (PDF)'
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
      '1-on-1 strategic consultation with Chief Mentor Mr. Amal M Das',
      'Hostel facility with distraction-free round-the-clock study environment',
      'Scholarships up to 100% based on SRSMA Board Readiness Challenge Diagnostic Test'
    ],
    schedule: 'Full-Day Immersive Coaching & Supervised Self-Study',
    brochureUrl: '/assets/images/brochure/SRSMA ARJUNA batch Brochure.pdf',
    brochureName: 'Download SRSMA Arjuna Super-30 Brochure (PDF)'
  }
];

export default function ProgramsSection({ onOpenDiagnostic }) {
  const [activeTab, setActiveTab] = useState('jee');
  const challengeUrl = 'https://exams.srsma.in/boardChallenge';

  const selectedProgram = PROGRAMS.find((p) => p.id === activeTab) || PROGRAMS[0];

  return (
    <section id="programs" className="py-8 md:py-12 bg-white dark:bg-navy-950 border-b border-slate-200 dark:border-slate-800 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-600 dark:text-gold-400 text-xs font-semibold uppercase tracking-wider">
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

        {/* Program Selector Tabs with Animated Smooth Transition */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
          {PROGRAMS.map((prog) => {
            const isActive = activeTab === prog.id;
            return (
              <button
                key={prog.id}
                onClick={() => setActiveTab(prog.id)}
                className={`relative px-5 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${isActive
                  ? 'text-navy-950 shadow-md shadow-gold-500/20'
                  : 'bg-slate-100 dark:bg-navy-900 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-navy-850 border border-slate-200 dark:border-slate-800'
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="programActiveTab"
                    className="absolute inset-0 bg-gold-500 rounded-xl"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{prog.title.split('(')[0]}</span>
                {prog.id === 'arjuna' && (
                  <span className={`relative z-10 text-[10px] px-1.5 py-0.5 rounded font-black uppercase ${isActive ? 'bg-navy-950 text-gold-300' : 'bg-gold-500/20 text-gold-600 dark:text-gold-400'
                    }`}>
                    Super 30
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Program Showcase Card */}
        <div className="bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-lg dark:shadow-2xl transition-colors duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-gold-500/15 text-gold-700 dark:text-gold-400 border border-gold-500/30">
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
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800 shadow-xs">
                  <div className="flex items-center gap-2 text-gold-600 dark:text-gold-400 text-xs font-semibold mb-1">
                    <Target className="w-3.5 h-3.5" />
                    <span>Target Cohort</span>
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">{selectedProgram.targetAudience}</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800 shadow-xs">
                  <div className="flex items-center gap-2 text-trust-600 dark:text-trust-400 text-xs font-semibold mb-1">
                    <Users className="w-3.5 h-3.5" />
                    <span>Batch Capacity</span>
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">{selectedProgram.batchSize}</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800 shadow-xs">
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
                      <CheckCircle2 className="w-4 h-4 text-gold-500 dark:text-gold-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Card: Actions, Board Readiness Challenge & Brochure Download */}
            <div className="lg:col-span-4 flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-navy-950 border border-slate-200 dark:border-slate-800/80 space-y-6 shadow-xs">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-wider">
                  <Compass className="w-4 h-4" />
                  <span>Batch Schedule</span>
                </div>
                <div className="text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-navy-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                  {selectedProgram.schedule}
                </div>

                {/* Board Readiness Challenge Spotlight Box */}
                <div className="p-4 rounded-xl bg-gold-500/10 border border-gold-500/30 text-xs text-slate-800 dark:text-slate-200 space-y-2">
                  <div className="font-bold text-gold-700 dark:text-gold-300 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Trophy className="w-3.5 h-3.5 text-gold-500" />
                      <span>Qualify via Board Readiness Challenge</span>
                    </span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-trust-500 text-navy-950 font-black">
                      100% FREE
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300">
                    Appear for our conceptual screening test on <strong className="text-gold-700 dark:text-gold-300">exams.srsma.in</strong> to evaluate rank readiness and qualify for scholarships up to 100%.
                  </p>
                  <a
                    href={challengeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-gold-700 dark:text-gold-400 hover:underline pt-1"
                  >
                    <span>Launch Free Online Test Now</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={selectedProgram.brochureUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-750 border border-slate-200 dark:border-slate-700 hover:border-gold-500/50 text-slate-800 dark:text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 group shadow-xs"
                >
                  <Download className="w-4 h-4 text-gold-600 dark:text-gold-400 group-hover:translate-y-0.5 transition-transform" />
                  <span>{selectedProgram.brochureName}</span>
                </a>

                <button
                  onClick={onOpenDiagnostic}
                  className="w-full py-3 px-4 rounded-xl bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-xs tracking-wide shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Apply for This Program</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
