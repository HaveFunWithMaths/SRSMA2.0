import React, { useState, useEffect } from 'react';
import {
  Menu, X, Phone, MessageSquare, Award, Users, BookOpen,
  CheckCircle, Building2, Star, Send, MapPin, ChevronRight, Sparkles,
  Sun, Moon, HelpCircle, Calculator, ExternalLink, Trophy
} from 'lucide-react';

export const NAV_SECTIONS = [
  { id: 'about-srsma', label: 'About SRSMA', icon: Sparkles },
  { id: 'diagnostic-challenge', label: 'Board Readiness Challenge', icon: Trophy, badge: 'Free Test' },
  { id: 'results', label: 'Results & Proof', icon: Award, badge: '99.48 %ile' },
  { id: 'faculty', label: 'IIT Faculty', icon: Users },
  { id: 'programs', label: 'Programs', icon: BookOpen },
  { id: 'scholarship-calculator', label: 'Scholarship Finder', icon: Calculator },
  { id: 'why-us', label: 'Why SRSMA', icon: CheckCircle },
  { id: 'campus', label: 'Campus & Hostel', icon: Building2 },
  { id: 'testimonials', label: 'Reviews', icon: Star, badge: '4.9 ★' },
  { id: 'faq', label: 'FAQs', icon: HelpCircle },
  { id: 'admissions', label: 'Admissions Form', icon: Send },
  { id: 'contact', label: 'Location', icon: MapPin },
];

