document.getElementById("IMC").onclick = function() {calculIMC()};

function calculIMC(){
    do{
        poids = prompt("Entrez votre poids (en kg)");
    }while(poids != Number(poids)||(poids < 1)||(poids > 400));
    do{
        taille = prompt("Entrez votre taille (en mètre)");
    }while(taille != Number(taille)||(taille < 1)||(taille > 3));
    imc = poids / (taille ** 2);
    if (imc < 16.5){
        return window.alert("Votre imc est : "+imc.toFixed(2)+"\nTu crèves de faim !");
    } else if ((imc >= 16.5)&&(imc <= 18.5)){
        return window.alert("Votre imc est de : "+imc.toFixed(2)+"\nT'es trop maigre, arrêtes de partager avec le chien !");
    } else if ((imc >= 18.5)&&(imc <= 25)){
        return window.alert("Votre imc est de : "+imc.toFixed(2)+"\nT'es normal, trop normal même !");
    } else if ((imc >= 25)&&(imc <= 30)){
        return window.alert("Votre imc est de : "+imc.toFixed(2)+"\nT'es es en surpoids, tu devrais partager avec le chien !");
    } else if ((imc >= 30)&&(imc <= 35)){
        return window.alert("Votre imc est de : "+imc.toFixed(2)+"\nT'es gros, arrêtes de prendre la voiture quand tu vas chez le voisin !");
    } else if ((imc >= 35)&&(imc <= 40)){
        return window.alert("Votre imc est de : "+imc.toFixed(2)+"\nT'es très gros, mais tu as encore quelque effort pour atteindre le niveau max !");
    } else {
        return window.alert("Votre imc est de : "+imc.toFixed(2)+"\nT'es ENORME, Tu vas exploser");
    }
}
/*
* Une personne pesant 95 kg et mesurant 1,81 m a un IMC de 95/(1.81*1.81)= environ 29,0
*
* moins de 16,5 : dénutrition ou famine
* 16,5 <= IMC < 18,5 : maigreur
* 18,5 <= IMC < 25 : corpulence normale
* 25 <= IMC < 30 : surpoids
* 30 <= IMC < 35 : obésité modérée
* 35 <= IMC < 40 : obésité sévère
* plus de 40 : obésité morbide
*/