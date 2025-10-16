const projectFrontCards = document.querySelectorAll('.project-front');
const projects = Array.from(document.querySelectorAll('.project'));
const closeButtons = document.querySelectorAll('.close-btn');

let inactives;

const showCards = function () {
  inactives = projects.filter(
    (project) => !project.classList.contains('active')
  );
  inactives.forEach((inactive) => inactive.classList.add('inactive'));
};

const hideCards = function () {
  inactives.forEach((inactive) => inactive.classList.remove('inactive'));
};

const openProject = function () {
  this.classList.add('active');
  this.closest('.project').classList.add('active');
  setTimeout(showCards, '0');
  console.log(this);
};

const closeProject = function () {
  this.closest('.project').classList.remove('active');
  setTimeout(hideCards, '500');
};

projectFrontCards.forEach((card) => {
  card.addEventListener('click', () => {
    if (card.closest('.project').classList.contains('active')) {
      closeProject.call(card);
      document.activeElement.blur();
    } else {
      openProject.call(card);
    }
  });
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      if (card.closest('.project').classList.contains('active')) {
        closeProject.call(card);
        document.activeElement.blur();
      } else {
        openProject.call(card);
      }
    }
  });
});

closeButtons.forEach((button) => {
  button.addEventListener('click', closeProject.bind(button));
  button.addEventListener('keydown', (e) => {
    if (e.key === 'enter' || e.key === ' ') {
      closeProject.call(button);
      console.log(button);
    }
  });
});
