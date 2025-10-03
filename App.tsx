
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { LanguageSelector } from './components/LanguageSelector';
import { PromptInput } from './components/PromptInput';
import { GenerateButton } from './components/GenerateButton';
import { OutputDisplay } from './components/OutputDisplay';
import { generateContent } from './services/geminiService';
import { LANGUAGES, PLACEHOLDERS } from './constants';
import type { Language } from './types';

const App: React.FC = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(LANGUAGES[0]);
    const [prompt, setPrompt] = useState<string>('');
    const [output, setOutput] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerate = useCallback(async () => {
        if (!prompt || isLoading) return;

        setIsLoading(true);
        setOutput('');
        setError(null);

        try {
            const result = await generateContent(prompt);
            setOutput(result);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred.');
        } finally {
            setIsLoading(false);
        }
    }, [prompt, isLoading]);
    
    const handleLanguageChange = (languageCode: string) => {
        const newLang = LANGUAGES.find(lang => lang.code === languageCode);
        if (newLang) {
            setSelectedLanguage(newLang);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                <Header />
                <main className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Input Section */}
                    <div className="bg-slate-800/50 rounded-2xl p-6 shadow-2xl ring-1 ring-white/10 flex flex-col space-y-6">
                        <h2 className="text-2xl font-bold text-teal-300">Create Your Vision</h2>
                        <LanguageSelector
                            languages={LANGUAGES}
                            selectedLanguage={selectedLanguage.code}
                            onLanguageChange={handleLanguageChange}
                        />
                        <PromptInput
                            prompt={prompt}
                            onPromptChange={setPrompt}
                            placeholder={PLACEHOLDERS[selectedLanguage.code]}
                            disabled={isLoading}
                        />
                        <GenerateButton
                            isLoading={isLoading}
                            onClick={handleGenerate}
                        />
                    </div>
                    {/* Output Section */}
                    <div className="bg-slate-800/50 rounded-2xl p-6 shadow-2xl ring-1 ring-white/10">
                        <h2 className="text-2xl font-bold text-indigo-300 mb-4">Generated Content</h2>
                        <OutputDisplay
                            isLoading={isLoading}
                            output={output}
                            error={error}
                        />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default App;
