import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaPalette } from 'react-icons/fa';

type Theme = 'cyberpunk' | 'synthwave' | 'matrix' | 'minimal';
type ColorMode = 'dark' | 'light';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>('cyberpunk');
  const [colorMode, setColorMode] = useState<ColorMode>('dark');
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  const themes = {
    cyberpunk: {
      primary: 'from-cyan-400 to-purple-400',
      secondary: 'cyan-500',
      accent: 'purple-500',
      dark: {
        bg: 'from-black to-gray-900',
        text: 'text-cyan-400'
      },
      light: {
        bg: 'from-gray-100 to-white',
        text: 'text-cyan-600'
      }
    },
    synthwave: {
      primary: 'from-pink-400 to-purple-400',
      secondary: 'pink-500',
      accent: 'purple-500',
      dark: {
        bg: 'from-purple-900 to-black',
        text: 'text-pink-400'
      },
      light: {
        bg: 'from-pink-50 to-white',
        text: 'text-pink-600'
      }
    },
    matrix: {
      primary: 'from-green-400 to-emerald-400',
      secondary: 'green-500',
      accent: 'emerald-500',
      dark: {
        bg: 'from-black to-gray-900',
        text: 'text-green-400'
      },
      light: {
        bg: 'from-green-50 to-white',
        text: 'text-green-600'
      }
    },
    minimal: {
      primary: 'from-gray-400 to-slate-400',
      secondary: 'gray-500',
      accent: 'slate-500',
      dark: {
        bg: 'from-black to-gray-900',
        text: 'text-gray-400'
      },
      light: {
        bg: 'from-gray-100 to-white',
        text: 'text-gray-600'
      }
    }
  };

  useEffect(() => {
    // Apply theme to root element
    const root = document.documentElement;
    const currentTheme = themes[theme];
    const mode = colorMode === 'dark' ? currentTheme.dark : currentTheme.light;

    root.style.setProperty('--primary-gradient', `linear-gradient(to right, var(--tw-gradient-${currentTheme.primary}))`);
    root.style.setProperty('--secondary-color', `var(--tw-text-${currentTheme.secondary})`);
    root.style.setProperty('--accent-color', `var(--tw-text-${currentTheme.accent})`);
    root.style.setProperty('--background-gradient', `linear-gradient(to bottom, var(--tw-gradient-${mode.bg}))`);
    root.style.setProperty('--text-color', `var(--tw-${mode.text})`);

    // Store preferences
    localStorage.setItem('theme', theme);
    localStorage.setItem('colorMode', colorMode);
  }, [theme, colorMode]);

  return (
    <div className="fixed bottom-8 left-8 z-50 flex flex-col gap-4">
      {/* Theme Selector */}
      <div className="relative">
        <motion.button
          onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
          className="p-3 rounded-full bg-black/80 border border-cyan-500/30 
                   hover:border-cyan-400 transition-all duration-300
                   shadow-lg shadow-cyan-500/20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaPalette className="text-xl text-cyan-400" />
        </motion.button>

        <AnimatePresence>
          {isThemeMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-full left-0 mb-2 bg-black/80 rounded-lg 
                       border border-cyan-500/30 p-2 backdrop-blur-sm"
            >
              {(Object.keys(themes) as Theme[]).map((themeName) => (
                <button
                  key={themeName}
                  onClick={() => {
                    setTheme(themeName);
                    setIsThemeMenuOpen(false);
                  }}
                  className={`block w-full px-4 py-2 text-left rounded-lg 
                           transition-colors duration-300 ${
                             theme === themeName ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-400 hover:text-cyan-400'
                           }`}
                >
                  {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Dark/Light Mode Toggle */}
      <motion.button
        onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
        className="p-3 rounded-full bg-black/80 border border-cyan-500/30 
                 hover:border-cyan-400 transition-all duration-300
                 shadow-lg shadow-cyan-500/20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {colorMode === 'dark' ? (
          <FaSun className="text-xl text-cyan-400" />
        ) : (
          <FaMoon className="text-xl text-cyan-400" />
        )}
      </motion.button>
    </div>
  );
};

export default ThemeToggle; 