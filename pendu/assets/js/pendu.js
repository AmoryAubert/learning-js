let mot = ["B","O","N","J","O","U","R"];
let lettreTrouve = ["_","_","_","_","_","_","_"];
let lettreEntree=[];
let lettreErreur=[];
let erreur=0;
let essaie=0;
const alpha = "abcdefghijklmnopqrstuvwxyz";

window.addEventListener('keydown', guestLetter);
for (let i=0; i < lettreTrouve.length; i++){
        document.getElementById("jeux").innerHTML += lettreTrouve[i]+" "; 
}
function guestLetter(e){
    let lettre = e.key;
    lettre = lettre.toLowerCase();
    if (alpha.includes(lettre)){
        document.getElementById("jeux").innerHTML = "";
        for (let i=0; i < lettreTrouve.length; i++){
            mot[i] = mot[i].toLowerCase();
            if (lettre === mot[i]){
                lettreTrouve[i] = mot[i].toUpperCase();
            }
            if ((lettreEntree.toString().includes(lettre))==false){
                if ((lettreEntree.toString().includes(mot[i]))){
                    lettreErreur[essaie]=lettre;
                    lettreErreur=lettreErreur.toString();
                    lettreErreur=lettreErreur.replace(/,/g,"");
                    lettreErreur=lettreErreur.split("");
                    lettreErreur.sort();
                }
                lettreEntree[essaie]=lettre;
                lettreEntree=lettreEntree.toString();
                lettreEntree=lettreEntree.replace(/,/g,"");
                lettreEntree=lettreEntree.split("");
                lettreEntree.sort();    
            }
            mot[i] = mot[i].toUpperCase();
        }
        
        //lettreEntree.toString();
        console.log("entree: "+lettreEntree);
        console.log("erreur: "+lettreErreur);
        essaie++;
        for (let i=0; i < lettreTrouve.length; i++){
            document.getElementById("jeux").innerHTML += lettreTrouve[i]+" "; 
        }
        if (lettreTrouve.toString()===mot.toString()){
            document.getElementById("win").innerHTML="Vous avez gagné !";
        }
    }
}