let mot = ["B","O","N","J","O","U","R"];
let lettreTrouve = ["_","_","_","_","_","_","_"];
let lettreEntree=[];

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
            } else {
                for (let j=0; j < mot.length; j++){
                    if (lettreEntree[j]===mot[i]){
                        console.log("patate");
                    } else {
                        lettreEntree[essaie]=lettre;
                    }    
                }
            }       
        }
        essaie++;
        for (let i=0; i < lettreTrouve.length; i++){
            document.getElementById("jeux").innerHTML += lettreTrouve[i]+" "; 
        }
        console.log(lettreEntree);
    }
}