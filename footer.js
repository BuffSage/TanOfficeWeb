/**
 * footer.js
 * Builds and inserts the shared site footer into every page.
 *
 * How it works:
 *   1. Waits for the page to finish loading (DOMContentLoaded).
 *   2. Finds the <footer id="site-footer"> element on the page.
 *   3. Reads the `data-root-prefix` attribute to know where the site root is
 *      (e.g. "." for root-level pages, ".." for pages in subfolders).
 *   4. Builds the footer HTML with correct links and the current year.
 *   5. Injects the HTML into the footer element.
 *
 * To use on a page, add these two things:
 *   - In the <body>:  <footer id="site-footer" data-root-prefix="."></footer>
 *   - Before </body>: <script src="footer.js"></script>
 *
 * For pages in subfolders, change data-root-prefix to "..":
 *   <footer id="site-footer" data-root-prefix=".."></footer>
 */

document.addEventListener('DOMContentLoaded', function () {

    // Find the footer element on the current page
    const footer = document.getElementById('site-footer');

    // If no footer element exists on this page, do nothing
    if (!footer) return;

    // Read the prefix that points back to the site root (e.g. "." or "..")
    const rootPrefix = footer.dataset.rootPrefix || '.';

    // Current year for the copyright notice
    const currentYear = new Date().getFullYear();

    // Helper: builds a full relative path to any file in the root
    function path(file) {
        return rootPrefix + '/' + file;
    }

    // Build and insert the footer HTML
    footer.innerHTML = `
        <div class="container">
            <div class="footer-content">

                <!-- Main navigation links -->
                <div class="footer-nav">
                    
                    <a href="${path('index.html')}">Home</a>
                    <a href="${path('leistungen.html')}">Leistungen</a>
                    <a href="${path('download.html')}">Download</a>
                    <a href="${path('team.html')}">Team</a>
                    <a href="${path('kontakt.html')}">Kontakt</a>
                </div>

                <!-- Legal / imprint link -->
                <div class="footer-legal">
                    <a href="${path('rechtliches.html')}">Rechtliches</a>
                </div>

                <!-- Copyright notice -->
                <div class="footer-copyright">
                    <p> TanOffice &#174; 2026 -&nbsp;Bereitgestellt von <a href="https://danielfoth.de" target="_blank" rel="noopener noreferrer">Daniel Foth</a></p>
                </div>

            </div>
        </div>
    `;

});
