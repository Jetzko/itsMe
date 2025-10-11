const emailLink = document.querySelector('.email');
const savedPopUp = document.querySelector('.saved');
const allCta = Array.from(document.querySelectorAll('.cta'));
const labels = document.querySelector('.labels');
const spanArticle = labels.querySelector('.label-article');
const spanAggettive = labels.querySelector('.label-aggettive');
const spanSubject1 = labels.querySelector('.label-subject1');
const spanSubject2 = labels.querySelector('.label-subject2');
const spanDefinition = labels.querySelector('.label-definition');

const copyEmail = function () {
  const copyText = 'andreadefilippi68@gmail.com';

  // Select the text field
  //   copyText.textContent.select();
  //   copyText.textContent.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText);

  allCta.forEach((cta) => {
    if (cta.closest('.contact').classList.contains('email')) {
      cta.classList.add('active');
      savedPopUp.classList.add('active');
      emailLink.classList.add('active');
      setTimeout(function () {
        emailLink.classList.remove('active');
        cta.classList.remove('active');
        savedPopUp.classList.remove('active');
      }, '1000');
    }
  });
};

emailLink.addEventListener('click', copyEmail);

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

/*Voglio creare una funzione che aggiorni i singoli span dentro labels,
  con intervalli diversi per ogni span.
  Cosa mi serve?
  1- una funzione che aggiunga +1 agli indici degli arrey
  2- una funzione che differenzi, per ogni span, gli intervalli di tempo ogni quanto si aggiornano gli indici
  3- una funzione che chiami le altre solo quando labels è on View
  */

const labelsArrey = [
  ['il', 'un', "l'"],
  [
    'creativo',
    'curioso',
    'simpatico',
    'fantasioso',

    'amichevole',
    'giovane',
    'decente',
    'educato',

    'aspirante',
    'epico',
    'entusiasta',
    'inconfondibile',
  ],
  ['web', 'fullstack', 'sviluppatore', 'sviluppatore'],
  ['developer', 'developer', 'web', 'fullstack'],
  [
    'junior',
    'indipendente',
    'di quartiere',
    'squattrinato',
    'ok',
    'opinabile',
    'definitivo',
    'modestissimo',
    'qualunque',
  ],
];

const [article, aggettive, subject1, subject2, definition] = labelsArrey;

let labelIntervals = [];
let labelIndices = [0, 0, 0, 0, 0];

// Funzione per aggiornare e animare
const cycle = function (arr, span, idx, interval) {
  return setInterval(() => {
    labelIndices[idx] = (labelIndices[idx] + 1) % arr.length;
    span.textContent = arr[labelIndices[idx]];
    span.classList.remove('animate');
    void span.offsetWidth;
    span.classList.add('animate');
  }, interval);
};

const startLabelIntervals = function () {
  // Aggiorna subito i testi
  if (labelIntervals.length > 0) return;
  spanArticle.textContent = article[0];
  spanAggettive.textContent = aggettive[0];
  spanSubject1.textContent = subject1[0];
  spanSubject2.textContent = subject2[0];
  spanDefinition.textContent = definition[0];

  labelIntervals = [
    cycle(article, spanArticle, 0, 16000),
    cycle(aggettive, spanAggettive, 1, 4000),
    cycle(subject1, spanSubject1, 2, 8000),
    cycle(subject2, spanSubject2, 3, 8000),
    cycle(definition, spanDefinition, 4, 8000),
  ];
};

const stopLabelIntervals = function () {
  labelIntervals.forEach(clearInterval);
  labelIntervals = [];
  labelIndices = [0, 0, 0, 0, 0];
  // Reset testi
  spanArticle.textContent = article[0];
  spanAggettive.textContent = aggettive[0];
  spanSubject1.textContent = subject1[0];
  spanSubject2.textContent = subject2[0];
  spanDefinition.textContent = definition[0];
};

const labelsSection = document.querySelector('.section:has(.labels)');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        stopLabelIntervals();
      } else if (entry.isIntersecting) {
        startLabelIntervals();
      }
    });
  },
  { threshold: 1 }
);

if (labelsSection) observer.observe(labelsSection);
