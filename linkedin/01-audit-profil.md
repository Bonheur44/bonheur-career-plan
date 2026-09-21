# Audit du profil LinkedIn - Bonheur MEYEVI

> Audit du 14/09/2026, réalisé uniquement à partir du dossier. Sources lues : `dossier-reference.md`,
> `etude/strategie-site.md`, `identite-visuelle/brand-book.md`, `site/lib/data/*.ts`, `site/app/*`,
> `candidature-unv/*`, `candidature-mastercard/*`, `Profil_UNV.pdf`, `captures/Danoz-*.png`, les deux
> portraits à la racine.
> Règle : rien n'est inventé. Quand une information manque, elle est signalée comme manquante.

---

## 1. Résumé exécutif

**Le dossier ne contient aucun profil LinkedIn proposé.** Ni titre, ni section « Infos », ni
bannière, ni Sélection, ni page Services, ni stratégie de contenu LinkedIn. Ce qui existe sur le
sujet tient en trois choses :

1. Une consigne stratégique d'une ligne (`etude/strategie-site.md` §1 et §8, reprise dans le plan
   UNV) : « mise à jour ponctuelle du profil avant lancement : poste SENS actuel, titre aligné sur
   le positionnement, lien vers le site, photo ; inutile de reprendre les publications ».
2. L'état probable du profil actuel, reconstitué à partir de l'export UNV du 01/09/2026
   (`Profil_UNV.pdf`) : les intitulés et descriptions y sont manifestement ceux du CV et du profil
   LinkedIn de l'époque freelance (« Assistant CM Digitalisation », « Piloter le développement…
   ERP », Light Innovation 08/2022 - 08/2024, anglais « Intermédiaire »). **Hypothèse à confirmer** :
   aucun export LinkedIn n'est dans le dossier.
3. L'héritage danoz « Le Samouraï du Web » : capture de l'ancienne landing (registre commercial,
   tutoiement, « +30 audits réalisés | +10 clients satisfaits »), photo studio avec le t-shirt
   marqué, 9 recommandations publiques (2024, six portent sur des audits de sites et de landing
   pages) et une cinquantaine de posts pédagogiques WordPress / UI-UX.

**Verdict : ❌ insuffisamment optimisé, et plus précisément : non conçu.** Score 3/10.

Les trois blocages, par ordre d'importance :

