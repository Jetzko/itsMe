const projectFrontCards = document.querySelectorAll('.front-card');
const projectBackCards = document.querySelectorAll('.back-card');
const projectCards = document.querySelectorAll('.project-card');
const projects = Array.from(document.querySelectorAll('.project'));
const closeButtons = document.querySelectorAll('.close-btn');
const arrowLeft = document.querySelector('.change-projects.left');
const arrowRight = document.querySelector('.change-projects.right');

let inactives;
let currentIndex = 0;

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
  console.log('close project');
  setTimeout(hideCards, '500');
};

const updateVisibleProject = function (index) {
  projects.forEach((project, i) => {
    project.classList.remove('visible');
    if (i === index) {
      project.classList.add('visible');
      project.focus();
    }
  });
};

if (window.matchMedia('(max-width: 34em)').matches) {
  updateVisibleProject(currentIndex);

  arrowLeft.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    updateVisibleProject(currentIndex);
  });

  projectFrontCards.forEach((card) => {
    card.addEventListener('click', () => {
      // openProject.call(card);
      card.closest('.project-card').classList.add('active');
    });
  });

  projectBackCards.forEach((card) => {
    card.addEventListener('click', () => {
      card.closest('.project-card').classList.remove('active');
      document.activeElement.blur();
    });
  });

  arrowRight.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % projects.length;
    updateVisibleProject(currentIndex);
  });
} else {
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
        closeProject.call(card);
      }
    });
  });
}
