/**
 * Bridge Design Pattern Implementation for React Application
 * Project: trinhngocnhat.github.io
 * Author: Trịnh Ngọc Nhất
 * 
 * DESIGN PATTERN EXPLANATION:
 * Decouples language switching abstraction (LanguageManager) from state persistence
 * and React state updating mechanisms (StorageAndStateImplementor).
 */

export class LanguageSwitchImplementor {
    switchLanguage(targetLang) {
        throw new Error("Method switchLanguage() must be implemented.");
    }
    getInitialLanguage() {
        throw new Error("Method getInitialLanguage() must be implemented.");
    }
}

export class StorageAndStateImplementor extends LanguageSwitchImplementor {
    constructor(stateUpdater) {
        super();
        this.stateUpdater = stateUpdater;
    }

    setStateUpdater(updater) {
        this.stateUpdater = updater;
    }

    switchLanguage(targetLang) {
        try {
            localStorage.setItem('user_site_lang', targetLang);
        } catch (e) {
            console.warn('LocalStorage unavailable:', e);
        }
        if (typeof this.stateUpdater === 'function') {
            this.stateUpdater(targetLang);
        }
    }

    getInitialLanguage() {
        try {
            const saved = localStorage.getItem('user_site_lang');
            if (saved === 'en' || saved === 'vi') return saved;
        } catch (e) {}

        const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
        if (browserLang.startsWith('vi')) return 'vi';
        return 'en';
    }
}

export class WebLanguageBridge {
    constructor(implementor) {
        this.implementor = implementor;
    }

    setImplementor(implementor) {
        this.implementor = implementor;
    }
}

export class LanguageManager extends WebLanguageBridge {
    changeLanguage(targetLang) {
        this.implementor.switchLanguage(targetLang);
    }

    toggleLanguage(currentLang) {
        const next = currentLang === 'en' ? 'vi' : 'en';
        this.changeLanguage(next);
    }

    getInitialLang() {
        return this.implementor.getInitialLanguage();
    }
}
