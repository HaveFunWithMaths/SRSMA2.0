import React, { useState } from 'react';
import {
  HelpCircle, ChevronDown, MessageSquare, Phone,
  Sparkles, CheckCircle2, ShieldCheck, GraduationCap
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ_CATEGORIES = [
  { id: 'all', label: 'All FAQs' },
  { id: 'admissions', label: 'Admissions & Batches' },
  { id: 'academics', label: 'Academics & Boards' },
  { id: 'faculty', label: 'IIT Mentors & Doubts' },
  { id: 'diagnostic', label: 'Diagnostic Test & Scholarship' },
  { id: 'hostels', label: 'Hostel & Commute' }
];

const FAQS = [
  {
    category: 'admissions',
    question: 'Why does SRSMA strictly cap batches at 25–30 students?',
    answer: 'At 80–120 student commercial coaching factories, teachers only focus on the top 5 rankers while average or quiet students become invisible. With a maximum of 30 students per cohort, every child sits in eye-contact distance of our IIT faculty, questions are actively encouraged, and teachers personally know each student\'s handwriting, pace, and weak topics.'
  },
  {
    category: 'admissions',
    question: 'How can parents enroll for the 2027–2029 academic cycle?',
    answer: 'Admissions are conducted on a first-come, first-served basis after the student completes the free SRSMA Board Readiness Challenge Diagnostic Test (either online at exams.srsma.in/boardChallenge or in-person at our Sun City center). Once conceptual readiness is assessed, our Academic Dean sits with parents for a 1-on-1 counseling session to finalize the program and scholarship slab.'
  },
  {
    category: 'academics',
    question: 'Will my child be able to balance CBSE / Telangana State Board (IPE) with JEE/NEET?',
    answer: 'Yes, seamlessly. SRSMA operates an integrated dual-excellence curriculum where Board syllabi and competitive problem-solving are synced together. Our students achieved up to 98% in IPE 1st Year State Board exams while concurrently clearing JEE Main with scores up to 99.48 percentile. Your child does not experience double burden or conflicting school-coaching timetables.'
  },
  {
    category: 'academics',
    question: 'What happens if my child misses a class or gets sick?',
    answer: 'We provide structured catch-up sessions, comprehensive classroom notes, and 1-on-1 revision slots with the subject faculty. Because of our small batch sizes, teachers instantly notice an absence and proactively bring the student up to speed before the next concept is introduced.'
  },
  {
    category: 'faculty',
    question: 'Who actually clears student doubts on a daily basis?',
    answer: '100% of doubts are solved directly by our core IITian and NITian faculty (Mr. Thirumala, Mr. Ninad, Mr. Brajesh, etc.). Unlike mass institutes where senior teachers leave immediately after lectures and dump doubts onto junior college interns or app chatbots, SRSMA students sit face-to-face across our senior faculty every single day.'
  },
  {
    category: 'faculty',
    question: 'What is the role of Chief Academic Mentor Mr. Amal M Das?',
    answer: 'Mr. Amal M Das is an alumnus of IIT Kharagpur (B.Tech Honors) and holds a Masters in Psychology. He specializes in adolescent performance psychology and competitive anxiety management. He conducts regular 1-on-1 counseling, anti-burnout mindset coaching, and focus conditioning to ensure students remain emotionally calm, confident, and resilient under exam-day conditions.'
  },
  {
    category: 'diagnostic',
    question: 'What is the SRSMA Board Readiness Challenge Diagnostic Test and is it free?',
    answer: 'The SRSMA Board Readiness Challenge is a 100% free conceptual screening test accessible at exams.srsma.in/boardChallenge. It evaluates student problem-solving speed, foundational accuracy, and syllabus retention across Physics, Chemistry, Mathematics, and Biology. High performers qualify for merit scholarships of up to 100% tuition fee waivers.'
  },
  {
    category: 'diagnostic',
    question: 'Can my child take the test from home or must we visit the center?',
    answer: 'Students can take the test immediately online from home by visiting exams.srsma.in/boardChallenge on any laptop, tablet, or smartphone. Alternatively, parents who prefer a proctored in-person experience can schedule an appointment to take the test directly at our Sun City center at Sankirtan Bhavan.'
  },
  {
    category: 'hostels',
    question: 'What facilities are provided in the boys and girls hostels?',
    answer: 'We provide separate, dedicated hostel buildings for boys and girls with 24/7 resident warden supervision, CCTV security, biometric entry for girls, quiet individual study desks, high-speed laundry support, and 100% nutritious vegetarian meals. We also enforce a strict smartphone regulation policy to ensure deep, distraction-free study hours.'
  },
  {
    category: 'hostels',
    question: 'How does studying at Sun City benefit students living in Hyderabad?',
    answer: 'Sun City is centrally located and easily accessible from Bandlaguda Jagir, Langer Houz, Rajendranagar, Attapur, and Mehdipatnam. By choosing SRSMA, students avoid spending 2 to 3 exhausting hours stuck in traffic commuting to distant hubs like Madhapur or Kukatpally, saving critical energy for sleep, self-study, and sports.'
  }
];

export default function FAQSection({ onOpenDiagnostic }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIndex, setOpenIndex] = useState(0);

  const filteredFaqs = activeCategory === 'all'
    ? FAQS
    : FAQS.filter(f => f.category === activeCategory);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-6 md:py-8 bg-white dark:bg-navy-950 border-b border-slate-200 dark:border-slate-800 relative transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-600 dark:text-gold-400 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Parent & Student Clarifications</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Clear, transparent answers to help parents in Sun City & Hyderabad make an informed decision for their child's academic future.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {FAQ_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setOpenIndex(0); // reset open to first item in new category
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${isActive
                  ? 'bg-gold-500 text-navy-950 shadow-md shadow-gold-500/20'
                  : 'bg-slate-100 dark:bg-navy-900 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
                  }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 shadow-xs overflow-hidden ${isOpen
                    ? 'border-gold-500/40 bg-white dark:bg-navy-900 shadow-sm'
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-navy-900/60 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors hover:bg-slate-50 dark:hover:bg-navy-850/60"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-slate-900 dark:text-white text-sm sm:text-base pr-2">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-gold-500 text-navy-950' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                    }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/80 dark:border-slate-800/80 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div>
            <h4 className="font-display font-bold text-slate-900 dark:text-white text-base">
              Have a specific question about your child's learning profile?
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
              Speak directly with our Academic Dean or book your free diagnostic slot.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/918463911854?text=Hello%20SRSMA,%20I%20have%20a%20question%20regarding%20admissions."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-trust-600 hover:bg-trust-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-sm whitespace-nowrap"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp</span>
            </a>
            <button
              onClick={onOpenDiagnostic}
              className="px-4 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-xs flex items-center gap-1.5 transition-colors shadow-sm whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
