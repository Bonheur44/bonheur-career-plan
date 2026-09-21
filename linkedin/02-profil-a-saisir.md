# Profil LinkedIn à saisir - Bonheur MEYEVI

> Version « à coller » du 14/09/2026, révisée le 18/09/2026, issue de l'audit `01-audit-profil.md`.
> Décisions de Bonheur (14/09/2026) : **profil tourné uniquement business, aucune mention du
> master.** Le poste SENS reste déclaré (intégrité), présenté comme contexte professionnel.
> **Contrainte contractuelle (18/09/2026) : le contrat SENS interdit toute activité parallèle au
> poste. Sur la place publique, aucune mention d'activité indépendante pendant le CDD** : pas
> de page Services, pas de badge « Ouvert à des prestations », pas d'offre ni de devis, activité
> indépendante close en juin 2025, aucun projet daté de la période SENS. Le profil reste business
> par ses réalisations, ses compétences et ses coordonnées, pas par une offre. Ce qui est dit en
> dossier de recrutement ou en entretien n'est pas concerné.
> Règles du dossier appliquées : SENS = assistant du chargé de digitalisation ; Form2Kobo conçu
> pour un agronome ; clients en marque blanche et client de l'application de collecte jamais nommés ;
> aucun chiffre SENS présenté comme personnel ; anglais A2 factuel ; pas de nombre de
> recommandations ; pas de « 5 applications » ; aucun tiret long ; vouvoiement ; ni « expert »,
> ni baseline « Le Samouraï du Web ».
> Limites LinkedIn vérifiées dans le texte : titre 220 caractères, Infos 2 600, description
> d'expérience 2 000, Services 500.

---

## 0. À retirer du profil actuel avant de coller

- Photo studio avec le t-shirt « danoz - Le Samouraï du Web » et toute bannière de l'époque
  danoz (« agent de vente », tutoiement, « +30 audits | +10 clients »).
- Intitulé « Assistant CM Digitalisation » ; les verbes « Piloter » et « Conduire » ; le mot
  « ERP ».
- L'entrée unique Light Innovation 08/2022 - 08/2024 (à scinder) et la mention « administrer les
  bases MySQL » chez Light.
- Anglais « Intermédiaire ».
- Mode créateur : désactivé. « Prêt à travailler » (open to work) : désactivé. « Prestations de
  services » : désactivé, page Services non créée (contrainte contractuelle).
- Toute publication ou description qui laisserait lire une activité indépendante depuis
  juillet 2025.

## 1. Visuels

| Élément | Fichier | Notes |
|---|---|---|
| Photo de profil | `visuels/photo-profil-800x800.png` | Même portrait que le site (N&B sur rose de marque). Vérifier le rendu en cercle : le visage est centré dans le tiers supérieur, les bras croisés restent visibles. |
| Bannière, version recommandée | `visuels/banniere-1584x396-prune.png` | Fond prune, la photo rose se détache dessus. |
| Bannière, variante | `visuels/banniere-1584x396-claire.png` | Fond brume 50, si le rendu prune paraît trop sombre sur mobile. |

Contenu de la bannière (identique dans les deux versions) :
- Étiquette : « > Développeur web & mobile · Cotonou, Bénin »
- Titre : « Applications web et mobiles, plateformes de données, sites institutionnels. »
- Preuve : « 4 ans · 20+ projets livrés au Bénin et en France · Next.js · Laravel · Flutter · WordPress »
- Signature : wordmark danoz sans baseline · bmeyevi@gmail.com
- Zone basse gauche laissée vide : c'est là que LinkedIn superpose la photo de profil.

Sources modifiables : `visuels/src/*.html`. Régénération (Chrome installé) :

```bash
cd linkedin/visuels
"/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu --hide-scrollbars --virtual-time-budget=8000 --window-size=1584,396 --screenshot="banniere-1584x396-prune.png" "file:///D:/Projects/bonheur-meyevi/career-plan/linkedin/visuels/src/banniere-prune.html"
```

Quand le site sera en ligne : ajouter l'URL à la place de l'email dans `src/banniere-*.html` et
régénérer.

## 2. En-tête

- **Prénom / Nom** : Bonheur / MEYEVI
- **Titre** (199 caractères) :

