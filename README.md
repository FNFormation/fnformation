# FN Formation - Site Web

École de français en ligne spécialisée dans la préparation aux examens DELF.

## 🚀 Déploiement sur GitHub Pages

### Étape 1 : Créer un dépôt GitHub
1. Allez sur [GitHub](https://github.com) et connectez-vous
2. Cliquez sur **New Repository**
3. Nommez le dépôt : `fn-formation` (ou le nom de votre choix)
4. Assurez-vous qu'il est **Public**
5. Cliquez sur **Create Repository**

### Étape 2 : Uploader les fichiers

#### Méthode A : Upload direct (recommandé pour débutants)
1. Sur la page de votre dépôt, cliquez sur **"uploading an existing file"**
2. Glissez-déposez TOUS les fichiers et dossiers du dossier `fn-formation-website` :
   - `index.html`
   - `css/style.css`
   - `js/main.js`
   - `images/` (dossier vide pour vos images)
   - `assets/` (dossier vide pour vos assets)
3. Faites un **commit** avec le message : `Initial commit`
4. Cliquez sur **Commit changes**

#### Méthode B : Via Git (pour utilisateurs avancés)
```bash
cd fn-formation-website
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/fn-formation.git
git push -u origin main
```

### Étape 3 : Activer GitHub Pages
1. Sur votre dépôt GitHub, cliquez sur **Settings**
2. Dans le menu de gauche, cliquez sur **Pages**
3. Sous **Source**, sélectionnez : **Deploy from a branch**
4. Sous **Branch**, sélectionnez : **main** et dossier **/(root)**
5. Cliquez sur **Save**
6. Attendez 1-2 minutes
7. Votre site sera disponible à : `https://VOTRE_USERNAME.github.io/fn-formation/`

---

## 📁 Structure des fichiers

```
fn-formation-website/
├── index.html          # Page principale (Accueil)
├── css/
│   └── style.css       # Tous les styles
├── js/
│   └── main.js         # Toutes les fonctionnalités JavaScript
├── images/             # Dossier pour vos images
└── assets/             # Dossier pour vos assets (logo, favicon, etc.)
```

---

## 🎨 Modifications effectuées

### 1. Navbar
- ✅ Texte en **gras et plus visible**
- ✅ Effet **cercle rouge** au survol (comme "Voir Nos Cours")
- ✅ Espacement amélioré entre les éléments
- ✅ Fond vert inchangé

### 2. Page d'accueil - Hero
- ✅ **"FN Formation"** plus gras et esthétique (Playfair Display, font-weight 900)
- ✅ **"École de français en ligne"** en rouge et gras

### 3. Section Tutoriels YouTube
- ✅ Remplacé la grande image par **3 vidéos YouTube intégrées**
- ✅ Grille responsive avec 3 colonnes

### 4. Section Avis (Reviews)
- ✅ **Défilement automatique** de droite à gauche
- ✅ Cartes avec : nom, batch, cours, image review
- ✅ Pause au survol

### 5. Footer
- ✅ Fond **vert foncé** (`#1a2e24`)
- ✅ Texte **blanc et gras**
- ✅ Icônes **Facebook, Instagram, TikTok, YouTube**

### 6. Page Cours
- ✅ Points de liste **gras et plus visibles**
- ✅ Bouton divisé en **2 parties** :
  - **"Voir un démo classe"** → Modal avec vidéo YouTube
  - **"Acheter le cours"** → Formulaire → WhatsApp

### 7. Page Contact
- ✅ **Vraie icône WhatsApp** (SVG officiel)
- ✅ Formulaire WhatsApp fonctionnel
- ✅ **"Démarrer le chat"** envoie vers WhatsApp

### 8. Section CTA
- ✅ **"Contactez-nous"** (sans "sur WhatsApp")
- ✅ Fond **rouge**
- ✅ Email et téléphone **gras et soulignés**

---

## ⚙️ Configuration YouTube

### Remplacer les vidéos de démonstration
Dans `index.html`, recherchez les sections avec `youtube-embed` et remplacez les URLs :

```html
<iframe src="https://www.youtube.com/embed/VOTRE_VIDEO_ID?rel=0&modestbranding=1" ...></iframe>
```

**Pour obtenir l'ID d'une vidéo YouTube :**
1. Ouvrez la vidéo sur YouTube
2. L'ID est dans l'URL après `v=` : `https://www.youtube.com/watch?v=**VIDEO_ID**`

### Remplacer la vidéo de démo
Dans le modal `#demoModal`, remplacez :
```html
<iframe id="demoVideoFrame" src="https://www.youtube.com/embed/VOTRE_DEMO_ID?rel=0&modestbranding=1" ...></iframe>
```

---

## 📱 Numéro WhatsApp

Le numéro WhatsApp configuré est : **+33 7 51 32 61 18**

Pour le modifier, éditez `js/main.js` et changez :
```javascript
const whatsappNumber = '33751326118';
```

> Note : Le numéro doit être au format international sans le `+` ni espaces.

---

## 🖼️ Images des avis

Pour remplacer les images des avis par des vraies captures d'écran :
1. Uploadez vos images dans le dossier `images/`
2. Modifiez les URLs dans `index.html` dans la section `.reviews-track`

---

## 📝 Personnalisation

### Couleurs
Modifiez les variables CSS dans `css/style.css` :
```css
:root {
    --color-primary: #2C4A3B;        /* Vert principal */
    --color-primary-dark: #1a2e24;    /* Vert foncé (footer) */
    --color-accent: #C62828;          /* Rouge (boutons) */
    --color-green-btn: #66BB6A;       /* Vert (boutons WhatsApp) */
}
```

### Textes
Tous les textes sont dans `index.html`. Recherchez et remplacez selon vos besoins.

---

## 🌐 Liens sociaux

Dans `index.html`, section `.social-links`, remplacez les `#` par vos vrais liens :
```html
<a href="https://facebook.com/votre-page" class="social-link" title="Facebook">...</a>
<a href="https://instagram.com/votre-compte" class="social-link" title="Instagram">...</a>
<a href="https://tiktok.com/@votre-compte" class="social-link" title="TikTok">...</a>
<a href="https://youtube.com/votre-chaine" class="social-link" title="YouTube">...</a>
```

---

## 📧 Contact

Pour toute question : contact@fnformation.com

---

**© 2026 FN Formation. Tous droits réservés.**
