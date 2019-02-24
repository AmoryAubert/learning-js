//chrono
let chrono = document.getElementsByTagName('p')[0],
    csecondes = 0,secondes = 0, minutes = 0,
    t;
function add() {
    csecondes++;
    if (csecondes >= 100) {
        csecondes = 0;
        secondes++;
        if (secondes >= 60) {
            secondes = 0;
            minutes++;
        }
    }  
    chrono.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (secondes ? (secondes > 9 ? secondes : "0" + secondes) : "00") + ":" + (csecondes > 9 ? csecondes : "0" + csecondes);

    timer();
}
function timer() {
    t = setTimeout(add, 9);
}
function clearchrono() {
    chrono.textContent = "00:00:00";
    csecondes = 0; secondes = 0; minutes = 0;
}
function stopchrono(){
    clearTimeout(t);
}
function numAlea() {
    return (Math.random()*2 & 1)?-1:1;
}
//bouton
let nbCarte=document.getElementById("nbCarte"),
    start = document.getElementById('start');
start.addEventListener("click", play);
//jeu des paires
function play(){
    clearchrono();
    timer();
    start.disabled = true;
    nbCarte.disabled = true;
    let numCard = nbCarte.value,
        numPair = 0,
        cardDispo = [],
        flippedCard = [],
        front=[],
        state,
        ga = document.getElementById("gameArea"),
        gaWidth,
        shuffle = new Array();
    if (numCard%3==0){
        gaWidth=(104*numCard)/3;
    } else {
        gaWidth=(104*numCard)/2;
    }
    ga.style.display ="flex";
    ga.style.padding = "20px";
    ga.style.width = gaWidth+"px";
    ga.innerHTML = "";
    for (let i = 1; i <= numCard; i++){
        ga.innerHTML += `<img src="assets/img/pversocard.png" id="c${i}" />`;
        cardDispo[i-1]=i;
    }
    for (let i=0;i<numCard;i++){
        if (cardDispo.length==0) {break;}
        cardDispo.sort(numAlea);
        shuffle.push(cardDispo.pop())   
    }   
    for (let i=0; i < numCard; i++){
        document.getElementById(`c${i+1}`).position=i;
        document.getElementById(`c${i+1}`).addEventListener("mousedown", function(event){ check(this.position);}, false);
        cardDispo[i]=Math.round(shuffle[i]/2);
        front[i]=0;
    }
    function update(position){
            switch(front[position]){
              case 0:
                      document.getElementById(`c${position+1}`).src="assets/img/pversocard.png";
                      break;
              case 1:
                      document.getElementById(`c${position+1}`).src="assets/img/p"+cardDispo[position]+".png";
                      break;
              case -1:
                      document.getElementById(`c${position+1}`).src="assets/img/vide.png";
            }
    }
    function flip(position){
          switch(front[position]){
            case 0:
                    document.getElementById(`c${position+1}`).classList.remove('flipped');
                    break;
            case 1:
                    document.getElementById(`c${position+1}`).classList.add('flipped');
                    break;
            case -1:
                    break;
          }
    }
    let lastClick = 0;
    let delay = 200;
    function check(position){
         if (lastClick >= (Date.now() - delay))
            return;
        lastClick = Date.now();
        if(flippedCard.length<2){
            if(front[position]==0){
                front[position]=1;
                setTimeout(function(){
                    flip(position);
                },0);
                setTimeout(function(){
                    update(position);
                    flippedCard.push(position);
                },200);
            }
            setTimeout(function(){
                if(flippedCard.length==2){
                    state=0;
                    if(cardDispo[flippedCard[0]]==cardDispo[flippedCard[1]]){
                        state=-1;
                        numPair++;
                    }
                    if((numPair==(numCard/2))&&(cardDispo[flippedCard[0]]==cardDispo[flippedCard[1]])){
                        stopchrono();
                    }
                    setTimeout(function(){
                        flip(flippedCard[0]);
                        flip(flippedCard[1]);
                    },300);
                    front[flippedCard[0]]=state;
                    front[flippedCard[1]]=state;
                    setTimeout(function(){
                        update(flippedCard[0]);
                        update(flippedCard[1]);
                        flippedCard=[];
                        if(numPair==(numCard/2)){
                            restart();
                        }
                    },500);
                }
            },300);
        }
    }
    function restart(){
        ga.style.width = "520px";
        ga.style.display ="block";
        ga.innerHTML="Vous avez gagnez !!!";
        start.textContent="Rejouer";
        start.disabled=false;
        nbCarte.disabled=false;
    }
}


