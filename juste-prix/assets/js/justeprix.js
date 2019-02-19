document.getElementById("verification").addEventListener("click", justeprix);

const minimum = 20;
const maximum = 80;
let coup = 0;
let num=tirage();
//console.log(num);
function random(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
function tirage(){
    let num = random(minimum,maximum);
    return num;
}
function justeprix(){
    estimation = Number(document.getElementById("estimation").value);
    message = document.getElementById("message");
    coup++;
    if (estimation > num){
        message.style.color = "red";
        message.innerHTML = "C'est moins que "+estimation+" !";
    } else if (estimation < num){
        message.style.color = "red";
        message.innerHTML = "C'est plus que "+estimation+" !";
    } else {
        message.style.color = "green";
        message.innerHTML = "C'est juste tu as trouvé "+num+" en "+coup+" coups";
    }
}