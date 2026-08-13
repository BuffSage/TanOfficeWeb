/**
 * footer.js (English version)
 * Builds and inserts the shared site footer into every English page.
 *
 * How it works:
 *   1. Waits for the page to finish loading (DOMContentLoaded).
 *   2. Finds the <footer id="site-footer"> element on the page.
 *   3. Reads the `data-root-prefix` attribute to know where the site root is
 *      (e.g. "." for root-level pages, ".." for pages in subfolders).
 *   4. Builds the footer HTML with correct links and the current year.
 *   5. Injects the HTML into the footer element.
 */

document.addEventListener('DOMContentLoaded', function () {

    const footer = document.getElementById('site-footer');
    if (!footer) return;

    const rootPrefix = footer.dataset.rootPrefix || '.';
    const currentYear = new Date().getFullYear();

    function path(file) {
        return rootPrefix + '/en/' + file;
    }

    // Map current EN filename to its DE equivalent
    const enToDe = {
        'index.html':    'index.html',
        'contact.html':  'kontakt.html',
        'services.html': 'leistungen.html',
        'download.html': 'download.html',
        'team.html':     'team.html',
        'legal.html':    'rechtliches.html',
        'support.html':  'support.html'
    };
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';
    const deHref = rootPrefix + '/' + (enToDe[currentFile] || 'index.html');

    footer.innerHTML = `
        <div class="container">
            <div class="footer-content">

                <!-- Main navigation links -->
                <div class="footer-nav">
                    <a href="${path('index.html')}">Home</a>
                    <a href="${path('services.html')}">Services</a>
                    <a href="${path('download.html')}">Download</a>
                    <a href="${path('team.html')}">Team</a>
                    <a href="${path('contact.html')}">Contact</a>
                </div>

                <!-- Legal / imprint link -->
                <div class="footer-legal">
                    <a href="${path('legal.html')}">Legal</a>
                </div>

                <!-- Language toggle -->
                <div class="footer-lang">
                    <a href="${deHref}" class="footer-lang-link">DE</a>
                    <span class="footer-lang-sep">|</span>
                    <span class="footer-lang-active">EN</span>
                </div>

                <!-- Copyright notice -->
                <div class="footer-copyright">
                    <p> TanOffice &#174; ${currentYear} &ndash; Provided by <a href="https://danielfoth.de" target="_blank" rel="noopener noreferrer">Daniel Foth</a></p>
                </div>

            </div>
        </div>
    `;

});
