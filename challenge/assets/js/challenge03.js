let c = document.getElementById("monCanvas");
let ctx = c.getContext("2d");
//drapeau
ctx.fillStyle = "#000";
ctx.fillRect(0, 0, 50, 100);
ctx.fillStyle = "#ff0";
ctx.fillRect(50, 0, 50, 100);
ctx.fillStyle = "#f00";
ctx.fillRect(100, 0, 50, 100);
//bateau
ctx.beginPath();
ctx.lineCap = "round";
ctx.lineWidth = 6;
ctx.strokeStyle = "#999";
ctx.moveTo(85,150);
ctx.lineTo(85,250);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.lineCap = "miter";
ctx.strokeStyle = "#f00";
ctx.moveTo(10,250);
ctx.lineTo(40,280);
ctx.lineTo(130,280);
ctx.lineTo(160,250);
ctx.lineTo(10,250);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "#f00";
ctx.fill();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = "#fff";
ctx.moveTo(90,156);
ctx.lineTo(90,240);
ctx.lineTo(150,240);
ctx.lineTo(90,156);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "#0aa";
ctx.fill();

ctx.beginPath();
ctx.moveTo(80,170);
ctx.lineTo(80,240);
ctx.lineTo(40,240);
ctx.lineTo(80,170);
ctx.closePath();
ctx.stroke();
ctx.fill();