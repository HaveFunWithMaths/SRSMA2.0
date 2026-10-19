import React from 'react';
import { 
  GraduationCap, Award, Brain, Sparkles, BookOpen, 
  CheckCircle2, ShieldAlert, HeartHandshake, ArrowRight 
} from 'lucide-react';

const CHIEF_MENTOR = {
  name: 'Mr. Amal M Das',
  role: 'Academic Director & Maths HOD',
  almaMater: 'IIT Kharagpur (B.Tech Honors) • MA Psychology',
  specialization: 'Adolescent Psychology, Academic Pressure Decompression & Strategic Exam Mastery',
  image: '/assets/images/Mr. Amal M Das.png',
  bio: 'A distinguished alumnus of IIT Kharagpur with a dual specialization in Engineering and Psychology. Mr. Das bridges the critical gap between high-pressure academic competition and emotional calmness. He personally trains students to eliminate exam-day panic, conquer negative self-talk, and consistently deliver their peak performance under intense timed testing.',
  keyHighlights: [
    'IIT Kharagpur B.Tech (Honors) Graduate',
    'Masters in Psychology (Adolescent Dynamics & Performance Anxiety)',
    '1-on-1 Student Mindset Coaching & Anti-Burnout Protocols',
    'Personal Mentor to 99.48 %ile Top Percentile Rankers'
  ]
};

const FACULTY_MEMBERS = [
  {
    name: 'Mr. Thirumala',
    role: 'Senior Mathematics Faculty',
    almaMater: 'NIT Warangal (M.Tech)',
    experience: '5+ Years Teaching | 9 Years Analytical Problem Solving',
    image: '/assets/images/Mr. Thirumala.png',
    fallbackImage: '/assets/images/Mr. Thirumala.jpg',
    specialty: 'Advanced Calculus, Coordinate Geometry & Algebra Mastery',
    description: 'Brings structured algorithmic frameworks to complex math. Teaches students how to dismantle intimidating multi-concept JEE Advanced problems into intuitive step-by-step logic.',
    badge: 'NIT Warangal'
  },
  {
    name: 'Mr. Ninad',
    role: 'Chemistry HOD',
    almaMater: 'IIT Madras (B.Tech + M.Tech, Dept Topper)',
    experience: '5+ Years Teaching | 6+ Years IIT Mentoring',
    image: '/assets/images/Mr. Ninad.jpg',
    specialty: 'Organic Mechanism Clarity & Inorganic Mnemonics',
    description: 'Department Topper at IIT Madras. Master of conceptual chemistry, converting abstract reaction mechanisms and physical chemistry into score-maximizing, intuitive patterns.',
    badge: 'Chemistry HOD • IIT Madras'
  },
  {
    name: 'Mr. Vrajesh Goutam',
    role: 'Physics HOD',
    almaMater: 'IIT Madras (B.Tech)',
    experience: '10+ Years Top-Tier Kota & National Experience',
    image: '/assets/images/Mr. Brajesh.jpg',
    specialty: 'Rotational Mechanics, Electrodynamics & Modern Physics',
    description: 'Former Senior Physics Faculty at Kota powerhouses including Bansal Classes, Byju’s, and Sri Chaitanya. Renowned for instilling deep intuition for physical laws.',
    badge: 'Physics HOD • IIT Madras'
  },
  {
    name: 'Mrs. Manisha',
    role: 'Biology Faculty & Student Counseling Expert',
    almaMater: 'Masters in Physiotherapy',
    experience: '4+ Years Teaching & Teen Counseling',
    image: '/assets/images/Mrs. Manisha.jpg',
    specialty: 'NEET Botany, Zoology & Stress-Free Retention',
    description: 'Specializes in high-retention NCERT diagrammatic dissection for NEET Medical aspirants alongside providing warm, empathetic academic counseling to alleviate teen study burnout.',
    badge: 'Medical & Biology Expert'
  }
];

