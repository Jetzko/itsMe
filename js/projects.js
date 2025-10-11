const projectFrontCards = document.querySelectorAll('.project-front');
const projects = Array.from(document.querySelectorAll('.project'));
const closeButtons = document.querySelectorAll('.close-btn');

let inactives;

const hideCards = function () {
  inactives = projects.filter(
    (project) => !project.classList.contains('active')
  );
  inactives.forEach((inactive) => inactive.classList.add('inactive'));
};

const showCards = function () {
  inactives.forEach((inactive) => inactive.classList.remove('inactive'));
};

projectFrontCards.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.add('active');
    card.closest('.project').classList.add('active');

    setTimeout(hideCards, '0');
  });
});

closeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.closest('.project').classList.remove('active');
    setTimeout(showCards, '500');
  });
});
