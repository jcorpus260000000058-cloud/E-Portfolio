// Automatic Year
const yearSpan = document.getElementById("year");

if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Dark Mode Button
const themeBtn = document.getElementById("theme-btn");

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}

// Contact Button
const contactBtn = document.getElementById("contact-btn");

if (contactBtn) {
    contactBtn.addEventListener("click", () => {
        alert("Thank you for visiting my portfolio!");
    });
}
