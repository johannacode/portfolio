import digitalresumeImg from "../assets/digitalresume.png";
import portfoliov1Img from "../assets/portfoliov1.png";
import portfoliov2Img from "../assets/portfoliov2.png";
import portfolio2018Img from "../assets/portfolio2018.png";
import biscordImg from "../assets/biscord.png";

export const personalInfo = {
  name: "Johanna Angloma",
  title: "Développeuse Web",
  roles: [
    "<Développeuse Web />",
    "<Future Ingénieure en Cybersécurité />",
    "<Étudiante EPITECH />",
    "<Passionnée de code />",
  ],
  tagline: "Bientôt en Mastère MSc Cybersécurité",
  bio: "Curieuse et déterminée, je transforme mes projets perso en terrains d'expérimentation. Passionnée par la cybersécurité, j'explore, j'apprends et je crée pour rejoindre un monde où la technique rime avec imagination.",
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
    id: 6,
    title: "Portfolio actuel",
    subtitle: "Projet Personnel · En cours",
    description: "Refonte complète du portfolio en React avec design system personnalisé et architecture modulaire.",
    longDescription: `Portfolio développé en React avec une architecture modulaire et un design system sur mesure.  
      Cette version montre l’évolution de mes compétences front-end et mon approche professionnelle du développement web.  

      Fonctionnalités principales :  
      - Interface interactive et responsive  
      - Gestion dynamique des projets et catégories  
      - Design system réutilisable pour uniformité visuelle  
      - Préparation du portfolio pour des évolutions futures et intégration de nouveaux projets  

      Objectif : démontrer mes compétences React et front-end tout en créant un portfolio moderne et attractif.`,
    tags: ["React", "CSS", "JavaScript"],
    category: "web",
    inProgress: true,
    link: null,
  },
  {
    id: 7,
    title: "Biscord",
    subtitle: "Projet epitech · En cours",
    description: "Application de messagerie instantanée avec serveurs, discussions privées et gestion d’intérêts.",
    longDescription: `Biscord est un projet personnel de messagerie instantanée développé en React, visant à recréer les fonctionnalités clés d’une plateforme de discussion moderne.  

      Fonctionnalités principales :  
      - Conversations privées entre utilisateurs  
      - Création et gestion de serveurs thématiques  
      - Gestion des membres et intégration de contenus  
      - Interface interactive et responsive  

      Objectif : concevoir une application web et desktop performante, montrant mes compétences en React, gestion d’état, UI et UX design.`,
    tags: ["NextJS", "Rust", "TypeScript", "App Dev", "TailWind CSS", "MongoDB", "Postgres", "Web socket"],
    category: "app",
    inProgress: true,
    image: biscordImg,
    link: null,
  },
  {
    id: 8,
    title: "Smiley Quest",
    subtitle: "Projet epitech",
    description: "Jeu inspiré de Pac-Man avec personnages smileys, niveaux progressifs et combats contre monstres.",
    longDescription: `Smiley Quest est un jeu développé en Java pour Epitech, inspiré de Pac-Man mais avec des personnages smileys.  

      Fonctionnalités principales :  
      - 7 personnages jouables avec comportements uniques  
      - Labyrinthes multi-niveaux de difficulté croissante  
      - Système de combat avec armes aléatoires  
      - Gestion des états du jeu et progression du joueur  

      Outils et technologies : IntelliJ, Tiled pour la création de cartes, Java pour la logique et la gestion graphique.  
      Objectif : créer un jeu complet et fun en Java tout en découvrant de nouveaux outils et pratiques de développement.`,
    tags: ["Java", "IntelliJ", "Tiled", "Game Dev"],
    category: "jeux",
    link: null,
  },
  {
    id: 1,
    title: "Robot Autonome",
    subtitle: "Concours Robotique · Université d'Évry",
    description: "Robot autonome capable de suivre un parcours, contourner obstacles et atteindre sa cible.",
    longDescription: `Robot autonome développé pour un concours de robotique, programmé avec Arduino et Python.  
      Le robot devait suivre un parcours tracé, éviter les obstacles et atteindre une cible précise.  

      Fonctionnalités principales :  
      - Détection du parcours avec capteurs  
      - Contournement automatique des obstacles  
      - Ajustement dynamique du déplacement pour rester sur le chemin  
      - Viser une cible et accomplir la mission complète  

      Résultat : 3ème place au concours. Le projet a permis de travailler en équipe sur électronique, programmation et stratégie.`,
    tags: ["Arduino", "Python", "C++", "Électronique"],
    category: "IoT",
    highlight: "3ème au concours",
    link: null,
  },
  {
    id: 4,
    title: "Portfolio v2",
    subtitle: "Projet EPITECH",
    description: "Refonte du portfolio avec design system personnalisé et architecture modulaire.",
    longDescription: `Portfolio v2 développé en HTML, CSS et JavaScript.  
      Cette version améliore l’ergonomie, l’esthétique et l’organisation des projets.  

      Fonctionnalités principales :  
      - Architecture modulaire pour faciliter les mises à jour  
      - Design system personnalisé pour homogénéité graphique  
      - Navigation claire et responsive  
      - Mise en avant des projets académiques et personnels  

      Objectif : créer un portfolio fonctionnel et esthétique, prêt à évoluer avec mes nouvelles compétences et projets.`,
    tags: ["HTML", "CSS", "JavaScript"],
    category: "web",
    image: portfoliov2Img,
    link: "https://johannacode.github.io/myportfolio/",
  },
  {
    id: 2,
    title: "CV Digital Interactif",
    subtitle: "Projet epitech",
    description: "CV numérique interactif avec animations et design responsive, mettant en avant compétences et parcours.",
    longDescription: `CV Digital interactif développé en HTML, CSS et JavaScript.  
      Le projet propose un design moderne et responsive, avec animations subtiles et interactions pour enrichir l’expérience utilisateur.  

      Fonctionnalités principales :  
      - Navigation fluide et intuitive entre sections  
      - Animations CSS avancées pour dynamiser le contenu  
      - Responsive design adapté à tous les écrans  
      - Organisation claire de l’information pour faciliter la lecture  

      Objectif : créer un CV en ligne qui reflète mes compétences techniques et mon sens du design, tout en étant un outil pratique pour mes futures candidatures.`,
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    category: "web",
    image: digitalresumeImg,
    link: "https://johannacode.github.io/digitalresume/",
  },
  {
    id: 3,
    title: "Jeu du Pendu",
    subtitle: "Projet Epitech",
    description:
      "Jeu du pendu en Python/Pygame avec interface graphique, menu interactif, niveaux, timer et suivi des scores.",
    longDescription: `Jeu du Pendu développé en Python avec Pygame.  
      Le jeu propose une interface graphique interactive avec un menu permettant de sélectionner différents niveaux de difficulté et d’activer un timer pour varier le challenge.  

      Les fonctionnalités principales incluent :  
      - Affichage du pendu et des lettres de manière dynamique  
      - Système de scores avec suivi des meilleures performances  
      - Menu interactif et choix des niveaux  
      - Timer et suivi de la progression en temps réel  

      L’objectif du projet était de créer une version complète et jouable du pendu, en combinant développement graphique, gestion d’événements utilisateurs et logique de jeu.  
      Le code est structuré pour être stable et robuste, même face à des entrées invalides ou inattendues.  

      Le projet peut être exporté en exécutable Windows/Linux et constitue une base solide pour étendre le jeu avec de nouvelles fonctionnalités ou améliorations visuelles.`,
    tags: ["Python", "Pygame", "Game Dev", "UI", "Input Handling"],
    category: "jeux",
    link: null,
  },
  {
    id: 5,
    title: "Portfolio v1",
    subtitle: "Projet Personnel",
    description: "Première version de mon portfolio en HTML/CSS/JS, point de départ de ma démarche web.",
    longDescription: `Portfolio personnel développé en HTML, CSS et JavaScript vanilla.  
      Cette première version m’a permis de structurer mes projets et de mettre en pratique mes compétences front-end de manière simple et efficace.  

      Fonctionnalités principales :  
      - Présentation claire de mes projets et réalisations  
      - Navigation simple et intuitive  
      - Design responsive de base pour différents appareils  

      Objectif : poser les fondations d’un portfolio évolutif pour présenter mes projets et mon parcours académique.`,
    tags: ["HTML", "CSS", "JavaScript"],
    category: "web",
    image: portfoliov1Img,
    link: "https://johannacode.github.io/version2portfolio/",
  },
  {
    id: 9,
    title: "Portfolio 2018",
    subtitle: "Projet Personnel",
    description: "Mon tout premier portfolio ",
    longDescription: `Portfolio personnel développé en HTML, CSS et JavaScript vanilla.  
      Cette version m’a permis de faire mes premiers pas dans le mode du codage et me permet aujourd'hui de voir mon évolution.  

      Objectif : apprendre à coder, et créer quelque chose à partir de rien`,
    tags: ["HTML", "CSS", "JavaScript"],
    category: "web",
    image: portfolio2018Img,
    link: "https://johannacode.github.io/version1/",
  },
];

