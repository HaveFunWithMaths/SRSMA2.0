import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ChevronLeft, ChevronRight, ZoomIn, Sparkles,
  BookOpen, Compass, Trophy, HeartHandshake, Clock,
  Brain, ShieldCheck, Award, Eye
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const HERO_SLIDES = [
  {
    id: 'student-matters',
    title: 'Every Student Matters',
    tag: 'Core Philosophy',
    subtitle: 'Small Batches • Personal Attention • Individual Mentoring',
    src: '/assets/images/HeroSection/EveryStudentMatters.jpeg',
    badge: '1-on-1 Mentorship',
    icon: HeartHandshake,
    caption: 'At SRSMA, your child is not just another name on a list. Small Batches • Personal Attention • Individual Mentoring.',
    accentColor: 'from-amber-500 to-orange-500'
  },
  {
    id: 'jee-journey',
    title: 'JEE Preparation Journey',
    tag: 'Engineering Excellence',
    subtitle: 'Start Strong • Think Deep • Aim High (JEE Main & Advanced)',
    src: '/assets/images/HeroSection/Jee.jpeg',
    badge: 'IIT-JEE Track',
    icon: Compass,
    caption: 'Concept-First Learning • Rigorous Practice • Continuous Assessment • JEE Main & Advanced Readiness Roadmap.',
    accentColor: 'from-blue-600 to-indigo-600'
  },
  {
    id: 'neet-journey',
    title: 'NEET Medical Track',
    tag: 'Medical Aspirants',
    subtitle: 'Learn Deep • Think Sharp • Dream Medicine (Boards + NEET)',
    src: '/assets/images/HeroSection/NEET.jpeg',
    badge: 'NEET Medical',
    icon: Trophy,
    caption: 'Strong Concepts • NCERT Mastery • Confident Preparation • Dual Goals: Board Exams + NEET Medical in One Journey.',
    accentColor: 'from-emerald-600 to-teal-600'
  },
  {
    id: 'monitoring-system',
    title: 'Student Progress System',
    tag: 'Continuous Improvement',
    subtitle: 'Track Progress • Identify Gaps • Guide Improvement',
    src: '/assets/images/HeroSection/Improve.jpeg',
    badge: 'Diagnostic Loop',
    icon: Brain,
    caption: 'How Do We Know Your Child is Improving? 6-Step Monitoring Cycle, AI Powered Testing Portal & Personalized Faculty Feedback.',
    accentColor: 'from-purple-600 to-indigo-600'
  },
  {
    id: 'disciplined-day',
    title: 'Disciplined Daily Routine',
    tag: 'Consistency & Habits',
    subtitle: '7:00 AM to 10:00 PM Timetable • Study, Rest, Play, Repeat',
    src: '/assets/images/HeroSection/Discipline.jpeg',
    badge: 'Campus Routine',
    icon: Clock,
    caption: 'A Disciplined Day Builds Consistency. Balanced Timetable: Academics, Meditation, Nutritious Meals, Sports & Rest.',
    accentColor: 'from-cyan-600 to-blue-600'
  },
  {
    id: 'culture-values',
    title: 'Rooted in Culture',
    tag: 'Values for Life',
    subtitle: 'Daily Meditation • Celebrations • Yatras & Supportive Community',
    src: '/assets/images/HeroSection/Culture.jpeg',
    badge: 'Values & Character',
    icon: Sparkles,
    caption: 'Rooted in Culture, Growing Together. Daily Japa Meditation, Birthday Celebrations, Hampi Yatras & Lifelong Values.',
    accentColor: 'from-rose-600 to-amber-600'
  }
];

