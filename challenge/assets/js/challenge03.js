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
//maison
ctx.beginPath();
ctx.moveTo(300,60);
ctx.lineTo(400,60);
ctx.lineTo(350,20);
ctx.lineTo(300,60);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "#f00";
ctx.fill();

ctx.fillStyle = "#ddd";
ctx.fillRect(300, 60, 100, 100);

ctx.fillStyle = "#321";
ctx.fillRect(320, 120, 20, 40);

ctx.fillStyle = "#fff";
ctx.fillRect(360, 120, 20, 20);
ctx.beginPath();
ctx.strokeStyle = "#000";
ctx.moveTo(370,120);
ctx.lineTo(370,140);
ctx.moveTo(360,130);
ctx.lineTo(380,130);
ctx.closePath();
ctx.stroke();

ctx.fillStyle = "#fff";
ctx.fillRect(320, 80, 20, 20);
ctx.beginPath();
ctx.moveTo(330,80);
ctx.lineTo(330,100);
ctx.moveTo(320,90);
ctx.lineTo(340,90);
ctx.closePath();
ctx.stroke();

ctx.fillStyle = "#fff";
ctx.fillRect(360, 80, 20, 20);
ctx.beginPath();
ctx.moveTo(370,80);
ctx.lineTo(370,100);
ctx.moveTo(360,90);
ctx.lineTo(380,90);
ctx.closePath();
ctx.stroke();
//stickman
ctx.beginPath();
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.lineWidth = 10;
ctx.strokeStyle = "#000";
ctx.moveTo(300,310);
ctx.lineTo(320,370);
ctx.stroke();
ctx.lineWidth = 8;
ctx.moveTo(320,372);
ctx.lineTo(420,372);
ctx.moveTo(320,372);
ctx.lineTo(300,412);
ctx.lineTo(370,412);
ctx.stroke();
ctx.lineWidth = 6;
ctx.moveTo(300,312);
ctx.lineTo(390,312);
ctx.moveTo(290,300);
ctx.lineTo(270,340);
ctx.lineTo(350,340);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#fff";
ctx.fillStyle = "#000";
ctx.lineWidth = 1;
ctx.arc(300,300,20,0,2*Math.PI);
ctx.closePath();
ctx.stroke();
ctx.fill();
//logo android
ctx.beginPath();
ctx.fillStyle = "#bf5";
ctx.arc(800,220,160,Math.PI,0);
ctx.closePath();
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.moveTo(640, 230);
ctx.lineTo(960,230);
ctx.lineTo(960,430);
ctx.quadraticCurveTo(960,460,940,460);
ctx.lineTo(660,460);
ctx.quadraticCurveTo(640,460,640,430);
ctx.lineTo(640,230);
ctx.closePath();
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(720,160,12,0,2*Math.PI);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "#fff";
ctx.fill();

ctx.beginPath();
ctx.arc(880,160,12,0,2*Math.PI);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "#fff";
ctx.fill();

ctx.beginPath();
ctx.strokeStyle = "#bf5";
ctx.lineWidth = 60;
ctx.moveTo(604,260);
ctx.lineTo(604,400);
ctx.moveTo(996,260);
ctx.lineTo(996,400);
ctx.moveTo(740,460);
ctx.lineTo(740,530);
ctx.moveTo(860,460);
ctx.lineTo(860,530);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 10;
ctx.strokeStyle = "#bf5"; 
ctx.moveTo(760,160);
ctx.lineTo(700,30);
ctx.moveTo(840,160);
ctx.lineTo(900,30);
ctx.stroke();

