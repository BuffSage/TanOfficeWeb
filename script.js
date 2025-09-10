document.addEventListener('DOMContentLoaded', function() {
    // Add scroll event listener for header transparency
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 250) {
            header.style.backgroundColor = 'rgba(255, 215, 0, 0.95)';
        } else {
            header.style.backgroundColor = '';
        }
    });

    // Add intersection observer for animations
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

    // Observe feature cards for animation
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.2}s`;
        observer.observe(card);
    });

    // Observe about section
    const aboutContent = document.querySelector('.about-content');
    if (aboutContent) {
        aboutContent.style.opacity = '0';
        aboutContent.style.transform = 'translateY(30px)';
        aboutContent.style.transition = 'all 0.8s ease';
        observer.observe(aboutContent);
    }

    // Add hover effects to navigation - only for anchor links, not external pages
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only prevent default for anchor links (starting with #), allow normal navigation for .html files
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
            // For .html links, let the browser handle normal page navigation
        });
    });

    // Add typewriter effect to hero title
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '2px solid #FFD700';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 150);
            } else {
                setTimeout(() => {
                    heroTitle.style.borderRight = 'none';
                }, 1000);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }

    // Add floating animation to CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        setInterval(() => {
            ctaButton.style.transform = 'translateY(-2px)';
            setTimeout(() => {
                ctaButton.style.transform = 'translateY(0)';
            }, 1000);
        }, 3000);
    }

    // Add particle effect to hero section
    createParticles();
});

// Function to scroll to specific section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const header = document.querySelector('header');
    
    if (section) {
        const headerHeight = header.offsetHeight;
        const targetPosition = section.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Create floating particles in hero section
function createParticles() {
    const hero = document.querySelector('.hero');
    const particlesCount = 50;
    
    for (let i = 0; i < particlesCount; i++) {
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
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation
        const duration = Math.random() * 3 + 2; // 2-5 seconds
        const delay = Math.random() * 2; // 0-2 seconds delay
        
        particle.style.animation = `float ${duration}s infinite ease-in-out ${delay}s`;
        
        hero.appendChild(particle);
    }
    
    // Add CSS animation for particles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% {
                transform: translateY(0px) rotate(0deg);
                opacity: 0.7;
            }
            50% {
                transform: translateY(-20px) rotate(180deg);
                opacity: 1;
            }
        }
        
        .hero {
            position: relative;
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);
}

// Add smooth hover effects for feature cards
document.addEventListener('mouseover', function(e) {
    if (e.target.closest('.feature-card')) {
        const card = e.target.closest('.feature-card');
        card.style.background = 'linear-gradient(135deg, #fff, #fffbf0)';
    }
});

document.addEventListener('mouseout', function(e) {
    if (e.target.closest('.feature-card')) {
        const card = e.target.closest('.feature-card');
        card.style.background = 'white';
    }
});

// Mobile navigation toggle function
function toggleMobileNav() {
    const nav = document.getElementById('mobile-nav');
    const toggle = document.querySelector('.mobile-nav-toggle');
    
    nav.classList.toggle('show');
    toggle.classList.toggle('active');
    
    // Close nav when clicking outside
    document.addEventListener('click', function closeNav(e) {
        if (!e.target.closest('nav')) {
            nav.classList.remove('show');
            toggle.classList.remove('active');
            document.removeEventListener('click', closeNav);
        }
    });
}

// Suggestion bar is now permanent - no close functionality needed