- **Un conflit d'audience non tranché.** Le brief d'audit demande un profil de prestataire
  (services, prospects, CTA commercial, page de vente). Tout le dossier a retiré ce registre
  (charte §1.2 et §9, stratégie §2 : « pas le site d'une startup », vouvoiement, sobriété) et vise
  des jurys, des comités d'admission et des recruteurs UNV. Un même en-tête LinkedIn ne peut pas
  servir les deux sans se contredire. C'est une décision, pas une rédaction.
- **Un problème d'intégrité dans le texte actuel probable.** « Piloter », « Conduire la refonte »,
  « ERP », des dates Light fausses, un anglais surévalué : chaque point contredit une règle du
  dossier et serait démenti par une vérification de référence (M. Sonou est cité comme référence
  dans les deux candidatures).
- **Un master visé qui diverge selon les documents.** Site et `dossier-reference.md` §12 :
  « SI décisionnels / data engineering / agriculture numérique ». Candidature Mastercard (02/09) :
  « Génie Logiciel, IFRI, dossier déposé en août 2026 ; la data/SIG n'est plus l'objet du master ».
  Un titre LinkedIn ne peut porter qu'une seule direction.

---

## 2. Compréhension du positionnement

### Ce que contient chaque fichier et son rôle

| Fichier | Contenu | Rôle pour LinkedIn |
|---|---|---|
| `dossier-reference.md` (12/09) | Source de vérité : parcours, chiffres validés, 9 recommandations retranscrites, règles de confidentialité et de véracité | Tout texte LinkedIn doit en dériver |
| `etude/strategie-site.md` (27/08) | Positionnement, arc narratif, architecture du site, SEO, roadmap ; la seule consigne LinkedIn du dossier | Définit l'audience réelle (jury) et le registre |
| `identite-visuelle/brand-book.md` v2.2 | Charte : axe 297°, prune / rose, Newsreader / Public Sans, portraits N&B, interdits (baseline samouraï, tutoiement, codes publicitaires) | Cadre de la photo, de la bannière et du ton |
| `site/lib/data/*.ts` + `site/app/*` | Contenus rédigés du site, CV généré, études de cas, témoignages | Base directe des sections Infos, Expériences, Sélection |
| `candidature-unv/profil-unv-optimise.md` (11/09) | Diagnostic du profil UVP, formule de positionnement B « coloré par C », expériences réécrites FR/EN, mots-clés, score 36 → 79 | Le document le plus proche d'un profil LinkedIn optimisé : 80 % du travail Expériences y est déjà fait |
| `candidature-mastercard/*` (02/09) | Bourse Mastercard UAC : positionnement « de développeur à concepteur », master Génie Logiciel IFRI, CV HTML | Fixe la direction académique la plus récente et la plus engagée |
| `etude/donnees-recherche.md` + `etude/certifications-a-viser.md` | Étude filières (42 sources) ; pistes de certifications data / SIG | Preuve à mettre en Sélection quand le site sera en ligne |
| `Profil_UNV.pdf` | Export UVP du 01/09 : le texte « avant » | Meilleure approximation du profil LinkedIn actuel |
| `captures/Danoz-*.png`, photos racine | Ancienne landing danoz et portraits | Ce que LinkedIn montre probablement encore aujourd'hui |

### Le positionnement tel que le dossier le fixe

- **Qui** : développeur web et mobile béninois, 4 ans, 20+ projets, assistant du chargé de
  digitalisation de SENS Bénin, Cotonou.
- **Pour qui (audience du dossier)** : jurys de bourses, comités d'admission, recruteurs UNV, puis
  employeurs et partenaires du développement rural. **Aucun prospect commercial n'est défini.**
- **Problème** : les chaînes de valeur agricoles inclusives fonctionnent sans données fiables et
  partagées (étayé par l'étude).
- **Promesse** : passer de développeur à concepteur des systèmes d'information dont ces filières
  ont besoin ; « une même question m'accompagne depuis 2022 ».
- **Différenciateurs** : intersection tech × ESS × agriculture vécue de l'intérieur ; continuité
  depuis le mémoire 2022 ; transmission (100+ étudiants, 15+ stagiaires, jury Ecole229) ;
  Form2Kobo construit pour un agronome ; étude filières déjà produite.
- **Registre** : sobre et posé, vouvoiement, phrases complètes, aucun « expert », aucun
  « passionné », aucun tiret long, chiffres SENS toujours attribués à SENS.

### Trois formules coexistent (à trancher pour le titre)

| Source | Formule | Master | Date |
|---|---|---|---|
| Site (`strategie-site.md` §2, Hero, CV) | Développeur full-stack au cœur de la digitalisation d'une coopérative ESS, « de développeur à concepteur » | SI décisionnels / agriculture numérique (sans université nommée) | 27/08 |
| Mastercard (`03-strategie.md`) | Développeur qui veut « se consacrer pleinement au Génie Logiciel pour passer de développeur à concepteur de SI au service des chaînes de valeur agricoles » | **Génie Logiciel, IFRI (UAC)**, dossier déposé | 02/09 |
| UNV (`profil-unv-optimise.md` §2) | « Développeur web et mobile spécialisé dans les plateformes et outils de collecte et de gestion de données… Formateur et mentor » ; option B colorée par C, jamais « spécialiste AgriTech » en titre | Non mentionné | 11/09 |

La formule UNV est la meilleure base pour LinkedIn : titre vérifiable (« développeur »), angle
données / terrain rural, transmission, et le choix explicite de garder l'AgriTech comme couleur
et non comme titre. La direction académique la plus récente et la plus engagée est Génie
Logiciel IFRI ; `dossier-reference.md` §12 n'a pas été mis à jour en conséquence.

### Ce que le dossier ne contient pas (et que le brief présuppose)

Services, offres, tarifs, arguments commerciaux, cible prospect, stratégie SEO LinkedIn,
stratégie de contenu LinkedIn, bannière, titre, section Infos, Sélection, URL personnalisée,
nombre d'abonnés, export du profil actuel. Le dossier dit même l'inverse : « pas de reprise des
publications nécessaire ».

---

## 3. Score global du profil

**3/10.**

- La « proposition » existante est une consigne d'une ligne, pas un profil : rien à évaluer
  section par section.
- Le profil actuel probable (export UVP) est un CV technique honnête dans l'intention, mais
  générique (« interchangeable avec des centaines d'autres », diagnostic UNV), et inexact sur
  SENS, Light et l'anglais.
- Les preuves réelles (recommandations, projets en ligne, enseignement) sont fortes mais ne sont
  reliées à aucun positionnement : elles prouvent un bon freelance WordPress de 2024, pas le
  concepteur de SI agricoles de 2026.

---

## 4. Analyse détaillée section par section

### 4.1 Positionnement

- **Contenu actuel (probable)** : intitulé « Assistant CM Digitalisation » + « Développeur web &
  mobile Indépendant ».
- **Problème** : « CM » est illisible ; « développeur web & mobile » ne dit ni pour qui, ni quel
  problème, ni quel résultat. Impression : prestataire généraliste.
- **Ce que le dossier permet** : un positionnement spécifique et prouvable existe (formule UNV).
  Il n'a jamais été transposé à LinkedIn.
- **Priorité** : 🔴.

### 4.2 Proposition de valeur

- **Contenu actuel** : aucune formulée pour LinkedIn. La phrase la plus proche est la question du
  hero du site (« comment les systèmes d'information peuvent-ils structurer les chaînes de valeur
  agricoles en Afrique de l'Ouest ? »).
- **Problème** : une question fonctionne pour un jury qui lit 3 minutes ; sur LinkedIn, en
  3 secondes, elle ne dit pas ce que la personne fait aujourd'hui. Elle n'est orientée ni
  problème du lecteur, ni résultat.
- **Ce qu'il faudrait** : une ligne qui dise ce qu'il construit (outils de données pour des
  organisations de développement), où (Bénin, coopérative agricole), et ce qu'il prépare
  (master), dans cet ordre.
- **Priorité** : 🔴.

### 4.3 Bannière

- **Contenu actuel** : inconnu. Le seul capital visuel du dossier est la capture de l'ancienne
  landing danoz : fond noir, dégradé rose / rouge, « Passe d'un simple site à un véritable agent
  de vente performant pour ton business », tutoiement, « +30 audits réalisés | +10 clients
  satisfaits ».
- **Problème** : si la bannière actuelle vient de cette époque, elle contredit frontalement la
  charte (§1.2 : jamais la baseline, jamais le tutoiement, jamais de codes publicitaires ; §9 :
  pas de dégradés) et le positionnement. Les chiffres « +30 audits » et « +10 clients » ne
  figurent pas dans les chiffres validés du `dossier-reference.md` §9 : **ne pas les réutiliser
  tant qu'ils ne sont pas validés**.
- **Ce qu'il faudrait** : une bannière dans la charte (fond blanc / brume ou prune, encre prune,
  un seul accent rose, Newsreader pour une phrase, Public Sans pour une étiquette), une phrase
  identique à celle du site, l'URL du site quand il sera en ligne. Pas de CTA commercial tant que
  la décision d'audience n'est pas prise.
- **Priorité** : 🟠 (🔴 si la bannière danoz est encore en place).

### 4.4 Photo et identité

- **Deux portraits disponibles** :
  1. Portrait N&B détouré sur rose `#F88AFD` (hero du site). Visage centré, regard direct, bras
     croisés, fond de marque. Utilisable tel quel en photo de profil ; il garantit la reconnaissance
     immédiate entre la SERP du nom, le site et LinkedIn. Vérifier le rendu en cercle de 40 px :
     le rose 400 derrière un visage N&B reste lisible.
  2. Photo studio couleur, t-shirt « danoz - Le Samouraï du Web ». Interdite par la charte §7 tant
     que le marquage est lisible. Si elle est encore la photo LinkedIn, elle réintroduit la baseline
     écartée.
- **Cohérence** : le site n'affiche que des portraits N&B ; garder le même traitement sur LinkedIn.
- **Priorité** : 🟠.

### 4.5 Titre (headline)

- **Contenu actuel** : inconnu (non exporté).
- **Critères issus du dossier** : contenir « Développeur web et mobile » (seul titre vérifiable et
  cherché) ; le poste SENS exact (« assistant digitalisation », jamais « chargé de ») ; l'angle
  données / terrain agricole en couleur, pas en titre ; aucun « expert », « samouraï »,
  « spécialiste AgriTech » ; un seul master.
- **Mots-clés recherchés couverts par des faits** : développeur web, développeur mobile, Flutter,
  Next.js, Laravel, WordPress, KoboToolbox, collecte de données, Bénin, Cotonou.
- **Deux directions selon la décision d'audience** (esquisses, pas de version finale) :
  - Audience jury / recruteur : « Développeur web et mobile · Assistant digitalisation, SENS Bénin ·
    Outils de données pour les chaînes de valeur agricoles · Candidat au Master Génie Logiciel ».
  - Audience mixte avec freelance assumé : « Développeur web et mobile (Next.js, Laravel, Flutter,
    WordPress) · Plateformes et outils de collecte de données · SENS Bénin · Cotonou ».
- **Priorité** : 🔴.

### 4.6 Section « Infos »

- **Contenu actuel** : inconnu. Le texte le plus proche dans le dossier est le paragraphe
  « Profil » du CV (`site/app/cv/page.tsx`) : « Développeur web et mobile, quatre ans d'expérience
  et une vingtaine de projets livrés au Bénin et en France. Aujourd'hui assistant digitalisation
  au sein d'une société coopérative… Objectif : un Master… »
- **Lecture comme page de vente courte** : accroche = absente (on commence par un CV) ; problème
  du lecteur = absent ; approche = implicite ; bénéfices = absents ; preuve = « vingtaine de
  projets » sans nom ; services = absents ; appel à l'action = absent. Aucun lien (le site n'est
  pas en ligne, le domaine n'est pas arrêté).
- **Réponses aux quatre questions** : « comprend-il mon problème ? » non formulé ; « peut-il
  m'aider ? » partiellement (compétences) ; « pourquoi lui ? » non ; « que faire maintenant ? »
  rien.
- **Ce que le dossier permet déjà** : Form2Kobo pour un agronome, application de collecte terrain,
  smn.bj, transmission, étude 42 sources, question de 2022, master visé. Tout existe, rien n'est
  assemblé pour LinkedIn.
- **Priorité** : 🔴.

### 4.7 Expériences

Comparaison du texte actuel probable (export UVP) avec le dossier :

| Entrée | Texte actuel | Problème | Règle du dossier |
|---|---|---|---|
| SENS Bénin | « Assistant CM Digitalisation » ; « Piloter le développement… plateformes web et ERP » ; « Conduire la refonte du site » | Laisse croire qu'il pilote ; nomme l'ERP ; « CM » illisible | Assistant **du** chargé ; ERP = mention générique sans détail |
| Light Innovation | Une seule entrée 08/2022 - 08/2024 « Développeur Mobile & UI/UX » ; « Administrer et optimiser les bases MySQL » | Stage fondu dans l'emploi, cinq mois de trop, chevauchement inexplicable avec le freelance ; MySQL chez Light est faux (confirmé 11/09) | Stage 08/2022 - 01/2023 ; développeur 02/2023 - 03/2024 ; MySQL = freelance et SENS seulement |
| Freelance | Trois tâches à l'infinitif | Aucun produit, aucun client, aucun résultat ; Form2Kobo et KoboToolbox absents | Form2Kobo « pour le compte d'un agronome », smn.bj, CINEEF |
| Enseignement, jury, bénévolat | Absents | La preuve de leadership la plus documentée du dossier n'apparaît pas | 100+ étudiants, 15+ stagiaires, jury Ecole229 |

Formulation : responsabilités et tâches, jamais résultats ni valeur créée. La bonne nouvelle :
les versions réécrites 4.1 à 4.4 de `profil-unv-optimise.md` (et la version « à saisir ») sont
directement transposables sur LinkedIn, avec un résultat par entrée déjà rédigé.

**Priorité** : 🔴 (intégrité).

### 4.8 Services

- **Contenu actuel** : inconnu ; aucune offre définie dans le dossier.
- **Problème** : activer la page Services sur LinkedIn, c'est s'afficher prestataire. Le dossier
  dit que l'activité indépendante continue « ponctuellement » et les six recommandations d'audit
  sont la preuve sociale la plus forte, mais aucune offre d'audit n'est décrite nulle part.
- **Ce qu'il faudrait** : décider. Si oui : trois lignes maximum, cohérentes avec le portfolio
  (développement web et mobile, sites WordPress et refontes, audit de site ou de landing page),
  sans tarif ni promesse de conversion. Si non : ne pas activer la section.
- **Priorité** : 🟠 (dépend de la décision d'audience).

### 4.9 Preuves de crédibilité

**Présentes et justifiables** : 9 recommandations publiques (clients et collaborateurs, juin à
novembre 2024) ; form2kobo.com et smn.bj en ligne ; deux applications sur le Play Store ; 105h de
certification (Udemy : signal modeste mais réel) ; jury Ecole229 ; enseignement dans trois
structures ; mention Bien constante ; étude filières (42 sources, non encore en ligne).

**Absentes** (à ne pas inventer, mais des emplacements sont vides) :
- aucune recommandation côté employeur (SENS, Light Innovation) ni académique (Dr Atindehoun) ;
- aucune preuve tierce de l'angle données / agricole : les 9 recommandations parlent de sites,
  d'audits et de landing pages ;
- aucun lien vers le site (pas en ligne) ;
- aucune capture ou lien vers l'étude.

**Interdits rappelés** : ne pas citer le nombre de recommandations (règle 11/09) ; ne plus citer
« 5 applications mobiles » (règle 11/09, encore présent dans `site/lib/data/stats.ts`) ; ne pas
reprendre « +30 audits | +10 clients » (non validés).

### 4.10 Sélection (Featured)

- **Contenu actuel** : inconnu.
- **Candidats disponibles dans le dossier, dans l'ordre d'un mini-parcours** : 1) le site (quand
  il sera en ligne) ; 2) form2kobo.com (étude de cas) ; 3) la page Étude (preuve de ce qu'il fait
  déjà avec des données agricoles) ; 4) smn.bj (institutionnel) ; 5) le CV `/cv`.
