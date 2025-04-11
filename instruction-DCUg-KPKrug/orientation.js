window.addEventListener('orientationchange', function() {
  localStorage.setItem('scrollPosition', window.scrollY);
});

window.addEventListener('load', function() {
  const scrollPosition = localStorage.getItem('scrollPosition');
  if (scrollPosition) {
    window.scrollTo(0, scrollPosition);
    localStorage.removeItem('scrollPosition');
  }
});

window.addEventListener('orientationchange', function() {
  const orientation = window.orientation || 0;

  const images = document.querySelectorAll('.image');

  images.forEach(image => {
    if (orientation === 90 || orientation === -90) {
      image.style.height = 'auto';
      image.style.width = '100%';
    } else {
      image.style.width = '100%';
      image.style.height = 'auto';
    }
  });
});
