import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Sidebar = () => {
    const { t, SITE_DATA } = useLanguage();
    const p = SITE_DATA.profile;
    const avatarUrl = `${import.meta.env.BASE_URL}assets/images/${p.avatar}`;

    return (
        <aside className="p-7 sm:p-9 bg-gradient-to-b from-blue-600/10 to-purple-600/5 border-b sm:border-b-0 sm:border-r border-slate-700/60 flex flex-col items-center text-center">
            <img
                src={avatarUrl}
                alt={p.name}
                className="w-36 h-36 rounded-full object-cover border-4 border-blue-600 shadow-xl shadow-blue-500/20 hover:scale-105 transition-transform duration-300"
            />
            <h1 className="text-2xl font-extrabold mt-5 bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent tracking-tight">
                {p.name}
            </h1>
            <p className="mt-2 text-blue-400 text-sm font-semibold leading-snug">
                {t(p.roles)}
            </p>

            <div className="w-full mt-7 grid gap-4 text-left">
                <div className="bg-slate-900/50 p-3.5 rounded-xl border border-slate-800">
                    <span className="text-[11px] text-slate-400 uppercase tracking-widest font-bold block mb-1">
                        {t('email')}
                    </span>
                    <a href={`mailto:${p.email}`} className="text-white hover:text-blue-400 text-sm break-all transition-colors no-underline">
                        {p.email}
                    </a>
                </div>

                <div className="bg-slate-900/50 p-3.5 rounded-xl border border-slate-800">
                    <span className="text-[11px] text-slate-400 uppercase tracking-widest font-bold block mb-1">
                        {t('github')}
                    </span>
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 text-sm break-all transition-colors no-underline">
                        {p.githubLabel}
                    </a>
                </div>

                <div className="bg-slate-900/50 p-3.5 rounded-xl border border-slate-800">
                    <span className="text-[11px] text-slate-400 uppercase tracking-widest font-bold block mb-1">
                        {t('linkedin')}
                    </span>
                    <a href={p.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 text-sm break-all transition-colors no-underline">
                        {p.linkedinLabel}
                    </a>
                </div>

                <div className="bg-slate-900/50 p-3.5 rounded-xl border border-slate-800">
                    <span className="text-[11px] text-slate-400 uppercase tracking-widest font-bold block mb-1">
                        {t('location')}
                    </span>
                    <span className="text-white text-sm">
                        {t(p.location)}
                    </span>
                </div>
            </div>
        </aside>
    );
};
