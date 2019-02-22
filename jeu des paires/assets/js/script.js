let chrono = document.getElementsByTagName('p')[0],
    start = document.getElementById('start'),
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
/* Start button */
//start.addEventListener("click", timer);
//start
let numCard = 36;
let numPair = 0;
let cardDispo = [];
let temp = [];
let cardRetournee = 0;
let x=[];
let ga = document.getElementById("gameArea");
for (let i = 1; i <= numCard; i++){
    ga.innerHTML += `<img src="assets/img/versocard.png" id="c${i}" />`;
    cardDispo[i-1]=i;
    x[i-1] = 0; 
    console.log();
}
let shuffle = new Array();
for (let i=0;i<numCard;i++){
    if (cardDispo.length==0) {break;}
    cardDispo.sort(numAlea);
    shuffle.push(cardDispo.pop())   
}   
for (let i=1; i <= numCard; i++){
    document.getElementById(`c${i}`).addEventListener("click", check, true);
    function check(){
        if ((x[i-1]===0)||(cardRetournee)){
            document.getElementById(`c${i}`).setAttribute("src", `assets/img/${Math.round(shuffle[i-1]/2)}.png`);
            x[i-1]=1;
            cardRetournee++;
        } else {
            document.getElementById(`c${i}`).setAttribute("src", `assets/img/versocard.png`);
        }
        
        console.log(temp);
    }
}



