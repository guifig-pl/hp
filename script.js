// Translations
const translations = {
    en: {
        nav: {
            shop: 'Shop',
            about: 'About Us',
            languages: 'Languages'
        },
        hero: {
            tagline: 'Explore fragrances inspired by the Magical World of Harry Potter'
        },
        available: {
            title: 'AVAILABLE NOW',
            text1: 'Immerse yourselves in the allure of the Wizarding World through our new fragrance range.',
            text2: 'Inspired by iconic places and scenes from the series, each scent invokes feelings',
            text3: 'of magic and adventure.',
            button: 'ALL FRAGRANCES'
        }
    },
    de: {
        nav: {
            shop: 'Shop',
            about: 'Über uns',
            languages: 'Sprachen'
        },
        hero: {
            tagline: 'Entdecke Düfte inspiriert von der magischen Welt von Harry Potter'
        },
        available: {
            title: 'JETZT VERFÜGBAR',
            text1: 'Tauche mit unserer neuen Duftserie in die Faszination der Zauberwelt ein.',
            text2: 'Inspiriert von ikonischen Orten und Szenen aus den Filmen, ruft jeder Duft Gefühle',
            text3: 'von Magie und Abenteuer hervor.',
            button: 'ALLE DÜFTE'
        }
    },
    es: {
        nav: {
            shop: 'Tienda',
            about: 'Nosotros',
            languages: 'Idiomas'
        },
        hero: {
            tagline: 'Descubre fragancias inspiradas en el mágico universo de Harry Potter'
        },
        available: {
            title: 'YA DISPONIBLE',
            text1: 'Sumérgete en la fascinación del Wizarding World con nuestra nueva colección de fragancias.',
            text2: 'Inspiradas en los lugares y escenas más emblemáticos de la serie, cada esencia despierta',
            text3: 'sensaciones de magia y aventura.',
            button: 'TODAS LAS FRAGANCIAS'
        }
    }
};

// Current language (default: English)
let currentLang = 'en';

// Function to update all text elements based on current language
function updateLanguage(lang) {
    currentLang = lang;

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Find all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');

        // Navigate through the translations object
        let translation = translations[lang];
        for (let k of keys) {
            translation = translation[k];
        }

        if (translation) {
            element.textContent = translation;
        }
    });

    // Save language preference
    localStorage.setItem('preferred-language', lang);
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Load saved language preference
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang && translations[savedLang]) {
        updateLanguage(savedLang);
    }

    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');

            // Animate hamburger menu
            const spans = menuToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(10px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '1';
                spans[2].style.transform = '';
            }
        });
    }

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '1';
                spans[2].style.transform = '';
            }
        });
    });

    // Language switcher
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            updateLanguage(lang);

            // Close dropdown on mobile
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // CTA Button functionality
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // Scroll to fragrances section or navigate to shop
            console.log('Navigate to all fragrances');
        });
    }
});
