
// NAVBAR SCROLL EFFECT
const navbar = document.getElementById("mainNavbar");

window.addEventListener("scroll", function () {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// TYPING ANIMATION
const typingElement = document.getElementById("typing");

const roles = [
    "Part-Time Web Developer",
    "Laravel Developer",
    "PHP Developer",
    "Web Application Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (!deleting) {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, deleting ? 45 : 90);
}

typeEffect();

// CURRENT YEAR
document.getElementById("year").textContent = new Date().getFullYear();

// SCROLL REVEAL
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    revealElements.forEach(function (element) {
        observer.observe(element);
    });
} else {
    revealElements.forEach(function (element) {
        element.classList.add("show");
    });
}

// CLOSE MOBILE MENU AFTER CLICK
document.querySelectorAll(".navbar-nav .nav-link, .nav-contact").forEach(function (link) {
    link.addEventListener("click", function () {
        const menu = document.getElementById("navbarMenu");

        if (menu.classList.contains("show")) {
            bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }
    });
});

// CONTACT FORM - OPENS USER'S EMAIL APPLICATION
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        formStatus.textContent = "Please fill in all fields.";
        return;
    }

    const receiver = "yourmail@gmail.com";

    const mailSubject = encodeURIComponent(subject);
    const mailBody = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    formStatus.textContent = "Opening your email application...";

    window.location.href =
        "mailto:" + receiver +
        "?subject=" + mailSubject +
        "&body=" + mailBody;
});
