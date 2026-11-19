
// Typing Effect
const typingText = document.getElementById("typing-text");

const roles = [
    "Web Developer",
    "Laravel Developer",
    "PHP Developer",
    "B.Tech Student"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (deleting) {
        typingText.textContent = currentRole.substring(0, characterIndex - 1);
        characterIndex--;
    } else {
        typingText.textContent = currentRole.substring(0, characterIndex + 1);
        characterIndex++;
    }

    let speed = deleting ? 50 : 100;

    if (!deleting && characterIndex === currentRole.length) {
        deleting = true;
        speed = 1200;
    } else if (deleting && characterIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// Automatic Current Year
document.getElementById("year").textContent = new Date().getFullYear();


// Navbar Scroll Effect
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 5px 25px rgba(0,0,0,0.3)";
    } else {
        navbar.style.boxShadow = "none";
    }
});


// Contact Form
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        alert("Please fill in all fields.");
        return;
    }

    const yourEmail = "yourmail@gmail.com";

    const mailSubject = encodeURIComponent(subject);
    const mailBody = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    window.location.href =
        "mailto:" + yourEmail +
        "?subject=" + mailSubject +
        "&body=" + mailBody;
});


// Close Mobile Navbar After Clicking a Link
document.querySelectorAll(".navbar-nav .nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
        const navbarMenu = document.getElementById("navbarNav");

        if (navbarMenu.classList.contains("show")) {
            bootstrap.Collapse.getOrCreateInstance(navbarMenu).hide();
        }
    });
});
