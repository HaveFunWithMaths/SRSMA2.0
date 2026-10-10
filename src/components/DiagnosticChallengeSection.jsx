import React from 'react';
import {
  Sparkles, ExternalLink, Award, CheckCircle2,
  Brain, Target, Clock, ArrowRight, ShieldCheck,
  BarChart3, HelpCircle, Trophy, BookOpen, Download
} from 'lucide-react';

const HIGHLIGHT_CARDS = [
  {
    icon: Target,
    title: 'Pinpoint Hidden Concept Gaps',
    description: 'Detailed topic-by-topic diagnostic breakdown in Physics, Chemistry, Math & Biology identifying exact areas losing you marks.',
    badge: 'Precision Analytics',
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
    iconColor: 'text-blue-500 dark:text-blue-400'
  },
  {
    icon: Trophy,
    title: 'Up to 100% Merit Scholarship',
    description: 'Top performers qualify for immediate tuition fee concessions in our exclusive 30-student Arjuna Super-30 Cohort.',
    badge: 'Merit Rewards',
    color: 'from-gold-500/20 to-amber-500/20',
    borderColor: 'border-gold-500/40',
    iconColor: 'text-gold-500 dark:text-gold-400'
  },
  {
    icon: BarChart3,
    title: 'Statewide Peer Benchmarking',
    description: 'Predictive rank readiness and comparative percentile analysis calibrated against Telangana & Andhra competitors.',
    badge: 'Rank Prediction',
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/30',
    iconColor: 'text-trust-500 dark:text-trust-400'
  },
  {
    icon: Brain,
    title: '1-on-1 IITian Strategy Session',
    description: 'Free 30-minute academic consultation with our IIT faculty dean to review your test report and map your roadmap.',
    badge: 'Expert Guidance',
    color: 'from-purple-500/20 to-indigo-500/20',
    borderColor: 'border-purple-500/30',
    iconColor: 'text-purple-500 dark:text-purple-400'
  }
];

const STEPS = [
  {
    step: '01',
    title: 'Start Test Online',
    description: 'Click the link to open exams.srsma.in/boardChallenge and register in under 30 seconds.'
  },
  {
    step: '02',
    title: '20-Min Assessment',
    description: 'Answer curated conceptual problems covering fundamental reasoning and syllabus mastery.'
  },
  {
    step: '03',
    title: 'Instant Diagnostic Report',
    description: 'Get deep analytics highlighting your strengths, speed, accuracy, and syllabus blindspots.'
  },
  {
    step: '04',
    title: 'Scholarship & Admission',
    description: 'Claim your scholarship slab and lock in your seat in our 30-student Sun City cohorts.'
  }
];

export default function DiagnosticChallengeSection({ onOpenDiagnostic }) {
  const challengeUrl = 'https://exams.srsma.in/boardChallenge';

  return (
    <section
      id="diagnostic-challenge"
      className="py-6 md:py-8 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-navy-950 dark:via-navy-900 dark:to-navy-950 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-br from-gold-500/10 via-blue-600/5 to-purple-600/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Main Banner Container */}
        <div className="relative rounded-3xl bg-white dark:bg-gradient-to-br dark:from-navy-900/90 dark:via-navy-850/90 dark:to-navy-950/95 border-2 border-blue-500/30 dark:border-gold-500/35 p-5 sm:p-8 md:p-8 shadow-2xl dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_25px_50px_-12px_rgba(0,0,0,0.8)] overflow-hidden">

          {/* Top Decorative Flare */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 dark:bg-gold-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-6 space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 dark:bg-gold-500/15 dark:border-gold-500/40 dark:text-gold-300 text-xs font-bold uppercase tracking-wider animate-pulse-subtle">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-gold-400" />
              <span>Free Diagnostic Assessment • All Telangana & Hyderabad Students</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              SRSMA <span className="text-gradient-gold">Board Readiness Challenge</span> Diagnostic Test
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Uncover your child’s genuine conceptual standing before competitive exam pressure begins. Designed by IITians to assess foundational strength, test speed, and eligibility for <strong className="text-slate-900 dark:text-white">up to 100% Merit Scholarships</strong>.
            </p>
          </div>

          {/* Core Highlights 4-Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
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
                    <h3 className="font-display font-bold text-slate-900 dark:text-white text-base">
                      {card.title}
                    </h3>
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

          {/* How It Works 4-Step Process */}
          <div className="bg-slate-50/90 dark:bg-navy-950/70 rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-white/[0.08] mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-center mb-5">
              How the Diagnostic Test Works
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

          {/* Primary High-Converting CTA Box */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-5 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-cyan-500/10 dark:from-gold-500/15 dark:via-amber-500/10 dark:to-navy-900 border border-blue-200 dark:border-gold-500/35 dark:shadow-[inset_0_1px_0_0_rgba(254,243,199,0.1)]">
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-trust-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-trust-500"></span>
                </span>
                <span className="text-xs font-bold text-trust-700 dark:text-trust-400 uppercase tracking-wide">
                  Live Online Portal Open
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white">
                Take the Free Board Readiness Challenge Online Now
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Direct access on <strong className="text-blue-700 dark:text-gold-300">exams.srsma.in/boardChallenge</strong>. Open for Classes 8, 9, 10, 11, 12 & Repeaters.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <a
                href={challengeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-orange-500 text-white font-black text-sm tracking-wide shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all flex items-center justify-center gap-2.5 group transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                <span>Launch Board Readiness Challenge Test</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="/assets/images/brochure/Board Readiness Challenge Pamphlet.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-4 rounded-xl border border-slate-300 dark:border-white/10 hover:border-blue-500 dark:hover:border-gold-500/50 bg-white dark:bg-navy-900 text-slate-800 dark:text-slate-200 font-bold text-xs transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-xs"
              >
                <Download className="w-4 h-4 text-blue-600 dark:text-gold-400" />
                <span>Download Challenge Pamphlet</span>
              </a>

              <button
                onClick={onOpenDiagnostic}
                className="w-full sm:w-auto px-5 py-4 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-blue-500 bg-white dark:bg-navy-900 text-slate-800 dark:text-slate-200 font-bold text-xs transition-all flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                <span>Prefer In-Person?</span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-600 dark:text-gold-500" />
              </button>
            </div>
          </div>

          {/* Bottom Security / Trust Guarantees */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-[11px] text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-trust-500" />
              <span>100% Free with No Hidden Fees</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-blue-600 dark:text-gold-500" />
              <span>Recognized for SRSMA Arjuna Batch Scholarships</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-500" />
              <span>Instant Scorecard & Analysis</span>
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
