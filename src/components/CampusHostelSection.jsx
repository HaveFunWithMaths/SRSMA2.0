import React, { useState } from 'react';
import { Building2, Home, Heart, ZoomIn, CheckCircle2, ShieldCheck, Video } from 'lucide-react';
import { motion } from 'framer-motion';

const CAMPUS_DATA = {
  classrooms: [
    {
      title: 'Individualized Attention',
      src: '/assets/images/ClassRoom/Individualized Attention.jpg',
      description: 'Faculties walking down each aisle ensuring every student is actively writing and applying formulas.'
    },
    {
      title: 'Smart Class Room Technology',
      src: '/assets/images/ClassRoom/Smart Class Room.png',
      description: 'High-definition digital boards allowing 3D molecular rotations and physics simulation projections.'
    },
    {
      title: 'Small Batch Sizes (Max 30)',
      src: '/assets/images/ClassRoom/Small Batch Sizes.jpg',
      description: 'Spacious, air-conditioned focused classroom setup where zero questions are suppressed.'
    },
    {
      title: 'Stress-Free Learning Atmosphere',
      src: '/assets/images/ClassRoom/Stress-Free Learning Environment.png',
      description: 'A positive and nurturing space where asking doubts is celebrated, not penalized.'
    },
    {
      title: 'Interactive Classrooms',
      src: '/assets/images/ClassRoom/Interactive Classrooms.png',
      description: 'Peer discussions, interactive Socratic questioning, and deep concept synthesis.'
    },
    {
      title: 'Teachers as Lifelong Mentors',
      src: '/assets/images/ClassRoom/Teachers as Mentors.png',
      description: 'Approachable faculty members who connect with students on academic and personal levels.'
    }
  ],
  hostels: [
    {
      title: 'Boys Hostel Room',
      src: '/assets/images/hostel/Boys Hostel Room.png',
      description: 'Clean, well-ventilated, hygienic living quarters with individual study desks and secure storage.'
    },
    {
      title: 'Girls Hostel Room',
      src: '/assets/images/hostel/Girls Hostel Room.png',
      description: 'Safe, 24/7 guarded residential quarters with biometric security and resident warden supervision.'
    },
    {
      title: 'Girls Hostel Study Room',
      src: '/assets/images/hostel/Girls Hostel Study Room.jpg',
      description: 'Quiet, disciplined common study library designed for focused evening revision.'
    },
    {
      title: 'Distraction-Free Environment',
      src: '/assets/images/hostel/Distraction Free Environment at Hostel.png',
      description: 'Strict smartphone regulation policy allowing students to build prolonged deep focus.'
    },
    {
      title: 'High-Quality Vegetarian Food',
      src: '/assets/images/hostel/High-Quality Vegetarian Food.png',
      description: 'Nutritious, freshly cooked vegetarian meals planned to keep student energy and immunity peak.'
    },
    {
      title: 'Comfortable Hostel Facilities',
      src: '/assets/images/hostel/Comfortable Hostel Facilities.jpg',
      description: 'Full laundry support, hot water, power backup, and round-the-clock medical care assistance.'
    }
  ],
  culture: [
    {
      title: 'Mantra Meditation & Focus',
      src: '/assets/images/culture/Mantra Meditation.png',
      description: 'Daily mindfulness and focus conditioning to improve concentration and mental stamina.'
    },
    {
      title: 'Healthy Recreation & Sports',
      src: '/assets/images/culture/Healthy Recreation.png',
      description: 'Balanced physical games and light exercise to prevent physical stagnation during intensive prep.'
    },
    {
      title: 'Teachers Day Celebrations',
      src: '/assets/images/culture/Teachers Day.jpg',
      description: 'Building deep reverence and warm bond between mentors and students.'
    },
    {
      title: 'Lamp Offering & Tradition',
      src: '/assets/images/culture/Lamp Offering.png',
      description: 'Instilling ethical character, humility, and cultural values alongside academic brilliance.'
    },
    {
      title: 'Drama Screening & Creativity',
      src: '/assets/images/culture/Drama Screening.png',
      description: 'Cultural evenings and moral storytelling encouraging creative perspective and balance.'
    },
    {
      title: 'Birthday Celebrations',
      src: '/assets/images/culture/Birthday Celebrations.png',
      description: 'A warm, home-like family atmosphere where no outstation student feels homesick.'
    }
  ]
};

