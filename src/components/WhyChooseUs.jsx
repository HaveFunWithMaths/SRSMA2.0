import React from 'react';
import {
  Users, CheckCircle2, XCircle, ShieldCheck,
  MessageSquare, HeartPulse, Sparkles, ArrowRight,
  Target, FileSpreadsheet, Brain, Laptop, BarChart2,
  ExternalLink
} from 'lucide-react';

const FLYWHEEL_STEPS = [
  {
    step: 'Step 1',
    title: 'First-Principles Theory',
    subtitle: 'Derived From Roots',
    description: 'Concepts are unpacked from fundamental physics and mathematical logic rather than rote memorizing formulas.',
    icon: Brain,
    color: 'from-blue-500/20 to-indigo-500/20',
    iconColor: 'text-blue-500'
  },
  {
    step: 'Step 2',
    title: 'Daily Practice Problems (DPP)',
    subtitle: 'Immediate Numerical Application',
    description: '15–20 curated questions assigned immediately after every lecture to solidify concept retention that very night.',
    icon: FileSpreadsheet,
    color: 'from-gold-500/20 to-amber-500/20',
    iconColor: 'text-gold-500'
  },
  {
    step: 'Step 3',
    title: 'Desk-Side Doubt Resolution',
    subtitle: 'Direct IITian Consultation',
    description: 'Students sit face-to-face with the core IIT/NIT alumni who taught the class. Zero junior trainee tutors.',
    icon: Users,
    color: 'from-emerald-500/20 to-trust-500/20',
    iconColor: 'text-trust-500'
  },
  {
    step: 'Step 4',
    title: 'Proctored Weekly CBT Exams',
    subtitle: 'Actual NTA Test Simulation',
    description: 'Weekly full-syllabus tests conducted on computer terminals replicating the exact JEE Main/Advanced screen interface.',
    icon: Laptop,
    color: 'from-purple-500/20 to-rose-500/20',
    iconColor: 'text-purple-500'
  },
  {
    step: 'Step 5',
    title: 'Parent WhatsApp Analytics',
    subtitle: 'Zero Surprises At Exam Time',
    description: 'Granular test marks, attendance, and faculty behavioral notes delivered directly to parents every weekend.',
    icon: BarChart2,
    color: 'from-rose-500/20 to-orange-500/20',
    iconColor: 'text-rose-500'
  }
];

const COMPARISON_POINTS = [
  {
    feature: 'Batch Strength & Seating',
    massFactory: '80 to 120+ students crammed in auditorium lecture halls; backbenchers easily go unnoticed.',
    srsma: 'Strictly capped at 25 to 30 students. Every student sits in eye-contact distance of the faculty.',
  },
  {
    feature: 'Who Actually Clears Doubts?',
    massFactory: 'Senior faculty leaves immediately. Doubts dumped onto inexperienced junior tutors or third-party apps.',
    srsma: '100% doubt resolution directly by the core IITian & NITian faculty who teach the lectures.',
  },
  {
    feature: 'Parent Communication & Updates',
    massFactory: 'Generic automated SMS or silence until fees are due. Parents have zero direct faculty contact.',
    srsma: 'Weekly granular performance & test analytics shared directly to parent WhatsApp with teacher notes.',
  },
  {
    feature: 'Exam Anxiety & Mental Health',
    massFactory: 'High-pressure atmosphere leading to burnout, guilt, and severe exam-day performance anxiety.',
    srsma: 'Dedicated mental health & counseling headed by IIT Kharagpur alumnus and psychologist Mr. Amal M Das.',
  },
  {
    feature: 'Board Exams vs Competitive Exams',
    massFactory: 'School and Board syllabi neglected completely, causing panic during Class 10 & 12 state board exams.',
    srsma: 'Dual-excellence curriculum syncing CBSE & Telangana IPE Board syllabi directly into JEE/NEET prep.',
  }
];