> Développeur web et mobile · Assistant digitalisation, SENS Bénin · Applications sur mesure, plateformes de données et sites institutionnels · Next.js, Laravel, Flutter, WordPress · 20+ projets livrés

- **Localisation** : Cotonou, Littoral, Bénin
- **Secteur** : Services et conseil en informatique
- **URL personnalisée** : linkedin.com/in/bonheur-meyevi (inchangée)
- **Coordonnées** : email bmeyevi@gmail.com · téléphone +229 01 96 15 83 12 · site web : à ajouter
  le jour de la mise en ligne
- **Ouvert à** : rien d'activé. Ni « Prestations de services » (contrainte contractuelle), ni
  « Prêt à travailler »
- **Bouton personnalisé** (si disponible) : « Envoyer un e-mail » ou lien vers le site quand il
  existera

## 3. Section « Infos » (1 982 caractères)

> Je construis des applications, des plateformes et des sites qui fonctionnent, se maintiennent et que les équipes utilisent vraiment. Quatre ans de pratique, au Bénin et en France : une vingtaine de projets livrés, du cadrage des besoins à la mise en ligne.
>
> Ce que je sais construire :
> - Applications web et mobiles sur mesure (Laravel, Next.js, Flutter) : APIs REST, bases de données, paiement mobile money (FedaPay, KKiaPay, Moneroo) et Stripe.
> - Plateformes et outils de données : formulaires d'enquête, collecte terrain, outils de suivi, écosystème KoboToolbox.
> - Sites institutionnels et vitrines sous WordPress ou Next.js : création, refonte, intégration de maquettes, SEO.
> - Audits de sites et de landing pages, avec des recommandations écrites, priorisées et applicables sans moi.
>
> Quelques réalisations vérifiables :
> - Form2Kobo (form2kobo.com) : plateforme conçue et développée de bout en bout pour le compte d'un agronome. Elle convertit un questionnaire d'enquête en fichier XLSForm prêt pour KoboToolbox, avec achat de crédits par mobile money.
> - Salon Monétique National (smn.bj) : site officiel d'un événement institutionnel de la finance numérique béninoise.
> - Applications mobiles publiées sur le Play Store ; sites de chercheurs, de consultants et d'organismes de formation ; refontes livrées avec une copywriter, un designer et une consultante SEO.
>
> Aujourd'hui, je suis assistant digitalisation chez SENS Bénin, société coopérative qui structure des chaînes de valeur agricoles inclusives : plateformes web, appui aux outils de gestion internes, automatisation. Ce terrain m'apprend à concevoir pour des utilisateurs qui ne sont pas techniciens.
>
> Ma façon de travailler : un cadrage écrit avant la première ligne de code, des délais tenus, des choix techniques expliqués. Les recommandations publiques de mes clients et collaborateurs, plus bas sur ce profil, en disent plus long que moi.
>
> Pour échanger :
> Email : bmeyevi@gmail.com
> WhatsApp : +229 01 96 15 83 12

Les trois premières lignes (avant « voir plus ») portent ce qu'il construit, la durée et le
volume livré : c'est ce qui s'affiche sans clic. Aucune phrase n'annonce une disponibilité ni une
offre : les réalisations et les coordonnées suffisent à un lecteur qui veut prendre contact.

## 4. Expériences

Ordre d'affichage (chronologique, comme LinkedIn le fait seul) : SENS Bénin, poste actuel, puis
l'activité indépendante close en juin 2025, puis Light Innovation en deux entrées.

**Règle de datation (contrainte contractuelle)** : l'entrée indépendante se termine en juin
2025. Form2Kobo et le site du Salon Monétique National, livrés pendant la période SENS, n'y
figurent pas : ils sont présentés sans date dans Infos et dans la Sélection, comme réalisations.
Aucune mention « en cours » ou « en production » nulle part.

### 4.1 Assistant digitalisation · SENS Bénin

- **Intitulé** : Assistant digitalisation
- **Entreprise** : SENS Bénin · **Type** : CDD (contrat) · **Dates** : juillet 2025 - aujourd'hui ·
  **Lieu** : Cotonou, Bénin · sur site
- **Description** (940 caractères) :