export default function CampusHostelSection({ onOpenLightbox }) {
  const [activeTab, setActiveTab] = useState('classrooms');

  const currentItems = CAMPUS_DATA[activeTab];

  return (
    <section id="campus" className="py-6 md:py-8 bg-slate-50 dark:bg-navy-950 border-b border-slate-200 dark:border-slate-800 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 dark:bg-gold-500/10 dark:border-gold-500/30 dark:text-gold-400 text-xs font-semibold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Campus, Hostels & Student Life</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            An Environment Built for <span className="text-gradient-gold">Focused Excellence</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            A high-stress environment causes panic; an undisciplined environment causes distraction. SRSMA balances rigorous academic facilities with peaceful, supportive living spaces.
          </p>
        </div>

        {/* Category Tabs with Animated Pill */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-10">
          {[
            { id: 'classrooms', label: 'Classroom Experience', icon: Building2 },
            { id: 'hostels', label: 'Safe Hostels & Food', icon: Home },
            { id: 'culture', label: 'Holistic Culture & Mindset', icon: Heart }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  isActive
                    ? 'text-white dark:text-navy-950 shadow-md shadow-blue-500/20 dark:shadow-glow-champagne'
                    : 'bg-white dark:bg-navy-900/80 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/[0.08]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="campusActiveTab"
                    className="absolute inset-0 bg-blue-600 dark:bg-gradient-to-r dark:from-gold-300 dark:via-gold-400 dark:to-gold-500 rounded-xl"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon className="w-4 h-4 relative z-10" />
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onOpenLightbox({
                src: item.src,
                title: item.title,
                caption: `${item.title} — ${item.description}`
              })}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-white/[0.08] hover:border-blue-500/40 dark:hover:border-gold-500/40 transition-all duration-300 hover:-translate-y-1 shadow-sm dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_10px_25px_-5px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_0_25px_-5px_rgba(245,158,11,0.2)] flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] bg-slate-100 dark:bg-navy-950 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/images/intro.png';
                  }}
                />
                <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2 rounded-full bg-blue-600 text-white dark:bg-gradient-to-r dark:from-gold-300 dark:to-gold-500 dark:text-navy-950 font-bold shadow-lg dark:shadow-glow-champagne flex items-center gap-1 text-xs">
                    <ZoomIn className="w-4 h-4" />
                    <span>Click to Enlarge</span>
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-slate-900 dark:text-white text-base group-hover:text-blue-600 dark:group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/[0.08] flex items-center gap-1.5 text-[11px] text-blue-700 dark:text-gold-300 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-trust-500" />
                  <span>Verified Campus Facility</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Highlight Box */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-white/[0.08] shadow-md dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_20px_40px_-15px_rgba(0,0,0,0.7)] flex flex-col lg:flex-row items-center justify-between gap-8 transition-colors duration-200">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-gold-200 bg-blue-50 dark:bg-gold-500/15 px-2.5 py-1 rounded border border-blue-200 dark:border-gold-500/35 dark:shadow-[0_0_12px_-3px_rgba(245,158,11,0.2)] flex items-center gap-1.5 w-max">
              <Video className="w-3.5 h-3.5" />
              <span>Campus Experience Video</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
              Experience the Joyful, High-Energy Spirit of SRSMA
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Witness our interactive small-batch classrooms, cultural celebrations, and personal mentorship sessions directly in action.
            </p>
          </div>
          <div className="w-full lg:w-96 aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-white/[0.1] shadow-md dark:shadow-2xl bg-slate-900 ring-1 ring-gold-500/30">
            <iframe
              src="https://www.youtube.com/embed/3v4OpPtcvPw?si=OCjC9Js54vRAJ8te"
              title="SRSMA Student Life & Culture"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}
