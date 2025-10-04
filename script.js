document.addEventListener('DOMContentLoaded', () => {
  const bars = document.querySelectorAll('.skill-bar-fill');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const bar = entry.target;
      const percent = bar.getAttribute('data-percent');

      if (entry.isIntersecting) {
        bar.style.width = percent + '%';
      } else {
        bar.style.width = '0%'; // Reset when out of view
      }
    });
  }, {
    threshold: 0.4
  });

  bars.forEach(bar => observer.observe(bar));
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for reaching out!');
  this.reset();
});
