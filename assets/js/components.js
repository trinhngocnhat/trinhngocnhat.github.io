/**
 * Reusable Component Rendering Engine
 * Project: trinhngocnhat.github.io
 * Author: Trịnh Ngọc Nhát
 * 
 * Provides shared UI component builders to eliminate HTML code duplication across all pages.
 */

const UIComponents = {
    /**
     * Determines whether the current page is in a subdirectory (en/ or vi/)
     * and returns the appropriate relative path prefix ('./' or '../').
     */
    getPrefix() {
        const path = window.location.pathname;
        const isInSubDir = path.includes('/en/') || path.includes('/vi/') ||
                         path.endsWith('/en') || path.endsWith('/vi');
        return isInSubDir ? '../' : './';
    },

    /**
     * Renders Header Navigation & Language Switcher Bridge
     */
    renderHeader(activeKey, currentLang) {
        const prefix = this.getPrefix();
        const data = window.SITE_DATA;
        if (!data) return '';

        const navHtml = data.nav.map(item => {
            const isActive = item.key === activeKey ? 'active' : '';
            const href = (prefix === '../') ? item.page : `${currentLang}/${item.page}`;
            const label = item.label[currentLang] || item.label.en;
            return `<li><a href="${href}" class="nav-link ${isActive}">${label}</a></li>`;
        }).join('');

        const enActive = currentLang === 'en' ? 'active' : '';
        const viActive = currentLang === 'vi' ? 'active' : '';

        const logoSrc = `${prefix}assets/images/${data.profile.avatar}`;
        const homeHref = (prefix === '../') ? 'index.html' : `${currentLang}/index.html`;

        return `
            <header class="header-nav">
                <a href="${homeHref}" class="nav-brand">
                    <img src="${logoSrc}" alt="${data.profile.name}">
                    <span>${data.profile.name}</span>
                </a>
                <div class="nav-right">
                    <nav>
                        <ul class="nav-links">
                            ${navHtml}
                        </ul>
                    </nav>
                    <div class="lang-switcher" aria-label="Language Selector">
                        <button class="lang-btn ${enActive}" data-lang="en" title="English">🇬🇧 EN</button>
                        <button class="lang-btn ${viActive}" data-lang="vi" title="Tiếng Việt">🇻🇳 VI</button>
                    </div>
                </div>
            </header>
        `;
    },

    /**
     * Renders Sidebar Profile Summary
     */
    renderSidebar(currentLang) {
        const prefix = this.getPrefix();
        const data = window.SITE_DATA;
        if (!data) return '';

        const p = data.profile;
        const role = p.roles[currentLang] || p.roles.en;
        const location = p.location[currentLang] || p.location.en;
        const labels = data.labels;

        return `
            <aside class="sidebar" aria-label="Profile summary">
                <img src="${prefix}assets/images/${p.avatar}" alt="${p.name}">
                <h1 class="name">${p.name}</h1>
                <p class="role">${role}</p>

                <div class="contact-list">
                    <div class="contact-item">
                        <span class="label">${labels.email[currentLang]}</span>
                        <a href="mailto:${p.email}">${p.email}</a>
                    </div>
                    <div class="contact-item">
                        <span class="label">${labels.github[currentLang]}</span>
                        <a href="${p.github}" target="_blank" rel="noopener noreferrer">${p.githubLabel}</a>
                    </div>
                    <div class="contact-item">
                        <span class="label">${labels.linkedin[currentLang]}</span>
                        <a href="${p.linkedin}" target="_blank" rel="noopener noreferrer">${p.linkedinLabel}</a>
                    </div>
                    <div class="contact-item">
                        <span class="label">${labels.location[currentLang]}</span>
                        <span>${location}</span>
                    </div>
                </div>
            </aside>
        `;
    },

    /**
     * Renders Technical Skills Grid
     */
    renderSkillsGrid(currentLang, categoriesFilter = null) {
        const data = window.SITE_DATA;
        if (!data || !data.skills) return '';

        let skillItems = data.skills;
        if (categoriesFilter && Array.isArray(categoriesFilter)) {
            skillItems = skillItems.filter(s => categoriesFilter.includes(s.category.en));
        }

        const cardsHtml = skillItems.map(item => {
            const catName = item.category[currentLang] || item.category.en;
            const tagsHtml = item.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

            return `
                <div class="skill-card">
                    <strong>${catName}</strong>
                    <div class="skill-tags">
                        ${tagsHtml}
                    </div>
                </div>
            `;
        }).join('');

        return `<div class="skills-grid">${cardsHtml}</div>`;
    },

    /**
     * Renders Projects Cards Grid
     */
    renderProjectsGrid(currentLang) {
        const data = window.SITE_DATA;
        if (!data || !data.projects) return '';

        const cardsHtml = data.projects.map(proj => {
            const title = proj.title[currentLang] || proj.title.en;
            const desc = proj.description[currentLang] || proj.description.en;
            const tagsHtml = proj.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
            const btnLabel = data.labels.sourceCode[currentLang] || 'Source Code ↗';

            return `
                <div class="project-card">
                    <div>
                        <h3>${title}</h3>
                        <p>${desc}</p>
                    </div>
                    <div class="project-meta">
                        <div class="skill-tags">
                            ${tagsHtml}
                        </div>
                        <div class="project-links">
                            <a href="${proj.githubUrl}" target="_blank" class="btn-sm">${btnLabel}</a>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        return `<div class="projects-grid">${cardsHtml}</div>`;
    },

    /**
     * Renders Footer
     */
    renderFooter(currentLang) {
        const data = window.SITE_DATA;
        if (!data) return '';

        const footerText = data.footer.text[currentLang] || data.footer.text.en;
        return `
            <footer class="footer">
                <p>${footerText}</p>
            </footer>
        `;
    }
};

window.UIComponents = UIComponents;
