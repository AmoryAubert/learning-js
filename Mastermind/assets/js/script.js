H = screen.availHeight;// Hauteur
W = screen.availWidth; // Largeur
//console.log(W+" x "+H);
message = document.getElementById("message");
message.style.marginTop = (H/2)-300+"px";
message.style.marginLeft = (W/2)-200+"px";
// Création de l'historique vide
let divHistorique = document.getElementById("historique");
for(let j=12;j>0;j--){
    let divClassHisto = document.createElement("div");
    divClassHisto.setAttribute("class", "histo "+j);
    divClassHisto.setAttribute("id", "histo"+j);
    let divClassRonds = document.createElement("div");
    divClassRonds.setAttribute("class", "ronds");
    divHistorique.appendChild(divClassHisto);
    divClassHisto.appendChild(divClassRonds);
    for (let i=0;i<4;i++){
        let divClassRond = document.createElement("div");
        divClassRond.setAttribute("class", "rond "+i+" c0");
        divClassRonds.appendChild(divClassRond);
    }
    let divClassPetitRonds = document.createElement("div");
    divClassPetitRonds.setAttribute("class", "petit-ronds");
    divClassHisto.appendChild(divClassPetitRonds);
    for (let i=0;i<4;i++){
        let divClassPetitRond = document.createElement("div");
        divClassPetitRond.setAttribute("class", "petit-rond "+i+" c0");
        divClassPetitRonds.appendChild(divClassPetitRond);
    }
}
// creation des events listener
// couleur
let divColor = document.getElementById("couleur");
let color = divColor.getElementsByClassName("rond");
let selectColor = "rond c0";
for (let i=0; i< color.length;i++){
    color[i].addEventListener("click", function(){ selectColor = (color[i].className);}); 
}
// estimation
let divEstimation = document.getElementById("estimation");
let colorEstimation = divEstimation.getElementsByClassName("rond");
for (let i=0; i< colorEstimation.length;i++){
    colorEstimation[i].addEventListener("click", function(){ colorEstimation[i].className = selectColor}); 
}
// valider
let buttonValidation = document.getElementById("valider");
buttonValidation.addEventListener("click", function(){check();});
// fonction random + tirage des 4 boules parmis les 6 couleurs
function numAlea(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
let reponseCouleur=[];
function tirage(){
    for (let i=0;i<4;i++){
        reponseCouleur[i]=numAlea(1,7);
    }
}
let histo = document.getElementsByClassName("histo");
let secret = document.getElementById("reponse").getElementsByClassName("rond");
// let's play to check
let rondColor=[];
let check01 = [0,0,0,0,0,0];
let check02 = [0,0,0,0,0,0];
let essaie=0;
let bon=0;
let malplace=0;
tirage();
//console.log(reponseCouleur);
for (let i = 0; i < reponseCouleur.length; i++){
    switch(reponseCouleur[i]){
        case 1: check02[0] += 1; break;
        case 2: check02[1] += 1; break;
        case 3: check02[2] += 1; break;
        case 4: check02[3] += 1; break;
        case 5: check02[4] += 1; break;
        case 6: check02[5] += 1; break;
        default: break;
    }
}
function check(){
    for (let i=0; i < colorEstimation.length; i++){
        if (colorEstimation[i].className != "rond c0"){
            rondColor[i]=1;
        }
    }
    if ((rondColor[0]==1)&&(rondColor[1]==1)&&(rondColor[2]==1)&&(rondColor[3]==1)){
        // reset le champs Estimation + check
        for (let i = 0; i < colorEstimation.length; i++){
            if (colorEstimation[i].className[colorEstimation[i].className.length-1] == reponseCouleur[i]){
                bon++;
            }
            switch(colorEstimation[i].className){
                case "rond c1": check01[0] += 1; break;
                case "rond c2": check01[1] += 1; break;
                case "rond c3": check01[2] += 1; break;
                case "rond c4": check01[3] += 1; break;
                case "rond c5": check01[4] += 1; break;
                case "rond c6": check01[5] += 1; break;
                default: break;
            }
            histo[essaie].getElementsByClassName("rond")[i].className = colorEstimation[i].className;
            colorEstimation[i].className = "rond c0";
            rondColor=[];
        }
        for (let i = 0; i < check02.length; i++){
            if ((check02[i] != 0) && (check01[i] != 0)){
                if (check01[i] <= check02[i]){
                    malplace += check01[i];
                }else{
                    malplace += check02[i];
                }
            }
        }
        malplace -= bon;
        for (let i = 0; i < bon; i++){
            histo[essaie].getElementsByClassName("petit-rond")[i].className = "petit-rond c7";
        }
        for (let i = bon; i < malplace+bon; i++){
            histo[essaie].getElementsByClassName("petit-rond")[i].className = "petit-rond c1";
        }
        if (bon == 4){
            win();
        }
        essaie+=1;
        if (essaie > 11){
            loose();
        }
        bon=0;
        malplace=0;
        check01 = [0,0,0,0,0,0];
        check03 = [0,0,0,0,0,0];
    }
}
function win(){
    //console.log('gagné');
    stuckBtn();
    message.innerHTML = "<p>Tu as gagné !</p>";
}
function loose(){
    //console.log('perdu');
    stuckBtn();
    message.innerHTML = "<p>Tu as perdu !</p>";
}
function stuckBtn(){
    for (let i = 0; i < 4; i++){
        secret[i].className = "rond c"+reponseCouleur[i];
        secret[i].innerHTML = "";
    }
    buttonValidation.style.cursor = "not-allowed";
    buttonValidation.removeEventListener("click", check());
    buttonValidation.setAttribute("disabled","disabled");
    message.style.display = "block";
}