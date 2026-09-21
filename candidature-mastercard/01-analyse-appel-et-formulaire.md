# Phase 1-3 : audit de l'appel, du formulaire et du profil

> Produit le 01/09/2026. Sources : `Appel_candidatures_bourse_master_2026.pdf`,
> `Formulaire_Candidature_Master2026_Programme_de_Bourses_Fondation_Mastercard_UAC.pdf`,
> `dossier-reference.md`, `etude/strategie-site.md`, `site/lib/data/*.ts`, `site/app/projet/page.tsx`,
> `etude/donnees-recherche.md`, `documents/*.pdf`.
> Règle : rien n'est inventé. Tout ce qui manque est listé dans `02-questionnaire-a-completer.md`.
>
> **Mise à jour 02/09/2026** : ce document est le constat initial. Les réponses de Bonheur et le
> certificat de résidence ANIP ont depuis levé une partie des inconnues : la **Partie 1 de
> `02-questionnaire-a-completer.md` (v3)** est désormais la base de faits à jour (éligibilité b/c/h,
> état civil, situation socio-économique, engagement, références). En cas d'écart, elle prime.

---

## 1. L'appel à candidatures (N° 609/UAC/VR-CIP/MFSP/GP/RASA/AA, 10 août 2026)

### 1.1 Faits durs

