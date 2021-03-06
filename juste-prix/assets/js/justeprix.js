document.getElementById("verification").addEventListener("click", justeprix);
window.addEventListener('keydown', pushEnter);

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
function pushEnter(e){
  if (e.key == "Enter"){
    justeprix();
  }
}
function justeprix(){
    estimation = Number(document.getElementById("estimation").value);
    message = document.getElementById("message");
    coup++;
    if (estimation > num){
        message.innerHTML += "<p class='rouge'>C'est moins que "+estimation+" !</p> ";
        document.getElementById("estimation").value="";
    } else if (estimation < num){
        message.innerHTML += "<p class='rouge'>C'est plus que "+estimation+" !</p>";
        document.getElementById("estimation").value="";
    } else {
        message.innerHTML += "<p class='vert'>C'est juste tu as trouvé "+num+" en "+coup+" coups !</p>";
        document.getElementById("canvas").style.display = "block";
        $(document).ready(function() {
          let canvas = $('#canvas')[0];
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          
          if(canvas.getContext) {
            let ctx = canvas.getContext('2d');
            let w = canvas.width;
            let h = canvas.height;
            ctx.strokeStyle = 'rgba(174,194,224,0.5)';
            ctx.fillStyle = "yellow";
            ctx.lineWidth = 1;
            ctx.lineCap = 'round';
            
            
            let init = [];
            let maxParts = 100;
            for(let a = 0; a < maxParts; a++) {
              init.push({
                x: Math.random() * w,
                y: Math.random() * h,
                l: Math.random() * 1,
                xs: -4 + Math.random() * 4 + 2,
                ys: Math.random() * 10 + 10
              })
            }
            
            let particles = [];
            for(let b = 0; b < maxParts; b++) {
              particles[b] = init[b];
            }
            
            function draw() {
              ctx.clearRect(0, 0, w, h);
              for(let c = 0; c < particles.length; c++) {
                let p = particles[c];
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                //ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
                ctx.fillStyle = "yellow";
                ctx.arc(p.x,p.y,20,0,2*Math.PI);
                ctx.fill();
                ctx.fillStyle = "black";
                ctx.font = "40px Arial";
                ctx.fillText("€",p.x-12,p.y+14);
                ctx.stroke();
              }
              move();
            }
            
            function move() {
              for(let b = 0; b < particles.length; b++) {
                let p = particles[b];
                p.x += p.xs;
                p.y += p.ys;
                if(p.x > w || p.y > h) {
                  p.x = Math.random() * w;
                  p.y = -20;
                }
              }
            }
            
            setInterval(draw, 30);
            
          }
      });
    }
}


