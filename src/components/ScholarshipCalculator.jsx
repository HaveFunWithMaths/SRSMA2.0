import React, { useState } from 'react';
import {
  Calculator, Sparkles, CheckCircle2, ArrowRight,
  ExternalLink, Trophy, Users, BookOpen, Target
} from 'lucide-react';

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

export default function ScholarshipCalculator({ onOpenDiagnostic }) {
  const [selectedClass, setSelectedClass] = useState('11');
  const [selectedGoal, setSelectedGoal] = useState('jee');
  const [selectedPrep, setSelectedPrep] = useState('intermediate');

  // Compute recommendation
  const getRecommendation = () => {
    let batchName = '2-Year Integrated JEE Excellence Batch';
    let batchCap = 'Max 30 Students';
    let scholarshipRange = 'Up to 75% Merit Scholarship';
    let focus = 'First-principles mastery, NCERT alignment, and weekly CBT mock tests.';

    if (selectedPrep === 'advanced' || selectedClass === '12' || selectedClass === 'repeater') {
      batchName = 'SRSMA Arjuna Super-30 Cohort';
      batchCap = 'Strictly Capped at 30 Enrolled Students';
      scholarshipRange = 'Up to 100% Merit Scholarship (Full Waiver)';
      focus = 'Advanced multi-concept problem solving with Guest Olympiad faculty and direct Chief Mentor supervision.';
    } else if (selectedClass === '8' || selectedClass === '9' || selectedClass === '10') {
      batchName = 'Junior Foundation & Olympiad Accelerator';
      batchCap = 'Max 25 Students';
      scholarshipRange = 'Up to 60% Foundation Scholarship';
      focus = 'Mathematical rigor, PRMO/NSEJS exposure, and school board 95%+ guarantee.';
    } else if (selectedGoal === 'neet') {
      batchName = 'NEET Medical Comprehensive Ranker Batch';
      batchCap = 'Max 30 Students';
      scholarshipRange = 'Up to 80% Merit Scholarship';
      focus = 'Line-by-line NCERT diagrammatic mastery and high-speed Physics numerical shortcuts.';
    }

    return { batchName, batchCap, scholarshipRange, focus };
  };

  const recommendation = getRecommendation();
  const challengeUrl = 'https://exams.srsma.in/boardChallenge';

  return (
    <section
      id="scholarship-calculator"
      className="py-8 md:py-12 bg-slate-50 dark:bg-navy-900 border-b border-slate-200 dark:border-slate-800 relative transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-600 dark:text-gold-400 text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Program Matcher & Scholarship Guide</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Find the Ideal Program & <span className="text-gradient-gold">Scholarship Slab</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Answer 3 quick questions to discover your recommended cohort and calculate your potential scholarship entitlement.
          </p>
        </div>

        {/* 2-Column Calculator Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: 3 Selection Steps */}
          <div className="lg:col-span-7 bg-white dark:bg-navy-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-md dark:shadow-xl space-y-6">

            {/* Step 1: Grade Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center text-[11px] font-black">1</span>
                <span>Select Current Class / Grade:</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {CLASS_OPTIONS.map((c) => {
                  const isSelected = selectedClass === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setSelectedClass(c.id)}
                      className={`p-3 rounded-xl text-left border transition-all ${isSelected
                        ? 'bg-gold-500/15 border-gold-500 text-gold-700 dark:text-gold-300 font-bold ring-1 ring-gold-500/40 shadow-xs'
                        : 'bg-slate-50 dark:bg-navy-900/60 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-gold-500/40 hover:bg-slate-100/70 dark:hover:bg-navy-850'
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
                <span className="w-5 h-5 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center text-[11px] font-black">2</span>
                <span>Primary Target Goal:</span>
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {GOAL_OPTIONS.map((g) => {
                  const isSelected = selectedGoal === g.id;
                  return (
                    <button
                      key={g.id}
                      onClick={() => setSelectedGoal(g.id)}
                      className={`p-3 rounded-xl text-left border flex items-center gap-2.5 transition-all ${isSelected
                        ? 'bg-gold-500/15 border-gold-500 text-gold-700 dark:text-gold-300 font-bold ring-1 ring-gold-500/40 shadow-xs'
                        : 'bg-slate-50 dark:bg-navy-900/60 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-gold-500/40 hover:bg-slate-100/70 dark:hover:bg-navy-850'
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
                <span className="w-5 h-5 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center text-[11px] font-black">3</span>
                <span>Current Conceptual Confidence:</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {PREP_LEVELS.map((p) => {
                  const isSelected = selectedPrep === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPrep(p.id)}
                      className={`p-3 rounded-xl text-left border transition-all ${isSelected
                        ? 'bg-gold-500/15 border-gold-500 text-gold-700 dark:text-gold-300 font-bold ring-1 ring-gold-500/40 shadow-xs'
                        : 'bg-slate-50 dark:bg-navy-900/60 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-gold-500/40 hover:bg-slate-100/70 dark:hover:bg-navy-850'
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

          {/* Right Column: Dynamic Recommendation Card */}
          <div className="lg:col-span-5 bg-white dark:bg-navy-950 border-2 border-gold-500/40 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-2xl pointer-events-none -z-10" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-gold-500/20 text-gold-700 dark:text-gold-300 border border-gold-500/30">
                  Recommended For You
                </span>
                <span className="text-xs text-trust-600 dark:text-trust-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Batch Available</span>
                </span>
              </div>

              <div>
                <h3 className="text-xl font-display font-black text-slate-900 dark:text-white leading-tight">
                  {recommendation.batchName}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  {recommendation.focus}
                </p>
              </div>

              {/* Specs */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-navy-900/80 border border-slate-200 dark:border-slate-800 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Batch Limit:</span>
                  <span className="text-slate-900 dark:text-white font-bold">{recommendation.batchCap}</span>
                </div>
                <div className="flex items-center justify-between text-xs border-t border-slate-200 dark:border-slate-800/80 pt-2">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Scholarship Eligibility:</span>
                  <span className="text-gold-600 dark:text-gold-400 font-black">{recommendation.scholarshipRange}</span>
                </div>
                <div className="flex items-center justify-between text-xs border-t border-slate-200 dark:border-slate-800/80 pt-2">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Faculty Mentors:</span>
                  <span className="text-slate-900 dark:text-white font-bold">100% IIT & NIT Alumni</span>
                </div>
              </div>

              {/* Direct Board Readiness Challenge Link Callout */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-gold-500/15 to-blue-500/15 border border-gold-500/30 space-y-2">
                <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Trophy className="w-4 h-4 text-gold-500" />
                  <span>How to Claim This Scholarship?</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  Take the free 45-min SRSMA Board Readiness Challenge Diagnostic Test online to calibrate your scholarship entitlement.
                </p>
              </div>

              {/* CTAs */}
              <div className="space-y-2.5 pt-2">
                <a
                  href={challengeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-black text-xs tracking-wide shadow-md transition-all flex items-center justify-center gap-2 group text-center"
                >
                  <span>Take Board Readiness Challenge to Unlock Scholarship</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <button
                  onClick={onOpenDiagnostic}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-navy-900 hover:bg-slate-200 dark:hover:bg-navy-850 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold transition-colors"
                >
                  Book 1-on-1 Dean Counseling
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
