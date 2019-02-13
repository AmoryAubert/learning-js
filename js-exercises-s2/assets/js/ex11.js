document.getElementById("moyenne").addEventListener("click", calculMoyenne);

function calculMoyenne(){
    let somme = 0;
    let moyenne = 0;
    let i = 0;
    let nb = 0;
    while(nb >= 0){
       do{
            nb = Number(prompt("Entrez un nombre entier"));
            console.log(nb);
            if (nb != parseInt(nb)){window.alert("Erreur, Veuillez rentrer un nombre ENTIER !");}
        }while(nb != parseInt(nb));
        if (nb < 0){ break;}
        somme += nb;
        console.log(somme);
        i++;
    }
    moyenne = (somme /(i));
    return window.alert("Nombre de valeur: "+i+"\nMoyenne : "+moyenne);
}