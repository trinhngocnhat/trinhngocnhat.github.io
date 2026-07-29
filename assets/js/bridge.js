/**
 * Bridge Design Pattern Implementation for Multi-Language Website
 * Project: trinhngocnhat.github.io
 * Author: Trịnh Ngọc Nhất
 * 
 * DESIGN PATTERN EXPLANATION:
 * The Bridge Pattern decouples an abstraction (LanguageManager) from its 
 * implementation (LanguageSwitchImplementor) so that the two can vary independently.
 */

// 1. Implementor Interface
class LanguageSwitchImplementor {
    switchLanguage(targetLang, currentPath) {
        throw new Error("Method 'switchLanguage()' must be implemented by concrete implementor.");
    }
    getSavedLanguage() {
        throw new Error("Method 'getSavedLanguage()' must be implemented by concrete implementor.");
    }
}

// Concrete Implementor: UrlRedirectImplementor
class UrlRedirectImplementor extends LanguageSwitchImplementor {
    switchLanguage(targetLang, currentPath) {
        // Save preference in localStorage
        try {
            localStorage.setItem('user_site_lang', targetLang);
        } catch (e) {
            console.warn('LocalStorage unavailable:', e);
        }

        // Check if currently inside /en/ or /vi/
        const isSubDir = window.location.pathname.includes('/en/') || window.location.pathname.includes('/vi/');
        
        let pageName = 'index.html';
        const cleanPath = window.location.pathname.split('?')[0].split('#')[0];
        const segments = cleanPath.split('/').filter(Boolean);
        const lastSegment = segments[segments.length - 1];

        if (lastSegment && lastSegment.endsWith('.html')) {
            pageName = lastSegment;
        }

        let redirectTarget = '';
        if (isSubDir) {
            redirectTarget = `../${targetLang}/${pageName}`;
        } else {
            redirectTarget = `./${targetLang}/${pageName}`;
        }

        window.location.href = redirectTarget;
    }

    getSavedLanguage() {
        let saved = null;
        try {
            saved = localStorage.getItem('user_site_lang');
        } catch (e) {}

        if (saved === 'en' || saved === 'vi') {
            return saved;
        }

        // Fallback to browser language
        const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
        if (browserLang.startsWith('vi')) {
            return 'vi';
        }
        return 'en';
    }
}

// 2. Abstraction Interface
class WebLanguageBridge {
    constructor(implementor) {
        this.implementor = implementor;
    }

    setImplementor(implementor) {
        this.implementor = implementor;
    }
}

// Refined Abstraction
class LanguageManager extends WebLanguageBridge {
    constructor(implementor) {
        super(implementor);
    }

    changeLanguage(targetLang) {
        const currentLang = this.getCurrentLanguage();
        if (currentLang === targetLang) return;
        this.implementor.switchLanguage(targetLang, window.location.pathname);
    }

    toggleLanguage() {
        const current = this.getCurrentLanguage();
        const next = current === 'en' ? 'vi' : 'en';
        this.changeLanguage(next);
    }

    getCurrentLanguage() {
        const path = window.location.pathname;
        if (path.includes('/vi/') || path.endsWith('/vi') || path.endsWith('/vi/index.html')) {
            return 'vi';
        }
        if (path.includes('/en/') || path.endsWith('/en') || path.endsWith('/en/index.html')) {
            return 'en';
        }
        return this.implementor.getSavedLanguage();
    }

    // Auto router maintains root URL https://trinhngocnhat.github.io
    autoRoute() {
        // Keeps root URL https://trinhngocnhat.github.io default without forced redirect
    }
}

// Instantiate globally
const redirectImplementor = new UrlRedirectImplementor();
window.languageManager = new LanguageManager(redirectImplementor);
