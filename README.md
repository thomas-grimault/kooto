# Fiches Recettes — Astro

Site de fiches recettes imprimables, construit avec [Astro](https://astro.build).

## Démarrage rapide

```bash
npm install
npm run dev
```

Ouvre ensuite `http://localhost:4321` dans ton navigateur.

## Pages

- `/` — liste de toutes les recettes (index cliquable)
- `/impression` — toutes les fiches en version imprimable (bouton "Imprimer" en haut)

## Ajouter une recette

Crée un fichier `.md` dans `src/content/recettes/` :

```markdown
---
titre: Ma recette
personnes: 50
categorie: plat        # entrée | plat | dessert (optionnel)
ingredients:
  - nom: Ingrédient 1
    quantite: "2 kg"
  - nom: Ingrédient 2
    quantite: "3 càs"
  - nom: Ingrédient sans quantité
---

Notes de préparation optionnelles ici...
```

Le nom du fichier devient l'URL slug (ex: `ma-recette.md` → `/impression#ma-recette`).

## Impression

Sur la page `/impression` :
- Clique sur **🖨 Imprimer toutes les fiches**
- Chaque recette s'imprime sur une page A4 séparée
- Le fond vert du titre s'imprime (activé via `print-color-adjust: exact`)
- La barre de navigation et le bouton disparaissent à l'impression

## Structure

```
src/
├── content/
│   ├── config.ts          ← schéma des recettes
│   └── recettes/          ← fichiers .md des recettes
├── components/
│   └── FicheRecette.astro ← carte recette réutilisable
├── pages/
│   ├── index.astro        ← liste / index
│   └── impression.astro   ← version imprimable
└── styles/
    └── global.css         ← styles écran + @media print
```

## Build production

```bash
npm run build
npm run preview
```
