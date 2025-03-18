document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const navbar = document.querySelector("nav");
    const menuToggle = document.getElementById("menu-toggle");
    const menuIcon = document.getElementById("menu-icon");
    const navbarCollapse = document.getElementById("navbarNav");

    // Remove any saved theme on refresh
    localStorage.removeItem("theme");

    function getSystemPreference() {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    function applyTheme(theme) {
        if (theme === "dark") {
            body.classList.add("dark-mode");
            navbar.classList.replace("navbar-light", "navbar-dark");
            navbar.classList.replace("bg-light", "bg-dark");
        } else {
            body.classList.remove("dark-mode");
            navbar.classList.replace("navbar-dark", "navbar-light");
            navbar.classList.replace("bg-dark", "bg-light");
        }
    }

    function updateMenuIcon() {
        const isMenuOpen = navbarCollapse.classList.contains("show");

        if (isMenuOpen) {
            menuIcon.src = "img/x.svg";
        } else {
            menuIcon.src = "img/align-right.svg";
        }
    }

    // Set theme based on system preference
    const systemTheme = getSystemPreference();
    applyTheme(systemTheme);
    themeToggle.checked = systemTheme === "dark";

    // Theme toggle event
    themeToggle.addEventListener("change", function () {
        const newTheme = themeToggle.checked ? "dark" : "light";
        applyTheme(newTheme);
    });

    // System theme changes
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
        applyTheme(e.matches ? "dark" : "light");
        themeToggle.checked = e.matches;
    });

    // Ensure correct icon when menu is expanded
    navbarCollapse.addEventListener("shown.bs.collapse", function () {
        updateMenuIcon();
    });

    // Ensure correct icon when menu is closed
    navbarCollapse.addEventListener("hidden.bs.collapse", function () {
        updateMenuIcon();
    });

    // Arrow scrolls to project section
    const scrollArrows = document.querySelectorAll(".animated-arrow"); // Select both arrows
    const projectsSection = document.getElementById("projects");

    if (scrollArrows.length > 0 && projectsSection) {
        scrollArrows.forEach(arrow => {
            arrow.addEventListener("click", function () {
                projectsSection.scrollIntoView({ behavior: "smooth" });
            });
        });
    }
});
