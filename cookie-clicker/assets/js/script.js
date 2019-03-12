//let canvas = document.getElementById("canvas");
//let ctx = canvas.getContext("2d");
//ctx.shadowColor ="rgba(0,0,0,0)";
//ctx.strokeStyle ="rgba(0,0,0,1)";
//ctx.lineWidth = 1;
//ctx.lineCap = "butt";
//ctx.lineJoin = "miter";
//ctx.beginPath();
//ctx.arc(200,200,180,0,2*Math.PI);
//ctx.closePath();
//ctx.stroke();
//ctx.shadowOffsetX = 30;
//ctx.shadowOffsetY = 30;
//ctx.shadowBlur = 30;
//ctx.shadowColor = "rgba(0,0,0,0)";
//grad = ctx.createRadialGradient(210,190,140,200,200,200);
//grad.addColorStop(0,"rgba(155,103,66,1)");
//grad.addColorStop(1,"rgba(104,79,63,1)");
//ctx.fillStyle = grad;
//ctx.fill();

var canvas = document.querySelector("#myCanvas");
var context = canvas.getContext("2d");
 
var myImage = new Image();
myImage.src = "assets/img/fighter-medium.png";
myImage.addEventListener("load", loadImage, false);
 
function loadImage(e) {
  animate();
}
 
var shift = 0;
var frameWidth = 397;
var frameHeight = 278;
var totalFrames = 20;
var currentFrame = 0;
let isanimate = 0;

window.addEventListener("mousedown",function(){
        if(isanimate==0){
            currentFrame = 0;
            shift = 0;
            animate();
        }
    }); 
function animate() {
    isanimate=1;
    context.clearRect(0, 0, 650, 650);
    
    //draw each frame + place them in the middle
    context.drawImage(myImage, shift, 0, frameWidth, frameHeight,
    0, 0, frameWidth, frameHeight);
    
    shift += frameWidth + 1;
    
    if (currentFrame == totalFrames) {
        context.drawImage(myImage, 0, 0, frameWidth, frameHeight,
        0, 0, frameWidth, frameHeight);
        isanimate=0;
        return;
    }
    currentFrame++;
    
    requestAnimationFrame(animate);
}