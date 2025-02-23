document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  // Toggle mobile navigation menu
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 60,
          behavior: 'smooth'
        });
      }
    });
  });

  // Handle contact form submission (demo behavior)
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for getting in touch with ClaimBuddy! We will get back to you soon.');
      contactForm.reset();
    });
  }
});