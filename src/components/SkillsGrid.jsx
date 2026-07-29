import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const SkillsGrid = () => {
    const { t, SITE_DATA } = useLanguage();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SITE_DATA.skills.map((item, idx) => (
                <div
                    key={idx}
                    className="bg-slate-900/40 border border-slate-700/80 rounded-xl p-4.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-600"
                >
                    <strong className="block text-sm text-white mb-2">
                        {t(item.category)}
                    </strong>
                    <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag, tIdx) => (
                            <span
                                key={tIdx}
                                className="bg-blue-600/15 text-blue-400 text-xs font-semibold px-2.5 py-1 rounded-md border border-blue-500/30"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
