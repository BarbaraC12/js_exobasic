// Un prompt s'affiche avec la question suivante
let number = prompt("De quel nombre veut tu calculer la factorielle ?");
// Utilisateur rentre un nombre (par ex 4)
function factorielle(number) {
    let fact = 1;
    for (let index = number; index > 1; index--) {
        fact = fact * index;
    }
    return fact;
}
// Dans la console le résultat affiché sera 24
console.log(`Le résultat est : ${factorielle(number)}`);




let numFloor = prompt ("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
let floor = "#";
let j = 1

while (j<=numFloor) {
    let line  = "";
    for (let k = 0; k < (numFloor-j); k++) {
        line += " "  
    }
    for (let indexe = 0; indexe < j; indexe++) {
        line = line + floor;
    }
    j++;
    console.log(line);
}