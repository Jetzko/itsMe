const links = document.querySelectorAll('.main-nav-link');
const mainNav = document.querySelector('.main-nav');
const sphere = document.querySelector('.sphere');
const scrollIcon = document.querySelector('.scroll-down-icon');
const heroSection = document.querySelector('#hero');

let current = 0;

const showLink = function (index) {
  scrollIcon.classList.add('active');
  // Rimuovi .active solo dal link precedente
  links.forEach((link, i) => {
    if (i === current) {
      link.classList.remove('active');
      link.blur();
    }
  });
  // Aggiungi .active e focus al nuovo link
  links[index].classList.add('active');
  links[index].focus();
  links[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
  current = index;
};

sphere.addEventListener('mouseenter', function (e) {
  e.preventDefault();
  showLink(current);
  sphere.addEventListener('wheel', (e) => {
    if (e.deltaY > 40) {
      showLink((current + 1) % links.length);
    } else if (e.deltaY < -40) {
      showLink((current - 1 + links.length) % links.length);
    }
    e.preventDefault();
  });
});

sphere.addEventListener('mouseleave', function (e) {
  e.preventDefault();
  scrollIcon.classList.remove('active');
  current = 0;
  links.forEach((link) => {
    link.classList.remove('active');
    link.blur();
  });
  //   sphere.style.background =
  //     'radial-gradient(ellipse at bottom, #000000 0%, #1d0033 100%);';
});

links.forEach((link) => {
  link.addEventListener('focus', () => {
    sphere.classList.add('active');
  });
  link.addEventListener('blur', () => {
    sphere.classList.remove('active');
  });
});

// Wheel event

// links.forEach((link) => {
//   link.addEventListener('click', (e) => {
//     const targetId = link.getAttribute('href');
//     const section = document.querySelector(targetId);

//     // Rimuovo "play" da tutti
//     document.querySelectorAll('.content').forEach((el) => {
//       el.classList.remove('play');
//     });

//     // Aggiungo "play" solo al contenuto della sezione scelta
//     const content = section.querySelector('.content');
//     content.classList.add('play');
//   });
// });

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
