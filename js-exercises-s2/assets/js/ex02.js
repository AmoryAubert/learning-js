document.getElementById("surface").onclick = function() {surfaceRayon()};
function surfaceRayon(){
    ray = Number(document.getElementById("rayon").value);
    resultat = (ray*ray) * Math.PI;
    p = document.getElementById("resultat").innerHTML;
    document.getElementById("resultat").innerHTML = p+resultat+" cm²";
}