document.addEventListener('DOMContentLoaded', () => {
    // Nav scrolling effect (Glassmorphism)
    const nav = document.querySelector('.nav-container');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.style.backgroundColor = 'rgba(242, 251, 254, 0.85)';
                nav.style.boxShadow = 'var(--ambient-shadow)';
            } else {
                nav.style.backgroundColor = 'rgba(242, 251, 254, 0.7)';
                nav.style.boxShadow = 'none';
            }
        });
    }

    // Mobile Menu Toggle Logic
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });
    }

    // Booking logic removed as it's now handled by Calendly inline widget
});
