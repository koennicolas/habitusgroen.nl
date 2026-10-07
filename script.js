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

  // Slideshow: automatisch verder, pauze bij hover, knoppen voor vorige/volgende
  document.querySelectorAll('.slideshow').forEach(function (box) {
    var slides = box.querySelectorAll('.slide');
    if (slides.length < 2) return;
    var i = 0, timer = null, delay = 4000;
    function show(n) {
      slides[i].classList.remove('active');
      i = (n + slides.length) % slides.length;
      slides[i].classList.add('active');
    }
    function start() { stop(); timer = setInterval(function () { show(i + 1); }, delay); }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    box.querySelector('.prev').addEventListener('click', function () { show(i - 1); });
    box.querySelector('.next').addEventListener('click', function () { show(i + 1); });
    box.addEventListener('mouseenter', stop);
    box.addEventListener('mouseleave', start);
    start();
  });
});
