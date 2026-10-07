document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Bezonningsstudie stopmotion: cycle through frames every 0.5s, looping
  var sunImages = document.querySelectorAll('.sun-img');
  sunImages.forEach(function (img) {
    var frames = (img.getAttribute('data-frames') || '').split(',').filter(Boolean);
    if (frames.length < 2) return;
    var i = 0;
    setInterval(function () {
      i = (i + 1) % frames.length;
      img.src = frames[i];
    }, 500);
  });
});
