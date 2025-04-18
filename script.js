// Intersection Observer for fade-in and slide animations
document.addEventListener("DOMContentLoaded", function () {
  // Fade in animations
  const fadeElements = document.querySelectorAll(".fade-in");
  const slideRightElements = document.querySelectorAll(".slide-in-right");
  const slideLeftElements = document.querySelectorAll(".slide-in-left");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("fade-in")) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
          } else if (entry.target.classList.contains("slide-in-right")) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateX(0)";
          } else if (entry.target.classList.contains("slide-in-left")) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateX(0)";
          }
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  fadeElements.forEach((element) => {
    observer.observe(element);
  });

  slideRightElements.forEach((element) => {
    observer.observe(element);
  });

  slideLeftElements.forEach((element) => {
    observer.observe(element);
  });

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navMenu = document.getElementById("navMenu");

  mobileMenuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

  // Close mobile menu when clicking a link
  const navLinks = document.querySelectorAll(".nav-menu a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth",
        });
      }
    });
  });

  // Sticky navbar
  const navbar = document.getElementById("navbar");
  const sticky = navbar.offsetTop;

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });
});
