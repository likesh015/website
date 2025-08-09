// Smooth scroll already handled by CSS scroll-behavior
// Add form validation or alert

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for contacting me!');
  this.reset();
});

