import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaSpinner } from 'react-icons/fa';

const LeadForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'web-development'
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsVisible(false);
    // Store in localStorage to prevent showing again
    localStorage.setItem('leadFormSubmitted', 'true');
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (localStorage.getItem('leadFormSubmitted')) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-[var(--bg-secondary)] p-6 rounded-lg w-full max-w-md relative
                     theme-border neon-border"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-red-500
                       flex items-center justify-center text-white hover:bg-red-600
                       transition-colors"
            >
              <FaTimes />
            </button>

            <div className="text-center mb-6">
              <h3 className="gradient-text text-2xl font-bold mb-2">Stay Updated!</h3>
              <p className="theme-text-secondary">
                Get exclusive insights about web development, design, and digital marketing.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 rounded-lg theme-bg-primary theme-border theme-text-primary
                           focus:neon-border outline-none"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 rounded-lg theme-bg-primary theme-border theme-text-primary
                           focus:neon-border outline-none"
                />
              </div>

              <div>
                <select
                  value={formData.interest}
                  onChange={e => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full p-3 rounded-lg theme-bg-primary theme-border theme-text-primary
                           focus:neon-border outline-none"
                >
                  <option value="web-development">Web Development</option>
                  <option value="design">Graphic Design</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="video">Video Production</option>
                </select>
              </div>

              <motion.button
                type="submit"
                className="w-full py-3 theme-gradient text-white rounded-lg hover:neon-border
                         transition-all duration-300 disabled:opacity-50 font-semibold"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <FaSpinner className="animate-spin" />
                    Submitting...
                  </span>
                ) : (
                  'Get Free Updates'
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LeadForm; 