- **Contrainte** : jamais de lien mort. SENIA, CINEEF, Siabanni, maxencemerle sont hors ligne et
  ne peuvent pas être mis en avant par lien.
- **Priorité** : 🟠, bloquée par la mise en ligne du site.

### 4.11 Créateur / contenu

- **Stratégie de contenu** : aucune ; le dossier dit « pas de reprise des publications ».
- **Ce qu'un visiteur voit** : l'onglet Activité montre une cinquantaine de posts WordPress /
  UI-UX de 2024, en tutoiement probable, sur le registre danoz. Une personne qui arrive par un
  ancien post trouve un positionnement (prestataire web) différent du positionnement visé
  (concepteur de SI pour les filières agricoles).
- **Une seule publication prévue par le dossier** : l'étude filières, « partageable sur LinkedIn »
  (stratégie §6). Elle suffirait à réaligner l'activité récente.
- **Mode créateur** : pas recommandé sans cadence, et aucune cadence n'est prévue.
- **Priorité** : 🟢.

---

## 5. Analyse du parcours d'un prospect

La cible n'étant pas définie dans le dossier, deux lecteurs sont simulés.

### Lecteur A : membre de jury ou recruteur UNV qui tape le nom (cible réelle du dossier)

1. **Recherche** : il tape « Bonheur Meyevi ». LinkedIn sort avant le site (pas en ligne). Il
   voit le titre actuel : « Assistant CM Digitalisation ». Il ne sait pas ce que c'est.