> Assistant du chargé de mission de digitalisation, d'abord comme prestataire de services (juillet 2025 à janvier 2026), puis en contrat à durée déterminée depuis janvier 2026. SENS Bénin est une société coopérative d'entrepreneuriat social qui accompagne des petites entreprises rurales et structure des chaînes de valeur agricoles inclusives.
>
> - Développement et maintenance des plateformes web de la coopérative (React, Next.js, WordPress) ; participation à la refonte du site institutionnel.
> - Appui à la conception et à l'évolution des outils de gestion internes qui servent au suivi des activités d'accompagnement ; amélioration de l'ergonomie et de la qualité des données saisies.
> - Automatisation de flux de travail internes ; suivi des performances et de la sécurité applicative.
>
> Ce poste me place au contact quotidien des besoins d'outils de données d'une organisation de développement rural et de ses utilisateurs non techniciens.

- **Compétences associées** : React · Next.js · WordPress · Automatisation

### 4.2 Développeur web et mobile indépendant · danoz

- **Intitulé** : Développeur web et mobile indépendant
- **Entreprise** : danoz (ou « Travailleur indépendant » si aucune page n'est créée)
- **Type** : Indépendant · **Dates** : avril 2024 - juin 2025 · **Lieu** : Parakou puis Cotonou, Bénin · à distance
- **Description** (1 120 caractères) :

> Une vingtaine de projets livrés pour des clients au Bénin et en France (institutions, chercheurs, entreprises, indépendants), du cadrage des besoins à la mise en ligne.
>
> - Applications web et mobiles sur mesure (Laravel, Next.js, Flutter) : plateformes de données, application de collecte de données terrain (backend et mobile), conception d'une application de gestion de programmes de dépistage.
> - Sites institutionnels : site du colloque scientifique international CINEEF (structuration des contenus, conception des vues, mise en ligne) ; site du salon SENIA, avec un social media manager et un graphiste.
> - Sites vitrines, refontes et intégrations de maquettes (WordPress, Next.js) avec une copywriter, un designer et une consultante SEO ; audits de sites et de landing pages avec recommandations écrites.
> - Intégrations d'API REST et de paiement mobile money (FedaPay, KKiaPay, Moneroo) et Stripe ; MySQL, Firebase, Supabase ; SEO et suivi de performance.
>
> Résultat : recommandations publiques de clients et de collaborateurs sur ce profil ; un site livré en deux jours pour un client sous forte contrainte de délai.

- **Compétences associées** : Laravel · Next.js · Flutter · WordPress · API REST
- **Médias** : aucun (les liens form2kobo.com et smn.bj vivent dans la Sélection, sans date)

### 4.3 Développeur mobile, puis lead développeur mobile (en binôme) · Light Innovation

- **Intitulé** : Développeur mobile (lead en binôme)
- **Entreprise** : Light Innovation · **Type** : Temps plein · **Dates** : février 2023 - mars 2024 ·
  **Lieu** : Parakou, Bénin
- **Description** (974 caractères) :

> Entreprise de services numériques de Parakou. Développement et publication d'applications Flutter multiplateformes, comme responsable en binôme d'une petite équipe mobile.
>
> - Application de la Foire Internationale de Parakou (réservation de stands, informations pratiques, partenaires) ; applications des médias Daabaaru et Sutiidera (articles, vidéos, directs télévisés et radio) ; applications e-Event et Afrozigo, publiées sur le Play Store.
> - Intégration d'API REST fournies par le backend (dont l'API YouTube) ; correction de bugs ; maintenance applicative ; formation des utilisateurs aux nouvelles fonctionnalités.
> - Cours de programmation (développement web et mobile) au centre de formation de Light Innovation et à CFOMAN-Daabaaru ; ateliers ponctuels ; encadrement de plus de 15 stagiaires.
>
> Résultat : plusieurs applications livrées, dont deux toujours publiées sur le Play Store ; passage de stagiaire à responsable de l'équipe mobile en moins de dix-huit mois.

- **Compétences associées** : Flutter · Dart · API REST · Formation
- **Médias** : liens Play Store e-Event et Afrozigo

### 4.4 Stagiaire développeur mobile · Light Innovation

- **Type** : Stage · **Dates** : août 2022 - janvier 2023 · **Lieu** : Parakou, Bénin
- **Description** :

