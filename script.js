// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Mobile menu toggle
const menuButton = document.querySelector("button");
const nav = document.querySelector("nav div");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("hidden");
});

// Update active nav link based on scroll position
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let currentSectionId = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === currentSectionId) {
      link.classList.add("active");
    }
  });
}

// Call updateActiveNavLink on scroll and on page load
window.addEventListener("scroll", updateActiveNavLink);
window.addEventListener("load", updateActiveNavLink);

// CV Popup functionality
const viewCVBtn = document.getElementById("view-cv-btn");
const cvPopup = document.getElementById("cv-popup");
const closePopupBtn = document.getElementById("close-popup");

viewCVBtn.addEventListener("click", () => {
  cvPopup.classList.remove("hidden");
  cvPopup.classList.add("flex");
  document.body.style.overflow = "hidden"; // Prevent scrolling when popup is open
});

closePopupBtn.addEventListener("click", () => {
  cvPopup.classList.add("hidden");
  cvPopup.classList.remove("flex");
  document.body.style.overflow = ""; // Re-enable scrolling
});

cvPopup.addEventListener("click", (e) => {
  if (e.target === cvPopup) {
    cvPopup.classList.add("hidden");
    cvPopup.classList.remove("flex");
    document.body.style.overflow = ""; // Re-enable scrolling
  }
});
