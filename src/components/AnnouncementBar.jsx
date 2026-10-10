import React from 'react';
import { Phone, MessageSquare, Sparkles, Clock, ArrowRight, ExternalLink } from 'lucide-react';

export default function AnnouncementBar({ onOpenDiagnostic }) {
  const challengeUrl = 'https://exams.srsma.in/boardChallenge';

  return (
    <div className="bg-navy-950 text-slate-200 border-b border-slate-800 text-xs py-2 px-3 sm:px-6 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
        {/* Left: Admissions Notice */}
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-300 font-semibold text-[11px] tracking-wide uppercase animate-pulse-subtle">
            <Sparkles className="w-3 h-3 text-gold-400" />
            Admissions 2027–29
          </span>
          <span className="text-slate-200 font-medium">
            Limited <strong className="text-white font-bold">30 Seats Per Batch</strong> for Uncompromising Personal Attention
          </span>
        </div>

        {/* Right: Quick Action Links */}
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center text-slate-300">
          <a
            href="tel:+918463911854"
            className="flex items-center gap-1.5 hover:text-gold-400 transition-colors font-medium text-slate-200"
          >
            <Phone className="w-3.5 h-3.5 text-gold-400" />
            <span>+91 84639 11854</span>
          </a>

          <span className="hidden sm:inline text-slate-600">|</span>

          <a
            href="https://wa.me/918463911854?text=Hello%20SRSMA,%20I%20would%20like%20to%20inquire%20about%20admissions%20and%20batch%20timings."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-trust-400 hover:text-trust-300 transition-colors font-semibold"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp Desk</span>
          </a>
        </div>
      </div>
    </div>
  );
}