2. **Visite** : photo (peut-être le t-shirt samouraï), bannière (peut-être « agent de vente pour
   ton business »). Rupture immédiate avec le dossier sobre qu'il vient de lire.
3. **Compréhension** : la section Infos est un CV ; rien sur les chaînes de valeur, rien sur le
   master ; le mot « ERP » attire l'œil sans rien dire.
4. **Confiance** : il lit « Piloter le développement… », puis appelle M. Sonou, référence déclarée,
   qui décrit un assistant. Écart constaté : le dossier entier devient suspect.
5. **Intérêt** : les recommandations sont bonnes mais parlent de landing pages ; il ne trouve pas
   le lien avec le projet agricole.
6. **Action** : aucun lien vers le site, aucune étude, aucun CV. Il referme.

Points de rupture : titre (étape 1), visuels (2), Infos (3), intégrité SENS (4), absence de lien (6).

### Lecteur B : indépendant ou PME francophone qui cherche un développeur (cible de l'ère danoz)

1. Il arrive par un ancien post WordPress ou une recommandation. Il voit un dev web freelance.
2. Il comprend « développeur web & mobile », s'en satisfait.
3. Il cherche une offre : pas de Services, pas de tarif, pas de « comment travailler avec moi ».
4. Il lit qu'il est salarié à plein temps chez SENS : disponibilité incertaine, non dite.
5. Il ne sait pas quoi faire : pas de CTA, pas de site.

