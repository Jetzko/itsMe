const links = document.querySelectorAll('.main-nav-link');
const mainNav = document.querySelector('.main-nav');
const sphere = document.querySelector('.sphere');
const orbs = document.querySelectorAll('.orb');

let current = 0;

orbs.forEach((orb) => {
  orb.addEventListener('mouseenter', () => {
    console.log(orb);
    console.log(orb.querySelector('.orb-anchor'));
    orb.querySelector('.orb-anchor').classList.add('active');
  });
});

orbs.forEach((orb) => {
  orb.addEventListener('mouseleave', () => {
    orb.querySelector('.orb-anchor').classList.remove('active');
  });
});

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
  sphere.style.background =
    'radial-gradient(ellipse at bottom, #000000 0%, #1d0033 100%);';
});

// Wheel event
sphere.addEventListener('wheel', (e) => {
  if (e.deltaY > 40) {
    current = (current + 1) % links.length;
  } else if (e.deltaY < -40) {
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
