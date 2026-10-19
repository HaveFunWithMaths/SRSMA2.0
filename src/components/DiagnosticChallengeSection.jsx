import React, { useState } from 'react';
import {
  Sparkles, ExternalLink, Award, CheckCircle2,
  Brain, Target, Clock, ArrowRight, ShieldCheck,
  BarChart3, Trophy, Download, ZoomIn, FileText,
  Compass, Check
} from 'lucide-react';

const HIGHLIGHT_CARDS = [
  {
    icon: Target,
    title: 'Pinpoint Hidden Score Leaks',
    description: 'Detailed topic-by-topic diagnostic breakdown in Mathematics & Science identifying exact conceptual gaps losing you marks.',
    badge: 'Precision Analytics',
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
    iconColor: 'text-blue-500 dark:text-blue-400'
  },
  {
    icon: BarChart3,
    title: 'Instant 5-Page Diagnostic Report',
    description: 'Comprehensive report revealing Performance Overview, Question-Type Breakdown, Speed vs Accuracy analysis, and a 3-Month Action Plan.',
    badge: '5-Page Report',
    color: 'from-gold-500/20 to-amber-500/20',
    borderColor: 'border-gold-500/40',
    iconColor: 'text-gold-500 dark:text-gold-400'
  },
  {
    icon: Clock,
    title: 'Timed Speed & Composure Test',
    description: '20 questions in 20 minutes to evaluate your true problem-solving speed, time-per-question, and exam-day mental composure.',
    badge: 'Timed Simulation',
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/30',
    iconColor: 'text-trust-500 dark:text-trust-400'
  },
  {
    icon: Brain,
    title: '1-on-1 Strategy with Academic Director',
    description: 'Free academic consultation with Mr. Amal M Das (IIT Kharagpur alumnus & Psychologist) to review your diagnostic report and roadmap.',
    badge: 'Expert Guidance',
    color: 'from-purple-500/20 to-indigo-500/20',
    borderColor: 'border-purple-500/30',
    iconColor: 'text-purple-500 dark:text-purple-400'
  }
];

