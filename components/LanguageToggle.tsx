
import React from 'react';
import { Language } from '../types.ts';

interface Props {
  current: Language;
  onToggle: (lang: Language) => void;
  dark?: boolean;
}

export const LanguageToggle: React.FC<Props> = ({ current, onToggle, dark = false }) => {
  return (
    <div className={`flex rounded-xl p-1 transition-colors duration-300 ${
      dark ? 'bg-white/10 backdrop-blur-md' : 'bg-slate-100'
    }`}>
      <button
        onClick={() => onToggle('es')}
        className={`px-3 py-1.5 rounded-lg text-[10px] font-black transition-all duration-300 ${
          current === 'es' 
            ? 'bg-white shadow-md text-[#0b3b52] scale-105' 
            : dark ? 'text-white/60 hover:text-white' : 'text-slate-400 hover:text-slate-600'
        }`}
      >
        ES
      </button>
      <button
        onClick={() => onToggle('en')}
        className={`px-3 py-1.5 rounded-lg text-[10px] font-black transition-all duration-300 ${
          current === 'en' 
            ? 'bg-white shadow-md text-[#0b3b52] scale-105' 
            : dark ? 'text-white/60 hover:text-white' : 'text-slate-400 hover:text-slate-600'
        }`}
      >
        EN
      </button>
    </div>
  );
};
