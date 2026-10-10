import React, { useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ImageLightbox({ image, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (image) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-navy-950/90 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative max-w-5xl w-full max-h-[90vh] bg-navy-900 border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-navy-950/60">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-ping"></span>
              <h3 className="font-display font-semibold text-slate-200 text-sm md:text-base">
                {image.title || 'Official SRSMA Academic Record & Asset'}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Image preview area */}
          <div className="relative flex-1 overflow-auto flex items-center justify-center p-4 bg-navy-950/30">
            <img
              src={image.src}
              alt={image.alt || 'SRSMA Asset'}
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-lg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/assets/images/intro.png';
              }}
            />
          </div>

          {image.caption && (
            <div className="px-6 py-3 bg-navy-950/80 border-t border-slate-800 text-center text-xs md:text-sm text-slate-300">
              {image.caption}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
