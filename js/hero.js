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
  // links[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
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
});

links.forEach((link) => {
  link.addEventListener('focus', () => {
    sphere.classList.add('active');
  });
  link.addEventListener('click', () => {
    link.blur();
    link.classList.remove('active');
    sphere.classList.remove('active');
    console.log('link click');
  });
  link.addEventListener('blur', () => {
    sphere.classList.remove('active');
  });
});

if (window.matchMedia('(max-width: 34em)').matches) {
  sphere.addEventListener('click', () => {
    sphere.classList.toggle('active');
    showLink(current);
  });
}

// const mediaQuery = window.matchMedia('(max-width: 59em)')

// if(mediaQuery.matches) {
// sphere.replaceWith(sphere.cloneNode(true))

// const newSphere = document.querySelector('.sphere')
// const newMainNav = newSphere.querySelector('.main-nav')

// newSphere.addEventListener('click', (e) => {
//   if (e.target.classList.contains('main-nav-link')) return;

//   newSphere.classList.toggle('active')
// })

// newMainNav.addEventListener('click', (e) => {
//   if(e.target.classList.contains('main-nav-link')) {
//     setTimeout(() => {
//       newSphere.classList.remove
//     })

//   }
// })

// Touch swipe event

let startX = null;
const sensitivity = 30;

document.querySelector('.main-nav').addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});
document.querySelector('.main-nav').addEventListener('touchend', (e) => {
  if (startX === null) return;
  const endX = e.changedTouches[0].clientX;
  const deltaX = endX - startX;

  if (deltaX < -sensitivity) {
    showLink((current + 1) % links.length);
  } else if (deltaX > sensitivity) {
    showLink((current - 1 + links.length) % links.length);
  }
  startX = null;
});

// const mediaQueryMobile = window.matchMedia('(max-width: 59em)');

// if (mediaQueryMobile.matches) {
//   sphere.addEventListener('click', () => {
//     sphere.classList.add('active');
//   });
//   links.forEach((link) => {
//     link.addEventListener('click', () => {
//       sphere.classList.remove('active');
//     });
//   });
// }
