document.getElementById("temp").onclick = function() {conversionTemperature()};

function conversionTemperature(){
    do{
        choix = prompt("Entrez votre choix d'operation");
    }while(choix != Number(choix)||(choix < 0)||(choix > 6));
    res = 0;
    switch(Number(choix)){
        case 1 ://C => F
            console.log("TEST");
            tp = Number(prompt("Entrez la température à convertir(°C => °F)"));
            res = (tp * 1.8)+32;
            return window.alert(tp+"°C = "+res+"°F");
        case 2 ://C => K
            tp = Number(prompt("Entrez la température à convertir(°C => K)"));
            res = tp+273.15;
            return window.alert(tp+"°C = "+res+"K");
        case 3 :// F => C
            tp = Number(prompt("Entrez la température à convertir(°F => °C)"));
            res = (tp - 32)/1.8;
            return window.alert(tp+"°F = "+res+"°C");
        case 4 :// F => K
            tp = Number(prompt("Entrez la température à convertir(°F => K)"));
            res = (tp + 459.67)/1.8;
            return window.alert(tp+"°F = "+res+"K");
        case 5 :// K => C
            tp = Number(prompt("Entrez la température à convertir(K => °C)"));
            res = tp-273.15;
            return window.alert(tp+"K = "+res+"°C");
        case 6 :// K => F
            tp = Number(prompt("Entrez la température à convertir(K => °F)"));
            res = (tp * 1.8)-459.67;
            return window.alert(tp+"K = "+res+"°F");
        default:
            console.log("YOLO");
            break;
    }
}