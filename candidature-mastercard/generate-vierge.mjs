// Génère formulaire-vierge.html depuis formulaire-rempli.html :
// vide les réponses (.ans), décoche les cases (.cb.on), retire les notes grises (.main).
import { readFileSync, writeFileSync } from "node:fs";
let html = readFileSync("formulaire-rempli.html", "utf8");
html = html.replace(/<div class="ans block"([^>]*)>[\s\S]*?<\/div>/g, '<div class="ans block"$1></div>');
html = html.replace(/<span class="ans">[\s\S]*?<\/span>/g, '<span class="ans"></span>');
html = html.replace(/class="cb on"/g, 'class="cb"');
html = html.replace(/<span class="main">[\s\S]*?<\/span>/g, "");
html = html.replace("Formulaire Master 2026 (rempli)", "Formulaire Master 2026 (vierge)");
html = html.replace(/Version remplie\.[^<]*/, "Version vierge, fidèle au formulaire officiel. Les cases se cochent au clic et les zones de réponse sont saisissables au clavier avant impression. ");
writeFileSync("formulaire-vierge.html", html);
console.log("OK formulaire-vierge.html");
