/*Si on lui pose une question (= la phrase finie par "?"), le bot répond "Ouais Ouais..." ;
Si on lui hurle trop dessus (= la phrase est 100% en majuscules), le bot répond "Pwa, calme-toi..." ;
Si la phrase que tu prononces contient le mot "Fortnite", le bot répond "on s' fait une partie soum-soum ?" ;
Si on lui envoie un message vide, le bot répond "t'es en PLS ?" ;
Pour tout autre phrase que tu lui envoies, le bot répond "balek." ;*/

n = 0
while (n !== 10){
    n += 1
let input = prompt("Hein ?? Vas y j'ai pas envie. P'tain tu la pose ta question ?");

var question = "?";
var fortnite = `fortnite` ;
function isUpperCase(input) {
    return input === input.toUpperCase() && input !== "";
}

if (input.substr(-1) == (question)) {   // Si contient un ? =>
    console.log("Ouais Ouais...");
    window.alert("Ouais Ouais...");
} 
else if (isUpperCase(input)) {  // Si 100% en majsucule =>
    console.log("Pwa, calme-toi frére...");
    window.alert("Pwa, calme-toi frére...");
} 
else if (input.includes(fortnite)) { // Si contient le mot Fortnite =>
    console.log("Ouesh bambi, on s'fait une p'tite partie ? On va voir qui fais le plus de kill.");
    window.alert("Ouesh bambi, on s'fait une p'tite partie ? On va voir qui fais le plus de kill.");
} 
else if (input === '') { // Si question vide =>
    console.log("T'es en PLS ou quoi?");
    window.alert("T'es en PLS ou quoi?");
} 
else if (input === `va te coucher`){
	console.log("Mais ... Euh .... HumHum ... .");
	window.alert("Mais ... Euh .... HumHum ... .");
    break
}
else {
    console.log(`M'en balek !`); // Pour tout autres phrases =>
    window.alert(`M'en balek !`);
}

}