Points de rupture : offre (3), disponibilité (4), action (5). Et si le profil est réécrit pour le
lecteur A, le lecteur B se sent hors cible, ce qui est cohérent avec le dossier mais doit être
assumé.

---

## 6. Analyse du profil comme système de conversion

Notes sur le profil actuel probable, pour le lecteur A (la cible du dossier).

| Étape | Note | Pourquoi |
|---|---|---|
| ATTENTION | 3/10 | Visuels hérités de danoz, titre « CM » ; rien n'accroche un jury, et ce qui accroche un prospect contredit le dossier |
| COMPRÉHENSION | 3/10 | On comprend « développeur », pas pour qui ni vers quoi ; « ERP », « CM », « UI/UX » sans contexte |
| INTÉRÊT | 4/10 | Le parcours réel est intéressant (SENS, Form2Kobo, enseignement) mais Form2Kobo et l'enseignement sont absents du texte |
| CRÉDIBILITÉ | 5/10 | Recommandations réelles et publiques, projets en ligne ; mais « piloter », dates Light et anglais « intermédiaire » sont démentis par les pièces |
| DÉSIR | 2/10 | Aucune promesse, aucune direction, aucune différence formulée |
| ACTION | 1/10 | Pas de lien vers le site, pas de CV, pas d'invitation à écrire, pas de coordonnées dans Infos |

