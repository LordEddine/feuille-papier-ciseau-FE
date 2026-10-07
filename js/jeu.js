/* =====================================================================
   PIERRE · FEUILLE · CISEAUX — js/jeu.js — À COMPLÉTER
   420-931-MA · Programmation Web (Front-End) · Séance 16

   Un seul fichier, et le cycle de la séance 15 :
       1. LIRE      le tiroir, une seule fois, au chargement
       2. MODIFIER  les variables, à chaque manche
       3. RANGER    tout de suite
       4. AFFICHER  depuis les variables

   Ce qu'on va ranger dans le localStorage :
       pfc-pseudo       un TEXTE          "Ahmed"
       pfc-record       un NOMBRE         "4"            → Number() en relisant
       pfc-score        un OBJET  (JSON)  {"victoires":3,"defaites":2,…}
       pfc-historique   un TABLEAU (JSON) [{"joueur":"pierre",…}, …]

   Suivez le tutoriel : Seance_16_Exercice_PFC.md
   ===================================================================== */

"use strict";


/* ---------------------------------------------------------------------
   FOURNI — Les constantes du jeu
   --------------------------------------------------------------------- */

// Les clés, préfixées « pfc- » : en file://, tous vos exercices
// partagent le même tiroir (séance 15).
const CLES = {
    pseudo: "pfc-pseudo",
    record: "pfc-record",
    score: "pfc-score",
    historique: "pfc-historique",
};

const COUPS = ["pierre", "feuille", "ciseaux"];
const EMOJIS = { pierre: "🪨", feuille: "📄", ciseaux: "✂️" };
const NOMS = { pierre: "Pierre", feuille: "Feuille", ciseaux: "Ciseaux" };
const TAILLE_HISTORIQUE = 5;


/* ---------------------------------------------------------------------
   FOURNI — Les éléments de la page
   --------------------------------------------------------------------- */
const formulairePseudo = document.getElementById("formulaire-pseudo");
const champPseudo = document.getElementById("pseudo");
const nomJoueur = document.getElementById("nom-joueur");

const scoreJoueur = document.getElementById("score-joueur");
const scoreOrdi = document.getElementById("score-ordi");
const scoreNuls = document.getElementById("score-nuls");

const mainJoueur = document.getElementById("main-joueur");
const mainOrdi = document.getElementById("main-ordi");
const message = document.getElementById("message");
const boutonsCoups = document.getElementsByClassName("btn-coup");

const affichageSerie = document.getElementById("serie");
const affichageRecord = document.getElementById("record");
const badgeRecord = document.getElementById("nouveau-record");

const listeHistorique = document.getElementById("historique");
const historiqueVide = document.getElementById("historique-vide");
const boutonReinitialiser = document.getElementById("btn-reinitialiser");


/* ---------------------------------------------------------------------
   FOURNI — Le coup de l'ordinateur, au hasard
     Math.random()            un nombre à virgule entre 0 et 0,999…
     Math.random() * 3        entre 0 et 2,999…
     Math.floor(…)            on coupe la virgule : 0, 1 ou 2
   On s'en sert comme indice dans le tableau COUPS.
   --------------------------------------------------------------------- */
function coupAuHasard() {
    const indice = Math.floor(Math.random() * 3);
    return COUPS[indice];
}


/* ---------------------------------------------------------------------
   ÉTAPE 1 — Les règles
   Rend "victoire", "defaite" ou "nul", du point de vue du JOUEUR.
     determinerResultat("pierre", "ciseaux")  → "victoire"
     determinerResultat("pierre", "feuille")  → "defaite"
     determinerResultat("pierre", "pierre")   → "nul"
   --------------------------------------------------------------------- */

// TODO 1a : l'objet BAT (qui bat qui ?)

function determinerResultat(joueur, ordi) {
    // TODO 1b
}


/* ---------------------------------------------------------------------
   ÉTAPE 3 — Lire et ranger du JSON
   --------------------------------------------------------------------- */
function lireJSON(cle, valeurParDefaut) {
    // TODO 3b : JSON.parse protégé par try/catch (antisèche de la séance 15)
    return valeurParDefaut;
}

function ecrireJSON(cle, valeur) {
    // TODO 3a
}

// FOURNI : un score tout neuf
function scoreDeDepart() {
    return { victoires: 0, defaites: 0, nuls: 0, serie: 0 };
}


/* ---------------------------------------------------------------------
   1. LIRE — une seule fois, au chargement
   Pour l'instant, tout repart de zéro à chaque F5…
   --------------------------------------------------------------------- */
let score = scoreDeDepart();     // TODO 3c : relire le score du tiroir
let historique = [];             // TODO 6a : relire l'historique du tiroir
let record = 0;                  // TODO 5a : relire le record (un NOMBRE)


/* ---------------------------------------------------------------------
   ÉTAPE 2 — Afficher une manche
   Les deux mains (EMOJIS), le message, et UNE classe de couleur :
   resultat-victoire, resultat-defaite ou resultat-nul.
   --------------------------------------------------------------------- */
function afficherManche(coupJoueur, coupOrdi, resultat) {
    // TODO 2a
}


/* ---------------------------------------------------------------------
   ÉTAPE 3 — Afficher le score   (puis ÉTAPE 5 : la série et le record)
   --------------------------------------------------------------------- */
function afficherScore() {
    // TODO 3d
}


/* ---------------------------------------------------------------------
   FOURNI — Fabriquer UNE ligne d'historique (du DOM déjà pratiqué)
   manche = { joueur: "pierre", ordi: "ciseaux", resultat: "victoire" }
   --------------------------------------------------------------------- */
function creerLigne(manche) {
    const ligne = document.createElement("li");
    ligne.classList.add("ligne-historique", "ligne-" + manche.resultat);

    const coups = document.createElement("span");
    coups.className = "ligne-coups";
    coups.textContent = EMOJIS[manche.joueur] + " contre " + EMOJIS[manche.ordi];

    const resultat = document.createElement("span");
    resultat.className = "ligne-resultat";
    if (manche.resultat === "victoire") {
        resultat.textContent = "Gagné";
    } else if (manche.resultat === "defaite") {
        resultat.textContent = "Perdu";
    } else {
        resultat.textContent = "Nul";
    }

    ligne.appendChild(coups);
    ligne.appendChild(resultat);
    return ligne;
}


/* ---------------------------------------------------------------------
   ÉTAPE 6 — Afficher l'historique, la manche la plus récente en haut
   --------------------------------------------------------------------- */
function afficherHistorique() {
    // TODO 6c
}


/* ---------------------------------------------------------------------
   ÉTAPE 2 → 6 — Jouer une manche (le cœur du jeu)
   Cette fonction grandit à chaque étape : 2, puis 3, 5 et 6.
   --------------------------------------------------------------------- */
function jouer(evenement) {
    // TODO 2b
}

// TODO 2c : brancher jouer sur les trois boutons (boutonsCoups)


/* ---------------------------------------------------------------------
   ÉTAPE 4 — Le pseudo
   --------------------------------------------------------------------- */
function afficherPseudo() {
    // TODO 4a
}

// TODO 4b : au submit du formulaire, ranger (ou retirer) le pseudo


/* ---------------------------------------------------------------------
   ÉTAPE 7 — Remettre à zéro… seulement NOS clés de score
   --------------------------------------------------------------------- */

// TODO 7


/* ---------------------------------------------------------------------
   AU CHARGEMENT — tout afficher depuis ce qu'on a relu
   --------------------------------------------------------------------- */
afficherPseudo();
afficherScore();
afficherHistorique();

// TODO 4c : « Bon retour, Ahmed ! On reprend à 3 – 2. »
