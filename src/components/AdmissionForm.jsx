import React, { useState } from 'react';
import { 
  Send, Phone, CheckCircle2, ShieldCheck, 
  Sparkles, Calendar, User, BookOpen, Clock 
} from 'lucide-react';

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    currentClass: '11th',
    targetExam: 'IIT-JEE (Main & Advanced)',
    phone: '',
    query: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.parentName || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }

    const message = `*Admissions & Counseling Inquiry - SRSMA*%0A` +
      `------------------------------------%0A` +
      `*Parent Name:* ${formData.parentName}%0A` +
      `*Student Name:* ${formData.studentName || 'Not mentioned'}%0A` +
      `*Current Class:* ${formData.currentClass}%0A` +
      `*Target Exam:* ${formData.targetExam}%0A` +
      `*WhatsApp Phone:* ${formData.phone}%0A` +
      `*Inquiry Details:* ${formData.query || 'Interested in batch admissions and scholarship diagnostic test'}%0A` +
      `------------------------------------%0A` +
      `_Submitted via SRSMA Official Website_`;

    setSubmitted(true);
    window.open(`https://wa.me/918463911854?text=${message}`, '_blank');
  };

  return (
    <section id="admissions" className="py-6 md:py-8 bg-slate-50 dark:bg-navy-950 border-b border-slate-200 dark:border-slate-800 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Why Inquire Now */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-600 dark:text-gold-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Admissions 2027–2029</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
              Secure Your Child’s Seat in our <span className="text-gradient-gold">Limited 30-Student</span> Batches
            </h2>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Because we enforce a strict 30-student batch limit, seats fill rapidly every academic cycle. Speak directly with our IIT Dean to evaluate your child’s preparation timeline.
            </p>

            {/* Benefit Checkpoints */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-gold-500/20 text-gold-600 dark:text-gold-400 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Free Conceptual Diagnostic Assessment</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Pinpoint exact strengths and syllabus gaps before enrolling.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-gold-500/20 text-gold-600 dark:text-gold-400 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">1-on-1 Parent Consultation with IITian Faculty</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Meet the actual teachers who will mentor your child daily.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-gold-500/20 text-gold-600 dark:text-gold-400 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Up to 100% Merit Scholarship Available</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Recognizing deserving talent based on performance in our diagnostic screening.</p>
                </div>
              </div>
            </div>

            {/* Direct Helpline Box */}
            <div className="p-4 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Prefer speaking directly right now?</div>
                <a href="tel:+918463911854" className="text-base font-bold text-gold-600 dark:text-gold-400 hover:underline">
                  +91 84639 11854
                </a>
              </div>
              <a
                href="tel:+918463911854"
                className="p-3 rounded-xl bg-gold-500 text-navy-950 font-bold shadow-md hover:bg-gold-400 transition-colors"
                aria-label="Call Admissions Desk"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Lead Capture Card */}
          <div className="lg:col-span-7">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-500/20 to-blue-600/20 rounded-3xl blur-lg"></div>
              
              <div className="relative bg-white dark:bg-navy-900 border border-slate-200 dark:border-gold-500/30 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl dark:shadow-2xl transition-colors duration-200">
                
                {submitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 bg-trust-500/20 text-trust-600 dark:text-trust-500 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                      Thank You! Your Inquiry is Dispatched.
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                      We opened WhatsApp with your pre-filled inquiry. Our senior academic counselor will connect with you shortly with syllabus schedules and counseling dates.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold text-xs transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="border-b border-slate-200 dark:border-slate-800 pb-4 mb-4">
                      <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">
                        Admissions & Diagnostic Inquiry Form
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Fill out the details below. We instantly prepare your WhatsApp priority message.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                          Parent's Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g., Ramesh Varma"
                          value={formData.parentName}
                          onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-navy-950/90 border border-slate-300 dark:border-slate-700/80 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-all shadow-xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                          Student's Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., Pranav Varma"
                          value={formData.studentName}
                          onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-navy-950/90 border border-slate-300 dark:border-slate-700/80 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-all shadow-xs"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                          Student's Current Class *
                        </label>
                        <select
                          value={formData.currentClass}
                          onChange={(e) => setFormData({ ...formData, currentClass: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-navy-950/90 border border-slate-300 dark:border-slate-700/80 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-all shadow-xs"
                        >
                          <option value="8th" className="bg-white dark:bg-navy-900">Class 8th (Junior Foundation)</option>
                          <option value="9th" className="bg-white dark:bg-navy-900">Class 9th (Pre-JEE/NEET Foundation)</option>
                          <option value="10th" className="bg-white dark:bg-navy-900">Class 10th (Boards + Olympiad)</option>
                          <option value="11th" className="bg-white dark:bg-navy-900">Class 11th (JEE/NEET 2-Year)</option>
                          <option value="12th" className="bg-white dark:bg-navy-900">Class 12th (Fast-Track Rankers)</option>
                          <option value="Long Term" className="bg-white dark:bg-navy-900">Long Term / Repeater</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                          Target Competitive Exam *
                        </label>
                        <select
                          value={formData.targetExam}
                          onChange={(e) => setFormData({ ...formData, targetExam: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-navy-950/90 border border-slate-300 dark:border-slate-700/80 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-all shadow-xs"
                        >
                          <option value="IIT-JEE (Main & Advanced)" className="bg-white dark:bg-navy-900">IIT-JEE (Main & Advanced)</option>
                          <option value="NEET (UG Medical)" className="bg-white dark:bg-navy-900">NEET (UG Medical)</option>
                          <option value="Foundation & Olympiads" className="bg-white dark:bg-navy-900">STEM Foundation & Olympiads</option>
                          <option value="Both JEE & Boards" className="bg-white dark:bg-navy-900">Dual (JEE + CBSE/State Boards)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        WhatsApp Contact Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 84639 11854"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-navy-950/90 border border-slate-300 dark:border-slate-700/80 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-all shadow-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        Specific Questions / Student Background
                      </label>
                      <textarea
                        rows="2"
                        placeholder="e.g., Looking for hostel facilities, or need conceptual support in Physics..."
                        value={formData.query}
                        onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-navy-950/90 border border-slate-300 dark:border-slate-700/80 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-all shadow-xs resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-gold-500 via-gold-600 to-gold-500 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-black text-sm tracking-wide shadow-lg shadow-gold-500/20 hover:shadow-gold-500/30 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry & Connect Directly on WhatsApp</span>
                    </button>

                    <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                      <ShieldCheck className="w-4 h-4 text-trust-600 dark:text-trust-500" />
                      <span>Zero spam promise. Direct confidential contact with our faculty dean.</span>
                    </div>
                  </form>
                )}

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