> Intégration d'interfaces (UI/UX), correction de bugs, tests applicatifs et apprentissage de Flutter au sein de l'équipe mobile. Participation au hackathon interne Code4Shine (deux semaines, 2022). Stage converti en poste de développeur mobile en février 2023.

### 4.5 Ce qui n'a pas d'entrée

Agent inscripteur externe (Université de Parakou, trois mois en 2023-2024) : hors positionnement
business, chevauche Light Innovation ; omis. Engagement paroissial : omis (profil business).
Toute activité indépendante postérieure à juin 2025 : omise (contrainte contractuelle).

## 5. Expérience de bénévolat (une entrée, pour la crédibilité de la transmission)

- **Rôle** : Animateur bénévole de travaux dirigés en informatique de gestion
- **Organisation** : Association des étudiants de l'IUT de Parakou (ASETIP), Université de Parakou
- **Dates** : pendant le cursus 2019-2022 (année exacte à confirmer par Bonheur) · **Cause** : Éducation
- **Description** :

> À la demande de l'association des étudiants, animation de séances de travaux dirigés pour une centaine d'étudiants : préparation des séances, explication des notions, accompagnement individuel. Transmission poursuivie ensuite comme formateur (Light Innovation, CFOMAN-Daabaaru) et membre du jury de soutenance du parcours Développement web de l'Ecole229 (avril 2024).

## 6. Services (page Services LinkedIn)

**Non créée pendant le CDD SENS.** La page Services affiche publiquement un badge « Fournit des
services » : c'est, à elle seule, l'annonce d'une activité parallèle. À réactiver à la fin du
contrat, avec le texte ci-dessous, conservé pour ce moment-là :

> Applications web et mobiles sur mesure (Laravel, Next.js, Flutter), plateformes et outils de données (KoboToolbox, collecte terrain, paiement mobile money), sites institutionnels et vitrines sous WordPress ou Next.js, refontes et intégrations de maquettes, audits de sites et de landing pages avec recommandations écrites. Clients au Bénin et en France, à distance. Cadrage écrit avant de coder, délais tenus.

Catégories prévues : Développement web · Développement d'applications mobiles · Développement de
logiciels sur mesure · Conception de sites web · SEO. Zone : Bénin · France · à distance. Pas de
tarif affiché.

## 7. Sélection (Featured), dans cet ordre

Chaque élément est ajouté comme **image** (Sélection > Ajouter > Média), avec la carte 1200×627
de `visuels/`, un titre et une description. Les liens sont repris dans la description : LinkedIn
n'accepte pas de vignette personnalisée sur un lien, d'où le choix de l'image.

| # | Carte | Titre | Description |
|---|---|---|---|
| 1 | `visuels/selection-01-form2kobo-1200x627.png` | Form2Kobo : préparer un questionnaire KoboToolbox sans écrire de XLSForm | Conçu et développé de bout en bout pour le compte d'un agronome. Laravel, Next.js, paiement mobile money. form2kobo.com |
| 2 | `visuels/selection-02-smn-1200x627.png` | Le site officiel du Salon Monétique National | Création sous WordPress pour un événement institutionnel de la finance numérique béninoise. smn.bj |
| 3 | `visuels/selection-03-e-event-1200x627.png` | e-Event : le compagnon mobile d'une plateforme événementielle | Développement mobile chez Light Innovation, Flutter. Publiée sur le Play Store (com.light.mobile_event). |
| 4 | `visuels/selection-04-alladatin-1200x627.png` | Refonte complète du site d'un professeur d'université | Site du Dr Judicaël Alladatin (Université de Montréal), refonte sous WordPress. alladatin.com |

Aucune carte ne porte de date ni de mention « en ligne » : elles présentent des réalisations,
pas une activité en cours. Risque résiduel assumé : Form2Kobo et smn.bj datent de la période SENS ;
un lecteur qui connaît la date de mise en ligne de ces sites pourrait le déduire. Pour un risque
nul, retirer ces deux cartes et les deux lignes correspondantes d'Infos.

5. **Le jour de la mise en ligne du site** : ajouter le lien en position 1 avec le titre
   « Portfolio et études de cas ».

Jamais de lien vers un site hors ligne (SENIA, CINEEF, Siabanni, maxencemerle).

Régénération des cartes (sources dans `visuels/src/selection.mjs`) :

