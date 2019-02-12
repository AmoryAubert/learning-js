document.getElementById("test").onclick = function() {testWhile()};
function testWhile(){
    do{
        mot = prompt("Entrez un mot ou une phrase contenant la lettre 'p'");
        test= mot.search("p");
    }while(test < 0);
    window.alert(mot);
}

/*function testWhile(){
    test = -1;
    while(test < 0){
        mot = prompt("Entrez un mot ou une phrase contenant la lettre 'p'");
        test= mot.search("p");
    }
    window.alert(mot);
}*/