---

## 7. Incohérences avec les autres documents du dossier

1. **Master visé** : site, `dossier-reference.md` §12 et `redThread` (« SI décisionnels ou
   agriculture numérique ») contre Mastercard (« Génie Logiciel IFRI, dossier déposé, la
   data/SIG n'est plus l'objet du master »). Le plus récent et le plus engagé : Génie Logiciel.
   Le site reste volontairement générique (§13 : candidatures continues), mais un titre LinkedIn
   doit choisir, et le dossier de référence doit être mis à jour.
2. **« 5 applications mobiles »** : encore dans `site/lib/data/stats.ts` et donc dans le CV `/cv`
   et la bande de chiffres, alors que la règle du 11/09 dit de ne plus citer ce chiffre.
3. **« Modules de formation conçus »** : présent dans `candidature-mastercard/01` et `03` et dans
   `profil-unv-optimise.md` §5, alors que le 11/09 demande « cours donnés et ateliers ponctuels ».
4. **Nombre de recommandations** : « 9 recommandations LinkedIn » cité dans
   `candidature-mastercard/01` (02/09), contraire à la règle du 11/09. Les textes plus récents
   (UNV, CV Mastercard) respectent la règle.
5. **Anglais** : « Intermédiaire » dans l'export UVP contre A2 certifié partout ailleurs.
6. **Dates Light Innovation** : 08/2022 - 08/2024 dans l'export UVP contre 08/2022 - 03/2024
   (stage puis emploi) partout ailleurs.
7. **Earthlumb** : `strategie-site.md` §1 le cite comme preuve agricole dans le tableau du fil
   rouge, alors que la règle 1 du même document (et `dossier-reference.md` §8) le classe en
   marque blanche jamais nommée. Le site respecte la règle ; le document stratégique se contredit.
