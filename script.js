const menuButton = document.querySelector('.menu-button');
const mainNav = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

mainNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const video = document.querySelector('#demo-video');
const source = document.querySelector('#demo-source');
const fallback = document.querySelector('#video-fallback');
const picker = document.querySelector('#video-picker');

const showVideo = () => {
  fallback.hidden = true;
  video.hidden = false;
};

const showFallback = () => {
  video.hidden = true;
  fallback.hidden = false;
};

source?.addEventListener('error', showFallback);
video?.addEventListener('loadedmetadata', showVideo);

picker?.addEventListener('change', (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  const localUrl = URL.createObjectURL(file);
  video.src = localUrl;
  video.load();
  showVideo();
  video.play().catch(() => {});
});

const modal = document.querySelector('#image-modal');
const modalImage = document.querySelector('#modal-image');

document.querySelectorAll('.brochure-button').forEach((button) => {
  button.addEventListener('click', () => {
    modalImage.src = button.dataset.image;
    modalImage.alt = button.querySelector('img').alt;
    modal.showModal();
  });
});

document.querySelector('.modal-close')?.addEventListener('click', () => modal.close());
modal?.addEventListener('click', (event) => {
  if (event.target === modal) modal.close();
});
