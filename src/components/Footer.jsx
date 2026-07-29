import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
    const { t, SITE_DATA } = useLanguage();

    return (
        <footer className="w-full max-w-[1080px] mx-auto mt-8 text-center text-slate-400 text-sm">
            <p>{t(SITE_DATA.footer.text)}</p>
        </footer>
    );
};
