import React from 'react';
import {
  Award, CheckCircle2, Star, ShieldCheck, ArrowRight,
  Sparkles, GraduationCap, Users, Calendar, HeartHandshake,
  ExternalLink, MapPin
} from 'lucide-react';

export default function HeroSection({ onOpenDiagnostic, onExploreFaculty, onOpenLightbox }) {
  const challengeUrl = 'https://exams.srsma.in/boardChallenge';

  return (
    <section
      id="about-srsma"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-navy-950 dark:via-[#081224] dark:to-navy-950 pb-6 md:pb-8 border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white transition-colors duration-200"
    >
      {/* Backwards-compatibility anchor for #overview */}
      <div id="overview" className="sr-only" />

      {/* Top Banner Covering Entire Horizontal Screen */}
      <div
        onClick={() => onOpenLightbox && onOpenLightbox({
          src: '/assets/images/HeroSection/banner.jpeg',
          title: 'SRSMA Results 2026',
          caption: 'Where Guidance Meets Determination, Results Follow • 10 Out of 16 Students JEE Main Qualified'
        })}
        className="w-full relative overflow-hidden bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-sm cursor-pointer group"
      >
        <img
          src="/assets/images/HeroSection/banner.jpeg"
          alt="SRSMA Results 2026 — 10 Out of 16 Students JEE Main Qualified"
          className="w-full h-auto block select-none"
          loading="eager"
        />
        <div className="absolute bottom-2 sm:bottom-3 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-full pointer-events-none flex items-center gap-1.5 shadow-sm">
          <span>Click to zoom</span>
        </div>
      </div>

      {/* Atmospheric Ambient Glow Mesh */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[420px] bg-gradient-to-br from-gold-500/10 via-blue-500/5 to-indigo-500/10 dark:from-gold-500/15 dark:via-blue-600/10 dark:to-indigo-600/15 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gold-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 md:pt-8">

        {/* Unified 2-Column Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Column: Brand, Value Proposition & Direct CTAs */}
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left">

            {/* Top Admissions & Badge Strip */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 dark:bg-gold-500/15 dark:border-gold-500/40 dark:text-gold-300 text-xs font-semibold shadow-xs">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 dark:bg-gold-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-gold-500"></span>
                </span>
                <span>Admissions 2027–2029 Open</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-gold-400" />
                <span>Sun City, Hyderabad</span>
              </div>
            </div>

            {/* Main Title & Dynamic Tagline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-display font-black text-prussian-700 dark:text-white tracking-tight leading-[1.12]">
                <span className="block">Shri Ram</span>
                <span className="block">Smart Minds Academy</span>
              </h1>

              <p className="text-xl sm:text-2xl md:text-3xl font-display font-extrabold text-hero-tagline leading-snug">
                Personal Mentorship by Top IIT & NIT Alumni
              </p>
            </div>

            {/* Subtext */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Strictly capped at <strong className="text-slate-900 dark:text-white font-bold">30 students per batch</strong>. Zero junior tutors, zero mass-factory pressure—just rigorous conceptual clarity and genuine personal care.
            </p>

            {/* CTA Buttons Strip */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              <button
                onClick={onOpenDiagnostic}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-orange-500 text-white font-black text-sm tracking-wide shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all flex items-center justify-center gap-2 group transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                <span>Book 1-on-1 Consultation</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onExploreFaculty}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-blue-500/60 dark:hover:border-gold-500/60 bg-white dark:bg-navy-900/90 hover:bg-slate-50 dark:hover:bg-navy-800 text-slate-800 dark:text-slate-200 hover:text-blue-700 dark:hover:text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Meet Faculty</span>
                <Users className="w-4 h-4 text-blue-600 dark:text-gold-400" />
              </button>
            </div>

            {/* Guarantees & Trust Factors */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800/80">
              <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <ShieldCheck className="w-4 h-4 text-trust-600 dark:text-trust-400" />
                <span>Max 30 Students / Batch</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <GraduationCap className="w-4 h-4 text-blue-600 dark:text-gold-400" />
                <span>100% Core Alumni Faculty</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-trust-600 dark:text-trust-400" />
                <span>Transparent Progress Tracking</span>
              </span>
            </div>

          </div>

          {/* Right Column: High-Trust Verified Proof & Scorecard Spotlight */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Subtle Glowing ambient card background */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500/20 to-indigo-600/20 dark:from-gold-500/25 dark:to-amber-500/15 rounded-3xl blur-2xl opacity-75"></div>

              <div className="relative bg-white dark:bg-navy-900/90 border border-slate-200/90 dark:border-white/[0.1] rounded-2xl p-5 sm:p-6 card-elevation-subtle dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_20px_40px_-15px_rgba(0,0,0,0.7)] space-y-4 transition-colors duration-200">

                {/* Card Top Label */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-trust-500 animate-pulse"></span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 tracking-wider uppercase">
                      Classroom Track Record
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-blue-700 dark:text-gold-300 bg-blue-50 dark:bg-gold-500/15 px-2 py-0.5 rounded-md border border-blue-200 dark:border-gold-500/40">
                    Sun City Center
                  </span>
                </div>

                {/* Score Spotlight Banner */}
                <div
                  onClick={() => onOpenLightbox({
                    src: '/assets/images/JEEMain2026Results.png',
                    title: 'JEE Main Results Highlight',
                    caption: 'Authentic SRSMA Classroom Batch Performance — 99.48 %ile Top Percentile'
                  })}
                  className="group cursor-pointer relative rounded-xl overflow-hidden border border-blue-200 dark:border-gold-500/40 bg-slate-50 dark:bg-navy-950/80 p-4 transition-all hover:border-blue-400 dark:hover:border-gold-400 dark:hover:shadow-[0_0_25px_-5px_rgba(245,158,11,0.25)] card-lift-hover shadow-2xs"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-blue-700 dark:text-gold-400 flex items-center gap-1">
                        <Award className="w-3.5 h-3.5" />
                        <span>Top JEE Main Score</span>
                      </div>
                      <div className="text-3xl sm:text-4xl font-display font-black text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-gold-200 transition-colors">
                        99.48 <span className="text-lg font-bold text-orange-600 dark:text-gold-400">%ile</span>
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">Highest Percentile (1st Batch)</div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block p-2.5 rounded-xl bg-blue-50 dark:bg-gold-500/20 text-blue-600 dark:text-gold-300 group-hover:scale-110 transition-transform shadow-xs">
                        <Award className="w-6 h-6" />
                      </span>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 font-medium">Click to zoom</div>
                    </div>
                  </div>
                </div>

                {/* Proof Metrics Mini-Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-navy-950/80 border border-slate-200 dark:border-white/[0.08] shadow-xs">
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">1st Batch JEE Main</div>
                    <div className="text-xl font-bold text-trust-600 dark:text-trust-400 mt-0.5">10 / 16 (62.5%)</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-navy-950/80 border border-slate-200 dark:border-white/[0.08] shadow-xs">
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Board & IPE Toppers</div>
                    <div className="text-xl font-bold text-blue-600 dark:text-sky-400 mt-0.5">Up to 98%</div>
                  </div>
                </div>

                {/* Faculty Mentors Spotlight Strip */}
                <div className="pt-1">
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 flex items-center justify-between">
                    <span>Guided Personally By Core Alumni</span>
                    <span className="text-[11px] text-blue-700 dark:text-gold-300 font-bold">Zero Junior Tutors</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-navy-950/90 border border-slate-200 dark:border-white/[0.08] text-xs shadow-xs">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2 overflow-hidden">
                        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-navy-900 object-cover" src="/assets/images/Mr. Amal M Das.png" alt="Mr. Amal M Das" />
                        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-navy-900 object-cover" src="/assets/images/Mr. Thirumala.jpg" alt="Mr. Thirumala" />
                        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-navy-900 object-cover" src="/assets/images/Mr. Ninad.jpg" alt="Mr. Ninad" />
                        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-navy-900 object-cover" src="/assets/images/Mr. Brajesh.jpg" alt="Mr. Vrajesh" />
                      </div>
                      <span className="text-slate-600 dark:text-slate-300 text-[11px] font-medium">IIT Kharagpur, IIT Madras, NIT Warangal</span>
                    </div>
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
