# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Nature du dépôt

Ce n'est pas un dépôt logiciel classique : c'est le **dossier de candidature** de
Bonheur MEYEVI (site « porteur de projet » pour des bourses et programmes de master),
dont le site web n'est qu'un des livrables. Deux couches cohabitent :

- **La racine** = le dossier documentaire (sources de vérité, contenus rédigés,
  identité visuelle, pièces jointes). Pas un dépôt git.
- **`site/`** = l'implémentation Next.js. Dépôt git indépendant (branche `master`,
  aucun remote).

Tout est en **français**, y compris les commentaires de code, les noms de fichiers de
données et les messages destinés à l'utilisateur.

## Commandes

Toujours depuis `site/` :

```bash
npm run dev      # http://localhost:3000
npm run build    # build statique (12 routes)
npm run start    # sert le build
npm run lint     # ESLint (eslint-config-next)
```

Aucun test automatisé n'existe. La validation se fait par `npm run build` + revue
visuelle sur les deux thèmes (clair / sombre via `prefers-color-scheme`).

Régénérer les portraits depuis les originaux `.webp` à la racine :

```bash
cd site && node scripts/portraits.mjs   # sharp arrive via les deps optionnelles de next
```

## Chaîne de production du contenu

Le contenu descend toujours dans ce sens, jamais l'inverse :

```
dossier-reference.md   source de vérité factuelle (parcours, réalisations,
                       avis clients retranscrits, règles de confidentialité)
etude/strategie-site.md      décisions de positionnement, architecture, règles éditoriales
        ↓
contenu/*.md           textes FR rédigés, une page par fichier
etude/donnees-recherche.md   données sourcées de l'étude filières agricoles
        ↓
site/lib/data/*.ts     SOURCE UNIQUE côté code - alimente les pages ET le CV (/cv)
        ↓
site/app/*, site/components/*
```

Corriger un fait dans un composant sans le corriger dans `lib/data/` (et en amont dans
`dossier-reference.md`) crée une divergence silencieuse : le CV et les pages se
contredisent. Ajouter un projet = une entrée dans `lib/data/projects.ts`, rien d'autre
(la grille filtrable et les mises en avant `featured: true` s'alimentent seules).

`modifs.md` est le carnet de retours de Bonheur - à lire quand il signale un défaut.

## Identité visuelle

`identite-visuelle/brand-book.md` est la charte du site (v2.x). Elle est **implémentée**
dans `site/app/globals.css` (bloc `@theme` + variables de thème), pas importée : les
fichiers de `identite-visuelle/tokens/` (css, json, tailwind) sont l'export de
l'identité pour d'autres supports. Une couleur qui change doit changer aux deux
endroits.

Axe chromatique unique, teinte 297° : encre prune `#2F0431`, rose d'action `#A526B3`
(interactif sur fond clair), rose de marque `#F78AFD` **réservé aux fonds sombres**
(2,1:1 sur blanc). Typographie : Newsreader porte H1/H2, Public Sans tient H3/H4,
étiquettes, boutons et chiffres - ne pas inverser.

L'identité d'origine (« danoz - Le Samouraï du Web ») était conçue pour LinkedIn ; le
site l'**adapte** en registre sobre. Baseline samouraï, tutoiement et registre « Impact »
ont été retirés volontairement - ne pas les réintroduire.

## Règles éditoriales non négociables

Ce sont des contraintes de véracité et de confidentialité, pas des préférences de style.
Détail dans `dossier-reference.md` §11-12 et `etude/strategie-site.md` §1.

- **Aucun tiret cadratin ni demi-cadratin**, nulle part, dans aucun fichier. Trait
  d'union simple. Une durée s'écrit `105h`, sans espace. Une question porte son `?`.
  Vérification : `grep -rP "[\x{2013}\x{2014}]" site/app site/components site/lib`
  ne doit rien remonter.
- **Form2Kobo** : conçu et développé **pour** un agronome, jamais présenté comme le
  produit de Bonheur.
- **SENS Bénin** : il est **assistant du** chargé de digitalisation. Jamais de
  formulation laissant croire qu'il pilote la digitalisation. Les chiffres SENS sont
  toujours attribués à SENS. L'ERP interne : une mention générique maximum, aucun
  chiffre, aucune filière, aucun choix technologique interne.
- **Marque blanche** : capinvest, gsd-backoffice, earthlumb, Kimely, Lemonweb ne sont
  jamais nommés - ils alimentent le compteur « 20+ projets ».
- **Client LCS** : jamais de nom ni de détail, ligne générique uniquement.
- **Mémoire de licence 2022** : jalon académique fondateur, jamais de captures (le
  prototype n'a jamais été déployé).
- **GitHub** : aucune mention sur le site.
- **Continuité** : la continuité porte sur **la question** posée en 2022, pas sur une
  activité AgriTech ininterrompue. « Une même question m'accompagne depuis 2022 »,
  jamais « depuis 4 ans je travaille sans relâche sur… ».
- **Anglais** : A2 certifié, formulation minimale et factuelle.
- **Projets hors ligne** : capture d'archive + période + rôle + mention honnête « site
  aujourd'hui hors ligne ». Jamais de lien mort.

## Pièges techniques du site

`site/README.md` détaille les règles d'implémentation. Les deux plus coûteuses :

- **Ne jamais figer une couleur qui doit suivre le thème.** Utiliser `--accent`,
  `--accent-soft`, `--accent-wash`, `--surface-muted`, `--border-strong`, `--warn`,
  `--danger`. Un `bg-orchidee-50` sous un texte en `--foreground` devient illisible en
  thème sombre.
- **Ne pas réintroduire de bibliothèque CSS sans mesurer son coût.** `@heroui/styles`
  redéfinissait la variante `dark:` de Tailwind avec un sélecteur fautif : aucune règle
  `dark:` n'était compilée, sans le moindre message d'erreur, et cinq bugs
  d'illisibilité en découlaient. Après tout ajout de dépendance CSS :
  `npm run build && grep -ho 'dark\:' .next/static/chunks/*.css | wc -l` (≈13 attendu,
  jamais 0).

`site/CLAUDE.md` pointe vers `site/AGENTS.md`, bloc généré par `next dev` : cette version
de Next.js diverge des conventions connues, consulter `node_modules/next/dist/docs/`
avant d'écrire du code Next.
