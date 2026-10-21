import React, { useState } from 'react';
import {
  Sparkles, ExternalLink, Award, CheckCircle2,
  Brain, Target, Clock, ArrowRight, ShieldCheck,
  BarChart3, Trophy, Download, ZoomIn, FileText,
  Compass, Check
} from 'lucide-react';

const STEPS_STREAMLINED = [
  {
    step: '01',
    title: 'Take 20-Min Test',
    description: 'Answer 20 concept-driven Math & Science questions online.',
    icon: Clock
  },
  {
    step: '02',
    title: 'Get Instant Report',
    description: 'Receive automated topic-level accuracy & score-leak analytics.',
    icon: BarChart3
  },
  {
    step: '03',
    title: 'Plan Improvement',
    description: 'Discuss your personalized 3-month action plan with core faculty.',
    icon: Brain
  }
];

export default function DiagnosticChallengeSection({ onOpenDiagnostic, onOpenLightbox }) {
  const challengeUrl = 'https://exams.srsma.in/boardChallenge';
  const [activeVisualTab, setActiveVisualTab] = useState('poster'); // 'poster' | 'report'

  const visualImages = {
    poster: {
      src: '/assets/images/board-challenge-page-1.png',
      title: 'SRSMA Board Readiness Challenge Poster',
      caption: 'Are You Board Ready? 20 Questions in 20 Minutes • Mathematics & Science • 100% Free for Class 10 Students'
    },
    report: {
      src: '/assets/images/board-challenge-page-2.png',
      title: '5-Page Personalized Diagnostic Report Breakdown',
      caption: 'Your 5-Page Board Readiness Report: Performance Overview, Question-Type Analysis, Topic Priority Map, Speed & Accuracy, and Action Plan'
    }
  };

  const handleZoomVisual = () => {
    if (onOpenLightbox) {
      onOpenLightbox(visualImages[activeVisualTab]);
    }
  };

  return (
    <section
      id="diagnostic-challenge"
      className="py-6 md:py-8 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-navy-950 dark:via-navy-900 dark:to-navy-950 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-br from-gold-500/10 via-blue-600/5 to-purple-600/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Main Banner Container */}
        <div className="relative rounded-3xl bg-white dark:bg-gradient-to-br dark:from-navy-900/90 dark:via-navy-850/90 dark:to-navy-950/95 border-2 border-blue-500/30 dark:border-gold-500/35 p-5 sm:p-7 md:p-8 shadow-2xl dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_25px_50px_-12px_rgba(0,0,0,0.8)] overflow-hidden">

          {/* Top Decorative Flare */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 dark:bg-gold-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-6 space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 dark:bg-gold-500/15 dark:border-gold-500/40 dark:text-gold-300 text-xs font-bold uppercase tracking-wider animate-pulse-subtle">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-gold-400" />
              <span>Complimentary For Class 10 Students • CBSE & State Board</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Are You Truly <span className="text-gradient-gold">Board Ready?</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
              A 20-minute conceptual diagnostic designed by IITians to test application, speed, and exam-day composure.
            </p>
          </div>

          {/* PROMINENT VISUAL FIRST: Visual Showcase Card */}
          <div className="mb-8 rounded-2xl bg-slate-50 dark:bg-navy-950/90 border border-slate-200 dark:border-white/[0.1] p-4 sm:p-6 shadow-md dark:shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Visual Preview Left Column */}
              <div className="lg:col-span-6 flex flex-col items-center justify-between">
                {/* Visual View Switcher Tabs */}
                <div className="flex items-center gap-2 mb-3 w-full justify-center">
                  <button
                    onClick={() => setActiveVisualTab('poster')}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                      activeVisualTab === 'poster'
                        ? 'bg-blue-600 text-white dark:bg-gradient-to-r dark:from-gold-400 dark:to-gold-500 dark:text-navy-950 shadow-xs'
                        : 'bg-white dark:bg-navy-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <Trophy className="w-3.5 h-3.5" />
                    <span>Challenge Poster</span>
                  </button>

                  <button
                    onClick={() => setActiveVisualTab('report')}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                      activeVisualTab === 'report'
                        ? 'bg-blue-600 text-white dark:bg-gradient-to-r dark:from-gold-400 dark:to-gold-500 dark:text-navy-950 shadow-xs'
                        : 'bg-white dark:bg-navy-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>5-Page Report Preview</span>
                  </button>
                </div>

                {/* Main Visual Display Frame with Zoom */}
                <div
                  onClick={handleZoomVisual}
                  className="group cursor-pointer relative w-full max-w-md rounded-2xl overflow-hidden border-2 border-blue-500/40 dark:border-gold-500/50 bg-slate-900 shadow-xl dark:shadow-[0_0_30px_-5px_rgba(245,158,11,0.25)] aspect-[3/4] flex items-center justify-center"
                >
                  <img
                    src={visualImages[activeVisualTab].src}
                    alt={visualImages[activeVisualTab].title}
                    className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Hover Zoom Overlay */}
                  <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="px-4 py-2 rounded-full bg-blue-600 text-white dark:bg-gold-500 dark:text-navy-950 font-bold text-xs shadow-lg flex items-center gap-1.5">
                      <ZoomIn className="w-4 h-4" />
                      <span>Click to Zoom Official Flyer</span>
                    </span>
                  </div>

                  {/* Corner Badge */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-navy-950/90 text-gold-300 border border-gold-500/40 text-[10px] font-black uppercase tracking-wider shadow-md">
                    {activeVisualTab === 'poster' ? '20 Questions • 20 Mins' : 'Instant 5-Page Analytics'}
                  </span>
                </div>

                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 flex items-center gap-1">
                  <ZoomIn className="w-3.5 h-3.5 text-blue-600 dark:text-gold-400" />
                  <span>Click image to view full high-resolution pamphlet</span>
                </div>
              </div>

              {/* Visual Action & Breakdown Right Column */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-500/15 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-[11px] font-bold uppercase tracking-wider">
                    <span>100% Free For Class 10</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 dark:text-white">
                    Can You Score 20/20 in 20 Minutes?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    A high-impact diagnostic assessment aligned with CBSE & State Board syllabi, engineered by IITians to measure concept depth, application, speed, and accuracy.
                  </p>
                </div>

                {/* Simple 3-Step Evaluation Process directly inside */}
                <div className="space-y-2.5 py-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Simple 3-Step Evaluation Process
                  </div>
                  
                  <div className="space-y-2.5">
                    {STEPS_STREAMLINED.map((step, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-navy-900 border border-slate-200/80 dark:border-white/[0.08] shadow-2xs hover:border-blue-400/50 dark:hover:border-gold-500/40 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-600 dark:bg-gradient-to-br dark:from-gold-300 dark:to-gold-500 text-white dark:text-navy-950 font-black text-xs flex items-center justify-center shrink-0 shadow-xs">
                          {step.step}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 dark:text-white">{step.title}</div>
                          <div className="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">{step.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct CTA Action Buttons & Trust Bar */}
                <div className="space-y-3 pt-1">
                  <div className="flex flex-col sm:flex-row items-center gap-2.5">
                    <a
                      href={challengeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex-1 px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-orange-500 text-white font-black text-xs tracking-wide shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all flex items-center justify-center gap-2 group whitespace-nowrap"
                    >
                      <span>Start Free Online Challenge (20 Min)</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>

                    <a
                      href="/assets/images/brochure/Board Readiness Challenge Pamphlet.pdf"
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-4 py-3.5 rounded-xl border border-slate-300 dark:border-white/10 hover:border-blue-500 dark:hover:border-gold-500 bg-white dark:bg-navy-900 text-slate-800 dark:text-slate-200 font-bold text-xs transition-all flex items-center justify-center gap-1.5 whitespace-nowrap shadow-2xs"
                    >
                      <Download className="w-3.5 h-3.5 text-blue-600 dark:text-gold-400" />
                      <span>Download Official Flyer (PDF)</span>
                    </a>
                  </div>

                  {/* Micro Guarantees Strip */}
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-trust-500" />
                      <span>100% Free with No Hidden Fees</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-blue-600 dark:text-gold-500" />
                      <span>Aligned with CBSE & State Boards</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-500" />
                      <span>Instant 5-Page Report</span>
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
