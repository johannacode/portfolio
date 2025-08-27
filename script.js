// =========================
// Hamburger menu toggle
// =========================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// =========================
// Onglets bio
// =========================
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tabId = button.getAttribute('data-tab');

    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    tabContents.forEach(content => content.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
  });
});

// =========================
// Traduction de la page
// =========================
const langSwitch = document.querySelector('.lang-switch');
let lang = 'fr';

const translations = {
  fr: {
    nav: [
      "Bio",
      "Compétences",
      "Projets",
      "Me contacter",
      `<svg xmlns="http://www.w3.org/2000/svg" class="cv-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
         <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
         <polyline points="7 10 12 15 17 10"/>
         <line x1="12" y1="15" x2="12" y2="3"/>
       </svg> CV`
    ],
    tabs: ["Présentation", "Langues", "Soft Skills", "Loisirs"],
    header: "Future Alternante en informatique | Passionnée par la cybersécurité",
    bio: [
      `Je suis une jeune femme <strong>déterminée</strong> et <strong>ambitieuse</strong>, actuellement en 3ᵉ année à <strong>EPITECH</strong>.<br>
       Mon objectif : devenir <strong>ingénieure en cybersécurité</strong>.<br>
       Mon parcours témoigne de ma <strong>persévérance</strong>, de ma <strong>rigueur</strong> et de mon <strong>engagement</strong>.<br>
       Je suis <strong>studieuse</strong>, <strong>motivée</strong> et prête à relever tous les défis pour atteindre l’excellence.`
    ],
    langues: [
      {name: "Français", level: "Langue maternelle"},
      {name: "Anglais", level: "Niveau B1"},
      {name: "Créole", level: "Niveau C1"},
    ],
    softSkills: `Je développe constamment mes <strong>compétences en leadership et gestion d'équipe</strong> pour collaborer efficacement.<br>
                 Je suis <strong>autonome</strong> et <strong>disciplinée</strong>, capable de gérer mon temps avec rigueur.<br>
                 Ma <strong>curiosité</strong> et mon <strong>optimisme</strong> me poussent à apprendre et rester proactive.<br>
                 Enfin, mon <strong>esprit d'équipe</strong> me permet de contribuer positivement à tous les projets.`,
    loisirs: `Passionnée par la découverte et la créativité, j'aime <strong>voyager</strong>, <strong>lire</strong>, <strong>danser</strong> et <strong>écrire</strong>.`,
    skills: "Compétences",
    projectsTitle: "Projets",
    contact: "Me contacter",
    projects: [
      {
        title: "Projet académique – Robot",
        text: "Arrivée <strong>3ᵉ</strong> au concours de robotique de l'Université d'Evry, moi et mon équipe avons construit et programmé un robot sur <strong>Arduino</strong>."
      },
      {
        title: "Projet personnel – Mini-projet Web",
        text: "Création d’une mini “To-do List” interactive en HTML, CSS et JavaScript."
      },
      {
        title: "Work in progress – Portfolio personnel",
        text: "Développement de mon site portfolio pour mettre en valeur mes compétences et futurs projets."
      },
      {
        title: "Projets à venir",
        text: "Travail en cours sur mes premiers projets pratiques en <strong>cybersécurité</strong> et <strong>développement</strong>."
      }
    ]
  },
  en: {
    nav: [
      "Bio",
      "Skills",
      "Projects",
      "Contact",
      `<svg xmlns="http://www.w3.org/2000/svg" class="cv-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
         <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
         <polyline points="7 10 12 15 17 10"/>
         <line x1="12" y1="15" x2="12" y2="3"/>
       </svg> CV`
    ],
    tabs: ["Presentation", "Languages", "Soft Skills", "Hobbies"],
    header: "Future IT Apprentice | Passionate about Cybersecurity",
    bio: [
      `I am a <strong>determined</strong> and <strong>ambitious</strong> young woman, currently in my 3rd year at <strong>EPITECH</strong>.<br>
       My goal: to become a <strong>cybersecurity engineer</strong>.<br>
       My path shows my <strong>perseverance</strong>, <strong>rigor</strong> and <strong>commitment</strong>.<br>
       I am <strong>studious</strong>, <strong>motivated</strong> and ready to tackle all challenges to achieve excellence.`
    ],
    langues: [
      {name: "French", level: "Native"},
      {name: "English", level: "Intermediate B1"},
      {name: "Creole", level: "Advanced"},
    ],
    softSkills: `I constantly develop my <strong>leadership and team management skills</strong> to collaborate effectively.<br>
                 I am <strong>autonomous</strong> and <strong>disciplined</strong>, capable of managing my time with rigor.<br>
                 My <strong>curiosity</strong> and <strong>optimism</strong> drive me to learn new skills and stay proactive.<br>
                 Finally, my <strong>team spirit</strong> allows me to contribute positively to all projects.`,
    loisirs: `Passionate about discovery and creativity, I love <strong>traveling</strong>, <strong>reading</strong>, <strong>dancing</strong>, and <strong>writing</strong>.`,
    skills: "Skills",
    projectsTitle: "Projects",
    contact: "Contact",
    projects: [
      {
        title: "Academic Project – Robot",
        text: "3rd place in the University of Evry robotics competition. My team and I built and programmed a robot using <strong>Arduino</strong>."
      },
      {
        title: "Personal Project – Mini Web Project",
        text: "Created an interactive mini “To-do List” using HTML, CSS, and JavaScript."
      },
      {
        title: "Work in progress – Personal Portfolio",
        text: "Developing my personal portfolio website to showcase my skills and future projects."
      },
      {
        title: "Upcoming Projects",
        text: "Working on my first practical projects in <strong>cybersecurity</strong> and <strong>development</strong>."
      }
    ]
  }
};

// Fonction pour changer la langue
langSwitch.addEventListener('click', () => {
  lang = lang === 'fr' ? 'en' : 'fr';
  updateLanguage();
});

function updateLanguage() {
  // Navbar
  const navItems = document.querySelectorAll('.nav-links li a');
  navItems.forEach((item, index) => {
    item.innerHTML = translations[lang].nav[index];
  });

  // Onglets bio
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach((btn, index) => {
    btn.textContent = translations[lang].tabs[index];
  });

  // Header
  document.querySelector('header .tagline').innerHTML = translations[lang].header;

  // Bio
  document.querySelector('#presentation p').innerHTML = translations[lang].bio[0];
  document.querySelector('#soft-skills p').innerHTML = translations[lang].softSkills;
  document.querySelector('#loisirs p').innerHTML = translations[lang].loisirs;

  // Langues
  const langCards = document.querySelectorAll('.lang-card');
  translations[lang].langues.forEach((l, i) => {
    langCards[i].querySelector('p').innerHTML = `${l.name}<br><small>${l.level}</small>`;
  });

  // Sections
  document.querySelector('#skills h2').textContent = translations[lang].skills;
  document.querySelector('#projects h2').textContent = translations[lang].projectsTitle;
  document.querySelector('#contact h2').textContent = translations[lang].contact;

  // Projets
  const projectItems = document.querySelectorAll('.projects-grid .project-item');
  translations[lang].projects.forEach((p, i) => {
    projectItems[i].querySelector('h3').innerHTML = p.title;
    projectItems[i].querySelector('p').innerHTML = p.text;
  });

  // Mettre à jour le bouton de langue
  langSwitch.textContent = lang === 'fr' ? 'EN' : 'FR';
}

// Initialisation
updateLanguage();
