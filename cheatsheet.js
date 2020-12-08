/* DOM */

// Créer un élément
const nomDeMonElement = document.createElement('div');

// Ajouter une ou plusieurs classes
// <div class="mapremiereclasse madeuxieme etc"></div>
nomDeMonElement.classList.add('mapremiereclasse','madeuxieme','etc');

// Insérer un élément dans le DOM
/*
<body>
    ...
    <div></div>
</body>
*/

const unElementDeReference = document.body;
unElementDeReference.append(nomDeMonElement);

// Pouvoir utiliser un attribut
nomDeMonElement.id
nomDeMonElement.href

// Cliquer sur mon élément
nomDeMonElement.addEventListener('click',fonctionAExecuterAchaqueFois);


// Quand on a un addEventListener pour plusieurs éléments
// Dans la fonction appelée
function fonctionAExecuterAchaqueFois(event) {
    console.log(event.target); // C'est le sous-élément sur lequel on est venu cliqué
}

// Fonction qui peut être utile
function createButton(text,elementParent) {
    const link = document.createElement("button");
    link.textContent = text;
    elementParent.append(link);
}

createLinkInNav("Accueil");
createLinkInNav("Mes services");
createLinkInNav("Contact");

// Par exemple, ici créer une fonction createButton avec le texte "=" 
// et placé dans monContainer1
const buttonEgal = createButton("=",monContainer1);


/* -----

Import / Export

----*/
// Dans un autre fichier (ex: score)
export class Score {
    constructor() {
        // Tout ce qui est ici va venir s'exécuter
        // Quand on fera un new Score();
    }
}


// Dans app.js 
import {Score} from "./score.js";
const userScore = new Score();

/* Rechercher un élément dans le DOM */
const monElementARechercher = document.querySelector(".truc");

/* Rechercher un élément descendant d'un autre */
const monElementDescendantARechercher = monElementAncetre.querySelector(".truc");
// Ca va rechercher tous les éléments descendants ayant pour classe truc
// DANS monElementAncretre



// Autre exemple

class Menu {

    clickNav(event) {
        console.log(event.target);
        const p = this.querySelector("p");
        console.log(p.textContent);
    }

    constructor() {
        /* 1.Création de l'élément */
        const nav = document.createElement('nav');

        /* 2.Paramétrage de l'élément */
        nav.classList.add("menu");
        // C'est la même quand il n'y a pas de classe avant
        // nav.className = "menu";

        /* 3.Placement de l'élément dans le dom */
        document.body.append(nav);


        const link = document.createElement('a');
        link.textContent = "Accueil";
        nav.append(link);

        nav.addEventListener('click',this.clickNav);

        const p = document.createElement('p');
        p.textContent = Math.random();
        nav.append(p);

    }
}

const menu1 = new Menu();
const menu2 = new Menu();

