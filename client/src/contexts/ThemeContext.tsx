import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'light1' | 'driftguard1' | 'driftguard2' | 'driftguard3';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themes: { value: Theme; label: string; description: string }[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_OPTIONS = [
  {
    value: 'light1' as Theme,
    label: 'Light',
    description: 'Clean light theme with neutral colors'
  },
  {
    value: 'driftguard1' as Theme,
    label: 'Driftguard Dark',
    description: 'Dark theme with blue accents'
  },
  {
    value: 'driftguard2' as Theme,
    label: 'Driftguard Ocean',
    description: 'Dark ocean theme with coral accents'
  },
  {
    value: 'driftguard3' as Theme,
    label: 'Driftguard Pro',
    description: 'Professional teal/navy with coral accents'
  }
];

const STORAGE_KEY = 'theme-preference';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Try to get theme from localStorage, fallback to driftguard3 (current default)
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY) as Theme;
      if (stored && THEME_OPTIONS.some(option => option.value === stored)) {
        return stored;
      }
    }
    return 'driftguard3';
  });

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, newTheme);
    }
  };

  useEffect(() => {
    // Apply theme class to html element
    const htmlElement = document.documentElement;
    
    // Remove all theme classes
    THEME_OPTIONS.forEach(option => {
      htmlElement.classList.remove(option.value);
    });
    
    // Add current theme class
    htmlElement.classList.add(theme);
  }, [theme]);

  const value: ThemeContextType = {
    theme,
    setTheme,
    themes: THEME_OPTIONS
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
