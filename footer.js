// footer.js — builds and injects the shared footer into every DE page.
// Reads data-root-prefix on <footer id="site-footer"> to resolve paths.
// Use data-root-prefix="." for root pages, ".." for sub-folder pages.

document.addEventListener('DOMContentLoaded', function () {

    const footer = document.getElementById('site-footer');
    if (!footer) return;

    const rootPrefix = footer.dataset.rootPrefix || '.';
    const currentYear = new Date().getFullYear();

    function path(file) {
        return rootPrefix + '/' + file;
    }

    // Map current DE filename to its EN equivalent
    const deToEn = {
        'index.html': 'en/index.html',
        'kontakt.html': 'en/contact.html',
        'leistungen.html': 'en/services.html',
        'download.html': 'en/download.html',
        'team.html': 'en/team.html',
        'rechtliches.html': 'en/legal.html',
        'support.html': 'en/support.html'
    };
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';
    const enHref = rootPrefix + '/' + (deToEn[currentFile] || 'en/index.html');

    footer.innerHTML = `
        <div class="container">
            <div class="footer-content">

                <div class="footer-nav">
                    <a href="${path('index.html')}">Home</a>
                    <a href="${path('leistungen.html')}">Leistungen</a>
                    <a href="${path('download.html')}">Download</a>
                    <a href="${path('team.html')}">Team</a>
                    <a href="${path('kontakt.html')}">Kontakt</a>
                </div>

                <div class="footer-legal">
                    <a href="${path('rechtliches.html')}">Rechtliches</a>
                </div>

                <div class="footer-lang">
                    <span class="footer-lang-active">DE</span>
                    <span class="footer-lang-sep">|</span>
                    <a href="${enHref}" class="footer-lang-link">EN</a>
                </div>

                <div class="footer-copyright">
                    <p>TanOffice &#174; ${currentYear} &ndash; Bereitgestellt von <a href="https://danielfoth.de" target="_blank" rel="noopener noreferrer">Daniel Foth</a></p>
                </div>

            </div>
        </div>
    `;

});
