const orbs = document.querySelectorAll('.orb');

orbs.forEach((orb) => {
  orb.addEventListener('mouseenter', () => {
    orb.querySelector('.orb-anchor').classList.add('active');
  });
  orb.querySelector('.orb-anchor').addEventListener('focusin', () => {
    orb.classList.add('active');
  });
});

orbs.forEach((orb) => {
  orb.addEventListener('mouseleave', () => {
    orb.querySelector('.orb-anchor').classList.remove('active');
  });
  orb.querySelector('.orb-anchor').addEventListener('focusout', () => {
    orb.classList.remove('active');
  });
});

orbs.forEach((orb) => {
  const orbAnchor = orb.querySelector('.orb-anchor');
  orbAnchor.addEventListener('click', () => {
    setTimeout(function () {
      orbAnchor.classList.remove('active');
      orbAnchor.blur();
    }, 200);
  });
});
