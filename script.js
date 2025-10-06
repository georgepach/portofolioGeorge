document.addEventListener('DOMContentLoaded', function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
        });

    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('project-modal');

});

document.addEventListener('DOMContentLoaded', function() {
    
    // --- NAVBAR LOADER ---
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
        });

    const nameElement = document.getElementById('typing-name');
    const nameText = "George Binsar M.T. Sitorus";
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < nameText.length) {
            nameElement.innerHTML += nameText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 100); // Adjust typing speed (in ms)
        }
    }
    typeWriter(); // Start the typing effect

    // --- SMOOTH SCROLL ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- MODAL SCRIPT ---
    const projectCards = document.querySelectorAll('.project-card');
    // ... (the rest of your modal script continues here)
});