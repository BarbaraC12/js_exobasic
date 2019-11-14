let numFloor = prompt ("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
let floor = "#";
let i = 1

while (i<=numFloor) {
    let line  = "";
    for (let k = 0; k < (numFloor-i); k++) {
        line += " "  
    }
    for (let index = 0; index < i; index++) {
        line = line + floor;
    }
    i++;
    console.log(line);
}