export default function FacultySection() {
  return (
    <section id="faculty" className="py-6 md:py-8 bg-slate-50 dark:bg-navy-950 border-b border-slate-200 dark:border-white/[0.08] relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 dark:bg-gold-500/10 dark:border-gold-500/30 dark:text-gold-400 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>100% IIT & NIT Alumni Faculty</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Learn Directly From <span className="text-gradient-gold">The Masters</span>, Not Junior Tutors
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            At large commercial coaching centers, top teachers only teach the select ranker batch while other students are left with fresh college graduates. At SRSMA, every single class and doubt session is conducted by IIT & NIT alumni.
          </p>
        </div>

        {/* Co-Founder & Chief Mentor Special Feature Card */}
        <div className="mb-8 bg-gradient-to-br from-white via-blue-50/20 to-white dark:from-navy-900/95 dark:via-navy-850/95 dark:to-navy-950/95 border border-blue-500/20 dark:border-gold-500/35 rounded-3xl p-5 sm:p-8 shadow-xl dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_25px_50px_-12px_rgba(0,0,0,0.7)] relative overflow-hidden transition-colors duration-200">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 dark:bg-gold-500/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Chief Mentor Portrait */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative group">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-blue-600 dark:border-gold-400 shadow-xl bg-slate-100 dark:bg-navy-900">
                  <img
                    src={CHIEF_MENTOR.image}
                    alt={CHIEF_MENTOR.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/images/intro.png';
                    }}
                  />
                </div>
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3.5 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white dark:from-gold-400 dark:to-gold-600 dark:text-navy-950 text-[11px] font-black rounded-full shadow-md whitespace-nowrap uppercase tracking-wider">
                  Academic Director & Maths HOD
                </span>
              </div>

              <div className="mt-5">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">{CHIEF_MENTOR.name}</h3>
                <p className="text-xs text-blue-700 dark:text-gold-300 font-bold mt-0.5">{CHIEF_MENTOR.almaMater}</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-medium">{CHIEF_MENTOR.role}</p>
              </div>
            </div>

            {/* Chief Mentor Narrative & Mental Resilience Philosophy */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 border border-blue-200 text-blue-800 dark:bg-gold-500/10 dark:border-gold-500/30 dark:text-gold-300 text-xs font-bold">
                <Brain className="w-4 h-4 text-blue-600 dark:text-gold-400" />
                <span>The Rare Dual Advantage: IIT Engineering + Clinical Psychology</span>
              </div>

              <h4 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white leading-snug">
                "Top ranks don't come from pressure cookers. When the mind is calm and confident, the brain solves complex problems effortlessly."
              </h4>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {CHIEF_MENTOR.bio}
              </p>

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {CHIEF_MENTOR.keyHighlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-gold-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Faculty Cards Grid (2x2 on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {FACULTY_MEMBERS.map((fac, idx) => (
            <div
              key={idx}
              className="group bg-white dark:bg-navy-950/90 border border-slate-200 dark:border-white/[0.08] hover:border-blue-500/40 dark:hover:border-gold-500/40 rounded-2xl p-6 shadow-md dark:shadow-xl dark:hover:shadow-[0_0_25px_-5px_rgba(245,158,11,0.15)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Card Info */}
              <div>
                <div className="flex items-start gap-4 mb-4">
                  {/* Portrait */}
                  <div className="relative shrink-0">
                    <div className="w-20 h-20 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-navy-900 group-hover:border-blue-500 dark:group-hover:border-gold-500 transition-colors">
                      <img
                        src={fac.image}
                        alt={fac.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        onError={(e) => {
                          if (fac.fallbackImage && e.target.src !== fac.fallbackImage) {
                            e.target.src = fac.fallbackImage;
                          } else {
                            e.target.onerror = null;
                            e.target.src = '/assets/images/intro.png';
                          }
                        }}
                      />
                    </div>
                  </div>

                  {/* Name & Credentials */}
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 dark:bg-gold-500/10 dark:text-gold-400 dark:border-gold-500/30">
                      {fac.badge}
                    </span>
                    <h3 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white mt-1.5 group-hover:text-blue-600 dark:group-hover:text-gold-300 transition-colors">
                      {fac.name}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                      {fac.role}
                    </p>
                    <p className="text-[11px] text-blue-700 dark:text-gold-400/90 font-semibold mt-0.5">
                      {fac.almaMater}
                    </p>
                  </div>
                </div>

                {/* Experience Badge */}
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-navy-900/90 border border-slate-200 dark:border-white/[0.06] text-[11px] text-slate-700 dark:text-slate-300 font-medium mb-3">
                  <span className="text-blue-700 dark:text-gold-400 font-bold">Track Record: </span>
                  {fac.experience}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {fac.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-6 p-4 rounded-2xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-white/[0.08] text-center text-xs text-slate-600 dark:text-slate-300 max-w-2xl mx-auto flex items-center justify-center gap-2 shadow-sm">
          <CheckCircle2 className="w-4 h-4 text-trust-600 dark:text-trust-500 shrink-0" />
          <span>At SRSMA, no class is outsourced to trainee teachers. Every enrolled child receives direct instruction from this core team.</span>
        </div>

      </div>
    </section>
  );
}
