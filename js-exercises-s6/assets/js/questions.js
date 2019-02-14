var CreationTableauLangages = function () {
    let langages = ["Html","CSS","Java","PHP"];
    return langages;
}

var CreationTableauNombres = function () {
    let nombres = [0,1,2,3,4,5];
    return nombres;
}

var RemplacementElement = function (langages) {
    langages[2] = "Javascript";
    return langages;
}

var AjoutElementLangages = function (langages) {
    langages[langages.length] = "Ruby";
    langages[langages.length] = "Python";
    return langages;
}

var AjoutElementNombres = function (nombres) {
    nombres.splice(0,0,-2,-1);
    return nombres;
}

var SuppressionPremierElement = function (langages) {
    langages.splice(0,1);
    return langages;
}

var SuppressionDernierElement = function (langages) {
    langages.splice(langages.length-1);
    return langages;
}

var ConversionChaineTableau = function (reseaux_sociaux_chaine) {
    reseaux_sociaux = reseaux_sociaux_chaine.split(",");
    return reseaux_sociaux;
}

var ConversionTableauChaine = function (langages) {
    return langages.join();
}

var TriTableau = function (reseaux_sociaux) {
    return reseaux_sociaux.sort();
}

var InversionTableau = function (reseaux_sociaux){
    return reseaux_sociaux.reverse();
}