8. **Continuité** : `strategie-site.md` §1 (« quelqu'un qui creuse le même sillon depuis 4 ans »)
   contre la règle postérieure du `dossier-reference.md` §12 (« la continuité porte sur la
   question »). Le site applique la règle récente ; la stratégie ne l'a pas répercutée.
9. **Identité visuelle** : la capture danoz et la photo studio (baseline samouraï, tutoiement,
   dégradés) contre la charte v2.2. Si le profil LinkedIn porte encore ces éléments, c'est la
   contradiction la plus visible pour quiconque tape le nom.
10. **Nom de domaine** : `site.ts` fixe `https://bonheurmeyevi.com` alors que la stratégie §10 le
    laisse « en attente ». À trancher avant de mettre un lien sur LinkedIn.

---

## 8. Problèmes critiques 🔴

1. **Aucun profil LinkedIn n'a été conçu** : la stratégie prévoit une mise à jour « ponctuelle »
   qui n'a jamais été rédigée, alors que LinkedIn est aujourd'hui le premier résultat sur le nom.
2. **Audience non tranchée** : prestataire (brief) ou porteur de projet (dossier). Sans décision,
   toute réécriture sera contredite par la moitié des documents.
3. **Intégrité des expériences** : SENS (« piloter », « conduire », « ERP »), Light (dates, stage,
   MySQL), anglais. Corrigeable en une heure avec les textes UNV déjà validés.
4. **Master unique à afficher** : Génie Logiciel IFRI ou SI décisionnels ; le dossier de référence
   doit être aligné avant le titre.
5. **Aucune destination** : pas de site en ligne, pas de lien, pas de CTA. Le profil ne peut pas
   convertir quoi que ce soit tant que la roadmap phase 7 (mise en ligne) n'est pas faite.

## 9. Améliorations importantes 🟠

1. **Visuels** : photo de profil = portrait N&B du site ; bannière dans la charte, sans baseline
   ni tutoiement ni chiffres non validés.
2. **Section Infos** : assembler, à partir du CV et de la formule UNV, un texte en cinq temps
   (ce que je construis, pour qui, preuve, ce que je prépare, comment me joindre), avec l'email
   et le WhatsApp du dossier.
3. **Expériences** : coller les versions 4.1 à 4.4 du profil UNV (déjà conformes aux règles), y
   compris le stage séparé et le résultat par entrée ; ajouter le jury Ecole229 et les TD en
   bénévolat.
4. **Services** : activer seulement si l'activité indépendante est assumée publiquement, avec
   trois lignes cohérentes avec le portfolio ; sinon désactiver.
5. **Sélection** : préparer l'ordre (site, Form2Kobo, étude, smn.bj, CV) pour le jour de la mise
   en ligne.

## 10. Optimisations 🟢

1. Un post unique de réalignement : la publication de l'étude filières, sobre, avec lien.
2. Demander une recommandation côté employeur ou académique (M. Sonou, Dr Atindehoun, responsable
   de Light Innovation), après accord et en leur transmettant la formule de positionnement.
3. URL personnalisée déjà propre (`/in/bonheur-meyevi`) : la reprendre à l'identique dans
   `sameAs` du site (prévu en stratégie §8).
4. Compétences LinkedIn : reprendre les six lignes « Compétences informatiques » du profil UNV,
   KoboToolbox et XLSForm en tête.
5. Corriger `stats.ts` (« 5 applications ») pour que le CV généré, que LinkedIn pointera, ne
   contredise pas la règle du 11/09.

---

## 11. Top 5 des changements prioritaires

1. **Trancher l'audience** (porteur de projet, ou porteur de projet avec freelance assumé) et
   **le master affiché** ; mettre `dossier-reference.md` §12 à jour.
2. **Réécrire les quatre expériences** avec les textes UNV validés ; corriger l'anglais.
3. **Rédiger un titre et une section Infos** à partir de la formule UNV et du paragraphe Profil
   du CV, sans « expert », sans baseline, avec coordonnées.
4. **Remplacer photo et bannière** par des visuels conformes à la charte.
5. **Mettre le site en ligne** et poser le lien dans Infos, la bannière et la Sélection.

## 12. Verdict final

**❌ Insuffisamment optimisé.** Le profil n'est pas mal écrit : il n'a pas été écrit pour
l'objectif du dossier. Ce qui est déjà très bon existe ailleurs (formule UNV, expériences
réécrites, étude, recommandations, portrait). Ce qui empêche l'excellence : une décision
d'audience absente, un texte actuel qui contredit les références vérifiables, et aucun lien vers
une preuve.

### Informations manquantes pour un audit complet

- Export du profil LinkedIn actuel : titre, Infos, bannière, Sélection, Services, Compétences,
  visibilité des anciens posts.
- Décision : l'activité indépendante est-elle proposée publiquement en 2026 ?
- Décision : master affiché (Génie Logiciel IFRI ou formulation générique).
- Date de mise en ligne du site et nom de domaine.
- Validation ou abandon des chiffres « +30 audits » et « +10 clients ».

> **Si je devais modifier seulement 3 éléments aujourd'hui, ce seraient :**
> 1. Les expériences SENS et Light Innovation, avec les textes UNV validés (intégrité).
> 2. Le titre, après décision d'audience et de master.
> 3. La photo et la bannière, en retirant tout héritage « Samouraï du Web ».
