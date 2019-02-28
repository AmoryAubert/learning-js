let x,y,z;
//load all image
function preloadImg(){
    let preload = [];
    for (let i = 1; i <= 18; i++){
        preload[i-1]="assets/img/f"+i+".png";
    }
    for (let i = 19; i <= 18+18; i++){
        preload[i-1]="assets/img/p"+(i-18)+".png";
    }
    preload[preload.length]="assets/img/fversocard.png";
    preload[preload.length]="assets/img/pversocard.png";
    for(let i = 0; i < preload.length; i++) 
    {
        let imageObject = new Image();
        imageObject.src = preload[i];
    }
}
//theme
let styleSheet = document.getElementsByTagName('link')[3],
    ff = document.getElementById("ff"),
    pk = document.getElementById("pk"),
    theme = "f";
ff.addEventListener("mousedown", changeTheme1);
pk.addEventListener("mousedown", changeTheme2);
function changeTheme1(){
        styleSheet.href = "assets/css/theme01.css";
        theme= "f";
}
function changeTheme2(){
        styleSheet.href = "assets/css/theme02.css";
        theme= "p";
}
//bouton
let option=document.getElementById("option"),
    switchOnOff1=document.getElementById("radio-c"),
    switchOnOff2=document.getElementById("radio-d"),
    start = document.getElementById('start');
//chrono
let chrono = document.getElementById("time"),
    t;
let bSw = 0;
let nbCarte=document.getElementById("nbCarte"),
    ga = document.getElementById("gameArea"),
    numCard;
let csecondes, secondes, minutes, totalCsec;
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
//chrono inverse
function remove() {
    minutes = Math.floor(totalCsec / 6000);
    secondes = Math.floor(((totalCsec / 6000)-minutes)*60);
    csecondes = Math.floor(((((totalCsec / 6000)-minutes)*60)-secondes)*100);
    totalCsec--;
    chrono.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (secondes ? (secondes > 9 ? secondes : "0" + secondes) : "00") + ":" + (csecondes > 9 ? csecondes : "0" + csecondes);
    //chrono.textContent = minutes+" : "+secondes+" : "+csecondes;
    if (totalCsec<0){
        clearTimeout(x);
        clearTimeout(y);
        clearTimeout(z);
        stopchrono();
        perdu();
        return;
    }
    timer();
}
function timer() {
    if(bSw==0){
        t = setTimeout(add, 9);    
    }
    if(bSw==1){ 
        t = setTimeout(remove, 9);    
    }
}
function clearchrono() {
    if(bSw==0){
        chrono.textContent = "00:00:00";
        csecondes = 0,secondes = 0, minutes = 0;    
    }
    if(bSw==1){ 
        chrono.textContent = "00:00:00";
        csecondes = 0,secondes = 0, minutes = 0;
        totalCsec = (130+(13*((numCard-10)/2))) * numCard;
    }
}
function stopchrono(){
    clearTimeout(t);
}
//fonction random 
function numAlea() {
    return (Math.random()*2 & 1)?-1:1;
}
start.addEventListener("click", play);
switchOnOff1.addEventListener("click", onOff);
switchOnOff2.addEventListener("click", onOff);
function onOff(){
    if(bSw==0){
        document.getElementById("onOff").innerHTML='<span class="toggle-inside"></span>ON';
        document.getElementsByClassName("toggle-inside")[0].style.marginLeft="-9px";
        document.getElementsByClassName("toggle-inside")[0].style.backgroundColor="#222";
        document.getElementById("onOff").style.paddingTop="0rem";
        document.getElementById("onOff").style.paddingBottom="0.6rem";
        document.getElementById("onOff").style.backgroundColor="#eee";
        document.getElementById("onOff").style.color="#222";
        bSw=1;
    } else {
        document.getElementById("onOff").innerHTML='<span class="toggle-inside"></span>OFF';
        document.getElementsByClassName("toggle-inside")[0].style.backgroundColor="#eee";
        document.getElementById("onOff").style.paddingTop="0.6rem";
        document.getElementById("onOff").style.paddingBottom="0rem";
        document.getElementById("onOff").style.backgroundColor="#222";
        document.getElementById("onOff").style.color="#eee";
        bSw=0;
    }
}
//jeu des paires
function play(){
    numCard = nbCarte.value;
    clearchrono();
    timer();
    option.style.display= "none";
    start.disabled = true;
    nbCarte.disabled = true;
    let numPair = 0,
        cardDispo = [],
        flippedCard = [],
        front=[],
        state,
        gaWidth,
        shuffle = new Array();
    if (numCard%3==0){
        gaWidth=(104*numCard)/3;
    } else if((numCard>19)&&(numCard%4==0)){
        gaWidth=(104*numCard)/4;
    } else if(numCard>19){
        gaWidth=(104*numCard)/3.5;
    } else {
        gaWidth=(104*numCard)/2;
    }
    ga.style.display ="flex";
    ga.style.padding = "20px";
    ga.style.width = gaWidth+"px";
    ga.innerHTML = "";
    for (let i = 1; i <= numCard; i++){
        ga.innerHTML += `<img src="assets/img/${theme}versocard.png" id="c${i}" />`;
        cardDispo[i-1]=i;
    }
    if((numCard>19)&&(numCard%4!=0)){
        ga.innerHTML += `<img src="assets/img/vide.png" /><img src="assets/img/vide.png" />`;
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
                      document.getElementById(`c${position+1}`).src=`assets/img/${theme}versocard.png`;
                      break;
              case 1:
                      document.getElementById(`c${position+1}`).src=`assets/img/${theme}`+cardDispo[position]+`.png`;
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
                x=setTimeout(function(){
                    flip(position);
                },0);
                y=setTimeout(function(){
                    update(position);
                    flippedCard.push(position);
                },200);
            }
            z=setTimeout(function(){
                if(flippedCard.length==2){
                    state=0;
                    if(cardDispo[flippedCard[0]]==cardDispo[flippedCard[1]]){
                        state=-1;
                        numPair++;
                    }
                    if((numPair==(numCard/2))&&(cardDispo[flippedCard[0]]==cardDispo[flippedCard[1]])){
                        stopchrono();
                    }
                    x=setTimeout(function(){
                        flip(flippedCard[0]);
                        flip(flippedCard[1]);
                    },300);
                    front[flippedCard[0]]=state;
                    front[flippedCard[1]]=state;
                    y=setTimeout(function(){
                        update(flippedCard[0]);
                        update(flippedCard[1]);
                        flippedCard=[];
                        if(numPair==(numCard/2)){
                            restart();
                        }
                    },500);
                }
            },250);
        }
    }
    function restart(){
        ga.style.width = "520px";
        ga.style.display ="block";
        ga.innerHTML='<p id="message">tu as gagné !!!</p>';
        start.textContent="Rejouer";
        option.style.display= "block";
        start.disabled=false;
        nbCarte.disabled=false;
    }
}
function perdu(){
    ga.style.width = "520px";
    ga.style.display ="block";
    ga.innerHTML='<p id="message">Tu as perdu espèce de FAIBLE !!!</p>';
    start.textContent="Rejouer";
    option.style.display= "block";
    start.disabled=false;
    nbCarte.disabled=false; 
}


