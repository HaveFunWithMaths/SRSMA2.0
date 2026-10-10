import React, { useState, useEffect } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import NavbarTabs from './components/NavbarTabs';
import HeroSection from './components/HeroSection';
import DiagnosticChallengeSection from './components/DiagnosticChallengeSection';
import ProofMetrics from './components/ProofMetrics';
import FacultySection from './components/FacultySection';
import ProgramsSection from './components/ProgramsSection';
import StudentResourcesPortal from './components/StudentResourcesPortal';
import WhyChooseUs from './components/WhyChooseUs';
import CampusHostelSection from './components/CampusHostelSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import AdmissionForm from './components/AdmissionForm';
import LocationContact from './components/LocationContact';
import FloatingCTA from './components/FloatingCTA';
import ImageLightbox from './components/ImageLightbox';
import DiagnosticModal from './components/DiagnosticModal';

const SECTION_IDS = [
  'about-srsma',
  'diagnostic-challenge',
  'results',
  'faculty',
  'programs',
  'why-us',
  'campus',
  'testimonials',
  'faq',
  'admissions',
  'contact'
];

export default function App() {
  const [activeSection, setActiveSection] = useState('about-srsma');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);

  // URL-based Student Resources Portal Routing (/Class8, /Class9, /Class10, /CrashCourse)
  const getInitialPortalClass = () => {
    if (typeof window === 'undefined') return null;
    const path = window.location.pathname.replace(/^\//, '').replace(/\/$/, '');
    const validKeys = ['Class8', 'Class9', 'Class10', 'CrashCourse'];
    const matched = validKeys.find((k) => k.toLowerCase() === path.toLowerCase());
    return matched || null;
  };

  const [portalViewClass, setPortalViewClass] = useState(getInitialPortalClass);

  // Handle browser Back & Forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setPortalViewClass(getInitialPortalClass());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleOpenPortal = (classKey) => {
    setPortalViewClass(classKey);
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', `/${classKey}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackToAcademy = () => {
    setPortalViewClass(null);
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Light/Dark mode state management (default to light mode)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('srsma_theme');
      if (savedTheme) return savedTheme;
      return 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('srsma_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Scroll spy effect to highlight current active tab
  useEffect(() => {
    if (portalViewClass) return; // disable scroll spy in portal view

    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 160; // offset for sticky navbars

      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const sectionId = SECTION_IDS[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy(); // initial check

    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [portalViewClass]);

  const handleExploreFaculty = () => {
    const facultySection = document.getElementById('faculty');
    if (facultySection) {
      const navHeight = 120;
      const elementPosition = facultySection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // If a student portal is active, render the dedicated React portal!
  if (portalViewClass) {
    return (
      <div className="min-h-screen bg-white dark:bg-navy-950 text-slate-900 dark:text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white dark:selection:bg-gold-500 dark:selection:text-navy-950 transition-colors duration-200">
        <StudentResourcesPortal
          initialClass={portalViewClass}
          onBack={handleBackToAcademy}
          theme={theme}
          onToggleTheme={toggleTheme}
          onOpenDiagnostic={() => setIsDiagnosticOpen(true)}
        />

        {/* Diagnostic Booking Modal */}
        <DiagnosticModal
          isOpen={isDiagnosticOpen}
          onClose={() => setIsDiagnosticOpen(false)}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-navy-950 text-slate-900 dark:text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white dark:selection:bg-gold-500 dark:selection:text-navy-950 transition-colors duration-200">

      {/* 1. Announcement Bar */}
      <AnnouncementBar onOpenDiagnostic={() => setIsDiagnosticOpen(true)} />

      {/* 2. Sticky Tabbed Navigation */}
      <NavbarTabs
        activeSection={activeSection}
        onOpenDiagnostic={() => setIsDiagnosticOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main className="flex-1 pb-16 lg:pb-0">

        {/* 3. Hero Section */}
        <HeroSection
          onOpenDiagnostic={() => setIsDiagnosticOpen(true)}
          onExploreFaculty={handleExploreFaculty}
          onOpenLightbox={(img) => setLightboxImage(img)}
        />

        {/* 4. Dedicated Board Readiness Challenge Diagnostic Test Section */}
        <DiagnosticChallengeSection
          onOpenDiagnostic={() => setIsDiagnosticOpen(true)}
        />

        {/* 5. Proof & Key Metrics + Live Proof Ticker */}
        <ProofMetrics
          onOpenLightbox={(img) => setLightboxImage(img)}
          onOpenDiagnostic={() => setIsDiagnosticOpen(true)}
        />

        {/* 6. Star Faculty Section */}
        <FacultySection />

        {/* 7. Academic Programs & Integrated Cohort Matcher */}
        <ProgramsSection
          onOpenDiagnostic={() => setIsDiagnosticOpen(true)}
        />

        {/* 8. Why Parents Trust SRSMA + 5-Step Flywheel */}
        <WhyChooseUs
          onOpenDiagnostic={() => setIsDiagnosticOpen(true)}
        />

        {/* 10. Campus, Classrooms & Hostels */}
        <CampusHostelSection
          onOpenLightbox={(img) => setLightboxImage(img)}
        />

        {/* 11. Parent & Student Reviews + Google 4.9 Rating */}
        <TestimonialsSection />

        {/* 12. Interactive FAQ Accordion */}
        <FAQSection
          onOpenDiagnostic={() => setIsDiagnosticOpen(true)}
        />

        {/* 13. Admissions & Lead Capture Form */}
        <AdmissionForm />

        {/* 14. Location, Google Map & Contact */}
        <LocationContact />
      </main>

      {/* Floating Action Elements (Mobile Bottom Bar & Back to Top) */}
      <FloatingCTA onOpenDiagnostic={() => setIsDiagnosticOpen(true)} />

      {/* Image Lightbox Modal */}
      <ImageLightbox
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />

      {/* Diagnostic Booking Modal */}
      <DiagnosticModal
        isOpen={isDiagnosticOpen}
        onClose={() => setIsDiagnosticOpen(false)}
      />

    </div>
  );
}
