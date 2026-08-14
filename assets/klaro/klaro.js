/*
 * TanOffice consent configuration for Klaro.
 *
 * Every consent-controlled HTML element must use a data-name value that
 * matches a service name below. The Klaro runtime itself is self-hosted in
 * klaro-0.7.22.js so that displaying the banner creates no third-party
 * request. Keep Klaro-related assets together in this directory.
 */
var klaroConfig = {
    version: 1,
    elementID: 'klaro',
    storageMethod: 'cookie',
    storageName: 'tanoffice-consent',
    cookieExpiresAfterDays: 365,
    default: false,
    mustConsent: false,
    acceptAll: true,
    hideDeclineAll: false,
    hideLearnMore: false,

    translations: {
        zz: {
            privacyPolicyUrl: '/rechtliches.html#datenschutz'
        },
        de: {
            privacyPolicyUrl: '/rechtliches.html#datenschutz',
            consentNotice: {
                description: 'Wir verwenden optionale Cookies, um die Nutzung unserer Website zu analysieren. Sie entscheiden, ob Google Analytics geladen werden darf.',
                learnMore: 'Einstellungen'
            },
            consentModal: {
                title: 'Cookie-Einstellungen',
                description: 'Hier können Sie Ihre Einwilligung jederzeit prüfen und ändern.'
            },
            acceptAll: 'Alle akzeptieren',
            acceptSelected: 'Auswahl akzeptieren',
            ok: 'Alle akzeptieren',
            decline: 'Alle ablehnen',
            save: 'Auswahl speichern',
            close: 'Schließen',
            purposes: {
                analytics: {
                    title: 'Statistik',
                    description: 'Hilft uns zu verstehen, wie Besucher unsere Website nutzen.'
                }
            }
        },
        en: {
            privacyPolicyUrl: '/rechtliches.html#datenschutz',
            consentNotice: {
                description: 'We use optional cookies to analyse how our website is used. You decide whether Google Analytics may be loaded.',
                learnMore: 'Settings'
            },
            consentModal: {
                title: 'Cookie settings',
                description: 'Review or change your consent at any time.'
            },
            acceptAll: 'Accept all',
            acceptSelected: 'Accept selected',
            ok: 'Accept all',
            decline: 'Reject all',
            save: 'Save selection',
            close: 'Close',
            purposes: {
                analytics: {
                    title: 'Analytics',
                    description: 'Helps us understand how visitors use our website.'
                }
            }
        }
    },

    services: [
        {
            name: 'googleAnalytics',
            title: 'Google Analytics',
            purposes: ['analytics'],
            default: false,
            required: false,
            optOut: false,
            onlyOnce: true,
            cookies: [
                /^_ga$/,
                /^_ga_.*$/,
                /^_gid$/
            ],
            translations: {
                de: {
                    description: 'Erstellt mit Ihrer Einwilligung pseudonyme Nutzungsstatistiken. Anbieter: Google Ireland Limited.'
                },
                en: {
                    description: 'Creates pseudonymous usage statistics with your consent. Provider: Google Ireland Limited.'
                }
            }
        }
    ]
};
