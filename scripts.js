document.addEventListener("DOMContentLoaded", function() {
    // Initialize lightGallery
    lightGallery(document.getElementById('photos'), {
        download: true,
        selector: 'a'
    });

    // Theme toggle button
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Set initial theme based on user's system preference
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDarkScheme) {
        body.classList.add('dark-mode');
    } else {
        body.classList.add('light-mode');
    }

    toggleButton.addEventListener('click', function() {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
        }
    });
});
