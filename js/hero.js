const links = document.querySelectorAll('.main-nav-link');
const mainNav = document.querySelector('.main-nav');
const sphere = document.querySelector('.sphere');
const scrollIcon = document.querySelector('.scroll-down-icon');
const swipeIcon = document.querySelector('.swipe-icon');
const heroSection = document.querySelector('#hero');

let current = 0;

const showLink = function (index) {
  if (window.matchMedia('(max-width: 39em)')) swipeIcon.classList.add('active');
  else scrollIcon.classList.add('active');

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
  console.log('>>> Current link set to:', links[index].getAttribute('href'));
};

let wheelListenerActive = false;

const handleWheel = (e) => {
  // Add a check to only run if the mouse is currently "entered" or an active state
  if (!wheelListenerActive) return;

  console.log('>>> Wheel event deltaY:', e.deltaY);
  if (e.deltaY > 40) {
    showLink((current + 1) % links.length);
  } else if (e.deltaY < -40) {
    showLink((current - 1 + links.length) % links.length);
  }
  e.preventDefault();
};

sphere.addEventListener('wheel', handleWheel);

sphere.addEventListener('mouseenter', function (e) {
  showLink(current);
  wheelListenerActive = true;
});

sphere.addEventListener('mouseleave', function (e) {
  // e.preventDefault();
  wheelListenerActive = false;
  scrollIcon.classList.remove('active');
  current = 0;
  links.forEach((link) => {
    link.classList.remove('active');
    link.blur();
  });
});

links.forEach((link) => {
  link.addEventListener('focus', (e) => {
    // e.preventDefault();
    sphere.classList.add('active');
  });
  link.addEventListener('click', (e) => {
    link.blur();
    link.classList.remove('active');
    sphere.classList.remove('active');
    document
      .querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
    const targetHref = link.getAttribute('href');
    console.log('>>> Clicked link with href:', targetHref);
    const targetElement = document.querySelector(targetHref);
    if (targetElement) {
      console.log(
        '>>> Scrolling to element:',
        targetElement.id,
        'with tag:',
        targetElement.tagName
      );
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('>>> Target element not found for href:', targetHref);
    }
    e.preventDefault();
  });
  link.addEventListener('blur', (e) => {
    // e.preventDefault();
    sphere.classList.remove('active');
    swipeIcon.classList.remove('active');
  });
});

if (window.matchMedia('(max-width: 34em)').matches) {
  sphere.addEventListener('click', () => {
    sphere.classList.toggle('active');
    showLink(current);
  });
}

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
