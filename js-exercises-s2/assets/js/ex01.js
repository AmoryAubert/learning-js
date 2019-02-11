document.getElementById("surface").onclick = function() {surfaceRectangle()};
function surfaceRectangle(){
    lar = Number(document.getElementById("largeur").value);
    lon = Number(document.getElementById("longueur").value);
    resultat = lar * lon;
    document.getElementById("resultat").innerHTML = resultat;
}
document.getElementById("perimetre").onclick = function() {periRectangle()};
function periRectangle(){
    lar = Number(document.getElementById("largeur").value);
    lon = Number(document.getElementById("longueur").value);
    resultat = ( lar + lon) * 2;
    document.getElementById("resultat").innerHTML = resultat;
}