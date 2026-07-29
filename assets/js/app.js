/**
 * Application Controller & Component Hydrator
 * Project: trinhngocnhat.github.io
 * Author: Trịnh Ngọc Nhất
 * 
 * Mounts shared UI components dynamically onto page placeholder containers.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Determine active language
    const currentLang = window.languageManager ? window.languageManager.getCurrentLanguage() : 'en';

    // 2. Identify active navigation key from body data-page attribute
    const activeNavKey = document.body.getAttribute('data-page') || 'home';

    // 3. Mount Header
    const headerEl = document.getElementById('site-header');
    if (headerEl && window.UIComponents) {
        headerEl.innerHTML = window.UIComponents.renderHeader(activeNavKey, currentLang);
    }

    // 4. Mount Sidebar
    const sidebarEl = document.getElementById('site-sidebar');
    if (sidebarEl && window.UIComponents) {
        sidebarEl.innerHTML = window.UIComponents.renderSidebar(currentLang);
    }

    // 5. Mount Skills Grid
    const skillsEl = document.getElementById('skills-container');
    if (skillsEl && window.UIComponents) {
        skillsEl.innerHTML = window.UIComponents.renderSkillsGrid(currentLang);
    }

    // 6. Mount Projects Grid
    const projectsEl = document.getElementById('projects-container');
    if (projectsEl && window.UIComponents) {
        projectsEl.innerHTML = window.UIComponents.renderProjectsGrid(currentLang);
    }

    // 7. Mount Footer
    const footerEl = document.getElementById('site-footer');
    if (footerEl && window.UIComponents) {
        footerEl.innerHTML = window.UIComponents.renderFooter(currentLang);
    }

    // 8. Bind Language Switcher Buttons
    const langButtons = document.querySelectorAll('[data-lang]');
    langButtons.forEach(btn => {
        const btnLang = btn.getAttribute('data-lang');
        if (btnLang === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (window.languageManager) {
                window.languageManager.changeLanguage(btnLang);
            }
        });
    });
});