export const PROJECT_CATEGORIES = [
  { id: "web", label: "Web", accent: "#CA9191" },
  { id: "app", label: "App", accent: "#BB7272" },
  { id: "jeux", label: "Jeux", accent: "#AC5353" },
  { id: "IoT", label: "IoT", accent: "#8D4444" },
];

export const cvFormation = [
  {
    id: 1,
    period: "2025 → 2028",
    title: "MSc Pro Cybersécurité",
    school: "EPITECH | Paris",
    desc: "Formation spécialisée en sécurité des systèmes d'information, incluant pentest, architecture sécurisée et protection des données.",
    tags: ["Cybersécurité", "Pentest", "Sécurité"],
    current: false,
  },
  {
    id: 2,
    period: "2022 → 2025",
    title: "Prepa Cybersécurité",
    school: "EPITECH | Paris",
    desc: "Formation orientée projets : développement logiciel, systèmes Unix, travail en équipe et conception d'applications complètes.",
    tags: ["Développement", "Unix", "Projets"],
    current: true,
  },
  {
    id: 3,
    period: "2018 → 2022",
    title: "Licence Sciences pour l’Ingénieur",
    school: "Université d’Évry — Paris-Saclay",
    desc: "Formation scientifique avec bases en mathématiques, informatique et ingénierie.",
    tags: ["Maths", "Informatique"],
    current: false,
  },
  {
    id: 4,
    period: "2018",
    title: "Baccalauréat Scientifique",
    school: "Lycée Albert Einstein",
    desc: "Spécialité Mathématiques.",
    tags: ["Mathématiques"],
    current: false,
  },
];

