

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
    window.alert(line);
}