const projects = Array.from(document.querySelectorAll('.project'));
const arrowLeft = document.querySelector('.change-projects.left');
const arrowRight = document.querySelector('.change-projects.right');
const projectContainer = document.querySelector('.project-container');

// Card Compiler

let currentIndex = 0;
const projectsData = [
  // {
  //   projectTitle,
  //   projectImg,
  //   projectSubtitle,
  //   projectDescription,
  //   liveLink,
  //   gitLink,
  // },

  {
    projectTitle: "It's me!",
    projectImg: 'src/webp/myPage.webp',
    projectSubtitle: 'Il mio primo progetto indie',
    projectDescription: `Il sito dove mi presento al mondo, espongo il mio porfolio e offro i miei contatti.<br />
                    Mi sono posto come obiettivi l'<em>immediatezza</em> delle
                    informazioni, l'<em>esperienza</em> dell'interazione e
                    l'espressione della mia <em>creatività</em>.<br />
                    Ho imparato ad applicare soluzioni trovate sul web,
                    adattandole alle mie necessità per realizzare layout più
                    sofisticati.`,
    liveLink: 'https://antrodiandrea.netlify.app/',
    gitLink: 'https://github.com/Jetzko/itsMe',
  },

  {
    projectTitle: 'Forkify',
    projectImg: 'src/webp/forkify.webp',
    projectSubtitle: 'Progetto-studio Javascript',
    projectDescription: `Progetto di fine corso "The Complete JavaScript Course 2025:
                    From Zero to Expert!" di Jonas Schmedtmann, seguito sulla
                    piattaforma di apprendimento Udemy. <br />
                    In questo progetto ho avuto modo di mettere in pratica le
                    mie conoscenze Javascript e un esempio di come impostare la
                    struttura di un softwere frontend, con l'utilizzo di
                    <em>API</em>, <em>classi</em>, <em>OOP</em> e
                    <em>architettura MVC</em>.`,
    liveLink: 'https://djetzko-forkify.netlify.app/',
    gitLink: 'https://github.com/Jetzko/forkify',
  },

  {
    projectTitle: 'Omnifood',
    projectImg: 'src/webp/omnifood.webp',
    projectSubtitle: 'Progetto-studio HTML+CSS',
    projectDescription: `Progetto finale del corso "Build Responsive Real-World
                    Websites with HTML and CSS" di Jonas Schmedtmann, seguito
                    sulla piattaforma di apprendimento Udemy. <br />
                    Attraverso questo progetto ho messo in pratica le nozioni
                    HTML e CSS, imparando come impostare le fasi di
                    pianificazione, abbozzatura e sviluppo di una pagina web
                    <em>reattiva</em>, <em>scalabile</em>,
                    <em>ottimizzata</em> e <em>accessibile</em>.`,
    liveLink: 'https://omnifood-djetzko.netlify.app/',
    gitLink: 'https://github.com/Jetzko/omnifood',
  },
];

const [projectLeft, projectMid, projectRight] = [
  projects[0],
  projects[1],
  projects[2],
];

const compileCards = function () {
  const leftIndex = currentIndex % projectsData.length;
  const midIndex = (currentIndex + 1) % projectsData.length;
  const rightIndex = (currentIndex + 2) % projectsData.length;

  projectLeft.innerHTML = `
            <div class="project-card" tabindex="0">
              <div class="front-card" >
                <h3 class="project-title">${projectsData[leftIndex].projectTitle}</h3>
                <div class="color-layer">
                  <img
                    src="${projectsData[leftIndex].projectImg}"
                    alt="${projectsData[leftIndex].projectTitle}"
                    class="project-img"
                  />
                </div>
                <span class="project-text">${projectsData[leftIndex].projectSubtitle}</span>
              </div>
              <div class="back-card">
                <button class="close-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="close"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div class="project-back-card">
                  <p class="project-description">
                    ${projectsData[leftIndex].projectDescription}
                  </p>
                </div>
                <div class="project-back-card-links">
                  <a
                    class="project-link"
                    href="${projectsData[leftIndex].liveLink}"
                    ><span>Live App</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </a>
                  <a
                    class="project-link"
                    href="${projectsData[leftIndex].gitLink}"
                    ><span>Git Code</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="project-link-icon"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            `;
  projectMid.innerHTML = `
            <div class="project-card" tabindex="0">
              <div class="front-card" >
                <h3 class="project-title">${projectsData[midIndex].projectTitle}</h3>
                <div class="color-layer">
                  <img
                    src="${projectsData[midIndex].projectImg}"
                    alt="${projectsData[midIndex].projectTitle}"
                    class="project-img"
                  />
                </div>
                <span class="project-text">${projectsData[midIndex].projectSubtitle}</span>
              </div>
              <div class="back-card">
                <button class="close-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="close"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div class="project-back-card">
                  <p class="project-description">
                    ${projectsData[midIndex].projectDescription}
                  </p>
                </div>
                <div class="project-back-card-links">
                  <a
                    class="project-link"
                    href="${projectsData[midIndex].liveLink}"
                    ><span>Live App</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </a>
                  <a
                    class="project-link"
                    href="${projectsData[midIndex].gitLink}"
                    ><span>Git Code</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="project-link-icon"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            `;
  projectRight.innerHTML = `
            <div class="project-card" tabindex="0">
              <div class="front-card" >
                <h3 class="project-title">${projectsData[rightIndex].projectTitle}</h3>
                <div class="color-layer">
                  <img
                    src="${projectsData[rightIndex].projectImg}"
                    alt="${projectsData[rightIndex].projectTitle}"
                    class="project-img"
                  />
                </div>
                <span class="project-text">${projectsData[rightIndex].projectSubtitle}</span>
              </div>
              <div class="back-card">
                <button class="close-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="close"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div class="project-back-card">
                  <p class="project-description">
                    ${projectsData[rightIndex].projectDescription}
                  </p>
                </div>
                <div class="project-back-card-links">
                  <a
                    class="project-link"
                    href="${projectsData[rightIndex].liveLink}"
                    ><span>Live App</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </a>
                  <a
                    class="project-link"
                    href="${projectsData[rightIndex].gitLink}"
                    ><span>Git Code</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="project-link-icon"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            `;
};
compileCards();

