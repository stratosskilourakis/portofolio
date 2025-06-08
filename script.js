document.addEventListener('DOMContentLoaded', function () {

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));

            targetSection.scrollIntoView({
                behavior: 'smooth'
            });

            // Function to check if scrolling has stopped
            function checkIfScrollStopped() {
                const position = window.pageYOffset;
                setTimeout(() => {
                    if (position === window.pageYOffset) {
                        // Add zoom effect when scrolling stops
                        targetSection.classList.add('zoom-effect');

                        // Remove the effect after the animation completes
                        setTimeout(() => {
                            targetSection.classList.remove('zoom-effect');
                        }, 1000); // Match the duration of the CSS animation
                    } else {
                        checkIfScrollStopped();
                    }
                }, 100);
            }

            checkIfScrollStopped();
        });
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('visible'); // Add a 'visible' class in your CSS
        });
    }

    // Contact Form Validation
    const form = document.querySelector('#contact-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            // Add your form validation logic here
            console.log('Form Submitted'); // Replace with actual submission logic
        });
    }

    // Dark Mode Toggle Functionality
    const darkModeToggle = document.getElementById('darkModeToggle');

    // Check for saved theme in localStorage and apply
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️';
    } else {
        darkModeToggle.textContent = '🌙';
    }

    // Toggle dark mode and save preference
    darkModeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            darkModeToggle.textContent = '☀️';
        } else {
            localStorage.setItem('theme', 'light');
            darkModeToggle.textContent = '🌙';
        }
    });

});
