import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAngleUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Outer hexagon */}
          <div className="relative w-14 h-14 flex items-center justify-center">
            <div className="absolute inset-0 theme-border opacity-50 hexagon-shape" />
            <div className="absolute inset-0 theme-border hexagon-shape animate-pulse" />
            
            {/* Inner hexagon with gradient */}
            <div className="relative w-12 h-12 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-color)] 
                            to-[var(--secondary-color)] hexagon-shape opacity-20" />
              <div className="absolute inset-0 theme-bg-secondary hexagon-shape" />
              
              {/* Arrow icon */}
              <FaAngleUp 
                className="text-2xl theme-text-primary relative z-10 
                          transition-transform duration-300 group-hover:translate-y-[-2px]" 
              />
            </div>

            {/* Animated rings */}
            <div className="absolute -inset-2 border-2 border-dashed theme-border rounded-full
                          animate-[spin_10s_linear_infinite] opacity-0 group-hover:opacity-30" />
            <div className="absolute -inset-4 border-2 border-dashed theme-border rounded-full
                          animate-[spin_15s_linear_infinite_reverse] opacity-0 group-hover:opacity-20" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop; 