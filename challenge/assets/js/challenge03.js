let c = document.getElementById("mon_canvas");
let ctx = c.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "#ecf0f1";
ctx.moveTo(50,50);
ctx.lineTo(200,200);
ctx.moveTo(200,50);
ctx.lineTo(50,200);
ctx.closePath();