export const cvExperiences = [
  {
    id: 1,
    period: "2023 → 2024",
    title: "Technicienne assistance monétique bancaire",
    company: "LIEM IDF",
    desc: "Installation, configuration et maintenance de terminaux de paiement. Diagnostic et résolution d’incidents réseaux, logiciels et matériels.",
    tags: ["Réseaux", "Support technique", "Maintenance"],
    type: "pro",
  },
  {
    id: 2,
    period: "Oct 2022 → Mai 2023",
    title: "Assistante numérique pour l'emploi",
    company: "Pôle emploi",
    desc: "Accompagnement des utilisateurs sur les outils numériques, support technique et sensibilisation aux bonnes pratiques de sécurité.",
    tags: ["Support", "Formation", "Cybersécurité"],
    type: "pro",
  },
  {
    id: 3,
    period: "2020 → 2021",
    title: "Technicienne pédagogique numérique",
    company: "Université d’Évry",
    desc: "Maintenance des environnements numériques d’apprentissage, gestion de plateformes et formation des utilisateurs.",
    tags: ["Support", "Maintenance", "Formation"],
    type: "pro",
  },
  {
    id: 4,
    period: "2020 → 2022",
    title: "Responsable gestion restauration",
    company: "Domino’s Pizza",
    desc: "Encadrement d’équipe, gestion des stocks et organisation des opérations quotidiennes.",
    tags: ["Management", "Organisation"],
    type: "pro",
  },
];

export const cvSkills = {
  "Langages": [
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "Java", icon: "devicon-java-plain colored" },
    { name: "C", icon: "devicon-c-plain colored" },
    { name: "C++", icon: "devicon-cplusplus-plain colored" },
    { name: "PHP", icon: "devicon-php-plain colored" },
    { name: "Bash", icon: "devicon-bash-plain" },
    { name: "Rust", icon: "devicon-rust-original colored" },
  ],
  "Front-end": [
    { name: "HTML", icon: "devicon-html5-plain colored" },
    { name: "CSS", icon: "devicon-css3-plain colored" },
    { name: "React", icon: "devicon-react-original colored" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
    { name: "NextJS", icon: "devicon-nextjs-plain" },
  ],
  "Outils & Systèmes": [
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "GitHub", icon: "devicon-github-original" },
    { name: "Linux", icon: "devicon-linux-plain" },
    { name: "Docker", icon: "devicon-docker-plain colored" },
    { name: "Jenkins", icon: "devicon-jenkins-line colored" },
    { name: "Cisco", icon: "devicon-networkx-original" }, // fallback si pas d’icône officielle
    { name: "Arduino", icon: "devicon-arduino-plain colored" },
  ],
  "Bases de données": [
    { name: "MySQL", icon: "devicon-mysql-plain colored" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
    { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
  ],
};

export const navLinks = [
  { label: "Accueil", href: "#hero"    },
  { label: "Projets", href: "#projets" },
  { label: "CV",      href: "#cv"      },
  { label: "Contact", href: "#contact" },
];