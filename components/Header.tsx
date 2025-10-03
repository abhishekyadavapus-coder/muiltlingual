
import React from 'react';

const SparkleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.863 2.863l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.863 2.863l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.863-2.863l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036a.75.75 0 00.46.46l1.036.258a.75.75 0 010 1.456l-1.036.258a.75.75 0 00-.46.46l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a.75.75 0 00-.46-.46l-1.036-.258a.75.75 0 010-1.456l1.036-.258a.75.75 0 00.46-.46l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.576a.75.75 0 00.53.53l1.576.394a.75.75 0 010 1.424l-1.576.394a.75.75 0 00-.53.53l-.394 1.576a.75.75 0 01-1.424 0l-.394-1.576a.75.75 0 00-.53-.53l-1.576-.394a.75.75 0 010-1.424l1.576-.394a.75.75 0 00.53-.53l.394-1.576a.75.75 0 01.712-.513z" clipRule="evenodd" />
    </svg>
);


export const Header: React.FC = () => {
    return (
        <header className="text-center">
            <div className="flex justify-center items-center gap-4">
                <SparkleIcon className="w-10 h-10 text-teal-400" />
                <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-indigo-400">
                    Multilingual Creative Assistant
                </h1>
            </div>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
                Inspired by India's linguistic diversity, enter a prompt in your chosen language and watch your ideas come to life.
            </p>
        </header>
    );
};
