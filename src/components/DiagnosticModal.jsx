import React, { useState } from 'react';
import {
  X, CheckCircle2, Phone, Calendar, User, BookOpen,
  Send, Sparkles, ShieldCheck, Trophy, ExternalLink, ArrowRight, Download
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DiagnosticModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    currentClass: 'Class 11',
    targetExam: 'IIT-JEE (Main & Advanced)',
    phone: '',
    mode: 'In-Person at Sun City Center',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const challengeUrl = 'https://exams.srsma.in/boardChallenge';

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.phone || !formData.parentName) {
      alert('Please fill in required fields (Parent Name and Phone Number).');
      return;
    }

    const message = `*Parent Diagnostic & Counseling Request - SRSMA*%0A` +
      `---------------------------------------%0A` +
      `*Parent Name:* ${formData.parentName}%0A` +
      `*Student Name:* ${formData.studentName || 'Not specified'}%0A` +
      `*Current Class:* ${formData.currentClass}%0A` +
      `*Target Exam:* ${formData.targetExam}%0A` +
      `*Phone Number:* ${formData.phone}%0A` +
      `*Preferred Mode:* ${formData.mode}%0A` +
      `*Parent Query/Notes:* ${formData.notes || 'Interested in 1-on-1 diagnostic test & mentorship details'}%0A` +
      `---------------------------------------%0A` +
      `_Submitted via SRSMA Official Web Platform_`;

    setSubmitted(true);
    // WhatsApp direct link
    window.open(`https://wa.me/918463911854?text=${message}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 dark:bg-navy-950/85 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative max-w-xl w-full bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/[0.1] rounded-2xl shadow-2xl dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden my-8 transition-colors duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-navy-950 via-[#0a1832] to-navy-900 p-6 border-b border-slate-800/80 dark:border-white/[0.08] text-white relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/35 text-gold-200 text-xs font-semibold mb-2 shadow-[0_0_12px_-3px_rgba(245,158,11,0.25)]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Complimentary Diagnostic Assessment</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
              SRSMA Diagnostic Assessment & Counseling
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Choose to take the test online instantly or schedule an in-person diagnostic test & consultation at our Sun City campus.
            </p>
          </div>

          {/* Option 1: Direct Link to Online Board Readiness Challenge */}
          <div className="p-5 bg-gradient-to-r from-blue-50 via-indigo-50 to-orange-50 dark:from-navy-950 dark:via-gold-500/10 dark:to-navy-950 border-b border-blue-200/80 dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-blue-700 dark:text-gold-200 text-xs font-bold uppercase">
                <Trophy className="w-3.5 h-3.5 text-blue-600 dark:text-gold-400" />
                <span>Instant Online Option</span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-200 font-medium">
                Take the <strong className="text-blue-700 dark:text-gold-300">Board Readiness Challenge</strong> online right now from your home laptop or phone.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
              <a
                href={challengeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white dark:from-gold-300 dark:to-gold-500 dark:text-navy-950 font-black text-xs transition-all shadow-md shadow-orange-500/25 dark:shadow-glow-champagne flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                <span>Launch Board Readiness Challenge</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="/assets/images/brochure/Board Readiness Challenge Pamphlet.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-3 py-2.5 rounded-xl border border-slate-300 dark:border-white/10 hover:border-blue-500 text-slate-700 dark:text-slate-200 font-bold text-xs transition-all flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                <Download className="w-3.5 h-3.5 text-blue-600 dark:text-gold-400" />
                <span>Pamphlet (PDF)</span>
              </a>
            </div>
          </div>

          {submitted ? (
            <div className="p-8 text-center space-y-4">
              <div className="w-16 h-16 bg-trust-500/20 text-trust-600 dark:text-trust-500 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">Inquiry Initiated!</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                We have redirected you to WhatsApp with your customized diagnostic booking message. Our Academic Dean will confirm your slot within 2 business hours.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => { setSubmitted(false); onClose(); }}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold text-sm transition-all shadow-md shadow-orange-500/25"
                >
                  Close Window
                </button>
                <a
                  href="tel:+918463911854"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-600 dark:text-gold-400" />
                  Call: +91 84639 11854
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-4 bg-white dark:bg-navy-900">
              <div className="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Option 2: Schedule In-Person at Sun City Campus
                </span>
                <span className="text-[11px] font-bold text-blue-600 dark:text-gold-400">
                  Sankirtan Bhavan
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Parent's Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g., Rajesh Sharma"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-navy-950/80 border border-slate-300 dark:border-white/[0.08] rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 dark:focus:ring-gold-500/30 dark:focus:border-gold-400 dark:focus:shadow-[0_0_15px_-3px_rgba(245,158,11,0.25)] transition-all shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Student's Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g., Aryan Sharma"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-navy-950/80 border border-slate-300 dark:border-white/[0.08] rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 dark:focus:ring-gold-500/30 dark:focus:border-gold-400 dark:focus:shadow-[0_0_15px_-3px_rgba(245,158,11,0.25)] transition-all shadow-xs"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Current Class / Grade *
                  </label>
                  <select
                    value={formData.currentClass}
                    onChange={(e) => setFormData({ ...formData, currentClass: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-navy-950/80 border border-slate-300 dark:border-white/[0.08] rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 dark:focus:ring-gold-500/30 dark:focus:border-gold-400 dark:focus:shadow-[0_0_15px_-3px_rgba(245,158,11,0.25)] transition-all shadow-xs"
                  >
                    <option className="bg-white dark:bg-navy-900 text-slate-900 dark:text-white" value="Class 8">Class 8th (Foundation)</option>
                    <option className="bg-white dark:bg-navy-900 text-slate-900 dark:text-white" value="Class 9">Class 9th (Pre-JEE/NEET)</option>
                    <option className="bg-white dark:bg-navy-900 text-slate-900 dark:text-white" value="Class 10">Class 10th (Boards + Foundation)</option>
                    <option className="bg-white dark:bg-navy-900 text-slate-900 dark:text-white" value="Class 11">Class 11th (JEE/NEET 2-Year)</option>
                    <option className="bg-white dark:bg-navy-900 text-slate-900 dark:text-white" value="Class 12">Class 12th (JEE/NEET Fast-Track)</option>
                    <option className="bg-white dark:bg-navy-900 text-slate-900 dark:text-white" value="Repeater / Long Term">Long Term / Repeater (JEE/NEET)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Target Exam *
                  </label>
                  <select
                    value={formData.targetExam}
                    onChange={(e) => setFormData({ ...formData, targetExam: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-navy-950/80 border border-slate-300 dark:border-white/[0.08] rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 dark:focus:ring-gold-500/30 dark:focus:border-gold-400 dark:focus:shadow-[0_0_15px_-3px_rgba(245,158,11,0.25)] transition-all shadow-xs"
                  >
                    <option className="bg-white dark:bg-navy-900 text-slate-900 dark:text-white" value="IIT-JEE (Main & Advanced)">IIT-JEE (Main & Advanced)</option>
                    <option className="bg-white dark:bg-navy-900 text-slate-900 dark:text-white" value="NEET Medical">NEET (UG Medical)</option>
                    <option className="bg-white dark:bg-navy-900 text-slate-900 dark:text-white" value="Foundation & Olympiad">STEM Foundation & Olympiads</option>
                    <option className="bg-white dark:bg-navy-900 text-slate-900 dark:text-white" value="Board Exams (CBSE / IPE)">Board Excellence (CBSE / IPE)</option>
                    <option className="bg-white dark:bg-navy-900 text-slate-900 dark:text-white" value="Both JEE & Boards">Dual Prep (JEE + Boards)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    WhatsApp Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-navy-950/80 border border-slate-300 dark:border-white/[0.08] rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 dark:focus:ring-gold-500/30 dark:focus:border-gold-400 dark:focus:shadow-[0_0_15px_-3px_rgba(245,158,11,0.25)] transition-all shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Preferred Mode
                  </label>
                  <select
                    value={formData.mode}
                    onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-navy-950/80 border border-slate-300 dark:border-white/[0.08] rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 dark:focus:ring-gold-500/30 dark:focus:border-gold-400 dark:focus:shadow-[0_0_15px_-3px_rgba(245,158,11,0.25)] transition-all shadow-xs"
                  >
                    <option className="bg-white dark:bg-navy-900 text-slate-900 dark:text-white" value="In-Person at Sun City Center">In-Person at Sun City Center</option>
                    <option className="bg-white dark:bg-navy-900 text-slate-900 dark:text-white" value="Online Video Consultation">Online Video Consultation (Zoom)</option>
                    <option className="bg-white dark:bg-navy-900 text-slate-900 dark:text-white" value="Direct Phone Call">Direct Phone Call</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                  Academic Goals / Specific Query
                </label>
                <textarea
                  rows="2"
                  placeholder="Tell us about student's current preparation or subjects needing attention..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-navy-950/80 border border-slate-300 dark:border-white/[0.08] rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 dark:focus:ring-gold-500/30 dark:focus:border-gold-400 dark:focus:shadow-[0_0_15px_-3px_rgba(245,158,11,0.25)] transition-all shadow-xs resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:via-amber-600 hover:to-orange-700 text-white font-bold text-sm tracking-wide shadow-md shadow-orange-500/25 dark:from-gold-300 dark:via-gold-400 dark:to-gold-500 dark:text-navy-950 dark:shadow-glow-champagne transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Slot & Connect via WhatsApp</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-trust-600 dark:text-trust-500" />
                <span>Confidential. No marketing spam. Direct faculty consultation.</span>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
