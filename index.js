document.addEventListener("DOMContentLoaded", function () {
    // Ensure the page always starts at the top after a refresh
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    // Typing animation for the description
    const typingSpeed = 9.5; // Adjust the typing speed (milliseconds between each character)
    let i = 0;
    const descriptionElement = document.getElementById('description-text');

    function typeWriter() {
        if (i < text.length) {
            descriptionElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, typingSpeed);
        }
    }

    // Start typing animation when the page loads
    typeWriter();

    // Add event listener for the "Home" link to reload the page and reset the URL
    document.querySelector('a[href="#home"]').addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        history.replaceState(null, null, window.location.pathname); // Remove the #section from the URL
        location.reload(); // Fully reload the page
    });
});
