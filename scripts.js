// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const burgerMobile = document.querySelector('.burger--mobile');
    const burgerTablet = document.querySelector('.burger--tablet');
    const closeBtn = document.querySelector('.mobile-menu__close');
    const overlay = document.querySelector('.mobile-menu__overlay');
    const navLinks = document.querySelectorAll('.nav__link');

    // Open menu
    function openMenu() {
        mobileMenu.classList.add('mobile-menu--active');
        document.body.style.overflow = 'hidden';
    }

    // Close menu
    function closeMenu() {
        mobileMenu.classList.remove('mobile-menu--active');
        document.body.style.overflow = '';
    }

    // Event listeners
    burgerMobile.addEventListener('click', openMenu);
    
    if (burgerTablet) {
        burgerTablet.addEventListener('click', openMenu);
    }
    
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    // Close menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Equipment Tabs
    const tabs = document.querySelectorAll('.equipment-tab');
    const panes = document.querySelectorAll('.equipment-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and panes
            tabs.forEach(t => t.classList.remove('equipment-tab--active'));
            panes.forEach(p => p.classList.remove('equipment-pane--active'));
            
            // Add active class to clicked tab and corresponding pane
            this.classList.add('equipment-tab--active');
            document.querySelector(`.equipment-pane--${targetTab}`).classList.add('equipment-pane--active');
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
        }
        
        lastScroll = currentScroll;
    });

    // Add animation on scroll
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

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Rate card popular animation
    const popularCard = document.querySelector('.rate-card--popular');
    if (popularCard) {
        setInterval(() => {
            popularCard.style.transform = 'scale(1.02)';
            setTimeout(() => {
                popularCard.style.transform = 'scale(1)';
            }, 200);
        }, 3000);
    }
});