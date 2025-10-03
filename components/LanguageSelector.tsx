
import React from 'react';
import type { Language } from '../types';

interface LanguageSelectorProps {
    languages: Language[];
    selectedLanguage: string;
    onLanguageChange: (languageCode: string) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ languages, selectedLanguage, onLanguageChange }) => {
    return (
        <div>
            <label htmlFor="language-select" className="block text-sm font-medium text-slate-300 mb-2">
                Select Language
            </label>
            <div className="relative">
                <select
                    id="language-select"
                    value={selectedLanguage}
                    onChange={(e) => onLanguageChange(e.target.value)}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-teal-400 focus:border-teal-400 appearance-none"
                >
                    {languages.map((lang) => (
                        <option key={lang.code} value={lang.code}>
                            {lang.name}
                        </option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
            </div>
        </div>
    );
};
