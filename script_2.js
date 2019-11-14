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