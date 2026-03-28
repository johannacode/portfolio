# 🌿 Johanna Angloma — Portfolio v2

Portfolio personnel construit avec React, architecture modulaire et design system terracotta.

---

## 🚀 Démarrage rapide

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm start

# Build de production
npm run build
```

---

## 📁 Architecture du projet

```
src/
│
├── styles/
│   └── globals.css          # Variables CSS, reset, animations globales
│
├── data/
│   └── portfolio.js         # ⭐ TOUTES les données du site (modifie ici !)
│
├── hooks/
│   ├── useScrollReveal.js   # Animations au scroll (IntersectionObserver)
│   └── useActiveSection.js  # Détection section active pour la navbar
│
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx / .css    # Navigation fixe + menu mobile
│   │   └── Footer.jsx / .css    # Pied de page
│   │
│   ├── sections/
│   │   ├── Hero.jsx / .css      # Section d'accroche (premier écran)
│   │   ├── Projects.jsx / .css  # Grille de projets filtrables
│   │   ├── Skills.jsx / .css    # Compétences avec barres animées
│   │   ├── About.jsx / .css     # Biographie + valeurs + infos
│   │   └── Contact.jsx / .css   # Formulaire + liens de contact
│   │
│   └── ui/
│       ├── ProjectCard.jsx / .css   # Carte projet réutilisable
│       └── SkillBar.jsx / .css      # Barre de compétence animée
│
├── App.jsx    # Assemblage des sections
└── index.js   # Point d'entrée React
```

---

## 🎨 Design System

### Palette de couleurs
| Variable | Couleur | Usage |
|---|---|---|
| `--color-terra` | #C4673A | Accent principal (terracotta) |
| `--color-bg` | #FAF7F2 | Fond principal (crème chaud) |
| `--color-sage` | #7A8C6E | Accent secondaire (vert sauge) |
| `--color-gold` | #C9973A | Highlights, dégradés |

### Typographie
- **Titres** : Playfair Display (serif élégant)
- **Corps** : DM Sans (lisible, moderne)
- **Mono / Labels** : JetBrains Mono (technique, authentique)

---

## ✏️ Personnalisation

### Modifier le contenu
Tout le contenu est centralisé dans **`src/data/portfolio.js`** :
- `personalInfo` : nom, email, liens, bio, disponibilité
- `projects` : liste des projets (titre, description, tags, lien)
- `skills` : catégories et niveaux de compétences
- `navLinks` : liens de navigation

### Ajouter un projet
```js
// Dans src/data/portfolio.js, dans le tableau projects :
{
  id: 6,
  title: "Nom du projet",
  subtitle: "Contexte · Année",
  description: "Description courte du projet.",
  tags: ["React", "Node.js"],
  category: "web", // "web" | "logiciel" | "académique"
  color: "#C4673A",
  link: "https://...", // optionnel
  inProgress: false,   // optionnel
}
```

### Ajouter son CV
Placer le fichier `Johanna_Angloma_CV.pdf` dans le dossier `public/`.

---

## 🌐 Déploiement sur GitHub Pages

```bash
# Installer gh-pages
npm install --save-dev gh-pages

# Ajouter dans package.json :
# "homepage": "https://TON_USERNAME.github.io/TON_REPO"
# "predeploy": "npm run build"
# "deploy": "gh-pages -d build"

npm run deploy
```

---

## 📌 Sections du site
| Section | ID | Description |
|---|---|---|
| Hero | `#hero` | Accroche + nom + CTA |
| Projets | `#projets` | Visible en premier arrivée |
| Compétences | `#competences` | Barres animées par catégorie |
| À propos | `#about` | Bio + CV téléchargeable |
| Contact | `#contact` | Formulaire + liens directs |
