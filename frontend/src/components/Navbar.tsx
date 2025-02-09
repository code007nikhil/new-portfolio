import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-opacity-80 backdrop-blur-sm z-50"
         style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="w-full mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold gradient-text">
         Nikhil_Thakur
        </div>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" onClick={(e) => handleScroll(e, 'about')} 
             className="theme-text-primary hover:text-[var(--accent-color)] transition-colors">
            About
          </a>
          <a href="#skills" onClick={(e) => handleScroll(e, 'skills')} 
             className="theme-text-primary hover:text-[var(--accent-color)] transition-colors">
            Skills
          </a>
          <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} 
             className="theme-text-primary hover:text-[var(--accent-color)] transition-colors">
            Projects
          </a>
          <a href="#blog" onClick={(e) => handleScroll(e, 'blog')} 
             className="theme-text-primary hover:text-[var(--accent-color)] transition-colors">
            Blog
          </a>
          <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} 
             className="theme-text-primary hover:text-[var(--accent-color)] transition-colors">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden theme-text-primary p-2 touch-friendly"
        >
          <motion.div
            animate={isMenuOpen ? "open" : "closed"}
            className="space-y-2"
          >
            <span className={`block w-8 h-0.5 bg-current transform transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
            <span className={`block w-8 h-0.5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-8 h-0.5 bg-current transform transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </motion.div>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 theme-bg-primary theme-border-t py-4 px-4 md:hidden"
            >
              <div className="flex flex-col space-y-4">
                {/* Navigation Links */}
                <a href="#about" 
                   className="mobile-menu-item theme-text-primary hover:text-[var(--accent-color)] transition-colors"
                   onClick={(e) => { handleScroll(e, 'about'); setIsMenuOpen(false); }}>
                  About
                </a>
                <a href="#skills" onClick={(e) => { handleScroll(e, 'skills'); setIsMenuOpen(false); }}
                   className="theme-text-primary hover:text-[var(--accent-color)] transition-colors">
                  Skills
                </a>
                <a href="#projects" onClick={(e) => { handleScroll(e, 'projects'); setIsMenuOpen(false); }}
                   className="theme-text-primary hover:text-[var(--accent-color)] transition-colors">
                  Projects
                </a>
                <a href="#blog" onClick={(e) => { handleScroll(e, 'blog'); setIsMenuOpen(false); }}
                   className="theme-text-primary hover:text-[var(--accent-color)] transition-colors">
                  Blog
                </a>
                <a href="#contact" onClick={(e) => { handleScroll(e, 'contact'); setIsMenuOpen(false); }}
                   className="theme-text-primary hover:text-[var(--accent-color)] transition-colors">
                  Contact
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar; 