document.getElementById("afficher").onclick = function() {afficher()};
let tab = [-2,1,4];
function additionner(x){
    return x+=2;
}
function afficher(){
    window.alert(additionner(tab[0]));
    window.alert(additionner(tab[2]));
}