// ============================================================
// DATA — Modifie uniquement ce fichier pour mettre à jour le site
// ============================================================

export const personalInfo = {
  name: "Johanna Angloma",
  title: "Développeuse Web",
  roles: [
    "Développeuse Web",
    "Future Ingénieure en Cybersécurité",
    "Étudiante EPITECH",
    "Passionnée de code",
  ],
  tagline: "Bientôt en Mastère MSc Cybersécurité",
  bio: "Curieuse et déterminée, je transforme mes projets perso en terrains d’expérimentation. Passionnée par la cybersécurité, j’explore, j’apprends et je crée pour rejoindre un monde où la technique rime avec imagination.",
  location: "Île-de-France",
  email: "johanna_angloma@outlook.fr",
  phone: "+33 6 34 05 19 08",
  github: "https://github.com/johannacode",
  linkedin: "https://www.linkedin.com/in/johanna-angloma-02132b289/",
  cv: "/Johanna_Angloma_CV.pdf",
  school: "EPITECH",
  availability: "Disponible pour une alternance",
};

export const projects = [
  {
    id: 1,
    title: "Robot Autonome",
    subtitle: "Concours Robotique · Université d'Évry",
    description:
      "Conception et programmation d'un robot sur Arduino en équipe. 3ème place au concours de robotique — électronique, algorithmique et travail d'équipe au programme.",
    tags: ["Arduino", "C++", "Électronique"],
    category: "academique",
    highlight: "3ème au concours",
    color: "#7c5cbf",
    placeholder: "robot",
  },
  {
    id: 2,
    title: "CV Digital Interactif",
    subtitle: "Projet Scolaire",
    description:
      "CV numérique moderne avec animations CSS avancées et interactions JavaScript. Design responsive et accessible.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    category: "web",
    color: "#9b7fd4",
    placeholder: "cv",
  },
  {
    id: 3,
    title: "Jeu du Pendu",
    subtitle: "Projet Scolaire",
    description:
      "Jeu interactif du pendu avec interface graphique Pygame. Gestion des états, des scores et d'une base de mots.",
    tags: ["Python", "Pygame"],
    category: "logiciel",
    color: "#c084b0",
    placeholder: "game",
  },
  {
    id: 4,
    title: "Portfolio v2",
    subtitle: "Projet Personnel · En cours",
    description:
      "Refonte complète de mon portfolio avec React, architecture modulaire et design system personnalisé. Vous l'avez sous les yeux.",
    tags: ["React", "CSS", "Design System"],
    category: "web",
    color: "#7c5cbf",
    inProgress: true,
    placeholder: "portfolio",
  },
  {
    id: 5,
    title: "Portfolio v1",
    subtitle: "Projet Personnel",
    description:
      "Première version de mon portfolio en HTML/CSS/JS vanilla — le point de départ d'une longue aventure web.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "web",
    link: "https://johannacode.github.io/portfolio/",
    color: "#9b7fd4",
    placeholder: "portfolio1",
  },
];

export const skills = {
  "Langages": [
    { name: "Python",      icon: "devicon-python-plain colored" },
    { name: "JavaScript",  icon: "devicon-javascript-plain colored" },
    { name: "Java",        icon: "devicon-java-plain colored" },
    { name: "C",           icon: "devicon-c-plain colored" },
    { name: "C++",         icon: "devicon-cplusplus-plain colored" },
    { name: "PHP",         icon: "devicon-php-plain colored" },
    { name: "Bash",        icon: "devicon-bash-plain" },
    { name: "SQL",         icon: "devicon-mysql-plain colored" },
  ],
  "Front-end": [
    { name: "HTML",         icon: "devicon-html5-plain colored" },
    { name: "CSS",          icon: "devicon-css3-plain colored" },
    { name: "React",        icon: "devicon-react-original colored" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
  ],
  "Outils": [
    { name: "Git",    icon: "devicon-git-plain colored" },
    { name: "GitHub", icon: "devicon-github-original" },
    { name: "VS Code",icon: "devicon-vscode-plain colored" },
    { name: "Figma",  icon: "devicon-figma-plain colored" },
    { name: "Linux",  icon: "devicon-linux-plain" },
    { name: "Arduino",icon: "devicon-arduino-plain colored" },
  ],
  "Domaines": [
    { name: "Cybersécurité",     icon: "devicon-debian-plain colored" },
    { name: "Algorithmique",     icon: "devicon-python-plain colored" },
    { name: "IoT / Robotique",   icon: "devicon-arduino-plain colored" },
    { name: "Responsive Design", icon: "devicon-css3-plain colored" },
  ],
};

export const navLinks = [
  { label: "Accueil",      href: "#hero" },
  { label: "Projets",      href: "#projets" },
  { label: "Compétences",  href: "#competences" },
  { label: "À propos",     href: "#about" },
  { label: "Contact",      href: "#contact" },
];
