// Waitlist form — light client-side feedback
const form = document.getElementById('waitlistForm');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = form.querySelector('input[type="email"]');
    const button = form.querySelector('button[type="submit"]');
    if (!input || !button) return;

    const original = button.textContent;
    button.textContent = "You're on the list ✓";
    button.disabled = true;
    input.value = '';
    setTimeout(() => {
      button.textContent = original;
      button.disabled = false;
    }, 2200);
  });
}

// Single-open accordion behavior for FAQ
document.querySelectorAll('.faq__item').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      document.querySelectorAll('.faq__item').forEach((other) => {
        if (other !== item) other.open = false;
      });
    }
  });
});
