// Calculatrice entière
const divCalculator = document.createElement('div');
divCalculator.classList.add('calculator');

const referenceElement = document.body;
referenceElement.append(divCalculator);

// Ecran de la calculatrice
const divScreen = document.createElement('div');
divScreen.classList.add('screen');

referenceElement.append(divScreen);

// Zone des boutons
const divButtons = document.createElement('div');
divButtons.classList.add('buttons');

referenceElement.append(divButtons);

// Boutons

// const buttonElement = document.createElement('button');

// export class Calculator {
//     function createButton(text, elementParent) {
//         const buttonElement = document.createElement('button');
//         buttonElement.textContent = text;
//         elementParent.append(buttonElement);
//     }
// }

function createButton(text, elementParent) {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = text;
    elementParent.append(buttonElement);
}

const buttonPlus = createButton("+", divButtons);
createButton("-", divButtons);
createButton("x", divButtons);
createButton("/", divButtons);
createButton("7", divButtons);
createButton("8", divButtons);
createButton("9", divButtons);
createButton("=", divButtons);
createButton("4", divButtons);
createButton("5", divButtons);
createButton("6", divButtons);
createButton("1", divButtons);
createButton("2", divButtons);
createButton("3", divButtons);
createButton("0", divButtons);
createButton(".", divButtons);
createButton("AC", divButtons);

