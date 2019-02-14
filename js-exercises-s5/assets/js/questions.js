/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length;
}
var remplaceECar = function (texte) {
    let a = texte.indexOf("e");
    let text =  texte.substr(" ", a) + " " +texte.substr(a + 1 , texte.length);
    return text;
}
var concatString = function (texte1, texte2) {
    return texte1+texte2;
}
var afficherCar5 = function (texte) {
    return texte.substring(4,5);
}
var afficher9Car = function (texte) {
    return texte.substr(0,9);
}
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
    //return texte.substr(1,texte.length-2);
    return texte.trim();
}
var IsString = function (texte) {
    return (typeof texte === "string");
}

var AfficherExtensionString = function (texte) {
    return texte.split('.').pop();
}
var NombreEspaceString = function (texte) {
    let res = 0;
    for(let i=0; i<texte.length; i++){
        if (texte.charCodeAt(i)==32){
            res += 1;
        }
    }
    return res;
}
var InverseString = function (texte) {
    let tmp ="";
    for (let i = texte.length-1; i >= 0; i--){
        tmp = tmp + texte[i];
    }
    return tmp;
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return (x**y);
}
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
}
var valeurAbsolueArray = function (array) {
    for (let i = 0; i < array.length; i++){
        array[i] = Math.abs(array[i]);
    }
    return array;
}
var sufaceCercle = function (rayon) {
// π * rayon²
    return Math.round(Math.PI * (rayon ** 2));
}
var hypothenuse = function (ab, ac) {
// ab² + ac² = bc²
    return Math.sqrt((ab**2)+(ac**2));
}
var calculIMC = function (poids, taille) {
//poid / (taille*taille)
    return Number(((poids)/(taille**2)).toFixed(2));
}