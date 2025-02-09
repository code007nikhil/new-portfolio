import { createContext, useContext, useState, useEffect } from 'react';

type ColorMode = 'dark' | 'light';

interface ThemeContextType {
  colorMode: ColorMode;
  setColorMode: (mode: ColorMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [colorMode, setColorMode] = useState<ColorMode>('dark');

  useEffect(() => {
    // Load saved preference or use default
    const savedMode = localStorage.getItem('colorMode') as ColorMode;
    if (savedMode) setColorMode(savedMode);
    
    // Apply mode
    document.documentElement.setAttribute('data-color-mode', savedMode || 'dark');
  }, []);

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 