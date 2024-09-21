document.addEventListener("DOMContentLoaded", function () {
    const text = "I am a data scientist with a background in Bioinformatics, Machine Learning, and healthcare analytics. I have experience optimizing large scale data pipelines and developing predictive models. I am constantly open to learning and am driven to apply my analytical and interpersonal skillset to discover innovative solutions for highly-impactful challenges.";
    const typingSpeed = 8; // Adjust the typing speed (milliseconds between each character)
    let i = 0;
    const descriptionElement = document.getElementById('description');

    function typeWriter() {
        if (i < text.length) {
            descriptionElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, typingSpeed);
        }
    }

    // Start typing animation when the page loads
    typeWriter();

    // Add event listener for the "Home" link to reload the page
    document.querySelector('a[href="#home"]').addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        location.reload(); // Reload the page
    });
});
