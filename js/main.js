/* ========================================
   FN Formation - Main JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {

    // ========================================
    // Mobile Menu Toggle
    // ========================================
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // ========================================
    // Navbar Active State on Scroll
    // ========================================
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // ========================================
    // Smooth Scroll for Anchor Links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu if open
                    if (navLinks) navLinks.classList.remove('active');
                }
            }
        });
    });

    // ========================================
    // Reviews Marquee - Duplicate for seamless loop
    // ========================================
    const reviewsTrack = document.querySelector('.reviews-track');
    if (reviewsTrack) {
        // Clone the content for seamless infinite scroll
        reviewsTrack.innerHTML += reviewsTrack.innerHTML;
    }

    // ========================================
    // Modal Functions
    // ========================================
    window.openModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            // Stop any video in the modal
            const iframe = modal.querySelector('iframe');
            if (iframe) {
                const src = iframe.src;
                iframe.src = '';
                iframe.src = src;
            }
        }
    };

    // Close modal on overlay click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal-overlay.active').forEach(modal => {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            });
        }
    });

    // ========================================
    // WhatsApp Form Handler
    // ========================================
    const whatsappForms = document.querySelectorAll('.whatsapp-form, .modal-form[data-whatsapp]');

    whatsappForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(form);
            const name = formData.get('name') || '';
            const phone = formData.get('phone') || '';
            const email = formData.get('email') || '';
            const course = formData.get('course') || '';
            const message = formData.get('message') || '';

            let whatsappText = '';

            if (form.dataset.type === 'contact') {
                whatsappText = `Bonjour FN Formation!%0A%0A` +
                    `Je souhaite vous contacter.%0A%0A` +
                    `Nom: ${encodeURIComponent(name)}%0A` +
                    `Téléphone: ${encodeURIComponent(phone)}%0A` +
                    `Email: ${encodeURIComponent(email)}%0A`;
                if (message) {
                    whatsappText += `Message: ${encodeURIComponent(message)}%0A`;
                }
            } else {
                whatsappText = `Bonjour FN Formation!%0A%0A` +
                    `Je suis intéressé(e) par un cours.%0A%0A` +
                    `Nom: ${encodeURIComponent(name)}%0A` +
                    `Téléphone: ${encodeURIComponent(phone)}%0A` +
                    `Email: ${encodeURIComponent(email)}%0A` +
                    `Cours: ${encodeURIComponent(course)}%0A`;
                if (message) {
                    whatsappText += `Message: ${encodeURIComponent(message)}%0A`;
                }
            }

            const whatsappNumber = '33751326118';
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

            window.open(whatsappUrl, '_blank');

            // Close modal if inside one
            const modal = form.closest('.modal-overlay');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }

            // Reset form
            form.reset();
        });
    });

    // ========================================
    // Demo Video Modal
    // ========================================
    window.openDemoModal = function(courseName) {
        const modal = document.getElementById('demoModal');
        const titleEl = document.getElementById('demoModalTitle');

        if (modal && titleEl) {
            titleEl.textContent = `Démo Classe - ${courseName}`;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    // ========================================
    // Buy Course Modal
    // ========================================
    window.openBuyModal = function(courseName) {
        const modal = document.getElementById('buyModal');
        const courseSelect = document.getElementById('buyCourseSelect');

        if (modal) {
            if (courseSelect && courseName) {
                courseSelect.value = courseName;
            }
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    // ========================================
    // Scroll Animation (Fade in elements)
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.course-card, .youtube-card, .contact-card, .about-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add visible class style
    const style = document.createElement('style');
    style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
    document.head.appendChild(style);

    // ========================================
    // Stats Counter Animation
    // ========================================
    const statItems = document.querySelectorAll('.stat-item h3');

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const text = target.textContent;
                const num = parseInt(text.replace(/\D/g, ''));
                const suffix = text.replace(/[0-9]/g, '');

                if (!isNaN(num)) {
                    let current = 0;
                    const increment = Math.ceil(num / 50);
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= num) {
                            current = num;
                            clearInterval(timer);
                        }
                        target.textContent = current + suffix;
                    }, 30);
                }

                statsObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    statItems.forEach(stat => statsObserver.observe(stat));

});
