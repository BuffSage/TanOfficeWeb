document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');

    // Fade header background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 250) {
            header.style.backgroundColor = 'rgba(255, 215, 0, 0.95)';
        } else {
            header.style.backgroundColor = '';
        }
    });

    // Scroll-in animations for feature cards and about section
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.2}s`;
        observer.observe(card);
    });

    const aboutContent = document.querySelector('.about-content');
    if (aboutContent) {
        aboutContent.style.opacity = '0';
        aboutContent.style.transform = 'translateY(30px)';
        aboutContent.style.transition = 'all 0.8s ease';
        observer.observe(aboutContent);
    }

    // Smooth scroll for in-page anchor links only
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.getElementById(href.substring(1));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - header.offsetHeight - 20,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Typewriter effect on hero h1
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '2px solid #FFD700';
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i++);
                setTimeout(typeWriter, 150);
            } else {
                setTimeout(() => { heroTitle.style.borderRight = 'none'; }, 1000);
            }
        };
        setTimeout(typeWriter, 1000);
    }

    // Subtle CTA button float pulse
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        setInterval(() => {
            ctaButton.style.transform = 'translateY(-2px)';
            setTimeout(() => { ctaButton.style.transform = 'translateY(0)'; }, 1000);
        }, 3000);
    }

    createParticles();
});

// Smooth scroll to an in-page section by id
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const header = document.querySelector('header');
    if (section) {
        window.scrollTo({
            top: section.offsetTop - header.offsetHeight - 20,
            behavior: 'smooth'
        });
    }
}

// Floating gold particles in the hero background
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: #FFD700;
            border-radius: 50%;
            pointer-events: none;
            opacity: 0.7;
        `;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top  = Math.random() * 100 + '%';
        const duration = Math.random() * 3 + 2;
        const delay    = Math.random() * 2;
        particle.style.animation = `float ${duration}s infinite ease-in-out ${delay}s`;
        hero.appendChild(particle);
    }

    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
            50%       { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
        .hero { position: relative; overflow: hidden; }
    `;
    document.head.appendChild(style);
}

// Feature card hover tint
document.addEventListener('mouseover', function(e) {
    const card = e.target.closest('.feature-card');
    if (card) card.style.background = 'linear-gradient(135deg, #fff, #fffbf0)';
});
document.addEventListener('mouseout', function(e) {
    const card = e.target.closest('.feature-card');
    if (card) card.style.background = 'white';
});

// Mobile nav toggle
function toggleMobileNav() {
    const nav    = document.getElementById('mobile-nav');
    const toggle = document.querySelector('.mobile-nav-toggle');
    if (!nav || !toggle) return;
    nav.classList.toggle('show');
    toggle.classList.toggle('active');
    document.addEventListener('click', function closeNav(e) {
        if (!e.target.closest('nav')) {
            nav.classList.remove('show');
            toggle.classList.remove('active');
            document.removeEventListener('click', closeNav);
        }
    });
}

// FAQ accordion — one item open at a time
document.addEventListener('click', function(e) {
    const btn = e.target.closest('.faq-question');
    if (!btn) return;
    const item   = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(function(el) {
        el.classList.remove('open');
        el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
    }
});
