import React, { createContext, useContext, useState, useMemo } from 'react';
import { LanguageManager, StorageAndStateImplementor } from '../services/LanguageBridge';
import { SITE_DATA } from '../data/siteData';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // 1. Initialize implementor & bridge
    const implementorRef = React.useRef(new StorageAndStateImplementor(null));
    const bridgeRef = React.useRef(new LanguageManager(implementorRef.current));

    const [currentLang, setCurrentLang] = useState(() => bridgeRef.current.getInitialLang());

    // Connect state updater to implementor
    React.useEffect(() => {
        implementorRef.current.setStateUpdater((newLang) => {
            setCurrentLang(newLang);
        });
    }, []);

    const changeLang = (targetLang) => {
        bridgeRef.current.changeLanguage(targetLang);
    };

    const toggleLang = () => {
        bridgeRef.current.toggleLanguage(currentLang);
    };

    // Helper function for localization lookup
    const t = (key) => {
        if (!key) return '';
        if (typeof key === 'object') {
            return key[currentLang] || key.en || '';
        }
        const label = SITE_DATA.labels[key];
        if (label) {
            return label[currentLang] || label.en || '';
        }
        return key;
    };

    const value = useMemo(() => ({
        currentLang,
        changeLang,
        toggleLang,
        t,
        SITE_DATA
    }), [currentLang]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