| Élément | Contenu |
|---|---|
| Offre | 20 bourses **complètes** de master, année 2026-2027, Programme de Bourses de la Fondation Mastercard à l'UAC |
| Cible affichée | « diplômés.es de licence **brillants** confrontés aux **obstacles socio-économiques importants** qui les privent d'opportunités » |
| Filière visée | IFRI (Institut de Formation et de Recherche en Informatique) : **Génie Logiciel** (les deux autres filières IFRI : Sécurité informatique, Systèmes d'Information et Réseaux) |
| Date limite | **14 septembre 2026, 16h00 GMT+1** (13 jours à compter d'aujourd'hui) |
| Dépôt numérique | recrutement@mastercardfdn-uac.org, objet exact : `Candidature_Master_MEYEVI_Bonheur`, **un seul PDF lisible** regroupant toutes les pièces **dans l'ordre de l'appel** ; fichiers multiples ou autre format = rejet |
| Dépôt physique | Bureau du Programme, bâtiment du C3E, campus d'Abomey-Calavi (le formulaire ajoute : ou Directions départementales des Enseignements secondaire, technique et de la Formation professionnelle) ; cartable à rabat ; photo agrafée |
| Vérification | Enquête de ménage pour les présélectionnés. Fausse information, rétention d'information ou falsification = annulation automatique |
| Contact | +229 01 62 29 59 59, www.fondationmastercard-uac.org |
| Signal | « Les candidatures féminines sont fortement encouragées » (sans effet sur le contenu du dossier) |

### 1.2 Critères d'éligibilité et situation de Bonheur

| # | Critère | Situation | Preuve / manque |
|---|---|---|---|
| a | Nationalité béninoise | Oui (présumé) | Acte de naissance sécurisé + CIP/CEDEAO/passeport : à fournir |
| b | **Admission** en master dans un établissement partenaire (IFRI) pour 2026-2027 | **Inconnu** | Fiche de confirmation d'admission signée par le Directeur/Directeur adjoint de l'IFRI, ou autorisation d'inscription. **Bloquant** |
| c | Obstacles sociaux et économiques **prouvables** | **Inconnu** | Aucune information dans le workspace. Point sensible : Bonheur est salarié depuis juillet 2025 et a une activité indépendante. À traiter honnêtement, voir §4 |
| d | 28 ans max au 31/12/2026 | Probablement oui | L'attestation TBC porte une date de naissance manuscrite lisible « 05/11/2003 » : à confirmer sur l'acte de naissance (elle impliquerait un bac vers 15 ans et une licence à 18 ans) |
| e | Leadership et entrepreneuriat (responsabilités, associations, expériences édifiantes, projets entrepreneuriaux) | **Fort**, mais sans volet associatif connu | Lead d'équipe mobile, formateur dans 3 structures, 100+ étudiants, 15+ stagiaires, jury Ecole229, freelance 20+ projets. Aucune association/club connue : à demander |
| f | Pas de M1 déjà effectué dans la filière | Oui (aucun master connu) | À confirmer |
| g | Pas titulaire d'un master | Oui | À confirmer |
| h | Pas bénéficiaire d'une autre bourse | **Inconnu** | À confirmer (y compris demande en cours) |

### 1.3 Pièces à fournir (ordre imposé pour le PDF unique)

| # | Pièce | État |
|---|---|---|
| a | Formulaire rempli | À produire (objet de cette mission) |
| b | Acte de naissance sécurisé | À fournir |
| c | **CV de 2 pages maximum** | À adapter depuis `/cv` du site (non calibré sur 2 pages A4, et positionné « SI décisionnels / AgriTech ») |
| d | Fiche de confirmation d'admission en M1 signée IFRI (ou autorisation d'inscription) | **Bloquant, à obtenir à l'IFRI** |
| e | Pièce d'identité (CIP, carte CEDEAO, passeport) | À fournir |
| f | Photo d'identité, nom en capitales au dos (dépôt physique) | À fournir |
| g | Attestation du baccalauréat | À fournir |
| h | Relevé de notes du baccalauréat | À fournir |
| i | Diplôme ou attestation de réussite de la licence | À fournir |
| j | Relevés de notes des **trois** années de licence | À fournir |
| k | Attestations / reconnaissances associatives (si) | Inconnu ; si aucune, ne rien fabriquer |
| l | Certificat(s) de décès de parent(s) (si) | Selon situation |
| m | Adresse physique précise du domicile (et parents si différente) | Cotonou, Agla Hlazounto : précision insuffisante (rue, repère, plan/GPS) |
| n | **Deux lettres de recommandation académiques** | À solliciter (ex. Dr Mêton-Mêton Atindehoun, directeur de mémoire ; un second enseignant de l'IUT/UP) |
| o | Une lettre de recommandation professionnelle (si applicable) | À solliciter (supérieur hiérarchique SENS Bénin ou responsable de Light Innovation) |

### 1.4 Ce qui départage réellement les candidats (lecture du formulaire)

Le formulaire révèle la pondération implicite du jury :

1. **Conditions de vie** : 37 items (section H) + H13 (300 mots) + K2 (300 mots). Dimension la plus détaillée, et la seule vérifiée par enquête de ménage. Le Programme Mastercard sélectionne d'abord sur le **besoin**, puis sur le mérite.
2. **Leadership et engagement** : section I (8 items), K1, K4 (300 mots chacun), pièce k, critère e. Le formulaire attend une **association/club/mouvement de jeunes** avec attestation, une action pour la communauté (I8) et une initiative personnelle (K4).
3. **Projet de « redonner »** : K3 (contribution au changement économique ou social de la communauté d'origine et du pays), G1 (perspectives recherche / industrie / entrepreneuriat / engagement communautaire). L'esprit du Programme est le « give back ».
4. **Excellence académique** : D2 à D13 (moyennes semestrielles, moyenne du cycle, mention, note de soutenance) + relevés. « Brillants » = les moyennes seront lues.
5. **Cohérence et sincérité** : encadré « A lire absolument », loi 2011-20 art. 131, enquête de ménage, signature du parent/tuteur. Toute exagération est un risque réel, pas seulement éthique.

Conclusion : le dossier ne se gagne pas sur les compétences techniques (déjà largement au-dessus de la moyenne des candidats) mais sur **la sincérité et la précision des sections H, I, K**, et sur la cohérence entre le parcours professionnel réel et un besoin financier crédible.

---

## 2. Le formulaire, champ par champ

Légende : OK = disponible · PARTIEL = à confirmer · MANQUE = absent · LEVIER = valorisation possible

### Section A : informations personnelles

| Champ | Demandé | État | Détail |
|---|---|---|---|
| A1 | Nom (capitales) | OK | MEYEVI |
| A2 | Prénoms (capitales) | OK | BONHEUR ZACHARIE (ordre exact de l'acte de naissance à confirmer) |
| A3 | Date de naissance jj/mm/aaaa | PARTIEL | « 05/11/2003 » lu sur l'attestation TBC (manuscrit) : à confirmer |
| A4 | Ville, pays de naissance, nationalité | MANQUE | |
| A5 | Sexe | OK | Homme |
| A6 | Langue maternelle | MANQUE | Le CV dit « français : langue maternelle » ; le formulaire attend probablement la langue nationale (fon, mina, etc.) : à préciser |
| A7 | Adresse actuelle : village/quartier, arrondissement, commune, département, pays | PARTIEL | Agla Hlazounto, Cotonou, Littoral, Bénin ; arrondissement à confirmer (ne pas deviner) |
| A8 | Route la plus proche du domicile | MANQUE | |
| A9 | Trajet vers le domicile + plan ou coordonnées GPS à joindre | MANQUE | Un plan/GPS est une pièce à produire |
| A10 | Adresse des parents / tuteur | MANQUE | |
| A11 | Route la plus proche (parents) | MANQUE | |
| A12 | Trajet vers le domicile des parents + plan | MANQUE | |
| A13 | Ville d'origine si différente | MANQUE | |

### Section B : contacts

| Champ | Demandé | État | Détail |
|---|---|---|---|
| B1 | Téléphone candidat | OK | +229 01 96 15 83 12 |
| B2 | Email candidat | OK | bmeyevi@gmail.com |
| B3 | Téléphone du père ou tuteur (préciser) | MANQUE | |
| B4 | Téléphone de la mère ou tutrice (préciser) | MANQUE | |
| B5 | Autre numéro pour être joint rapidement | MANQUE | |
| B6 | Adresse de l'établissement de la licence | PARTIEL | IUT, Université de Parakou : adresse postale exacte (BP, ville) à confirmer |
| B7 | 3 personnes de référence (nom, téléphone, email ; professionnelle et académique) | PARTIEL | Candidats naturels : Dr Mêton-Mêton Atindehoun (académique), le chargé de digitalisation de SENS Bénin (professionnel), le responsable de Light Innovation (professionnel). Noms complets, téléphones, emails et accord préalable manquants |

### Section C : admission

| Champ | État | Détail |
|---|---|---|
| C1 Établissement | OK | Institut de Formation et de Recherche en Informatique (IFRI), Université d'Abomey-Calavi |
| C2 Filière | OK | Génie Logiciel |
| C3 Option | MANQUE | Le master GL de l'IFRI a-t-il une option/spécialité ? À lire sur la fiche d'admission, ne pas inventer |

### Section D : académique

| Champ | Demandé | État | Détail |
|---|---|---|---|
| D1 | Situation académique actuelle, **100 mots max** + fiche de parcours académique à joindre | PARTIEL | Rédigeable : licence pro Informatique de Gestion (IUT/UP, 2022), 4 ans de pratique, admission/candidature IFRI GL 2026-2027. LEVIER : expliquer sobrement le délai 2022-2026 comme une construction professionnelle qui a **précisé** le besoin de formation |
| D2 | Bac : année, pays, établissement/ville, série, mention, moyenne | MANQUE | Tout manque |
| D3-D8 | L1 S1 à L3 S6 : année académique, pays, université, faculté/école, domaine, moyenne | MANQUE | Années probables 2019-2022 (à confirmer), Bénin, Université de Parakou, IUT, Informatique de Gestion ; **6 moyennes semestrielles manquantes** (relevés) |
| D9-D10 | L4 S7-S8 | OK | Sans objet (licence en 3 ans) |
| D11 | Moyenne du cycle (moyenne des moyennes annuelles) | MANQUE | À calculer depuis les relevés |
| D12 | Mention du cycle | MANQUE | |
| D13 | Année de soutenance, titre du mémoire, note de soutenance | PARTIEL | Juin 2022 ; « Conception et réalisation d'une application web de mise en contact des producteurs et consommateurs du secteur agricole » ; note manquante |
| D14 | Frais de scolarité payés par année (L1, L2, L3, en FCFA) | MANQUE | |

### Section E : autres formations (5 lignes : intitulé, année/période, structure et adresse)

Disponible (6 candidates pour 5 lignes, à arbitrer) :

1. Flutter & Dart : le cours complet pour iOS et Android, 44h, Udemy (en ligne), 29 août 2024. OK
2. WordPress : le cours complet (20 cours en 1), 45h, Udemy, mai 2024. OK (jour exact sur le PDF)
3. Formation SEO : débutant à expert, 9h, Udemy, mai 2024. OK
4. Optimiser le SEO de son site de A à Z, 7h, Udemy, mai 2024. OK
5. Formation d'anglais de 3 mois, TBC Cabinet International de Langues, Cotonou Sainte Rita, à partir du 7 septembre 2026 (test de positionnement A2 le 10/08/2026). OK
6. Hackathon interne Code4Shine, 2 semaines, Light Innovation, Parakou, 2022 (sans certificat). OK

LEVIER : fusionner les deux SEO sur une ligne (16h, mai 2024) pour tenir en 5 lignes ; le hackathon nourrit plutôt K1/K4.

### Section F : expériences professionnelles pertinentes (3 lignes)

| Ligne | Proposition | État |
|---|---|---|
| F1 | Juillet 2025 - aujourd'hui · SENS Bénin, Cotonou · Assistant digitalisation (assistant du chargé de digitalisation) · développement et maintenance des plateformes web, appui aux outils de gestion internes, automatisation, suivi performances/sécurité | OK (règles SENS respectées) |
| F2 | Avril 2024 - juin 2025 · Freelance (Bénin, France) · Développeur web et mobile · ~15 projets : applications web/mobiles, sites, refontes, audits, APIs, paiement mobile money | OK |
| F3 | Août 2022 - mars 2024 · Light Innovation, Parakou · Stagiaire puis développeur mobile, lead mobile en binôme · apps Foire Internationale de Parakou, Daabaaru, Sutiidera, 2 apps Play Store, formation des utilisateurs | OK |

Non retenu faute de ligne (à placer dans le CV et les sections I/K) : agent inscripteur externe UP (12/2023-02/2024, 1 000+ dossiers), TD à l'Université de Parakou, formateur Centre Light / CFOMAN-Daabaaru, jury Ecole229.

### Section G : projet professionnel (500 mots max)

État : OK, matière abondante (`dossier-reference.md` §12, page `/projet`, étude filières). PARTIEL : **à réaligner sur le Génie Logiciel** (voir §4.3). Attendu explicite : perspectives recherche, industrie, entrepreneuriat, engagement communautaire.

### Section H : conditions de vie (H1 à H37 ; la numérotation du PDF saute de H33 à H37)

MANQUE : **rien n'est disponible.** Statut des parents, tuteur, chef de ménage (âge, scolarisation, occupation, statut, revenus, montant, dépenses), H13 (300 mots : obstacles + pourquoi qualifié), qui supporte les dépenses, qui a payé la licence (H15 et H16 posent la même question), passeport, dépenses du mois dernier, taille du ménage, enfants à charge, bétail, électricité, propriété, toilettes, eau, matériaux (H30 toit, H31 murs), sol, chambres, équipements. Tout est à demander, et tout sera vérifié.

### Section I : leadership

| Champ | État | Détail |
|---|---|---|
| I1 | Membre d'une association/club/mouvement de jeunes ? mission ? attestation | MANQUE | Aucune information. Critère explicite de l'appel |
| I2 | Position occupée | MANQUE | |
| I3 | Capable d'influencer les autres ? | PARTIEL | Répondable « Oui » sur des faits : lead équipe, formateur, jury |
| I4 | Ce qui permet d'influencer (5 cases) | PARTIEL | LEVIER : cohérent avec les faits : « montrez l'exemple en produisant des résultats », « aidez à s'améliorer » |
| I5 | Prix/récompenses/attestations | MANQUE | Aucune connue. Le hackathon Code4Shine n'a pas de certificat |
| I6 | Aisance en public | OK | TD 100+ étudiants, formations, rapporteur de groupe, jury Ecole229 |
| I7 | Plus grande réussite au sein du groupe | MANQUE | Dépend de I1 |
| I8 | Activité réalisée pour améliorer les conditions de vie de la ville/village/communauté | PARTIEL | Candidats : formation d'élèves du Lycée Technique de Tchaourou, TD, formations (bénévoles ou rémunérées ? à préciser). À demander |

### Section J : questions finales

| Champ | État |
|---|---|
| J1-J2 handicap | MANQUE |
| J3 comment avez-vous entendu parler du Programme | MANQUE |
| J4 carrière envisagée | OK (concepteur/architecte de systèmes d'information pour les chaînes de valeur agricoles ; formulation à caler) |
| J5-J6 lien de parenté avec le personnel du Programme | MANQUE |

### Section K : rédaction (5 x 300 mots max)

| Champ | Question | Matière disponible | Manque |
|---|---|---|---|
| K1 | Obstacle surmonté, comment, appris | Pistes : mémoire jamais déployé, hackathon 2 semaines, projet livré en 2 jours (avis Steve Mapakou Zola), passage stagiaire → lead, financement des études ? | L'histoire **personnelle** que Bonheur veut raconter, avec faits datés |
| K2 | Comment les conditions de vie ont façonné qui vous êtes | Aucune | Tout (famille, enfance, contraintes) |
| K3 | Contribution au changement économique/social de la communauté d'origine et du pays après les études | Projet professionnel (plateformes ouvertes producteurs/financeurs/marchés, transmission) | Communauté d'origine (ville/village), engagement concret envisagé |
| K4 | Qualités d'un leader + une initiative prise | Lead mobile, modules de formation conçus chez Light, encadrement 15+ stagiaires, 50 posts pédagogiques LinkedIn | Une initiative précise, datée, avec résultat |
| K5 | Autres informations | Étude filières publiée, 9 recommandations LinkedIn, 105h de certification, site porteur de projet, anglais en cours | Choix éditorial |

### Certification

Signature du candidat **et du parent ou tuteur** (nom, prénoms, date). Prévoir la disponibilité du parent/tuteur avant le 14/09.

---

## 3. Matrice : critères du jury ↔ profil ↔ preuves ↔ manques ↔ valorisation

| Critère du jury | Attendu | Ce que Bonheur démontre aujourd'hui | Preuves dans le workspace | Manques | Valorisation prévue |
|---|---|---|---|---|---|
| **Excellence académique** (« brillants », D2-D13) | Moyennes et mentions élevées, parcours régulier | Licence pro Informatique de Gestion, IUT/UP, 2022 ; mémoire sur une plateforme agricole ; TD donnés à 100+ étudiants pendant le cursus (signal fort de niveau) | dossier-reference §3-4, timeline.ts | Toutes les notes (bac, 6 semestres, cycle, soutenance), mentions, fiche de parcours | Mettre les TD donnés pendant le cursus en regard des moyennes ; D1 sobre |
| **Obstacles socio-économiques prouvés** (c, H, K2) | Besoin réel, cohérent, vérifiable | Rien de documenté | Aucune | Tout H ; situation familiale ; revenu réel du ménage et de Bonheur | Sincérité totale ; expliquer comment l'activité professionnelle coexiste avec le besoin (charges familiales, précarité des revenus indépendants, coût d'un master à plein temps) : **uniquement si c'est vrai** |
| **Leadership** (e, I, K4) | Responsabilités, équipes, initiatives | Lead d'une équipe mobile de 2 (Light), formateur dans 3 structures, 15+ stagiaires (dont élèves du Lycée Technique de Tchaourou), jury de soutenance Ecole229 (27/04/2024), modules de formation conçus | dossier-reference §4, timeline.ts (teaching) | Attestations écrites de ces rôles ; une initiative racontée avec résultat | K4 : une initiative précise ; I3/I4/I6 appuyés sur ces faits |
| **Engagement associatif / communautaire** (e, k, I1-I2, I7-I8) | Association, club, mouvement de jeunes + attestation ; action pour la communauté | Inconnu | Aucune | I1, I2, I5, I7, I8 | Si aucune association : ne rien fabriquer, répondre honnêtement et compenser par l'engagement de transmission (TD, formations, stagiaires) en I8/K3 |
| **Entrepreneuriat** (e, G1) | Projets entrepreneuriaux | Freelance 2024-2025, ~15-20 projets, clients Bénin/France, 9 recommandations publiques LinkedIn, signature « danoz », Form2Kobo construit pour un agronome | dossier-reference §3, §8, §10 ; testimonials.ts | Chiffres d'activité (non requis) | G1 et K5 : l'entrepreneuriat est déjà pratiqué, pas seulement projeté |
| **Projet professionnel et « give back »** (G1, K3, J4) | Perspectives recherche/industrie/entrepreneuriat/communauté ; retour à la communauté et au pays | Projet précis : SI pour chaînes de valeur agricoles inclusives ; constat documenté par l'étude (42 sources) ; immersion SENS Bénin ; ODD 2, 8, 9 | dossier-reference §12, projet/page.tsx, etude/donnees-recherche.md | Alignement Génie Logiciel ; communauté d'origine ; volet recherche éventuel | G1 = le cœur du dossier ; réécrit pour GL |
| **Adéquation avec la filière** (C, D1, G1) | Continuité formation → master | 4 ans de développement (web, mobile, backend), Laravel/Next/Flutter, produits en production, encadrement : profil taillé pour le Génie Logiciel | projects.ts, skills.ts, certificats Udemy | Admission IFRI (pièce d) ; option C3 | D1 et G1 : « passer de développeur à concepteur/architecte de systèmes » = définition même du GL |
| **Âge ≤ 28 ans** (d) | Né en 1998 ou après | Attestation TBC : 05/11/2003 (manuscrit) | documents/Attestation…pdf | Confirmation par l'acte de naissance | Aucun |
| **Pas d'autre bourse, pas de master, pas de M1** (f, g, h) | Déclaration | Aucun master connu | dossier-reference | Confirmation explicite | Aucun |
| **Dossier complet et conforme** (pièces a-o, PDF unique, objet exact) | Zéro pièce manquante, ordre respecté | Formulaire (cette mission), CV (à recalibrer sur 2 pages), certificats | site/app/cv | Acte de naissance, CIP, bac (2), licence (1 + 3 relevés), fiche d'admission, 2 lettres académiques, 1 professionnelle, plan/GPS, photo | Checklist de dépôt en phase 10 |
| **Sincérité vérifiable** (enquête de ménage, loi 2011-20) | Cohérence entre déclaré et constaté | Règle « zéro invention » du dossier | | | Chaque chiffre de H doit pouvoir être constaté chez lui |

---

## 4. Premiers constats stratégiques (à confirmer en phase 5, après réponses)

### 4.1 Atouts réels

1. **Un projet professionnel déjà instruit** : constat documenté (étude à 42 sources publiée), terrain vécu (SENS Bénin), question posée dès le mémoire 2022. Rare chez un candidat de M1.
2. **Une pratique professionnelle dense** : 4 ans, 20+ projets livrés, 5 applications mobiles, 2 apps sur le Play Store, une plateforme en production construite de bout en bout (Form2Kobo, pour un agronome), des clients institutionnels (SMN, CINEEF, SENIA).
3. **La transmission comme preuve de leadership** : TD (100+ étudiants) pendant le cursus, 3 structures de formation, 15+ stagiaires, jury de soutenance, lead d'équipe.
4. **Preuve sociale externe** : 9 recommandations publiques LinkedIn, 105h de certification, certificat d'anglais A2 (2026) et formation en cours (démarche d'amélioration visible).
5. **Cohérence Génie Logiciel** : le manque identifié sur le site (« coder ne suffit plus » : architecture, conception de SI ouverts, gouvernance) est exactement l'objet du GL.

### 4.2 Fragilités

| Fragilité | Nature | Traitement envisagé |
|---|---|---|
| **Besoin socio-économique non documenté, et un profil en activité** | Le jury peut lire « salarié + freelance » comme « n'a pas besoin de bourse » | Ne pas cacher l'activité (F l'exige). Documenter la réalité : charges familiales, niveau réel de revenus, coût d'un master à temps plein sans revenu, origine familiale. **Si le besoin n'est pas réel, le dossier n'est pas éligible (critère c)** : question posée franchement |
| **Aucune association connue** | I1, I2, I5, I7 et pièce k risquent d'être vides | Demander ; à défaut, répondre « non » et déplacer l'engagement vers I8/K3/K4 (transmission, formation d'élèves de lycée technique) |
| **Notes inconnues** | « Brillants » = moyennes lues | Récupérer les relevés ; si les moyennes sont moyennes, les TD donnés pendant le cursus et la trajectoire professionnelle compensent partiellement |
| **4 ans entre licence et master** | Peut être lu comme une rupture | Le raconter comme un temps de construction qui a **précisé** le besoin de formation (D1, G1, K1) |
| **Licence obtenue à Parakou, master demandé à l'UAC** | Aucun problème d'éligibilité ; lettres académiques à demander à l'UP | Solliciter les lettres tôt (délai de 13 jours) |
| **Positionnement du site = « SI décisionnels / data / SIG »** | Le formulaire dit Génie Logiciel : risque d'incohérence si le jury lit le site ou le CV généré | Réaligner G1, J4, D1 et le CV sur le GL (voir 4.3), sans renier le projet |
| **Admission IFRI non confirmée** | Bloquant | Question n° 1 |

### 4.3 La question du Génie Logiciel

Le workspace décrit le master visé comme « systèmes d'information décisionnels / data engineering / agriculture numérique », avec quatre manques nommés : géospatial, décisionnel, gouvernance, **architecture**. L'IFRI propose Génie Logiciel, Sécurité informatique, Systèmes d'Information et Réseaux.

Lecture honnête : le Génie Logiciel répond directement aux manques « architecture » et « conception de SI ouverts et interopérables que des coopératives peuvent s'approprier » (méthodes d'ingénierie, architecture logicielle, qualité, interopérabilité, conduite de projet). Les manques « data science / SIG » ne sont pas le cœur du GL : ils seront présentés comme des compléments (certifications ciblées, `etude/certifications-a-viser.md`) et non comme l'objet du master. Le fil devient :

> développeur formé sur le tas (4 ans, 20+ projets) → a vu de l'intérieur (SENS Bénin, Form2Kobo) que les outils des chaînes de valeur agricoles échouent par défaut de **conception**, pas de code → Génie Logiciel à l'IFRI pour passer de développeur à **concepteur et architecte** de ces systèmes → plateformes ouvertes pour les coopératives béninoises, transmission, contribution aux politiques de digitalisation agricole.

Ce réalignement est cohérent avec tous les faits du dossier. Il est soumis à validation (question stratégique n° 2 du questionnaire).

---

## 5. Prochaines étapes

1. Réponses au `02-questionnaire-a-completer.md` (priorité aux questions bloquantes).
2. Phase 5 : stratégie et fil narratif définitifs.
3. Phases 6-8 : rédaction, audit jury, optimisation.
4. Phase 9 : formulaire HTML/CSS vierge et rempli, imprimable A4.
5. Phase 10 : contrôle final + checklist de dépôt (ordre des pièces, PDF unique, objet du courriel, signatures).
6. Hors périmètre initial mais nécessaire au dépôt : CV 2 pages (pièce c), demandes de lettres de recommandation (n, o), fiche d'admission IFRI (d), plan/GPS (A9, A12).
