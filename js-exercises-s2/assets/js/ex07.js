document.getElementById("choix").onclick = function() {faireChoix()};

function faireChoix(){
    x = Number(prompt("Faites un choix de 1 à 3 !"));
    switch(x){
        case 1 :
            window.alert("1. Merci");
            break;
        case 2 :
            window.alert("2. Bonjour");
            break;
        case 3 :
            window.alert("3. Au revoir");
            break;
        default:
            window.alert("Pardon, que voulez-vous ?");
            break;
    }
}