/**
 * Génère les sources HTML des cartes « Sélection » LinkedIn (1200 x 627).
 *
 *   cd linkedin/visuels/src && node selection.mjs
 *   puis rendu avec Chrome headless (voir 02-profil-a-saisir.md, section 7).
 *
 * Charte v2.2 : fond brume 50, encre prune, accent rose 600 sur clair,
 * Newsreader pour le titre, Public Sans pour les étiquettes. Captures dans un
 * cadre navigateur simplifié (ombre md teintée prune). Aucun tiret long.
 */
import { writeFileSync } from "node:fs";

const PROJETS = "../../../site/public/projets";
const LOGO = "../../../site/public/logos/danoz-prune.png";

const cartes = [
  {
    fichier: "selection-01-form2kobo",
    etiquette: "Application web · En ligne",
    titre: "Votre questionnaire prêt pour KoboToolbox, sans écrire de XLSForm",
    role: "Le format XLSForm bloque les enquêteurs non techniciens. Form2Kobo convertit le questionnaire en fichier prêt à importer.",
    stack: ["Laravel", "Next.js", "MySQL", "Mobile money"],
    url: "form2kobo.com",
    capture: `${PROJETS}/form2kobo-desktop.jpg`,
    cadre: "desktop",
  },
  {
    fichier: "selection-02-smn",
    etiquette: "Site institutionnel · En ligne",
    titre: "Un événement institutionnel en ligne avant sa date",
    role: "Programme, partenaires, inscriptions et réservation de stands : le site officiel du Salon Monétique National.",
    stack: ["WordPress", "SEO"],
    url: "smn.bj",
    capture: `${PROJETS}/smn-desktop.jpg`,
    cadre: "desktop",
  },
  {
    fichier: "selection-03-e-event",
    etiquette: "Application mobile · Play Store",
    titre: "Un événement qui tient dans la poche de son public",
    role: "Compagnon mobile d'une plateforme événementielle, publié sur le Play Store.",
    stack: ["Flutter", "API REST"],
    url: "Play Store",
    capture: `${PROJETS}/e-event-mobile-2.webp`,
    cadre: "mobile",
  },
  {
    fichier: "selection-04-alladatin",
    etiquette: "Site vitrine · En ligne",
    titre: "Des travaux de recherche enfin lisibles en ligne",
    role: "Publications, actualités et présentation réunies dans un site entièrement refait pour le Dr Judicaël Alladatin.",
    stack: ["WordPress"],
    url: "alladatin.com",
    capture: `${PROJETS}/alladatin-desktop.png`,
    cadre: "desktop",
  },
];

const css = `
  html, body { margin: 0; padding: 0; }
  body {
    width: 1200px; height: 627px; overflow: hidden; position: relative;
    background: #FAF7FA; color: #2F0431; font-family: "Public Sans", Arial, sans-serif;
  }
  .losange-bg { position: absolute; left: -140px; bottom: -120px; width: 520px; height: 325px; color: #FBE3FD; }
  .texte { position: absolute; left: 72px; top: 76px; width: 470px; }
  .overline { margin: 0; font-weight: 600; font-size: 15px; letter-spacing: 0.08em; text-transform: uppercase; color: #A526B3; }
  .overline .chev { margin-right: 8px; }
  h1 { font-family: "Newsreader", Georgia, serif; font-weight: 600; font-size: 40px; line-height: 1.12; letter-spacing: -0.01em; margin: 16px 0 0; }
  .filet { width: 64px; height: 4px; background: #A526B3; border-radius: 2px; margin: 22px 0 18px; }
  .role { margin: 0; font-family: "Inter", "Segoe UI", system-ui, sans-serif; font-size: 18px; line-height: 1.5; color: #513D52; }
  .stack { margin: 22px 0 0; padding: 0; list-style: none; display: flex; flex-wrap: wrap; gap: 8px; }
  .stack li { font-weight: 600; font-size: 13px; letter-spacing: 0.02em; color: #5A1264; background: #FBE3FD; border-radius: 999px; padding: 6px 12px; }
  .pied { position: absolute; left: 72px; bottom: 48px; display: flex; align-items: center; gap: 16px; }
  .pied .url { font-weight: 700; font-size: 17px; color: #2F0431; }
  .pied .sep { width: 1px; height: 22px; background: #E5DAE5; }
  .wordmark { height: 22px; overflow: hidden; opacity: 0.85; }
  .wordmark img { height: 31.9px; display: block; }

  /* Cadre navigateur simplifié, ancré à droite et débordant en bas. */
  .navigateur {
    position: absolute; left: 600px; top: 92px; width: 720px; height: auto;
    background: #FFFFFF; border: 1px solid #E5DAE5; border-radius: 16px 16px 0 0;
    box-shadow: 0 4px 16px rgba(47,4,49,0.12); overflow: hidden;
  }
  .barre { height: 40px; background: #F3EDF3; border-bottom: 1px solid #E5DAE5; display: flex; align-items: center; padding: 0 16px; gap: 8px; }
  .barre span { width: 10px; height: 10px; border-radius: 50%; background: #CDBACD; }
  .barre .adresse { margin-left: 12px; flex: 1; height: 22px; border-radius: 6px; background: #FFFFFF; border: 1px solid #E5DAE5; font-size: 12px; color: #6B536B; display: flex; align-items: center; padding: 0 10px; }
  .navigateur img { display: block; width: 100%; height: auto; }

  /* Cadre mobile, centré à droite. */
  .mobile {
    position: absolute; left: 800px; top: 60px; width: 300px; height: 660px;
    background: #FFFFFF; border: 1px solid #E5DAE5; border-radius: 36px 36px 0 0;
    box-shadow: 0 4px 16px rgba(47,4,49,0.12); overflow: hidden; padding: 14px 14px 0;
    box-sizing: border-box;
  }
  .mobile .ecran { border-radius: 24px 24px 0 0; overflow: hidden; background: #F3EDF3; }
  .mobile img { display: block; width: 100%; height: auto; }
`;

for (const c of cartes) {
  const visuel =
    c.cadre === "mobile"
      ? `<div class="mobile"><div class="ecran"><img src="${c.capture}" alt=""></div></div>`
      : `<div class="navigateur"><div class="barre"><span></span><span></span><span></span><div class="adresse">${c.url}</div></div><img src="${c.capture}" alt=""></div>`;

  const html = `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<title>${c.titre}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Newsreader:wght@600&family=Public+Sans:wght@600;700&family=Inter:wght@400;500&display=swap" rel="stylesheet">
<style>${css}</style>
</head>
<body>
  <svg class="losange-bg" viewBox="0 0 48 30" fill="currentColor" aria-hidden="true">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M24 0 47.5 15 24 30 0.5 15 24 0Zm0 8.4L11.5 15 24 21.6 36.5 15 24 8.4Z"/>
  </svg>
  ${visuel}
  <div class="texte">
    <p class="overline"><span class="chev">&gt;</span>${c.etiquette}</p>
    <h1>${c.titre}</h1>
    <div class="filet"></div>
    <p class="role">${c.role}</p>
    <ul class="stack">${c.stack.map((s) => `<li>${s}</li>`).join("")}</ul>
  </div>
  <div class="pied">
    <div class="wordmark"><img src="${LOGO}" alt="danoz"></div>
    <div class="sep"></div>
    <div class="url">${c.url}</div>
  </div>
</body>
</html>
`;
  writeFileSync(`${c.fichier}.html`, html);
  console.log("écrit", `${c.fichier}.html`);
}
