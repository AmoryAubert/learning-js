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
function test() {
    start.disabled = true;
    startGame();
}
function clearchrono() {
    start.disabled = false;
    clearTimeout(t);
    chrono.textContent = "00:00:00";
    csecondes = 0; secondes = 0; minutes = 0;
}
/* Start button */
start.addEventListener("click", timer);
start.addEventListener("click", test);


let myGamePiece;
let score;
let valscore=0;
let fire=0;
let bullet;
let bullettext;
let invader;
let bubble;
let invaderBubble;
let invaderDial=[
                 "Let me use var !",
                 "bonjour",
                 "au revoir",
                 "je peux ?",
                 "mais si j'alterne entre ?",
                 "vous pensez que ?",
                 "deadline",
                 "THIS IS VAAAAR",
                 "Br Forever",
                 "Et si c'etait ça ?"
                 ];

function startGame() {
    myGamePiece = new component(30, 60, "red", 10, 120);
    score = new component("30px", "Consolas", "black", 10, 40, "text");
    bubble = new component(500,60, "white", 460, 20, "bubble");
    invaderBubble = new component("30px", "Consolas", "black", 460, 60, "text");
    myGameArea.start();
}

let myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1000;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[2]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            e.preventDefault();
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
function component(width, height, color, x, y, type) {
    this.type = type;
    this.score = 0;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;
    //this.gravity = 0;
    //this.gravitySpeed = 0;
    this.update = function() {
        ctx = myGameArea.context;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.restore();
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else if (this.type == "ellipse"){
            ctx.beginPath();
            ctx.ellipse(this.x, this.y, this.width, this.height, 0, 0, 2*Math.PI);
            ctx.fillStyle = color;
            ctx.closePath();
            ctx.fill();
        } else if (this.type == "bubble"){
            ctx.beginPath();
            ctx.moveTo(this.x,this.y);
            ctx.lineTo(this.x+this.width,this.y);
            ctx.quadraticCurveTo(this.x+this.width+30,this.y,this.x+this.width+30,this.y+(this.height/2));
            ctx.quadraticCurveTo(this.x+this.width+30,this.y+this.height,this.x+this.width,this.y+this.height);
            ctx.lineTo(this.x+this.width,this.y+this.height+30);
            ctx.lineTo(this.x+this.width-20,this.y+this.height);
            ctx.lineTo(this.x,this.y+this.height);
            ctx.quadraticCurveTo(this.x-30,this.y+this.height,this.x-30,this.y+(this.height/2));
            ctx.quadraticCurveTo(this.x-30,this.y,this.x,this.y);
            ctx.fillStyle = color;
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
        } else {
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        //this.gravitySpeed += this.gravity;
        //this.x += this.speedX;
        this.y += this.speed;
        this.hitBottom();
    }
    this.hitBottom = function() {
        let rockbottom = myGameArea.canvas.height - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            //this.gravitySpeed = 0;
        }
        if (this.y < 60) {
            this.y = 60;
            //this.gravitySpeed = 0;
        }
    }
    this.crashWith = function(otherobj) {
        let myleft = this.x;
        let myright = this.x + (this.width);
        let mytop = this.y;
        let mybottom = this.y + (this.height);
        let otherleft = otherobj.x;
        let otherright = otherobj.x + (otherobj.width);
        let othertop = otherobj.y;
        let otherbottom = otherobj.y + (otherobj.height);
        let crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}
//myGameArea.clear();
//let x = myGameArea.canvas.width;
//let testheight = myGameArea.canvas.height;
//let invader = new component(30,60,"blue",x-40,(testheight - 60)/2);
function updateGameArea() {
    //let height, gap, minHeight, maxHeight, minGap, maxGap;
    /*for (i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece.crashWith(myObstacles[i])) {
            clearchrono();
            return;
        } 
    }*/
    myGameArea.clear();
    //myGameArea.frameNo += 1;
    let x = myGameArea.canvas.width;
    let testheight = myGameArea.canvas.height;
    if (valscore == 0){
        invader = new component(30,60,"blue",x-40,(testheight - 60)/2);    
        invaderBubble.text=invaderDial[0];
    }
   /* if (myGameArea.frameNo == 1 || everyinterval(150)) {  
        minHeight = 20;
        maxHeight = 200;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        minGap = 100;
        maxGap = 200;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        myObstacles.push(new component(10, height, "green", x, 0));
        myObstacles.push(new component(10, x - height - gap, "green", x, height + gap));
    }
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].x += -1;
        myObstacles[i].update();
    }*/
    score.text="SCORE: "+valscore;
    score.update();
    invaderBubble.update();
    myGamePiece.speed = 0;
    if (myGameArea.keys && myGameArea.keys[38]) {myGamePiece.speed= -2; }
    if (myGameArea.keys && myGameArea.keys[40]) {myGamePiece.speed= 2; }
    if (myGameArea.keys && myGameArea.keys[32] && fire == 0) {
            fire = 1;
            bullet=new component(30,10,"#ddd",myGamePiece.width+40,myGamePiece.y+(myGamePiece.height/2),"ellipse");
            bullettext=new component("20px", "Consolas","black",myGamePiece.width+20,(myGamePiece.y+myGamePiece.height/2)+7,"text");
            bullettext.text="NON";
    }
    if (fire == 1){
        bullettext.x += 7;
        bullettext.update();
        bullet.x += 7;
        bullet.update();
        bullettext.update();
        if (bullet.crashWith(invader)) {
            invader = new component(30,60,"green",x-40,(testheight - 60)/2);
            valscore+=1;
            invaderBubble.text=invaderDial[valscore];
            fire = 0;
            bullet=0;
            return;
        }
        if (bullet.x > myGameArea.canvas.width){
            fire = 0;
        }
    }
    myGamePiece.newPos();
    myGamePiece.update();
    bubble.update();
    invader.update();
    invaderBubble.update();
    score.text="SCORE: "+valscore;
    score.update();
}
/*function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}*/