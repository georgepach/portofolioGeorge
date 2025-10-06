document.addEventListener('DOMContentLoaded', function() {
    
    // --- NAVBAR LOADER (if using separate navbar file) ---
    // fetch('navbar.html')
    //     .then(response => response.text())
    //     .then(data => {
    //         document.getElementById('navbar-placeholder').innerHTML = data;
    //     });

    // --- TYPING EFFECT ---
    const nameElement = document.getElementById('typing-name');
    if (nameElement) {
        const nameText = "George Binsar M.T. Sitorus";
        let charIndex = 0;
        
        function typeWriter() {
            if (charIndex < nameText.length) {
                nameElement.innerHTML += nameText.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 100); // Adjust typing speed
            }
        }
        typeWriter();
    }

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
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img-src');
    const captionText = document.getElementById('modal-caption');
    const closeModal = document.querySelector('.close-button');

    document.querySelectorAll('.item-title-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent link from navigating
            modal.style.display = "block";
            modalImg.src = this.dataset.imgSrc;
            captionText.innerHTML = this.dataset.imgTitle;
        });
    });

    // Close the modal when the 'x' is clicked
    if (closeModal) {
        closeModal.onclick = function() {
            modal.style.display = "none";
        }
    }

    // Close the modal when the user clicks anywhere outside of the modal content
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});