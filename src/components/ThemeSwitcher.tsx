import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const sunIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const moonIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const paletteIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z"/>
  </svg>
);

const palettes = [
  { id: 'sobre', label: 'Sobre', color: '#5271FF' },
  { id: 'creative', label: 'Créative', color: '#ec4899' },
  { id: 'contraste', label: 'Contrastée', color: '#ff3d00' }
] as const;

export function ThemeSwitcher() {
  const { mode, palette, setMode, setPalette } = useTheme();
  const [showPalettes, setShowPalettes] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // fermer le dropdown en cliquant ailleurs
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowPalettes(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="theme-switcher">
      {/* bouton mode light/dark */}
      <button 
        className="theme-btn mode-btn" 
        onClick={toggleMode}
        title={mode === 'light' ? 'Passer en mode sombre' : 'Passer en mode clair'}
        aria-label={mode === 'light' ? 'Mode sombre' : 'Mode clair'}
      >
        {mode === 'light' ? moonIcon : sunIcon}
      </button>

      {/* sélecteur de palette */}
      <div className="palette-container" ref={dropdownRef}>
        <button 
          className="theme-btn palette-btn" 
          onClick={() => setShowPalettes(!showPalettes)}
          title="Changer de palette"
          aria-label="Sélectionner une palette"
        >
          {paletteIcon}
        </button>
        
        {showPalettes && (
          <div className="palette-dropdown">
            {palettes.map(p => (
              <button
                key={p.id}
                className={`palette-option ${palette === p.id ? 'active' : ''}`}
                onClick={() => {
                  setPalette(p.id);
                  setShowPalettes(false);
                }}
              >
                <span className="palette-dot" style={{ background: p.color }} />
                <span className="palette-name">{p.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
