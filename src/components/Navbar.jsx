import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const Navbar = () => {
    const { currentLang, changeLang, t, SITE_DATA } = useLanguage();
    const location = useLocation();

    // Fix logo asset path resolution
    const logoUrl = `${import.meta.env.BASE_URL}assets/images/${SITE_DATA.profile.avatar}`;

    return (
        <header className="w-full max-w-[1080px] mx-auto mt-5 mb-8 px-7 py-3.5 glass-header rounded-2xl flex flex-col sm:flex-row justify-between items-center sticky top-4 z-50 shadow-xl gap-4 sm:gap-0">
            <Link to="/" className="flex items-center gap-3 no-underline text-white font-bold text-lg px-3 py-1.5 -ml-2 rounded-xl transition-all hover:bg-white/5 hover:-translate-y-0.5">
                <img src={logoUrl} alt={SITE_DATA.profile.name} className="w-9 h-9 rounded-full object-cover border-2 border-blue-600 flex-shrink-0" />
                <span className="px-1 tracking-wide">{SITE_DATA.profile.name}</span>
            </Link>

            <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                <nav>
                    <ul className="flex items-center gap-5 list-none m-0 p-0">
                        {SITE_DATA.nav.map(item => {
                            const isActive = location.pathname === item.path || (location.pathname === '' && item.path === '/');
                            const label = t(item.label);
                            return (
                                <li key={item.key}>
                                    <Link
                                        to={item.path}
                                        className={`no-underline font-medium text-sm transition-colors py-1 border-b-2 ${
                                            isActive
                                                ? 'text-white border-blue-600 font-semibold'
                                                : 'text-slate-400 border-transparent hover:text-white'
                                        }`}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Bridge Pattern Language Switcher Buttons */}
                <div className="flex items-center bg-slate-900 border border-slate-700 rounded-full p-1 gap-1" aria-label="Language Selector">
                    <button
                        onClick={() => changeLang('en')}
                        className={`border-none text-xs font-semibold px-3.5 py-1.5 rounded-full cursor-pointer transition-all flex items-center gap-1.5 ${
                            currentLang === 'en'
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-blue-500/30'
                                : 'bg-transparent text-slate-400 hover:text-white'
                        }`}
                        title="English"
                    >
                        🇬🇧 EN
                    </button>
                    <button
                        onClick={() => changeLang('vi')}
                        className={`border-none text-xs font-semibold px-3.5 py-1.5 rounded-full cursor-pointer transition-all flex items-center gap-1.5 ${
                            currentLang === 'vi'
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-blue-500/30'
                                : 'bg-transparent text-slate-400 hover:text-white'
                        }`}
                        title="Tiếng Việt"
                    >
                        🇻🇳 VI
                    </button>
                </div>
            </div>
        </header>
    );
};