const FOUR_PILLARS = [
  {
    icon: Users,
    title: 'Small Batch Policy',
    subtitle: 'Max 25–30 Students',
    description: 'No student is an anonymous roll number. Teachers know every child’s handwriting, conceptual gaps, and learning pace.'
  },
  {
    icon: ShieldCheck,
    title: 'Direct IITian Doubts',
    subtitle: 'Zero Trainee Tutors',
    description: 'When your child has a doubt in rotational physics or organic mechanisms, they sit directly across an IITian.'
  },
  {
    icon: MessageSquare,
    title: 'Weekly Parent Reporting',
    subtitle: 'Direct WhatsApp Analytics',
    description: 'Every test scorecard, attendance log, and behavioral observation is sent transparently to parents every single week.'
  },
  {
    icon: HeartPulse,
    title: 'Mindset & Mental Wellness',
    subtitle: 'Stress-Free Academic Success',
    description: 'Regular counseling, mantra meditation, and emotional decompression sessions prevent student burnout and panic.'
  }
];

export default function WhyChooseUs({ onOpenDiagnostic }) {
  const challengeUrl = 'https://exams.srsma.in/boardChallenge';

  return (
    <section id="why-us" className="py-8 md:py-12 bg-slate-50 dark:bg-navy-900 border-b border-slate-200 dark:border-slate-800 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-600 dark:text-gold-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The SRSMA Advantage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Discerning Parents Choose <span className="text-gradient-gold">Smart Minds</span> Over Mega Factories
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Education is not a commercial assembly line. Discover why our personalized small-batch model consistently delivers higher qualifying percentages and happier, more confident students.
          </p>
        </div>

        {/* The 5-Step SRSMA Learning Flywheel Infographic */}
        <div className="mb-8 bg-white dark:bg-navy-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-8 shadow-lg dark:shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-700 dark:text-gold-400 bg-gold-500/15 px-3 py-1 rounded-full border border-gold-500/30">
              Our Proprietary Pedagogy
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
              The 5-Step SRSMA Mentorship Flywheel
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              How we systematically turn struggling learners into top-percentile problem solvers without stress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {FLYWHEEL_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="relative p-5 rounded-2xl bg-white dark:bg-navy-900/90 border border-slate-200 dark:border-slate-800 hover:border-gold-500/50 transition-all flex flex-col justify-between shadow-xs hover:shadow-md overflow-hidden group"
                >
                  {/* Step Accent Glow */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color}`} />
                  
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-gold-500/15 text-gold-700 dark:text-gold-300">
                        {step.step}
                      </span>
                      <Icon className={`w-5 h-5 ${step.iconColor}`} />
                    </div>
                    <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm">
                      {step.title}
                    </h4>
                    <p className="text-[11px] font-semibold text-gold-600 dark:text-gold-400 mt-0.5">
                      {step.subtitle}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {FOUR_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-navy-950 border border-slate-200 dark:border-slate-800 hover:border-gold-500/40 transition-all duration-300 hover:-translate-y-1 shadow-sm dark:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gold-500/15 text-gold-600 dark:text-gold-400 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-slate-900 dark:text-white text-lg">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-semibold text-gold-600 dark:text-gold-400 mt-0.5">
                    {pillar.subtitle}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* WhatsApp Real-time Parent Transparency Preview & Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-center">
          {/* WhatsApp Report Card Visual */}
          <div className="lg:col-span-5 bg-white dark:bg-navy-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 card-elevation-subtle relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">SRSMA Academic Mentor</h4>
                  <p className="text-[10px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Verified Weekly Update to Parent
                  </p>
                </div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium">Sunday 6:30 PM</span>
            </div>

            {/* Chat bubble mock */}
            <div className="mt-4 space-y-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-500/20 text-slate-800 dark:text-slate-200 space-y-2">
                <p className="font-semibold text-emerald-800 dark:text-emerald-300">
                  Respected Parents, weekly progress report for <span className="underline decoration-emerald-500 font-bold">Rohan S. (Batch JEE-27)</span>:
                </p>
                <div className="space-y-1 text-[11px] text-slate-700 dark:text-slate-300">
                  <div className="flex justify-between">
                    <span>• Rotational Motion CBT Test:</span>
                    <strong className="text-emerald-700 dark:text-emerald-300 font-bold">84 / 100 (Class Rank 3)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>• DPP Assignment Completion:</span>
                    <strong className="text-emerald-700 dark:text-emerald-300 font-bold">100% (On-time)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>• 1-on-1 IITian Doubt Sessions:</span>
                    <strong className="text-emerald-700 dark:text-emerald-300 font-bold">3 Resolved (Physics & Calc)</strong>
                  </div>
                </div>
                <p className="text-[10px] text-slate-600 dark:text-slate-400 italic pt-1 border-t border-emerald-500/20">
                  "Rohan is excelling in concept grasping. We are reinforcing multi-concept torque problems this Wednesday." — Er. Pradeep (IIT KGP)
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-850 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
              <span>Zero secrecy. 100% parental peace of mind.</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">#TransparencyFirst</span>
            </div>
          </div>

          {/* Quick Pitch next to it */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-700 dark:text-gold-400 bg-gold-500/10 dark:bg-gold-500/15 px-3 py-1 rounded-full border border-gold-500/30 inline-block">
              Total Transparency Guarantee
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white leading-tight">
              You Never Have to Wonder <span className="text-gradient-gold">How Your Child is Doing</span>
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              At corporate coaching factories, parents are left in total dark until exam results drop or next installment fees are due. At SRSMA, our core IITian faculty maintains personal direct communication with parents every single week.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white dark:bg-navy-950 border border-slate-200 dark:border-slate-800">
                <div className="text-base font-black text-slate-900 dark:text-white">Every Sunday</div>
                <div className="text-xs text-slate-600 dark:text-slate-400">Automated granular scorecards</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-navy-950 border border-slate-200 dark:border-slate-800">
                <div className="text-base font-black text-slate-900 dark:text-white">Open Door</div>
                <div className="text-xs text-slate-600 dark:text-slate-400">Meet Dean or Mentors anytime</div>
              </div>
            </div>
          </div>
        </div>

        {/* Side-by-side Parent Decision Matrix */}
        <div className="bg-white dark:bg-navy-950 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden card-elevation-subtle transition-colors duration-200">
          <div className="p-6 sm:p-8 bg-slate-50 dark:bg-navy-900/60 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">
                The Hard Truth: Mega Coaching Factories vs. SRSMA Small-Batch Model
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                A transparent comparison every parent in Sun City and Hyderabad must consider before paying massive non-refundable fees.
              </p>
            </div>
            <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gold-500/20 text-gold-700 dark:text-gold-300 border border-gold-500/30 whitespace-nowrap">
              Parent Decision Guide
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-100/90 dark:bg-navy-950/90 text-slate-700 dark:text-slate-400 text-[11px] uppercase tracking-wider font-semibold">
                  <th className="py-4 px-6 w-1/4">Critical Factor</th>
                  <th className="py-4 px-6 w-[37.5%] text-rose-600 dark:text-rose-400">Typical Mega Coaching Factory</th>
                  <th className="py-4 px-6 w-[37.5%] text-amber-700 dark:text-gold-300 bg-amber-500/10 dark:bg-gold-500/15 font-bold">Shri Ram Smart Minds Academy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800/80">
                {COMPARISON_POINTS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-navy-900/40 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900 dark:text-white align-top">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-slate-600 dark:text-slate-300 align-top">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.massFactory}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-900 dark:text-slate-100 align-top bg-amber-500/10 dark:bg-gold-500/15">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-trust-400 shrink-0 mt-0.5" />
                        <span className="font-semibold">{row.srsma}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer Callout */}
          <div className="p-6 bg-slate-50 dark:bg-navy-900/80 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-600 dark:text-slate-300 text-center sm:text-left">
              <strong className="text-slate-900 dark:text-white font-bold">Give your child the attention they deserve.</strong> Limited to 30 seats per cohort to preserve personal care.
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenDiagnostic}
                className="px-5 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-xs tracking-wide transition-all shadow-md flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>Book Dean Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
