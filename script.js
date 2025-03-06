// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetElement = document.querySelector(this.getAttribute("href"));
    window.scrollTo({
      top: targetElement.offsetTop - 60, // Adjusting for fixed navbar
      behavior: "smooth",
    });
  });
});

// Sticky Navbar on Scroll
const navbar = document.querySelector("header nav");
const stickyOffset = navbar.offsetTop;

window.onscroll = () => {
  if (window.pageYOffset > stickyOffset) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

// Mobile Navigation Toggle (For smaller screens)
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("header nav ul");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Handling Form Submission (For Contact Form)
const contactForm = document.querySelector("form");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  const formData = new FormData(contactForm);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Validate form data
  if (name && email && message) {
    // Normally you would send the data to the server here (e.g., using fetch or XMLHttpRequest)
    alert("Thank you for contacting us! We will get back to you soon.");
    contactForm.reset(); // Clear the form after successful submission
  } else {
    alert("Please fill in all fields before submitting the form.");
  }
});

// Add an event listener to open the mobile menu toggle button
const toggleMenu = () => {
  const menuIcon = document.querySelector(".menu-toggle");
  menuIcon.addEventListener("click", () => {
    document.querySelector("header nav ul").classList.toggle("active");
  });
};

// Execute the menu toggle function for mobile responsiveness
toggleMenu();
