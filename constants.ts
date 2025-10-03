
import type { Language } from './types';

export const LANGUAGES: Language[] = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिन्दी (Hindi)' },
    { code: 'bn', name: 'বাংলা (Bengali)' },
    { code: 'ta', name: 'தமிழ் (Tamil)' },
];

export const PLACEHOLDERS: Record<string, string> = {
    en: 'e.g., A majestic peacock dancing in the monsoon rain, its feathers shimmering with color.',
    hi: 'जैसे, मानसून की बारिश में नाचता एक राजसी मोर, जिसके पंख रंगों से झिलमिला रहे हैं।',
    bn: 'যেমন, বর্ষার বৃষ্টিতে একটি রাজকীয় ময়ূর নাচছে, তার পালক রঙে ঝলমল করছে।',
    ta: 'எ.கா., பருவமழையில் நடனமாடும் ஒரு கம்பீரமான மயில், அதன் இறகுகள் வண்ணங்களால் மின்னுகின்றன.',
};
