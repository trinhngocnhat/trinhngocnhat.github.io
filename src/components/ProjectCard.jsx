import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const ProjectCard = ({ project }) => {
    const { t } = useLanguage();

    return (
        <div className="bg-slate-800 border border-slate-700/80 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/10">
            <div>
                <h3 className="text-lg font-bold text-white mb-2.5">
                    {t(project.title)}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {t(project.description)}
                </p>
            </div>

            <div className="mt-auto flex flex-col gap-3.5 pt-2">
                <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="bg-blue-600/15 text-blue-400 text-xs font-semibold px-2.5 py-1 rounded-md border border-blue-500/30"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex gap-3">
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white no-underline rounded-lg text-xs font-semibold transition-colors"
                    >
                        {t('sourceCode')}
                    </a>
                </div>
            </div>
        </div>
    );
};