export default function NavbarTabs({ activeSection, onOpenDiagnostic, theme, onToggleTheme }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const challengeUrl = 'https://exams.srsma.in/boardChallenge';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 dark:bg-navy-900/95 backdrop-blur-md shadow-md dark:shadow-xl border-b border-slate-200 dark:border-slate-800/80'
        : 'bg-white dark:bg-navy-900 border-b border-slate-200 dark:border-slate-800'
        }`}>
        {/* Main Brand & Action Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-4">
          {/* Brand Logo & Details */}
          <div
            onClick={() => scrollToSection('about-srsma')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative">
              <img
                src="/assets/images/logowhite.jpeg"
                alt="Shri Ram Smart Minds Academy Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-xl border border-gold-500/40 shadow-sm group-hover:scale-105 transition-transform bg-white"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-sm sm:text-lg text-slate-900 dark:text-white tracking-tight leading-tight">
                  Shri Ram Smart Minds Academy
                </span>
                <a
                  href="https://share.google/pHNCn01ZzjrcT5vIS"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="hidden md:inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-gold-500/15 text-gold-700 dark:text-gold-300 border border-gold-500/30 hover:bg-gold-500/25 transition-colors cursor-pointer"
                  title="View SRSMA on Google"
                >
                  <Star className="w-2.5 h-2.5 fill-gold-500 text-gold-500" />
                  4.9 Google
                </a>
              </div>
              <p className="text-[10px] sm:text-xs text-gold-600 dark:text-gold-400 font-semibold uppercase tracking-wider flex items-center gap-1">
                <span>IIT-JEE</span> • <span>NEET</span> • <span>Foundations</span>
                <span className="text-slate-500 dark:text-slate-400 hidden sm:inline">• Sun City, Hyderabad</span>
              </p>
            </div>
          </div>

          {/* Desktop Right Quick Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-gold-400 hover:bg-slate-200 dark:hover:bg-navy-750 transition-colors shadow-sm"
              aria-label="Toggle light/dark theme"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-gold-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            <a
              href="tel:+918463911854"
              className="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-navy-800/80 border border-slate-200 dark:border-slate-700/60 text-xs font-semibold transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
              <span>+91 84639 11854</span>
            </a>

            {/* Direct Link to Board Readiness Challenge */}
            <a
              href={challengeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gold-500/15 hover:bg-gold-500/25 border border-gold-500/40 text-gold-700 dark:text-gold-300 font-bold text-xs transition-colors"
            >
              <Trophy className="w-3.5 h-3.5 text-gold-500" />
              <span>Free Board Readiness Challenge</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={onOpenDiagnostic}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold text-xs tracking-wide shadow-md shadow-gold-500/20 hover:shadow-gold-500/30 transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-gold-400 border border-slate-200 dark:border-slate-700"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <a
              href={challengeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gold-500/15 text-gold-600 dark:text-gold-400 border border-gold-500/40"
              aria-label="Board Readiness Challenge"
              title="Take Free Board Readiness Challenge"
            >
              <Trophy className="w-4 h-4" />
            </a>

            <a
              href="tel:+918463911854"
              className="p-2 rounded-lg bg-slate-100 dark:bg-navy-800 text-gold-600 dark:text-gold-400 border border-slate-200 dark:border-slate-700"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700"
              aria-label="Toggle navigation drawer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Laptop / Desktop Secondary Sticky Tab Bar */}
        <div className="hidden lg:block border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/90 dark:bg-navy-950/70 transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav className="flex items-center space-x-1 overflow-x-auto py-1 scrollbar-none" aria-label="Page Sections">
              {NAV_SECTIONS.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeSection === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => scrollToSection(tab.id)}
                    className={`group relative flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${isActive
                      ? 'bg-gold-500/15 text-gold-700 dark:text-gold-300 font-bold border border-gold-500/30'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-navy-800/60'
                      }`}
                  >
                    <Icon className={`w-3.5 h-3.5 transition-colors ${isActive ? 'text-gold-600 dark:text-gold-400' : 'text-slate-400 group-hover:text-gold-500'
                      }`} />
                    <span>{tab.label}</span>
                    {tab.badge && (
                      <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold uppercase tracking-wider ${isActive
                        ? 'bg-gold-500 text-navy-950'
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700'
                        }`}>
                        {tab.badge}
                      </span>
                    )}

                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full"></span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Drawer / Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-navy-950/80 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white dark:bg-navy-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col z-50 p-5 overflow-y-auto transition-colors duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <img
                  src="/assets/images/logowhite.jpeg"
                  alt="SRSMA"
                  className="w-8 h-8 rounded-lg border border-gold-500/40"
                />
                <div>
                  <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white leading-tight">SRSMA Menu</h3>
                  <p className="text-[10px] text-gold-600 dark:text-gold-400">Sun City, Hyderabad</p>
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Direct Board Readiness Challenge CTA in Drawer */}
            <div className="pt-4">
              <a
                href={challengeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-gold-500/15 border border-gold-500/40 text-gold-700 dark:text-gold-300 text-xs font-bold flex items-center justify-between shadow-xs"
              >
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-gold-500" />
                  <span>Free Board Readiness Challenge Test</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Navigation Tabs List */}
            <div className="py-4 space-y-1 flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 px-3 pb-2">
                Quick Section Jump
              </p>
              {NAV_SECTIONS.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeSection === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => scrollToSection(tab.id)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all text-left ${isActive
                      ? 'bg-gold-500/15 text-gold-700 dark:text-gold-300 font-bold border border-gold-500/30'
                      : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-navy-800'
                      }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-gold-600 dark:text-gold-400' : 'text-slate-400'}`} />
                      <span>{tab.label}</span>
                    </div>
                    {tab.badge ? (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-gold-500/20 text-gold-700 dark:text-gold-400 border border-gold-500/30 font-bold">
                        {tab.badge}
                      </span>
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Drawer Bottom CTAs */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2.5">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenDiagnostic();
                }}
                className="w-full py-3 px-4 rounded-xl bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-xs tracking-wide shadow-md transition-all text-center flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book 1-on-1 Parent Consultation</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+918463911854"
                  className="py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-navy-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
                  <span>Call Us</span>
                </a>
                <a
                  href="https://wa.me/918463911854"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-trust-500/15 border border-trust-500/30 text-trust-600 dark:text-trust-400 text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-trust-500" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
