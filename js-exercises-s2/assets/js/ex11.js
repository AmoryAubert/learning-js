document.getElementById("moyenne").onclick = function() {calculMoyenne()};

function calculMoyenne(){
    var somme = 0;
    var moyenne = 0;
    var i = 0;
    var nb = 0;
    while(nb >= 0){
       do{
            nb = Number(prompt("Entrez un nombre entier"));
            console.log(nb);
        }while(nb != parseInt(nb));
        if (nb < 0){ break;}
        somme += nb;
        console.log(somme);
        i++;
    }
    moyenne = (somme /(i));
    return window.alert("Nombre de valeur: "+i+"\nMoyenne : "+moyenne);
}