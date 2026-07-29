import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SkillsGrid } from '../components/SkillsGrid';

export const HomePage = () => {
    const { t, SITE_DATA } = useLanguage();

    return (
        <div className="space-y-9">
            <section className="space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-700/80">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/15 text-blue-400 flex items-center justify-center text-base">
                        👋
                    </div>
                    <h2 className="text-xl font-bold text-white">
                        {t('professionalSummary')}
                    </h2>
                </div>
                <p className="text-slate-300 text-base leading-relaxed">
                    {t(SITE_DATA.summaries.short)}
                </p>
                <p className="text-slate-300 text-base leading-relaxed pt-1">
                    {t(SITE_DATA.summaries.shortSub)}
                </p>
                <div className="flex flex-wrap gap-3.5 pt-4">
                    <Link
                        to="/about"
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-semibold text-sm transition-all shadow-lg shadow-blue-600/25 hover:-translate-y-0.5 no-underline inline-flex items-center gap-2"
                    >
                        {t('learnMore')}
                    </Link>
                    <Link
                        to="/projects"
                        className="px-6 py-3 bg-transparent border border-slate-700 hover:border-slate-400 hover:bg-white/5 text-slate-200 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5 no-underline inline-flex items-center gap-2"
                    >
                        {t('exploreProjects')}
                    </Link>
                </div>
            </section>

            <section className="space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-700/80">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/15 text-blue-400 flex items-center justify-center text-base">
                        ⚡
                    </div>
                    <h2 className="text-xl font-bold text-white">
                        {t('keyExpertise')}
                    </h2>
                </div>
                <SkillsGrid />
            </section>
        </div>
    );
};