```bash
cd linkedin/visuels/src && node selection.mjs
for n in selection-01-form2kobo selection-02-smn selection-03-e-event selection-04-alladatin; do
  "/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu --hide-scrollbars --virtual-time-budget=8000 --window-size=1200,627 --screenshot="../$n-1200x627.png" "file:///D:/Projects/bonheur-meyevi/career-plan/linkedin/visuels/src/$n.html"
done
```

## 8. Formation

- **École** : Institut Universitaire de Technologie (IUT), Université de Parakou
- **Diplôme** : Licence Professionnelle · **Domaine** : Informatique de Gestion · **Dates** : 2019 - 2022
- **Description** :

> Mention Bien. Mémoire de fin de formation (juin 2022) : conception et réalisation d'une application web de mise en contact des producteurs et consommateurs du secteur agricole (UML, prototype PHP).

## 9. Licences et certifications

| Nom | Organisme | Date | Justificatif |
|---|---|---|---|
| Flutter & Dart : le cours complet pour iOS et Android (44h) | Udemy | août 2024 | `documents/certifications/Certificat-Flutter-Dart.pdf` |
| WordPress : le cours complet, 20 cours en 1 (45h) | Udemy | mai 2024 | `documents/certifications/Certificat-WordPress.pdf` |
| Formation SEO : débutant à expert (9h) | Udemy | mai 2024 | `documents/certifications/Certificat-SEO-Débutant-à-Expert.pdf` |
| Optimiser le SEO de son site de A à Z (7h) | Udemy | mai 2024 | `documents/certifications/Certificat-SEO-WordPress.pdf` |

Le certificat d'anglais va dans Langues, pas ici.

## 10. Compétences (épingler les cinq premières)

1. Next.js · 2. Laravel · 3. Flutter · 4. WordPress · 5. API REST

Puis : React · PHP · Dart · MySQL · Firebase · Supabase · Intégration de paiement (mobile money,
Stripe) · KoboToolbox / XLSForm · SEO · Responsive design · Git · Automatisation de flux de travail ·
Cadrage des besoins · Formation et encadrement · Rédaction web.

Pas de compétence « agriculture » ni « data science » : non prouvées à ce jour.

## 11. Langues

- Français : Bilingue ou langue natale
- Anglais : Notions (A2 certifié, TBC, 2026)

## 12. Recommandations

- Conserver les neuf recommandations publiques existantes ; vérifier que celle d'Abdoul Kafid
  Toko est bien réactivée et visible.
- Ne pas solliciter de recommandation datée de la période SENS pendant le CDD : une
  recommandation publique du porteur de Form2Kobo ou du client du Salon Monétique National,
  horodatée par LinkedIn en 2025 ou 2026, documenterait une activité parallèle. À demander à la
  fin du contrat.

## 13. Activité

Aucune publication pendant le CDD SENS. Le post de présentation de Form2Kobo, envisagé le
14/09/2026, est retiré : publié maintenant, il daterait publiquement une réalisation de la
période SENS. Le texte est conservé dans l'historique du dossier pour la fin du contrat.

## 14. Contrôle avant publication

- [ ] Aucun tiret long dans les textes collés.
- [ ] Aucune mention de master, de bourse ou de candidature.
- [ ] Aucune mention d'activité parallèle au poste SENS : pas de « en parallèle », « poursuivie »,
      « en cours », « en production », « j'accepte », « devis », « prestations » ; entrée
      indépendante close en juin 2025 ; page Services absente ; « Ouvert à » désactivé.
- [ ] SENS : « assistant du chargé de mission », aucun « piloter », « conduire », « ERP ».
- [ ] Form2Kobo : « pour le compte d'un agronome ».
- [ ] Aucun nom de client en marque blanche ; client de l'application de collecte non nommé.
- [ ] Aucun nombre de recommandations, aucun « 5 applications », aucun « +30 audits ».
- [ ] Dates : stage 08/2022 - 01/2023 ; développeur 02/2023 - 03/2024 ; indépendant 04/2024 -
      06/2025 ; SENS 07/2025 - aujourd'hui.
- [ ] Anglais : Notions.
- [ ] Photo et bannière remplacées ; aucune trace de « Le Samouraï du Web ».
- [ ] Sélection : aucun lien mort.
