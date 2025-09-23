const links = document.querySelectorAll('.main-nav-link');
const mainNav = document.querySelector('.main-nav');
const sphere = document.querySelector('.sphere');

let current = 0;

const showLink = function (index) {
  links.forEach((link, i) => {
    link.classList.toggle('active', i === index);
    if (i === index) {
      link.scrollIntoView({ behavior: 'instant', block: 'center' });
    }
  });
};

sphere.addEventListener('mouseenter', function (e) {
  e.preventDefault();
  showLink(current);
});

sphere.addEventListener('mouseleave', function (e) {
  e.preventDefault();
  current = 0;
  links.forEach((link) => {
    link.classList.remove('active');
  });
});

// Wheel event
sphere.addEventListener('wheel', (e) => {
  if (e.deltaY > 0) {
    current = (current + 1) % links.length;
  } else if (e.deltaY < 0) {
    current = (current - 1 + links.length) % links.length;
  }
  e.preventDefault();
  showLink(current);
});

document.querySelectorAll('main-nav-link').forEach((link) => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    const section = document.querySelector(targetId);

    // Rimuovo "play" da tutti
    document.querySelectorAll('.content').forEach((el) => {
      el.classList.remove('play');
    });

    // Aggiungo "play" solo al contenuto della sezione scelta
    const content = section.querySelector('.content');
    content.classList.add('play');
  });
});

// Touch swipe event
// let startX = null;
// document.querySelector('.main-nav').addEventListener('touchstart', (e) => {
//   startX = e.touches[0].clientX;
// });
// document.querySelector('.main-nav').addEventListener('touchend', (e) => {
//   if (startX === null) return;
//   let endX = e.changedTouches[0].clientX;
//   if (endX < startX - 30) {
//     current = (current + 1) % links.length;
//     showLink(current);
//   } else if (endX > startX + 30) {
//     current = (current - 1 + links.length) % links.length;
//     showLink(current);
//   }
//   startX = null;
// });
