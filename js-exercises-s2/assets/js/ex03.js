document.getElementById("afficher").onclick = function() {afficher()};
a = 3;
b = 2;
function triple(x){
    return x*3;
}
function afficher(){
    window.alert(triple(a));
    window.alert(triple(b));
}