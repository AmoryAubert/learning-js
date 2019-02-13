document.getElementById("nom").addEventListener("keyup", afficher);

function afficher(){
    x = document.getElementById("nom").value;
    window.alert(x);
}