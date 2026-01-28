document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileNav = document.querySelector('.mobile-nav');
    const toggleButton = document.querySelector('.mobile-menu-toggle');

    function toggleMobileMenu() {
        const isOpen = mobileNav.classList.toggle('active');
        toggleButton.classList.toggle('active', isOpen);
        toggleButton.setAttribute('aria-expanded', isOpen);
    }

    // Add event listener to toggle button
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleMobileMenu);
    }

    // Close mobile menu when clicking nav links
    if (mobileNav) {
        mobileNav.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', toggleMobileMenu);
        });
    }

    // Set current year in footer
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
