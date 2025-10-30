const projects = Array.from(document.querySelectorAll('.project'));
const arrowLeft = document.querySelector('.change-projects.left');
const arrowRight = document.querySelector('.change-projects.right');
const projectContainer = document.querySelector('.project-container');

//==========================================//
//==========================================//
//  Devo creare una funzione che aggiorni il contenuto delle project cards.
//  Posso creare un array di oggetti da utilizzare come database per le mie cards.
//  Come proprietà degli oggetti mi servono: project-title, project-img, project-subtitle, project-description, live-link, git-link.
//  PROBLEMA: i progetti sono organizzati in sottogruppi da tre perché nel layout le animazioni sono organizzate per progetti a destra, centro e sinistra
//  -Posso organizzare l'array in sottogruppi di tre oggetti composti da altri array
//  -La funzione deve aggiornare i contenuti delle project-cards utilizzando i dati degli oggetti nell'array
//  -Ogni qual volta l'utente clicca su una freccia ai lati i contenuti si deve passare da un elemento (sub-array di 3 oggetti) ad un altro
//  -Quando si arriva all'ultimo elemento dell'array bisogna tornare al primo
//  -Posso lasciare nel file html la struttura left-mid-right, cosicché gli elementi siano già presenti alla creazione della pagina, ma vuoti di contenuti
//  -Agirò sul contenuto html dei singoli progetti.
//  PROBLEMA 1: dati 3 progetti vuoti, come fare affinché inizialmente projects[0] = projectsData[0], projects[1] = projectsData[1], projects[2] = projectsData[2]?
//  PROBLEMA 2: al cliccare delle frecce laterali, come fare affinché projects[0] = projectsData[1], projects[1] = projectsData[2], projects[2] = projectsData[0]?
//  SOLUZIONI:
//  1 -Dichiarare in una variabile i projects
//  2- Assegnare all'innerHtml dei projects i valori dei primi 3 dataObj di projectsData
//  2- Modificare l'index di projectsData attraverso le frecce laterali

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

const projectFrontCards = document.querySelectorAll('.front-card');
const projectBackCards = document.querySelectorAll('.back-card');
const projectCards = document.querySelectorAll('.project-card');
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
};

const closeProject = function () {
  this.closest('.project').classList.remove('active');
  setTimeout(hideCards, '500');
};

const updateVisibleProject = function (index) {
  projects.forEach((project, i) => {
    project.querySelector('.project-card').classList.remove('active');
    project.classList.remove('visible');
    if (i === index) {
      project.classList.add('visible');
      project.focus();
    }
  });
};

if (window.matchMedia('(max-width: 34em)').matches) {
  updateVisibleProject(currentIndex);

  arrowRight.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % projects.length;
    updateVisibleProject(currentIndex);
  });

  arrowLeft.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    updateVisibleProject(currentIndex);
  });

  projectFrontCards.forEach((card) => {
    card.addEventListener('click', () => {
      card.closest('.project-card').classList.add('active');
    });
  });

  projectBackCards.forEach((card) => {
    card.addEventListener('click', () => {
      card.closest('.project-card').classList.remove('active');
      document.activeElement.blur();
    });
  });
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

  // projectFrontCards.forEach((card) => {
  //   card.addEventListener('click', () => {
  //     if (card.closest('.project').classList.contains('active')) {
  //       closeProject.call(card);
  //       document.activeElement.blur();
  //     } else {
  //       openProject.call(card);
  //     }
  //   });
  //   card.addEventListener('keydown', (e) => {
  //     if (e.key === 'Enter' || e.key === ' ') {
  //       if (card.closest('.project').classList.contains('active')) {
  //         closeProject.call(card);
  //         document.activeElement.blur();
  //       } else {
  //         openProject.call(card);
  //       }
  //     }
  //   });
  // });

  // closeButtons.forEach((button) => {
  //   button.addEventListener('click', closeProject.bind(button));
  //   button.addEventListener('keydown', (e) => {
  //     if (e.key === 'enter' || e.key === ' ') {
  //       closeProject.call(card);
  //     }
  //   });
  // });
}
