document.getElementById("somme").onclick = function() {somme()};

function somme(){
    y = 0;
    for (i=1; i<=3;i++){
        x = Number(prompt("Entrez le nombre "+i));
        y+=x;
        console.log(y);
    }
    return window.alert(y);
}