# Dépôt Djéna : checklist

> https://djena-scholarship-portal-prod.web.app · clôture **mercredi 30 septembre 2026, 23h59 GMT**
> (00h59 à Cotonou). Déposer avant le 28/09. Réponses champ par champ : `formulaire-reponses.md`.

## Pièces dans `depot/`

| Pièce | Fichier | Contenu | Taille |
|---|---|---|---|
| CV (1 page max) | `CV_MEYEVI_Bonheur.pdf` | 1 page | 0,5 Mo |
| Note de synthèse (5 pages max, police 12) | `Note_de_synthese_MEYEVI_Bonheur.pdf` | 4 pages, signée | 0,1 Mo |
| Justificatifs bac + licence | `Justificatifs_resultats_MEYEVI_Bonheur.pdf` | attestation de licence, relevés L3, L2, L1, diplôme et relevé du bac | 1,4 Mo |
| Frais de scolarité | `Frais_scolarite_master_MEYEVI_Bonheur.pdf` | communiqué IFRI 2026-2027 (451 200 FCFA/an), engagement de prise en charge, 2 quittances, page de suivi de la demande (code AJ3O1XMWMO) | 2,1 Mo |

## À faire avant le dépôt

- [ ] Relancer l'IFRI : si la décision d'admission tombe avant le 30/09, me la transmettre pour
      remplacer « admission en cours » par « admis » (note, CV, formulaire) et la joindre.
- [ ] Enregistrer la capture « Suivre ma demande » en `documents/administratifs/suivi-cuo-AJ3O1XMWMO.png`
      (à refaire la veille du dépôt si le statut a changé) ; je l'insère dans la page de suivi.
- [ ] Déposer dans `documents/administratifs/` : l'attestation de licence récente, les lettres du
      Dr Atindehoun et de M. Sonou. Je remplace l'attestation de 2023 et je produis
      `Lettres_recommandation_MEYEVI_Bonheur.pdf`.
- [ ] Me donner la date à inscrire sur la note (« Cotonou, le __ septembre 2026 »).
- [ ] Relire la note (section 3, passage sur les moqueries) et décider de le garder.
- [ ] Saisir le formulaire, téléverser les 4 fichiers, conserver la confirmation.

## Régénérer les PDF après modification des HTML

Depuis `candidature-djena/` :

```bash
C="/c/Program Files/Google/Chrome/Application/chrome.exe"; W="$(cygpath -w "$PWD")"
"$C" --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=12000 --print-to-pdf="$W\\cv-bonheur-meyevi-djena.pdf" "file:///D:/Projects/bonheur-meyevi/career-plan/candidature-djena/cv-bonheur-meyevi-djena.html"
"$C" --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="$W\\note-de-synthese-djena.pdf" "file:///D:/Projects/bonheur-meyevi/career-plan/candidature-djena/note-de-synthese-djena.html"
"$C" --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="$W\\suivi-admission-ifri.pdf" "file:///D:/Projects/bonheur-meyevi/career-plan/candidature-djena/suivi-admission-ifri.html"
pdfinfo cv-bonheur-meyevi-djena.pdf | grep Pages          # 1
pdfinfo note-de-synthese-djena.pdf | grep Pages           # 4 (max 5)
cp cv-bonheur-meyevi-djena.pdf depot/CV_MEYEVI_Bonheur.pdf
cp note-de-synthese-djena.pdf depot/Note_de_synthese_MEYEVI_Bonheur.pdf
# PDF des frais : communiqué + engagement + quittances + suivi (copier d'abord les sources sous des noms sans accent)
```
