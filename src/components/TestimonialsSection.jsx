import React, { useState } from 'react';
import { Star, Quote, CheckCircle, Award, Sparkles } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Mr. Sachin',
    role: 'Parent of JEE Aspirant',
    category: 'parent',
    avatar: '/assets/images/review/Mr Sachin.png',
    rating: 5,
    quote: 'The students get genuine personal attention and they are not pressurized or forced in any commercial way. The IIT and NIT qualified faculty of SRSMA is fully committed to the students’ individual conceptual success.'
  },
  {
    name: 'Mrs. Nidhi',
    role: 'Principal, Sloka The School',
    category: 'parent',
    avatar: '/assets/images/review/Mrs Nidhi.png',
    rating: 5,
    quote: 'Batch size is strictly not more than 30 students, so they make learning genuinely engaging and fun for the students. That is the single best differentiator I noticed compared to massive commercial institutes.'
  },
  {
    name: 'Advaith',
    role: 'Class 11 JEE Student',
    category: 'student',
    avatar: '/assets/images/review/Advaith.png',
    rating: 5,
    quote: 'The way they teach us is the fundamentals step by step, learning from the very roots. The IIT faculty is consistently approachable and readily available for clarifying doubts whenever needed.'
  },
  {
    name: 'Sneha',
    role: 'Long-term JEE Ranker',
    category: 'student',
    avatar: '/assets/images/review/Sneha.jpg',
    rating: 5,
    quote: 'SRSMA transformed my JEE preparation with their stress-free, supportive environment. Their expert guidance on conceptual clarity was instrumental in boosting my confidence and exam day performance.'
  },
  {
    name: 'Sumedh',
    role: 'Class 12 JEE Student',
    category: 'student',
    avatar: '/assets/images/review/Sumedh.png',
    rating: 5,
    quote: 'When I joined here I was lack of confidence and disinterested, but gaining strong conceptual clarity made me enjoy learning. Now I genuinely look forward to tackling new complex problems every day.'
  },
  {
    name: 'Saloni',
    role: 'NEET Medical Aspirant',
    category: 'student',
    avatar: '/assets/images/review/Saloni.jpg',
    rating: 5,
    quote: 'SRSMA refined my academic approach, making me far more disciplined and confident. Clear, concept-focused teaching drastically improved my Physics understanding. Every single doubt is addressed patiently.'
  }
];

export default function TestimonialsSection() {
  const [filter, setFilter] = useState('all');

  const filteredList = filter === 'all' 
    ? TESTIMONIALS 
    : TESTIMONIALS.filter((t) => t.category === filter);

  return (
    <section id="testimonials" className="py-6 md:py-8 bg-white dark:bg-navy-900 border-b border-slate-200 dark:border-slate-800 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 dark:bg-gold-500/15 dark:border-gold-500/35 dark:text-gold-200 dark:shadow-[0_0_15px_-4px_rgba(245,158,11,0.2)] text-xs font-semibold uppercase tracking-wider">
            <Quote className="w-3.5 h-3.5" />
            <span>Parent & Student Voices</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Loved by Parents, <span className="text-gradient-gold">Trusted by Toppers</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Hear directly from Hyderabad parents, school principals, and students who experienced the life-changing SRSMA mentorship difference.
          </p>
        </div>

        {/* Google Reviews Trust Badge */}
        <a
          href="https://share.google/pHNCn01ZzjrcT5vIS"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-5 max-w-md mx-auto p-4 rounded-2xl bg-slate-50 dark:bg-navy-950 border border-blue-200/80 dark:border-white/[0.08] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_10px_25px_-5px_rgba(0,0,0,0.5)] flex items-center justify-between shadow-sm hover:border-blue-400 dark:hover:border-gold-500/40 dark:hover:shadow-[0_0_20px_-5px_rgba(245,158,11,0.2)] transition-all group cursor-pointer"
          title="Read our Google Reviews"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/[0.08] flex items-center justify-center shadow-xs font-black text-blue-500 text-xl group-hover:scale-105 transition-transform">
              G
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-amber-500">
                <span className="text-base font-black text-slate-900 dark:text-white">4.9</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 group-hover:text-blue-700 dark:group-hover:text-gold-300 transition-colors">Verified Google Business Reviews</p>
            </div>
          </div>
          <span className="text-xs font-bold text-trust-600 dark:text-trust-300 bg-trust-500/15 px-2.5 py-1 rounded-lg border border-trust-500/30">
            100% Genuine
          </span>
        </a>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-2 mb-5">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === 'all'
                ? 'bg-blue-600 text-white dark:bg-gradient-to-r dark:from-gold-300 dark:via-gold-400 dark:to-gold-500 dark:text-navy-950 dark:shadow-glow-champagne shadow-md'
                : 'bg-slate-100 dark:bg-navy-950/80 text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-white border border-slate-200 dark:border-white/[0.08]'
            }`}
          >
            All Reviews ({TESTIMONIALS.length})
          </button>
          <button
            onClick={() => setFilter('parent')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === 'parent'
                ? 'bg-blue-600 text-white dark:bg-gradient-to-r dark:from-gold-300 dark:via-gold-400 dark:to-gold-500 dark:text-navy-950 dark:shadow-glow-champagne shadow-md'
                : 'bg-slate-100 dark:bg-navy-950/80 text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-white border border-slate-200 dark:border-white/[0.08]'
            }`}
          >
            Parents & Principals
          </button>
          <button
            onClick={() => setFilter('student')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === 'student'
                ? 'bg-blue-600 text-white dark:bg-gradient-to-r dark:from-gold-300 dark:via-gold-400 dark:to-gold-500 dark:text-navy-950 dark:shadow-glow-champagne shadow-md'
                : 'bg-slate-100 dark:bg-navy-950/80 text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-white border border-slate-200 dark:border-white/[0.08]'
            }`}
          >
            Student Aspirants
          </button>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredList.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-navy-950/80 border border-slate-200 dark:border-white/[0.08] hover:border-gold-500/40 dark:hover:border-gold-500/40 rounded-2xl p-6 shadow-xs hover:shadow-md dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_10px_25px_-5px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_0_25px_-5px_rgba(245,158,11,0.2)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-gold-500 dark:text-gold-300 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500 dark:fill-gold-300" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author info */}
              <div className="flex items-center gap-3.5 mt-6 pt-4 border-t border-slate-200 dark:border-white/[0.08]">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-gold-500/40 bg-slate-100 dark:bg-navy-900 shrink-0">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/images/intro.png';
                    }}
                  />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-gold-700 dark:text-gold-300 font-medium">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges bottom */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-white/[0.08] pt-8">
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-trust-600 dark:text-trust-400" />
            <span>100% Genuine Enrolled Student Reviews</span>
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-gold-600 dark:text-gold-300" />
            <span>Verified Sun City Community Feedback</span>
          </span>
        </div>

      </div>
    </section>
  );
}
