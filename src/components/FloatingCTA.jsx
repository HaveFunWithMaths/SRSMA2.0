import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp, Calendar, Sparkles, Trophy, ExternalLink } from 'lucide-react';

export default function FloatingCTA({ onOpenDiagnostic }) {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const challengeUrl = 'https://exams.srsma.in/boardChallenge';

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Back to Top Floating Button (Desktop & Mobile) */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 md:bottom-8 right-5 z-40 p-3 rounded-full bg-white/90 dark:bg-navy-900/90 text-blue-600 dark:text-gold-300 border border-slate-200 dark:border-white/[0.1] shadow-md dark:shadow-glow-champagne hover:bg-slate-100 dark:hover:bg-navy-800 hover:text-blue-700 dark:hover:text-gold-200 transition-all hover:scale-110 backdrop-blur-sm"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Sticky Bottom Bar for Mobile (Always accessible, High CRO) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 dark:bg-navy-950/95 backdrop-blur-md border-t border-slate-200 dark:border-white/[0.08] p-2.5 px-3 card-elevation-subtle transition-colors duration-200">
        <div className="flex items-center gap-2 max-w-md mx-auto">
          {/* Quick Call */}
          <a
            href="tel:+918463911854"
            className="flex-1 py-2.5 px-2 rounded-xl bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-white/[0.08] text-slate-800 dark:text-slate-100 font-bold text-xs flex items-center justify-center gap-1.5 shadow-2xs active:scale-95 transition-transform"
          >
            <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-gold-300" />
            <span>Call</span>
          </a>

          {/* Quick WhatsApp */}
          <a
            href="https://wa.me/918463911854?text=Hello%20SRSMA,%20I%20am%20a%20parent%20interested%20in%20admissions%20and%20diagnostic%20test."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs active:scale-95 transition-transform"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          {/* Consultation / Test Button */}
          <button
            onClick={onOpenDiagnostic}
            className="flex-[1.4] py-2.5 px-2.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-orange-500 text-white dark:from-gold-300 dark:via-gold-400 dark:to-gold-500 dark:text-navy-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-md dark:shadow-glow-champagne active:scale-95 transition-transform"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Book Free Test</span>
          </button>
        </div>
      </div>
    </>
  );
}