export default function HeroSlider({ onOpenLightbox }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoPlayRef = useRef(null);

  const currentSlide = HERO_SLIDES[currentIndex];

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const handleSelect = (idx) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;
    autoPlayRef.current = setInterval(() => {
      handleNext();
    }, 5500);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [handleNext, isPaused]);

  // Touch Swipe Handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const handleZoom = () => {
    if (onOpenLightbox) {
      onOpenLightbox({
        src: currentSlide.src,
        title: currentSlide.title,
        caption: currentSlide.caption
      });
    }
  };

  return (
    <div
      className="mb-8 w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top Slide Quick Selector Navigation Bar */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 dark:bg-gold-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-gold-500"></span>
          </span>
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
            SRSMA Campus & Academic Showcase
          </span>
        </div>

        {/* Counter Badge */}
        <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-navy-900 px-2.5 py-0.5 rounded-full border border-slate-200 dark:border-white/[0.08]">
          <span className="text-blue-700 dark:text-gold-300 font-extrabold">{currentIndex + 1}</span> / {HERO_SLIDES.length}
        </div>
      </div>

      {/* Main Interactive Slide Display Card */}
      <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-navy-950/90 border-2 border-blue-500/25 dark:border-gold-500/35 shadow-xl dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_20px_45px_-12px_rgba(0,0,0,0.7)] group">
        
        {/* Aspect Ratio Box holding the Image Banner */}
        <div
          onClick={handleZoom}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] md:aspect-[16/9] lg:aspect-[1.5/1] max-h-[520px] bg-slate-900 cursor-pointer overflow-hidden flex items-center justify-center select-none"
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.img
              key={currentSlide.id}
              src={currentSlide.src}
              alt={currentSlide.title}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="w-full h-full object-contain bg-slate-950"
              loading="eager"
            />
          </AnimatePresence>

          {/* Hover Zoom Overlay */}
          <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
            <span className="px-5 py-2.5 rounded-full bg-blue-600 text-white dark:bg-gold-500 dark:text-navy-950 font-bold text-xs shadow-xl flex items-center gap-2 transform group-hover:scale-105 transition-transform">
              <ZoomIn className="w-4 h-4" />
              <span>Click to Zoom Full Infographic</span>
            </span>
          </div>

          {/* Top Left Tag Badge */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-navy-950/90 text-gold-300 border border-gold-500/40 text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-md backdrop-blur-md">
              {currentSlide.badge}
            </span>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-navy-950/80 hover:bg-navy-950 text-white border border-white/20 hover:border-gold-400 shadow-xl transition-all transform hover:scale-110 active:scale-95 z-20 cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5 text-white dark:text-gold-300" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-navy-950/80 hover:bg-navy-950 text-white border border-white/20 hover:border-gold-400 shadow-xl transition-all transform hover:scale-110 active:scale-95 z-20 cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5 text-white dark:text-gold-300" />
          </button>
        </div>

        {/* Bottom Banner Info Bar & Interactive Slide Switcher */}
        <div className="p-3 sm:p-4 bg-white dark:bg-navy-950 border-t border-slate-200 dark:border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Active Slide Details */}
          <div className="text-center md:text-left space-y-0.5">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-gold-400">
                {currentSlide.tag}
              </span>
              <span className="text-slate-400 dark:text-slate-600">•</span>
              <h3 className="text-sm sm:text-base font-display font-extrabold text-slate-900 dark:text-white">
                {currentSlide.title}
              </h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
              {currentSlide.subtitle}
            </p>
          </div>

          {/* Quick Clickable Thumbnails / Topic Pills */}
          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            {HERO_SLIDES.map((slide, idx) => {
              const Icon = slide.icon;
              const isActive = idx === currentIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => handleSelect(idx)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white dark:bg-gradient-to-r dark:from-gold-400 dark:to-gold-500 dark:text-navy-950 shadow-xs scale-105'
                      : 'bg-slate-100 dark:bg-navy-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-navy-850 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/[0.06]'
                  }`}
                  title={slide.title}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{slide.title}</span>
                  <span className="sm:hidden">{idx + 1}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Auto-Play Running Progress Line */}
        <div className="w-full bg-slate-200 dark:bg-slate-800 h-1 overflow-hidden">
          <div
            key={currentIndex}
            className={`h-full bg-gradient-to-r ${currentSlide.accentColor} ${
              !isPaused ? 'animate-progress' : ''
            }`}
            style={{
              animationDuration: '5.5s',
              animationTimingFunction: 'linear'
            }}
          />
        </div>

      </div>

      {/* Mobile Hint */}
      <div className="mt-2 text-center sm:text-right text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-center sm:justify-end gap-1.5">
        <ZoomIn className="w-3 h-3 text-blue-600 dark:text-gold-400" />
        <span>Click any banner to zoom in full resolution • Swipe left/right on mobile</span>
      </div>
    </div>
  );
}