const STEPS = [
  {
    step: '01',
    title: 'Quick Registration',
    description: 'Visit exams.srsma.in/boardChallenge and enter basic student details in under 30 seconds.'
  },
  {
    step: '02',
    title: '20-Min Challenge',
    description: 'Answer 20 curated conceptual problems covering fundamental reasoning and syllabus mastery.'
  },
  {
    step: '03',
    title: 'Instant 5-Page Report',
    description: 'Get deep analytics highlighting your strengths, speed, accuracy, and syllabus blindspots.'
  },
  {
    step: '04',
    title: '1-on-1 Consultation',
    description: 'Meet Academic Director Mr. Amal M Das online or at Sun City center to build your action roadmap.'
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
              <span>100% Free For Class 10 Students • CBSE & State Board Syllabus</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              SRSMA <span className="text-gradient-gold">Board Readiness Challenge</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Are you Board Ready? 20 Questions in 20 Minutes across Mathematics & Science to pinpoint your score leaks and uncover your genuine conceptual standing.
            </p>
          </div>

          {/* PROMINENT VISUAL FIRST: Visual Showcase Card */}
          <div className="mb-8 rounded-2xl bg-slate-50 dark:bg-navy-950/90 border border-slate-200 dark:border-white/[0.1] p-4 sm:p-6 shadow-md dark:shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Visual Preview Left Column */}
              <div className="lg:col-span-6 flex flex-col items-center">
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
              <div className="lg:col-span-6 space-y-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-500/15 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-[11px] font-bold uppercase tracking-wider">
                    <span>100% Free For Class 10</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 dark:text-white">
                    Can You Score 20/20 in 20 Minutes?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    A high-impact diagnostic assessment aligned with CBSE and State Board syllabi, engineered by IITians to measure concept depth, question application, speed, and accuracy.
                  </p>
                </div>

                {/* 4 Feature Badges from Official Pamphlet */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <div className="p-3 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/[0.08] shadow-2xs">
                    <div className="text-xs font-bold text-blue-700 dark:text-gold-300">⏱️ 20:00 Minutes</div>
                    <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">Timed testing clock</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/[0.08] shadow-2xs">
                    <div className="text-xs font-bold text-blue-700 dark:text-gold-300">❓ 20 Questions</div>
                    <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">Math & Science concepts</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/[0.08] shadow-2xs">
                    <div className="text-xs font-bold text-trust-600 dark:text-trust-400">📊 5-Page Report</div>
                    <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">Instant scorecard & gaps</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/[0.08] shadow-2xs">
                    <div className="text-xs font-bold text-purple-600 dark:text-purple-400">👨‍🏫 1-on-1 Guidance</div>
                    <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">With Academic Director</div>
                  </div>
                </div>

                {/* 5-Page Report Highlights List */}
                <div className="p-3.5 rounded-xl bg-blue-50/70 dark:bg-gold-500/10 border border-blue-200 dark:border-gold-500/30 text-xs text-slate-800 dark:text-slate-200 space-y-1.5">
                  <div className="font-bold text-blue-900 dark:text-gold-300 text-xs flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-trust-500" />
                    <span>What Your 5-Page Report Reveals:</span>
                  </div>
                  <ul className="text-[11px] text-slate-600 dark:text-slate-300 space-y-1 pl-5 list-disc">
                    <li><strong>Performance Overview:</strong> Concepts, Application, Speed, and Accuracy ratings</li>
                    <li><strong>Question-Type Analysis:</strong> Conceptual, Diagram-Based & Formula-Based breakups</li>
                    <li><strong>Chapter & Topic Priority Map:</strong> Identifies where marks are being lost</li>
                    <li><strong>Personalized Action Plan:</strong> Clear 3-month roadmap to boost your final score</li>
                  </ul>
                </div>

                {/* Direct CTA Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-2">
                  <a
                    href={challengeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-orange-500 text-white font-black text-xs tracking-wide shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all flex items-center justify-center gap-2 group whitespace-nowrap"
                  >
                    <span>Launch Challenge Online</span>
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
                    <span>Download Pamphlet (PDF)</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* DESCRIPTION & 4 EVALUATION PILLARS */}
          <div className="mb-6 space-y-4">
            <div className="text-center max-w-2xl mx-auto space-y-1">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
                Your Score is Only the Start. <span className="text-gradient-gold">Where are You Losing Marks?</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Most students practice blindly without realizing which specific chapters or question styles cost them ranks. Our diagnostic system makes your preparation surgical and stress-free.
              </p>
            </div>

            {/* Core Highlights 4-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {HIGHLIGHT_CARDS.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    className={`p-5 rounded-2xl bg-white dark:bg-navy-950/80 border ${card.borderColor} dark:border-white/[0.08] dark:hover:border-gold-500/40 shadow-sm hover:shadow-md dark:shadow-md dark:hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                          {card.badge}
                        </span>
                        <Icon className={`w-5 h-5 ${card.iconColor}`} />
                      </div>
                      <h4 className="font-display font-bold text-slate-900 dark:text-white text-base">
                        {card.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1 text-[11px] font-semibold text-blue-700 dark:text-gold-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-trust-500" />
                      <span>100% Complimentary</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* How It Works 4-Step Process */}
          <div className="bg-slate-50/90 dark:bg-navy-950/70 rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-white/[0.08] mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-center mb-5">
              How the Diagnostic Challenge Works
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {STEPS.map((step, idx) => (
                <div key={idx} className="relative flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600 dark:bg-gradient-to-br dark:from-gold-300 dark:to-gold-500 text-white dark:text-navy-950 font-black text-sm flex items-center justify-center mb-3 shadow-md dark:shadow-glow-champagne">
                    {step.step}
                  </div>
                  <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Security / Trust Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-trust-500" />
              <span>100% Free with No Hidden Fees</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-blue-600 dark:text-gold-500" />
              <span>Aligned with CBSE & Telangana State Board</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-500" />
              <span>Instant 5-Page Detailed Diagnostic Report</span>
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