//==========================================//
// Cards's Functionalities
//==========================================//

// const projectFrontCards = document.querySelectorAll('.front-card');
// const projectBackCards = document.querySelectorAll('.back-card');
// const projectCards = document.querySelectorAll('.project-card');
// const closeButtons = document.querySelectorAll('.close-btn');

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
};

const closeProject = function () {
  this.closest('.project').classList.remove('active');
  setTimeout(hideCards, '500');
};

const updateVisibleProject = function (index) {
  const slotIndex = index % projects.length;
  projects.forEach((project, i) => {
    project.querySelector('.project-card').classList.remove('active');
    project.classList.remove('visible');
    if (i === slotIndex) {
      project.classList.add('visible');
      project.focus();
    }
  });
};

if (window.matchMedia('(max-width: 34em)').matches) {
  updateVisibleProject(currentIndex);

  arrowLeft.addEventListener('click', () => {
    currentIndex =
      (currentIndex - 1 + projectsData.length) % projectsData.length;
    compileCards();
    updateVisibleProject(currentIndex);
  });

  arrowRight.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % projectsData.length;
    compileCards();
    updateVisibleProject(currentIndex);
  });

  // 👇 Event delegation
  projectContainer.addEventListener('click', (e) => {
    const front = e.target.closest('.front-card');
    const back = e.target.closest('.back-card');

    // se clicco sul fronte, la card si apre
    if (front) {
      front.closest('.project-card').classList.add('active');
    }

    // se clicco sul retro, la card si chiude
    if (back) {
      back.closest('.project-card').classList.remove('active');
      document.activeElement.blur();
    }
  });

  // projectFrontCards.forEach((card) => {
  //   card.addEventListener('click', () => {
  //     card.closest('.project-card').classList.add('active');
  //   });
  // });

  // projectBackCards.forEach((card) => {
  //   card.addEventListener('click', () => {
  //     card.closest('.project-card').classList.remove('active');
  //     document.activeElement.blur();
  //   });
  // });
} else {
  arrowLeft.addEventListener('click', () => {
    currentIndex =
      (currentIndex - 1 + projectsData.length) % projectsData.length;
    compileCards();
  });

  arrowRight.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % projectsData.length;
    compileCards();
  });

  projectContainer.addEventListener('click', (e) => {
    const frontCard = e.target.closest('.project-card .front-card');
    if (frontCard) {
      if (frontCard.closest('.project').classList.contains('active')) {
        closeProject.call(frontCard);
        document.activeElement.blur();
      } else {
        openProject.call(frontCard);
      }
      return;
    }

    const closeButton = e.target.closest('.close-btn');
    if (closeButton) {
      closeProject.call(closeButton);
      return;
    }
  });

  projectContainer.addEventListener('keydown', (e) => {
    const focusedCard =
      document.activeElement.closest &&
      document.activeElement.closest('.project-card');
    const closeBtn =
      document.activeElement.closest &&
      document.activeElement.closest('.close-btn');

    if ((e.key === 'Enter' || e.key === ' ') && focusedCard) {
      // se il focus è dentro una project-card
      const front = focusedCard.querySelector('.front-card');
      if (front.closest('.project').classList.contains('active')) {
        closeProject.call(front);
        document.activeElement.blur();
      } else {
        openProject.call(front);
      }
    }

    if ((e.key === 'Enter' || e.key === ' ') && closeBtn) {
      closeProject.call(closeBtn);
    }
  });
}
