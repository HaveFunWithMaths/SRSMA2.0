import React from 'react';
import { 
  MapPin, Phone, Mail, Clock, Navigation, 
  ExternalLink, MessageSquare, Facebook, Linkedin, Youtube 
} from 'lucide-react';

export default function LocationContact() {
  return (
    <footer id="contact" className="bg-slate-100 dark:bg-navy-950 text-slate-700 dark:text-slate-300 pt-6 pb-6 border-t border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Info & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-8 border-b border-slate-200 dark:border-slate-800">
          
          {/* Left Contact Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/images/logowhite.jpeg"
                alt="SRSMA Logo"
                className="w-12 h-12 rounded-xl border border-gold-500/50 shadow-sm bg-white object-contain p-0.5"
              />
              <div>
                <h3 className="text-xl font-display font-black text-slate-900 dark:text-white tracking-tight">
                  Shri Ram Smart Minds Academy
                </h3>
                <p className="text-xs text-gold-700 dark:text-gold-400 font-semibold">
                  Premier IIT-JEE & NEET Academy • Sun City, Hyderabad
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Committed to personal mentorship, 100% IIT & NIT qualified faculty, and small batch sizes that ensure every single student receives world-class coaching.
            </p>

            {/* Address & Direct Details */}
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 text-gold-600 dark:text-gold-400 shrink-0 mt-0.5 shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">Academy Campus Location:</div>
                  <address className="not-italic text-slate-600 dark:text-slate-300 mt-0.5">
                    2nd Floor Sankirtan Bhavan, Bandlaguda Jagir, Sun City, Hyderabad, Telangana 500086
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 text-trust-600 dark:text-trust-400 shrink-0 mt-0.5 shadow-sm">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">WhatsApp Number:</div>
                  <a
                    href="https://wa.me/918463911854?text=Hello%20SRSMA,%20I%20would%20like%20to%20inquire%20about%20admissions%20and%20courses."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-trust-600 dark:text-trust-400 font-semibold hover:underline mt-0.5 inline-block"
                  >
                    +91 84639 11854
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 text-gold-600 dark:text-gold-400 shrink-0 mt-0.5 shadow-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">Official Email:</div>
                  <a href="mailto:smartmindsacademy108@gmail.com" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white mt-0.5 inline-block">
                    smartmindsacademy108@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 text-gold-600 dark:text-gold-400 shrink-0 mt-0.5 shadow-sm">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">Counseling & Office Hours:</div>
                  <p className="text-slate-600 dark:text-slate-300 mt-0.5">
                    Monday – Saturday: 9:00 AM – 7:00 PM<br />
                    Sunday: By Prior Appointment
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Follow Our Journey:</span>
              <a
                href="https://www.youtube.com/@ShriRamSmartMindsAcademy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 text-rose-500 dark:text-rose-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shadow-sm"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/shriramsma/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 text-blue-600 dark:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shadow-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/shriramsma"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 text-sky-600 dark:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Map Column */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-xl bg-white dark:bg-navy-900 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.161884303204!2d78.3956354!3d17.355941599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb971f6d679dcb%3A0x8488bc0c7b4a1a5b!2sShri%20Ram%20Smart%20Minds%20Academy!5e0!3m2!1sen!2sin!4v1764562833991!5m2!1sen!2sin"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SRSMA Campus Google Map"
                className="w-full"
              ></iframe>
            </div>

            {/* Directions & Action Bar */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://share.google/pHNCn01ZzjrcT5vIS"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs tracking-wide shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Driving Directions (Google Maps)</span>
              </a>

              <a
                href="https://wa.me/918463911854?text=Hello%20SRSMA,%20I%20am%20planning%20to%20visit%20the%20Sun%20City%20center."
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-trust-600 hover:bg-trust-500 text-white font-bold text-xs tracking-wide transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </a>
            </div>

            <div className="text-xs text-slate-600 dark:text-slate-400 bg-white dark:bg-navy-900/60 p-3 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-2 shadow-sm">
              <MapPin className="w-4 h-4 text-gold-600 dark:text-gold-400 shrink-0" />
              <span>Conveniently accessible from Bandlaguda Jagir, Sun City, Langer Houz, Rajendranagar, and Mehdipatnam.</span>
            </div>

          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-5 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Shri Ram Smart Minds Academy (SRSMA). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Personalized IIT-JEE & NEET Coaching</span>
            <span>•</span>
            <span>Sun City, Hyderabad</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
