import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';

export function App() {
    return (
        <LanguageProvider>
            <Router>
                <div className="min-h-screen flex flex-col items-center pb-10 px-4 sm:px-6">
                    <Navbar />

                    <div className="w-full max-w-[1080px] bg-slate-800 rounded-3xl border border-slate-700/80 profile-card-shadow overflow-hidden grid grid-cols-1 md:grid-cols-[320px_1fr]">
                        <Sidebar />

                        <main className="p-6 sm:p-10" role="main">
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/about" element={<AboutPage />} />
                                <Route path="/projects" element={<ProjectsPage />} />

                                {/* Fallback route paths */}
                                <Route path="/en" element={<HomePage />} />
                                <Route path="/vi" element={<HomePage />} />
                                <Route path="/en/about" element={<AboutPage />} />
                                <Route path="/vi/about" element={<AboutPage />} />
                                <Route path="/en/projects" element={<ProjectsPage />} />
                                <Route path="/vi/projects" element={<ProjectsPage />} />

                                <Route path="*" element={<HomePage />} />
                            </Routes>
                        </main>
                    </div>

                    <Footer />
                </div>
            </Router>
        </LanguageProvider>
    );
}

export default App;
