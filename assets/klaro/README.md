# Klaro consent manager

This directory contains the complete, self-hosted Klaro integration:

- `klaro.js` — TanOffice consent configuration and translations.
- `klaro-0.7.22.js` — pinned upstream Klaro runtime.
- `klaro-0.7.22.min.css` — matching upstream base styles.
- `theme.css` — TanOffice-specific black and gold theme.
- `LICENSE.txt` — upstream BSD 3-Clause license.

Third-party elements managed by Klaro must use a `data-name` matching a
service in `klaro.js`. External scripts must use `data-src` instead of `src`
and both external and inline scripts must use `type="text/plain"` with their
original type stored in `data-type`.

When upgrading Klaro, add the new versioned runtime and stylesheet, update the
HTML references, retest consent gating, and then remove the superseded files.
