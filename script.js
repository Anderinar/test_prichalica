document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  const menuButton = document.getElementById('menuButton');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden', isOpen);
      menuButton.setAttribute('aria-expanded', String(!isOpen));
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.querySelectorAll('[data-scroll]').forEach((button) => {
    button.addEventListener('click', () => {
      const track = document.getElementById(button.dataset.scroll);
      const direction = Number(button.dataset.direction || 1);

      if (!track) return;

      track.scrollBy({
        left: direction * Math.min(420, track.clientWidth * 0.85),
        behavior: 'smooth'
      });
    });
  });

  document.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
      const currentItem = button.closest('.faq-item');

      document.querySelectorAll('.faq-item').forEach((item) => {
        if (item !== currentItem) item.classList.remove('is-open');
      });

      currentItem.classList.toggle('is-open');
    });
  });

  const leadForm = document.getElementById('leadForm');
  const formStatus = document.getElementById('formStatus');

  if (leadForm && formStatus) {
    leadForm.addEventListener('submit', (event) => {
      event.preventDefault();
      formStatus.textContent = 'Спасибо! Мы свяжемся с вами в ближайшее время.';
      leadForm.reset();
    });
  }
});
