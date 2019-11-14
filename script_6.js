function conversionProteins (codon) {
    switch (codon) {
        case 'UCU': case 'UCC': case 'UCA': case 'UCG': case 'AGU': case 'AGC':
            return 'Sérine';
        case 'CCU': case 'CCC': case 'CCA': case 'CCG':
          return 'Proline';
        case 'UUA': case 'UUG':
            return 'Leucine';
        case 'UUU': case 'UUC':
            return 'Phénylalanine';
        case 'CGU': case 'CGC': case 'CGA': case 'CGG': case 'AGA': case 'AGG':     
            return 'Arginine';
        case 'UAU': case 'UAC':
            return 'Tyrosine';
      };
}//pose la traduction de 3lettres

function composeArn(arn) {
    let arnArray = [];
    long = arn.length;
    let i = 0;
    while (i<=long) {
        arnArray.push(arn.slice(i, i+3));
        i = i + 3;
    }return arnArray;
}//definie l'array de ARN 3 lettre par 3

function viewProteins(toDecodeArn) {
    let proteins = composeArn(toDecodeArn); 
    let proteinsArr = [];
    for (let i = 0; i < proteins.length-1; i++) {
        proteinsArr.push(conversionProteins(proteins[i]));   
    }
    console.log(`L'ARN de ${toDecodeArn} est ${proteinsArr.join('-')}`);  
}//lecture de l'Arn en proteine



viewProteins("UUACGCAGUAGA");
viewProteins("CCGUCGUUGCGCUACAGC");
viewProteins("CCUCGCCGGUACUUCUCG");