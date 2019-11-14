// INFO DE BASES DU JS:

//ecrire qque chose dans la console
console.log("coucou depuis la console"); //les lignes se termine obligatoirement par un ;
//commentaire sur une ligne
console.log("Ceci n'est pas un commentaire");
/* commentaire écrit sur 
plusieurs lignes*/

/*Les variables sont écrites en camelCase et en anglais : myVariable, numberOfPeople. 
La convention ici est moins forte qu'en Ruby : la seule règle stricte est qu'une variable ne doit pas commencer par un chiffre.
Tout comme en Ruby, les variables peuvent être de plusieurs types : string, number, boolean… Le type d'une variable myVariablepeut être identifié avec typeof myVariable;
Les opérateurs arithmétiques sont les mêmes qu'en Ruby : +, -, *, / et le modulo %.*/

// Les Variables
/*
let data1 = "variable en let définie dans le bloc principal";

{ //début du sous-bloc

  data1 = "variable en let modifiée dans le sous-bloc";
  var data2 = "variable en var définie dans le sous-bloc";
  let data3 = "variable en let définie dans le sous-bloc";

} //fin du sous-bloc

console.log(typeof data1); // "variable let modifiée dans le sous-bloc"
console.log(typeof data2); // "variable var définie dans le sous-bloc"
console.log(typeof data3); // On aura une erreur : data3 n'est pas visible dans le bloc principal

console.log(data1); // "variable let modifiée dans le sous-bloc"
console.log(data2); // "variable var définie dans le sous-bloc"
console.log(data3); // On aura une erreur : data3 n'est pas visible dans le bloc

//incrementation de variable
let a = 1, b = 1;
a++
console.log(a);
console.log(b += 2);
//Les opérateurs precedentes marchent également avec *=, /=, -= et %=
let a = "Bonjour", b = "Monde";
console.log(a + " " + b);

// Les Arrays

let statusDeTHP = ["Moussaillon", "Corsaire", "Renégat"];

console.log(statusDeTHP[0]); //affiche l'entrée 0
console.log(statusDeTHP.length); //on otient la taille de l'array
console.log(statusDeTHP[0] = "La moussaille"); //modifie la valeur de l'entrée 0
console.log(statusDeTHP.push("Flibustier")); //rajoute une entrée en fin d'array
console.log(statusDeTHP.unshift("Pirate")); //rajoute une entrée en debut d'array
console.log(statusDeTHP.slice(2,4)); //retourne un array issue du array initial (une sorte de sous-array). Ses valeurs seront celles comprises entre l'index 2 (inclus) et 4 (exclus)
console.log(statusDeTHP.pop()); //supprime le dernier élément 
console.log(statusDeTHP.shift()); //supprime le premier element
console.log(statusDeTHP.splice(0,2)); //enlèver 2 éléments à partir de l'indice 0.

//Chaine de caractere String

let a = 3;
  console.log("Bonjour à tous les "+ a);
  console.log(a + "3");

let numStudent = 4;
let statement = `Dans mon groupe on est ${numStudent} moussaillons`;
console.log(statement);

//Objet Literaux

let THPSessionNum2 = {
  numOfMouss: 80,
  cities: ["Paris", "Lyon", "Montpellier"],
  successRate: 0.80,
  sessionMoto: "keep pushing to the top"
};
console.log(THPSessionNum2.numOfMouss);
console.log(THPSessionNum2.sessionMoto);

THPSessionNum2.numOfMouss = 79; // je modifie un attribut existant
console.log(THPSessionNum2.numOfMouss);
THPSessionNum2.favoriteLesson = "Présentation de Sinatra" //je rajoute un attribut
console.log(THPSessionNum2); //j'imprime tout l'objet pour voir

let attributName = "successRate";
console.log(THPSessionNum2[attributName]);

//Les Conditions

//  >= signifie "supérieur ou égal à". 
//  > signifie strictement supérieur
//  <= signifie "inférieur ou égal à". 
//  < signifie strictement inférieur
//  !== signifie "contenu ou type différent de". Veuillez noter qu'il y a 2 signes "égal".
//  === signifie "contenu ET type égal à". Veuillez noter qu'il y a 3 signes "égal".

let number = 0; //fais ensuite le test avec d'autres valeurs (positives et négatives)
if(number > 0) {
  console.log("number est positif");
} else if(number === 0) {
  console.log("number est nul");
} else {
  console.log("number est négatif");
} 

if (true && true) {
  console.log("ce message s'affiche car avec un ET, si les deux conditions sont à TRUE, le résultat est TRUE");
}
if (true || false) {
  console.log("ce message s'affiche car avec un OU, si l'une des conditions est à TRUE, le résultat est TRUE");
} 
if (!false) {
  console.log("ce message s'affiche car un NON sur FALSE donne TRUE");
}

weekNum = 1; //teste avec plusieurs valeurs
switch (weekNum) {
  case 1:
    console.log("Semaine 1 - Introduction au Code");
    break;
  case 2:
    console.log("Semaine 2 - Découverte de Ruby");
    break;
  case 3:
    console.log("Semaine 3 - Programmation Orientée Objet");
    break;
  case 4:
    console.log("Semaine 4 - Initiation à Rails");
    break;
  case 5:
    console.log("Semaine 5 - Rails intermédiaire");
    break;
  case 6:
    console.log("Semaine 6 - Rails avancé");
    break;
  case 7:
    console.log("Semaine 7 - HTML / CSS et intro au JS");
    break;
  case 8:
    console.log("Semaine 8 - JavaScript de front");
    break;

  default:
    console.log("Cette entrée n'est pas reconnue");
    break;
}

let number = 0; //fais aussi le test avec un chiffre non nul
if (number) {
  console.log("ce message ne s'affiche que si number est non nul ");
}

let string = ""; //fais aussi le test avec un mot non vide
if (string) {
  console.log("ce message ne s'affiche que si string est non vide");
}

let myVariable // ici, myVariable sera undefined. Fais aussi le test en lui donnant une valeur: number, string, array ou autre.
if (myVariable) {
  console.log("ce message ne s'affiche que si myVariable contient une valeur ");
}

// Les Boucles

for(let count = 0; count <=5; count++){
  console.log(`on va compter jusqu'à 5 : ${count}`);
}

console.log(count); // Va créer une erreur car count est en let et donc son scope est limité au bloc for.
//passe count en var pour tester ce que ça donne

let answer = "";
while(answer !== "oui") {
  console.log("alors ?")
  answer = prompt("Tu kiffes THP ?");
} 
console.log("haaa, tu nous fais plaisir !") // Qui se lassera le premier entre toi et ton ordi ? :D


let word = "";
let letter;

while (true) {
    letter = prompt('Tape UNE lettre stp :');

    if (letter) {
        word += letter; //on rajoute la lettre saisie à la suite du mot
        console.log(word);
    } else { // on rentre dans ce else si letter est vide (l'utilisateur ne saisit rien)
        break; // On quitte la boucle
    }
}
console.log(`voilà ce que tu as tapé : ${word}`);


//On déclare d'abord un array
  let weeksOfTHPArray = ["Semaine 1 - Introduction au Code", "Semaine 2 - Découverte de Ruby", "Semaine 3 - Programmation Orientée Objet", "Semaine 4 - Initiation à Rails"];

//On déclare ensuite un objet
let weeksOfTHPObject = {Semaine5: "Rails intermédiaire", Semaine6: "Rails avancé", Semaine7: "HTML / CSS et intro au JS", Semaine8: "JavaScript de front"};

console.log("**********Parcourons le array :")
for(let index in weeksOfTHPArray) {
  console.log(index); // index va aller de 0 à 3
  console.log(weeksOfTHPArray[index]);
}

console.log("**********Parcourons l'objet :")
for(let weekAttribut in weeksOfTHPObject) {
  console.log(weekAttribut); //weekAttribut va avoir les valeurs "Semaine5" à "Semaine8"
  console.log(weeksOfTHPObject[weekAttribut]);
}


console.log("**********Parcourons le array en forEach :")
weeksOfTHPArray.forEach(weekContent => {
  console.log(weekContent)
});

//Fonction

function sayHello() {
  console.log("Bonjour toi !");
}

sayHello();

function multiply(inputNumber1, inputNumber2) {
  let outputNumber = inputNumber1 * inputNumber2;
  return outputNumber;
}

console.log(multiply(2, 3));
console.log(multiply(2, multiply(2,3)));
console.log(outputNumber); // Va créer une erreur car la variable en let n'existe pas en dehors de la fonction


const multiply = function(inputNumber1, inputNumber2) {
  let outputNumber = inputNumber1 * inputNumber2;
  return outputNumber;
}

console.log(multiply(2, 3));

const otherMultiply = multiply; //On peut ainsi affecter la fonction à une autre variable
console.log(otherMultiply(2, 3)); */


const multiply = (inputNumber1, inputNumber2) => {
  let outputNumber = inputNumber1 * inputNumber2;
  return outputNumber;
}