import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Mode = 'light' | 'dark';
type Palette = 'sobre' | 'creative' | 'contraste';

interface ThemeContextType {
  mode: Mode;
  palette: Palette;
  setMode: (m: Mode) => void;
  setPalette: (p: Palette) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

const STORAGE_KEY = 'kerim-portfolio-theme';

interface StoredTheme {
  mode: Mode;
  palette: Palette;
}

function getStoredTheme(): StoredTheme {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (
        (parsed.mode === 'light' || parsed.mode === 'dark') &&
        (parsed.palette === 'sobre' || parsed.palette === 'creative' || parsed.palette === 'contraste')
      ) {
        return parsed;
      }
    }
  } catch {
    // ignore
  }
  return { mode: 'light', palette: 'sobre' };
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<Mode>(() => getStoredTheme().mode);
  const [palette, setPaletteState] = useState<Palette>(() => getStoredTheme().palette);

  // appliquer les classes sur le html
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-mode', mode);
    root.setAttribute('data-palette', palette);
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ mode, palette }));
  }, [mode, palette]);

  const setMode = (m: Mode) => setModeState(m);
  const setPalette = (p: Palette) => setPaletteState(p);

  return (
    <ThemeContext.Provider value={{ mode, palette, setMode, setPalette }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
