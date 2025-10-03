
import React from 'react';

interface PromptInputProps {
    prompt: string;
    onPromptChange: (prompt: string) => void;
    placeholder: string;
    disabled: boolean;
}

export const PromptInput: React.FC<PromptInputProps> = ({ prompt, onPromptChange, placeholder, disabled }) => {
    return (
        <div className="flex flex-col flex-grow">
            <label htmlFor="prompt-input" className="block text-sm font-medium text-slate-300 mb-2">
                Your Creative Prompt
            </label>
            <textarea
                id="prompt-input"
                rows={8}
                value={prompt}
                onChange={(e) => onPromptChange(e.target.value)}
                placeholder={placeholder}
                disabled={disabled}
                className="flex-grow w-full bg-slate-900/70 border border-slate-700 rounded-lg p-4 text-slate-200 placeholder-slate-500 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-colors disabled:opacity-50 resize-none"
            />
        </div>
    );
};
