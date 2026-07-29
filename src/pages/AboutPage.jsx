import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SkillsGrid } from '../components/SkillsGrid';

export const AboutPage = () => {
    const { t, SITE_DATA } = useLanguage();

    return (
        <div className="space-y-9">
            {/* About Section */}
            <section className="space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-700/80">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/15 text-blue-400 flex items-center justify-center text-base">
                        👨‍💻
                    </div>
                    <h2 className="text-xl font-bold text-white">
                        {t('aboutBackground')}
                    </h2>
                </div>
                {SITE_DATA.summaries.full.map((item, idx) => (
                    <p key={idx} className="text-slate-300 text-base leading-relaxed">
                        {t(item)}
                    </p>
                ))}
            </section>

            {/* Helpdesk Experience */}
            <section className="space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-700/80">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/15 text-blue-400 flex items-center justify-center text-base">
                        🛠️
                    </div>
                    <h2 className="text-xl font-bold text-white">
                        {t(SITE_DATA.helpdeskExperience.title)}
                    </h2>
                </div>
                <ul className="space-y-3 list-none pl-0">
                    {SITE_DATA.helpdeskExperience.items.map((item, idx) => (
                        <li key={idx} className="relative pl-6 text-slate-300 text-base leading-relaxed">
                            <span className="absolute left-0 text-blue-500 font-bold">▸</span>
                            {t(item)}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Technical Skills Matrix */}
            <section className="space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-700/80">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/15 text-blue-400 flex items-center justify-center text-base">
                        🚀
                    </div>
                    <h2 className="text-xl font-bold text-white">
                        {t('technicalSkills')}
                    </h2>
                </div>
                <SkillsGrid />
            </section>

            {/* Career Goals */}
            <section className="space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-700/80">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/15 text-blue-400 flex items-center justify-center text-base">
                        🎯
                    </div>
                    <h2 className="text-xl font-bold text-white">
                        {t(SITE_DATA.careerGoals.title)}
                    </h2>
                </div>
                <p className="text-slate-300 text-base leading-relaxed">
                    {t(SITE_DATA.careerGoals.description)}
                </p>
            </section>
        </div>
    );
};
