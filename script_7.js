/*Si on lui pose une question (= la phrase finie par "?"), le bot répond "Ouais Ouais..." ;
Si on lui hurle trop dessus (= la phrase est 100% en majuscules), le bot répond "Pwa, calme-toi..." ;
Si la phrase que tu prononces contient le mot "Fortnite", le bot répond "on s' fait une partie soum-soum ?" ;
Si on lui envoie un message vide, le bot répond "t'es en PLS ?" ;
Pour tout autre phrase que tu lui envoies, le bot répond "balek." ;*/


let questionToAcneBot = prompt("Hein ?? Vas y j'ai pas envie. P'tain tu la pose ta question ?");

if (questionToAcneBot.match(/[?]/g)) {   // Si contient un ? =>
    console.log("Ouais Ouais...");
} 
else if (questionToAcneBot.match(/^[^a-z]+$/)) {  // Si 100% en majsucule =>
    console.log("Pwa, calme-toi frére...")
} 
else if (questionToAcneBot.includes('Fornite')) { // Si contient le mot Fortnite =>
    console.log("on s' fait une p'tite partie bambi ? On va voir qui fais le plus de kill.");
} 
else if (questionToAcneBot === '') { // Si question vide =>
    console.log("T'es en PLS ou quoi?")
} 
else {
    console.log("M'en balek !"); // Pour tout autres phrases =>
}