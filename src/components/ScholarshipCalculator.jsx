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
  const [studentScore, setStudentScore] = useState(88); // 60 to 100 percentage slider

  // Compute recommendation & dynamic scholarship calculation based on score
  const getRecommendation = () => {
    let batchName = '2-Year Integrated JEE Excellence Batch';
    let batchCap = 'Max 30 Students';
    let baseScholarship = 50;
    let focus = 'First-principles mastery, NCERT alignment, and weekly Onlinemock tests.';

    if (selectedPrep === 'advanced' || selectedClass === '12' || selectedClass === 'repeater') {
      batchName = 'SRSMA Arjuna Super-30 Cohort';
      batchCap = 'Strictly Capped at 30 Enrolled Students';
      baseScholarship = 70;
      focus = 'Advanced multi-concept problem solving with Guest Olympiad faculty and direct Academic Director supervision.';
    } else if (selectedClass === '8' || selectedClass === '9' || selectedClass === '10') {
      batchName = 'Junior Foundation & Olympiad Accelerator';
      batchCap = 'Max 25 Students';
      baseScholarship = 40;
      focus = 'Mathematical rigor, PRMO/NSEJS exposure, and school board 95%+ guarantee.';
    } else if (selectedGoal === 'neet') {
      batchName = 'NEET Medical Comprehensive Ranker Batch';
      batchCap = 'Max 30 Students';
      baseScholarship = 55;
      focus = 'Line-by-line NCERT diagrammatic mastery and high-speed Physics numerical shortcuts.';
    }

    // Dynamic slab adjustment based on slider score
    let calculatedPercentage = Math.min(100, Math.round(baseScholarship * (studentScore / 85)));
    if (studentScore >= 95) calculatedPercentage = Math.max(calculatedPercentage, 90);
    if (studentScore >= 98 && selectedPrep === 'advanced') calculatedPercentage = 100;

    let scholarshipRange = `Up to ${calculatedPercentage}% Merit Scholarship`;
    if (calculatedPercentage >= 95) scholarshipRange = 'Up to 100% Full Fee Waiver';

    return { batchName, batchCap, scholarshipRange, calculatedPercentage, focus };
  };

  const recommendation = getRecommendation();
  const challengeUrl = 'https://exams.srsma.in/boardChallenge';

  return (
    <section
      id="scholarship-calculator"
      className="py-6 md:py-8 bg-slate-50 dark:bg-navy-900 border-b border-slate-200 dark:border-slate-800 relative transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 dark:bg-gold-500/10 dark:border-gold-500/30 dark:text-gold-400 text-xs font-semibold uppercase tracking-wider">
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
          <div className="lg:col-span-7 bg-white dark:bg-navy-950/90 border border-slate-200 dark:border-white/[0.08] rounded-3xl p-6 sm:p-8 shadow-md dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_20px_40px_-15px_rgba(0,0,0,0.7)] space-y-6">

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
                      onClick={() => setSelectedClass(c.id)}
                      className={`p-3 rounded-xl text-left border transition-all ${isSelected
                        ? 'bg-blue-50 border-blue-500 text-blue-800 dark:bg-gold-500/15 dark:border-gold-500/50 dark:text-gold-200 font-bold ring-1 ring-blue-500/40 dark:ring-gold-500/50 shadow-xs dark:shadow-[0_0_15px_-3px_rgba(245,158,11,0.25)]'
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
                      onClick={() => setSelectedGoal(g.id)}
                      className={`p-3 rounded-xl text-left border flex items-center gap-2.5 transition-all ${isSelected
                        ? 'bg-blue-50 border-blue-500 text-blue-800 dark:bg-gold-500/15 dark:border-gold-500/50 dark:text-gold-200 font-bold ring-1 ring-blue-500/40 dark:ring-gold-500/50 shadow-xs dark:shadow-[0_0_15px_-3px_rgba(245,158,11,0.25)]'
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
                      onClick={() => setSelectedPrep(p.id)}
                      className={`p-3 rounded-xl text-left border transition-all ${isSelected
                        ? 'bg-blue-50 border-blue-500 text-blue-800 dark:bg-gold-500/15 dark:border-gold-500/50 dark:text-gold-200 font-bold ring-1 ring-blue-500/40 dark:ring-gold-500/50 shadow-xs dark:shadow-[0_0_15px_-3px_rgba(245,158,11,0.25)]'
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

            {/* Step 4: Estimated Previous Academic Score Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-600 dark:bg-gold-500 text-white dark:text-navy-950 flex items-center justify-center text-[11px] font-black">4</span>
                  <span>Previous Exam / Target Score (%):</span>
                </label>
                <span className="text-sm font-black text-blue-700 dark:text-gold-400 bg-blue-50 dark:bg-gold-500/20 px-2.5 py-0.5 rounded-md border border-blue-200 dark:border-gold-500/30">
                  {studentScore}%
                </span>
              </div>
              <input
                type="range"
                min="60"
                max="100"
                value={studentScore}
                onChange={(e) => setStudentScore(Number(e.target.value))}
                className="w-full accent-blue-600 dark:accent-gold-500 h-2 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 dark:text-slate-400 mt-1">
                <span>60% (Passing)</span>
                <span>80% (First Class)</span>
                <span>90%+ (Distinction)</span>
                <span>100% (Centum)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Recommendation Card */}
          <div className="lg:col-span-5 bg-white dark:bg-navy-950/95 border-2 border-blue-500/30 dark:border-gold-500/35 rounded-3xl p-6 sm:p-8 card-elevation-subtle dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_25px_50px_-12px_rgba(0,0,0,0.8)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 dark:bg-gold-500/15 rounded-full blur-2xl pointer-events-none -z-10" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-blue-50 text-blue-800 dark:bg-gold-500/20 dark:text-gold-300 border border-blue-200 dark:border-gold-500/40">
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

              {/* Dynamic Interactive Scholarship Meter */}
              <div className="p-4 rounded-2xl bg-blue-50/80 dark:bg-gold-500/10 border border-blue-200 dark:border-gold-500/30 dark:shadow-[inset_0_1px_0_0_rgba(254,243,199,0.15)] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Potential Merit Fee Waiver:</span>
                  <span className="text-base font-black text-blue-700 dark:text-gold-300">{recommendation.calculatedPercentage}%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-gold-300 dark:via-gold-400 dark:to-amber-500 h-full rounded-full transition-all duration-300 dark:shadow-glow-champagne"
                    style={{ width: `${recommendation.calculatedPercentage}%` }}
                  />
                </div>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">
                  Based on your {studentScore}% score simulation. Final grant awarded via diagnostic score.
                </p>
              </div>

              {/* Specs */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-navy-900/80 border border-slate-200 dark:border-white/[0.08] space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Batch Limit:</span>
                  <span className="text-slate-900 dark:text-white font-bold">{recommendation.batchCap}</span>
                </div>
                <div className="flex items-center justify-between text-xs border-t border-slate-200 dark:border-white/[0.06] pt-2">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Scholarship Eligibility:</span>
                  <span className="text-blue-700 dark:text-gold-400 font-black">{recommendation.scholarshipRange}</span>
                </div>
                <div className="flex items-center justify-between text-xs border-t border-slate-200 dark:border-white/[0.06] pt-2">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Faculty Mentors:</span>
                  <span className="text-slate-900 dark:text-white font-bold">100% IIT & NIT Alumni</span>
                </div>
              </div>

              {/* Direct Board Readiness Challenge Link Callout */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-gold-500/15 dark:to-amber-500/10 border border-blue-200 dark:border-gold-500/30 space-y-2">
                <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Trophy className="w-4 h-4 text-blue-600 dark:text-gold-400" />
                  <span>Free Board Readiness Challenge</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  Take the free 20-min SRSMA Board Readiness Challenge online to evaluate conceptual mastery and score leaks.
                </p>
              </div>

              {/* CTAs */}
              <div className="space-y-2.5 pt-2">
                <a
                  href={challengeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-orange-500 text-white font-black text-xs tracking-wide shadow-md transition-all flex items-center justify-center gap-2 group text-center"
                >
                  <span>Take Free Board Readiness Challenge Test</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <button
                  onClick={onOpenDiagnostic}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-navy-900 hover:bg-slate-200 dark:hover:bg-navy-850 border border-slate-200 dark:border-white/[0.08] text-slate-800 dark:text-slate-200 text-xs font-bold transition-colors"
                >
                  Book 1-on-1 Director Counseling
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
