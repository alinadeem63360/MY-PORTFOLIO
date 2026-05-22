// MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// DARK MODE

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

  if(document.body.classList.contains("light-mode")) {
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }

});

// TYPING EFFECT

const typingText = document.querySelector(".typing");

const roles = [
  "Frontend Developer",
  "UI/UX Designer",
  "Creative Coder"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

  const currentRole = roles[roleIndex];

  if(!deleting) {

    typingText.textContent =
      currentRole.substring(0, charIndex++);

    if(charIndex > currentRole.length) {
      deleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }

  } else {

    typingText.textContent =
      currentRole.substring(0, charIndex--);

    if(charIndex < 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }

  }

  setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();

// SCROLL REVEAL

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

  const windowHeight = window.innerHeight;

  reveals.forEach(reveal => {

    const elementTop =
      reveal.getBoundingClientRect().top;

    if(elementTop < windowHeight - 80) {
      reveal.classList.add("active");
    }

  });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// PROJECT FILTER

const filterButtons =
  document.querySelectorAll(".filter-btn");

const projects =
  document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    document
      .querySelector(".filter-btn.active")
      .classList.remove("active");

    button.classList.add("active");

    const filter = button.dataset.filter;

    projects.forEach(project => {

      if(
        filter === "all" ||
        project.dataset.category === filter
      ) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }

    });

  });

});

// CONTACT FORM

const contactForm =
  document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {

  e.preventDefault();

  const name =
    document.getElementById("name").value.trim();

  const email =
    document.getElementById("email").value.trim();

  const message =
    document.getElementById("message").value.trim();

  if(!name || !email || !message) {
    alert("Please fill all fields");
    return;
  }

  alert("Message Sent Successfully!");

  contactForm.reset();

});