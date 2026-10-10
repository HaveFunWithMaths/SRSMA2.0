import React, { useState, useEffect, useRef } from 'react';
import { Award, TrendingUp, Users, CheckCircle2, ZoomIn, Sparkles, Trophy, FileText, ExternalLink, ArrowRight } from 'lucide-react';

const KPI_CARDS = [
  {
    metric: '99.48',
    suffix: ' %ile',
    label: 'Top JEE Main Score',
    subtext: 'Top national percentile achieved by our premier batch student',
    tag: 'Highest Rank',
    textColor: 'text-gold-600 dark:text-gold-400',
    borderColor: 'border-gold-500/40 dark:border-gold-500/40'
  },
  {
    metric: '62.5%',
    prefix: '10 / 16 (',
    suffix: ')',
    label: '1st Batch JEE Main',
    subtext: 'Unprecedented 62.5% qualifying rate in inaugural cohort',
    tag: 'Qualifying Rate',
    textColor: 'text-trust-600 dark:text-trust-400',
    borderColor: 'border-trust-500/40 dark:border-trust-500/40'
  },
  {
    metric: '2 / 16',
    suffix: ' Cleared',
    label: 'JEE Advanced',
    subtext: 'Elite rankers clearing India’s toughest engineering exam',
    tag: 'IIT Selection',
    textColor: 'text-blue-600 dark:text-blue-400',
    borderColor: 'border-blue-500/40 dark:border-blue-500/40'
  },
  {
    metric: '98%',
    prefix: 'Up to ',
    suffix: '',
    label: 'Board & IPE Exams',
    subtext: 'Class 10 CBSE & Telangana Intermediate Board toppers',
    tag: 'Dual Excellence',
    textColor: 'text-purple-600 dark:text-purple-400',
    borderColor: 'border-purple-500/40 dark:border-purple-500/40'
  },
  {
    metric: '100+',
    suffix: ' Students',
    label: 'Motivated Scholars',
    subtext: 'Personalized small-batch academy nurturing thinkers, not assembly-line test takers',
    tag: 'Sun City Community',
    textColor: 'text-rose-600 dark:text-rose-400',
    borderColor: 'border-rose-500/40 dark:border-rose-500/40'
  }
];

const TICKER_ITEMS = [
  '🏆 99.48 %ile Top JEE Main Score',
  '⚡ 10 / 16 Qualified in 1st JEE Main Batch (62.5%)',
  '👨‍🏫 100% Core Faculty from IIT Kharagpur, IIT Madras & NIT Warangal',
  '🎯 Free Board Readiness Challenge Diagnostic Test at exams.srsma.in/boardChallenge',
  '🥇 Up to 98% in Telangana State Board (IPE) & CBSE Class 10',
  '🛡️ Strictly Capped at 30 Students Per Cohort',
  '📍 Sankirtan Bhavan, Sun City, Hyderabad'
];

const RESULT_GALLERY = [
  {
    id: 1,
    title: 'JEE Advanced 2026 Results',
    subtitle: 'SRSMA Students Entering Elite IITs',
    src: '/assets/images/JEEAdvResults2026.jpeg',
    badge: 'JEE Advanced',
  },
  {
    id: 2,
    title: 'JEE Main 2026 Top Scores',
    subtitle: '99.48 %ile & High Percentile Cohort',
    src: '/assets/images/JEEMain2026Results.png',
    badge: 'JEE Main 2026',
  },
  {
    id: 3,
    title: 'IPE First Year Board Results',
    subtitle: '98%+ Scores in Physics, Chemistry & Math',
    src: '/assets/images/IPE2025FirstYearResults.png',
    badge: 'State Board & IPE',
  },
  {
    id: 4,
    title: 'JEE Main 2025 Historic Batch',
    subtitle: '10 of 16 Students Cracking JEE Main',
    src: '/assets/images/JEEMain2025Results.png',
    badge: 'Inaugural Batch Record',
  }
];

