
import React from 'react';

interface OutputDisplayProps {
    isLoading: boolean;
    output: string;
    error: string | null;
}

const LoadingSkeleton: React.FC = () => (
    <div className="space-y-4 animate-pulse">
        <div className="h-4 bg-slate-700 rounded w-3/4"></div>
        <div className="h-4 bg-slate-700 rounded w-full"></div>
        <div className="h-4 bg-slate-700 rounded w-full"></div>
        <div className="h-4 bg-slate-700 rounded w-5/6"></div>
        <div className="h-4 bg-slate-700 rounded w-1/2 mt-4"></div>
        <div className="h-4 bg-slate-700 rounded w-full"></div>
    </div>
);

const ErrorDisplay: React.FC<{ message: string }> = ({ message }) => (
    <div className="bg-red-900/50 border border-red-500 text-red-300 px-4 py-3 rounded-lg" role="alert">
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">{message}</span>
    </div>
);

const InitialState: React.FC = () => (
    <div className="text-center text-slate-400 flex flex-col items-center justify-center h-full">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mb-4 text-slate-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
        </svg>

        <p className="text-lg font-semibold">Your creative content will appear here.</p>
        <p className="text-sm">Select a language, type a prompt, and click "Generate".</p>
    </div>
);

export const OutputDisplay: React.FC<OutputDisplayProps> = ({ isLoading, output, error }) => {
    return (
        <div className="bg-slate-900/70 rounded-lg p-6 min-h-[300px] text-slate-200 prose prose-invert prose-p:text-slate-300 prose-headings:text-indigo-300 w-full overflow-y-auto max-h-[400px]">
            {isLoading && <LoadingSkeleton />}
            {error && !isLoading && <ErrorDisplay message={error} />}
            {!isLoading && !error && output && <p className="whitespace-pre-wrap">{output}</p>}
            {!isLoading && !error && !output && <InitialState />}
        </div>
    );
};
