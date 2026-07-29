import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ProjectCard } from '../components/ProjectCard';

export const ProjectsPage = () => {
    const { t, SITE_DATA } = useLanguage();

    return (
        <section className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-700/80">
                <div className="w-8 h-8 rounded-lg bg-blue-600/15 text-blue-400 flex items-center justify-center text-base">
                    💻
                </div>
                <h2 className="text-xl font-bold text-white">
                    {t('featuredProjects')}
                </h2>
            </div>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
                {t('featuredProjectsDesc')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {SITE_DATA.projects.map((proj) => (
                    <ProjectCard key={proj.id} project={proj} />
                ))}
            </div>
        </section>
    );
};
