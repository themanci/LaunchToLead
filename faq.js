// Simplified FAQ interactivity: collapse/expand only (no filters/search)
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const active = item.classList.contains('active');
    // Close others
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    if (!active) item.classList.add('active');
  });
});
