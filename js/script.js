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
        updateMenuIcon(); // Ensure the menu icon updates when theme changes
    }

    function updateMenuIcon() {
        const isDarkMode = body.classList.contains("dark-mode");
        const isMenuOpen = navbarCollapse.classList.contains("show");

        if (isMenuOpen) {
            menuIcon.src = isDarkMode ? "img/x-white.svg" : "img/x.svg";
        } else {
            menuIcon.src = isDarkMode ? "img/align-right-white.svg" : "img/align-right.svg";
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

    // Menu toggle
    menuToggle.addEventListener("click", function () {
        updateMenuIcon();
    });

    // Ensure correct icon when menu is expanded
    navbarCollapse.addEventListener("shown.bs.collapse", function () {
        updateMenuIcon();
    });

    // Ensure correct icon when menu is closed
    navbarCollapse.addEventListener("hidden.bs.collapse", function () {
        setTimeout(updateMenuIcon, 10); // Ensure Bootstrap animation finishes before updating
    });

    // Ensure correct icon on page load
    updateMenuIcon();
});
