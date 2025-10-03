
import React from 'react';

const SpinnerIcon: React.FC = () => (
    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);

const WandIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2">
        <path d="M10.362 3.691L12.75 6.08a.75.75 0 001.06 0l1.415-1.414a.75.75 0 000-1.06l-2.39-2.389a.75.75 0 00-1.06 0l-1.414 1.414a.75.75 0 000 1.06zM3.75 12.191L6.14 9.8a.75.75 0 011.06 0l1.414 1.414a.75.75 0 010 1.06l-2.389 2.39a.75.75 0 01-1.06 0L3.75 13.25a.75.75 0 010-1.06z" />
        <path fillRule="evenodd" d="M4.5 5.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zm.75 8.25a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5zm8.25.75a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zm.75-8.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5zM6.912 7.962a.75.75 0 011.06 0l5.061 5.061a.75.75 0 11-1.06 1.06L6.912 9.022a.75.75 0 010-1.06z" clipRule="evenodd" />
    </svg>
);


interface GenerateButtonProps {
    isLoading: boolean;
    onClick: () => void;
}

export const GenerateButton: React.FC<GenerateButtonProps> = ({ isLoading, onClick }) => {
    return (
        <button
            onClick={onClick}
            disabled={isLoading}
            className="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 focus:ring-offset-slate-800 disabled:bg-slate-500 disabled:cursor-not-allowed transition-colors"
        >
            {isLoading ? (
                <>
                    <SpinnerIcon />
                    Generating...
                </>
            ) : (
                <>
                    <WandIcon />
                    Generate
                </>
            )}
        </button>
    );
};