export default function ProofMetrics({ onOpenLightbox, onOpenDiagnostic }) {
  const challengeUrl = 'https://exams.srsma.in/boardChallenge';

  return (
    <section id="results" className="py-8 md:py-12 bg-white dark:bg-navy-950 border-b border-slate-200 dark:border-slate-800 relative transition-colors duration-200">

      {/* Live Social Proof Ticker Banner */}
      <div className="bg-navy-900 dark:bg-navy-950 text-slate-200 py-3 border-y border-navy-800 dark:border-slate-800 overflow-hidden mb-6 shadow-inner">
        <div className="flex w-max animate-marquee space-x-8 text-xs font-semibold uppercase tracking-wider text-slate-300">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="text-gold-400">{item}</span>
              <span className="text-slate-600">•</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-6 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-600 dark:text-gold-400 text-xs font-semibold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>Documented Academic Proof</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Measurable Results, <span className="text-gradient-gold">Not Empty Claims</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            While mass institutes boast aggregated ranks bought from across India, SRSMA delivers genuine, verifiable results right here from our single Sun City campus with boutique small batches.
          </p>
        </div>

        {/* 5 KPI Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          {KPI_CARDS.map((card, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl bg-white dark:bg-navy-900/90 border ${card.borderColor} shadow-xs dark:shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md dark:hover:shadow-xl flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-xs">
                    {card.tag}
                  </span>
                  <Award className={`w-4 h-4 ${card.textColor}`} />
                </div>
                <div className="text-2xl sm:text-3xl font-display font-black text-slate-900 dark:text-white tracking-tight flex items-baseline">
                  {card.prefix && <span className="text-sm font-bold text-slate-500 dark:text-slate-400 mr-1">{card.prefix}</span>}
                  <span>{card.metric}</span>
                  {card.suffix && <span className="text-xs font-bold text-gold-600 dark:text-gold-400 ml-1">{card.suffix}</span>}
                </div>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1">
                  {card.label}
                </div>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-3 pt-3 border-t border-slate-200 dark:border-slate-800/80 leading-relaxed">
                {card.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Real Scorecard & Results Banners Showcase */}
        <div className="bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-md dark:shadow-2xl transition-colors duration-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>Verified Scorecards & Official Announcements</span>
                <span className="text-xs font-normal text-slate-500 dark:text-slate-400 hidden sm:inline">(Click any card to zoom)</span>
              </h3>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={onOpenDiagnostic}
                className="px-4 py-2 rounded-xl bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-xs transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-sm"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Results Grid - 2 cards in a row on Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {RESULT_GALLERY.map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenLightbox({
                  src: item.src,
                  title: item.title,
                  caption: `${item.subtitle} • Shri Ram Smart Minds Academy Official Record`
                })}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-white dark:bg-navy-950 border border-slate-200 dark:border-slate-800 hover:border-gold-500/50 transition-all duration-300 shadow-sm hover:shadow-lg dark:shadow-md dark:hover:shadow-xl hover:-translate-y-1 flex flex-col"
              >
                {/* Image Frame */}
                <div className="relative aspect-[16/10] bg-slate-100 dark:bg-navy-950 overflow-hidden flex items-center justify-center p-2">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/images/intro.png';
                    }}
                  />
                  <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="p-3 rounded-full bg-gold-500 text-navy-950 font-bold shadow-lg flex items-center gap-1.5 text-xs">
                      <ZoomIn className="w-4 h-4" />
                      <span>View Scorecard</span>
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-white/90 dark:bg-navy-950/90 text-gold-700 dark:text-gold-300 border border-gold-500/30 shadow-xs">
                    {item.badge}
                  </span>
                </div>

                {/* Card Info */}
                <div className="p-5 border-t border-slate-200 dark:border-slate-800 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-display font-bold text-slate-900 dark:text-white text-base sm:text-lg group-hover:text-gold-600 dark:group-hover:text-gold-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                      {item.subtitle}
                    </p>
                  </div>
                  <div className="text-xs text-gold-600 dark:text-gold-400 font-semibold mt-4 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-trust-500" />
                    <span>Verified Official Record</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Trust Note */}
          <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-2">
            <span>All scorecards and roll numbers are available for verification at our Sun City campus office.</span>
            <span className="text-gold-600 dark:text-gold-400 font-bold">100% Genuine Hyderabad Campus Record</span>
          </div>
        </div>

      </div>
    </section>
  );
}
