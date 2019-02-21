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
    chrono.textContent = "00:00:00";
    csecondes = 0; secondes = 0; minutes = 0;
}
function stopchrono(){
    clearTimeout(t);
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
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
                 "Si j'ai bien saisis, il faut juste ne pas en abusé !",
                 "BORDEL J'AI LE DROIT !",
                 "je peux mettre un <br/> ?",
                 "Mais si j'alterne entre les deux ?",
                 "Tu penses que si... ?",
                 "Je peux passer cet exercice ?",
                 "LET IS VAAAAR !!!",
                 "<br/> Forever",
                 "C'est plus simple de tout mettre dans 1 seul fichier !"
                 ];
let space;
let cible=0;
for (let i=0;i < invaderDial.length; i++){
    let space2="";
    space=(100 - (invaderDial[i].length))/2;
    for (let j = 0;j < space;j++){
        space2+=" ";
    }
    invaderDial[i]=space2+invaderDial[i]+space2;
}
function leScore(){
    if (minutes > 0){
           document.getElementById("leScore").innerHTML = '<p>Vous avez touché '+cible+' cibles & avez accumulé un score de '+valscore+' point(s) en '+minutes+' minute(s) et '+secondes+','+csecondes+' secondes.</p><button onclick="rejouer()">Rejouer</button>'; 
    } else {
        document.getElementById("leScore").innerHTML = '<p>Vous avez touché '+cible+' cibles & avez accumulé un score de '+valscore+' point(s) en '+secondes+','+csecondes+' secondes.</p><button onclick="rejouer()">Rejouer</button>';
    }
}
function rejouer() {
    document.getElementById("filtre").style.display = "none";
    document.getElementById("leScore").style.display = "none";
    timer();
    myGameArea.stop();
    myGameArea.clear();
    myGamePiece = {};
    valscore = 0;
    cible=0;
    document.getElementById("canvascontainer").innerHTML = "";
    startGame();
}

function startGame() {
    myGamePiece = new component(85, 100, "./assets/img/arnaud.jpg", 10, 220,"image");
    score = new component("30px", "Consolas", "black", 10, 40, "text");
    bubble = new component(760,60, "white", 200, 1, "bubble");
    invaderBubble = new component("25px", "Consolas", "black", 200, 41, "text");//460
    myGameArea.start();
}

let myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1000;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        //document.body.insertBefore(this.canvas, document.body.childNodes[2]);
        document.getElementById("canvascontainer").appendChild(this.canvas);
        this.pause = false;
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
    },
    stop : function() {
        this.pause = true;
        clearInterval(this.interval);
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
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.update = function() {
        ctx = myGameArea.context;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.restore();
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else if (this.type == "image") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
        } else if  (this.type == "ellipse") {
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
        this.y += this.speed;
        this.hitBottom();
    }
    this.hitBottom = function() {
        let rockbottom = myGameArea.canvas.height - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
        }
        if (this.y < 70) {
            this.y = 70;
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
let vitesseInvader=0;
let pastouche=0;
let topi;
let boti;
function updateGameArea() {
    myGameArea.clear();
    let x = myGameArea.canvas.width;
    let testheight = myGameArea.canvas.height;
    if (valscore == 0){
        invader = new component(85,100,"./assets/img/dzena.jpg",x-85-10,(testheight - 85)/2,"image");
        invaderBubble.text=invaderDial[0];
    }
    score.text="SCORE: "+valscore;
    score.update();
    invaderBubble.update();
    myGamePiece.speed = 0;
    if (myGameArea.keys && myGameArea.keys[38]) {myGamePiece.speed= -4; }
    if (myGameArea.keys && myGameArea.keys[40]) {myGamePiece.speed= 4; }
    if (myGameArea.keys && myGameArea.keys[32] && fire == 0) {
            fire = 1;
            bullet=new component(30,10,"#ddd",myGamePiece.width+40,myGamePiece.y+(myGamePiece.height/2),"ellipse");
            bullettext=new component("20px", "Consolas","black",myGamePiece.width+22,(myGamePiece.y+myGamePiece.height/2)+7,"text");
            bullettext.text="NON";
    }
    //https://bl.ocks.org/nanu146/aa0e4f8428bc65a8c648cf0ddefc84d4
    if (cible > 0){
        if (invader.speed < 0) {
            topi=1;
            boti=0;
        }
        if (invader.speed > 0) {
            topi=0;
            boti=1;
        }
        if ((topi==1)&&(invader.y<=71)){
            invader.speed = vitesseInvader;
        } else if ((boti==1)&&(invader.y>=testheight-invader.height-1)) {
            invader.speed = -vitesseInvader;
        } 
        invader.newPos();
        invader.update(); 
    }
    let vitesseBullet = 15;
    if (fire == 1){
        bullettext.x += vitesseBullet;
        bullet.x += vitesseBullet;
        bullet.update();
        bullettext.update();
        if (bullet.crashWith(invader)) {
            let rdmh = getRndInteger(180,testheight);
            vitesseInvader = getRndInteger(1+cible,2+cible);
            //if (vitesseInvader == 0){vitesseInvader = getRndInteger(-2-cible,2+cible);}
            invader = new component(85,100,"./assets/img/dzena.jpg",x-85-10,rdmh-100,"image");
            invader.speed = vitesseInvader;
            valscore+=1;
            score.text="SCORE: "+valscore;
            score.update();
            cible+=1;
            if (pastouche >= 3){
                pastouche=0;
            }
            invaderBubble.text=invaderDial[cible];
            fire = 0;
            bullet=0;
            if (cible==10){
                myGameArea.stop();
                document.getElementById("filtre").style.display = "block";
                document.getElementById("leScore").style.display = "block";
                stopchrono();
                leScore();
                myGameArea.clear();
                clearchrono();
            }
            return;
        }
        if (bullet.x > myGameArea.canvas.width){
            fire = 0;
            pastouche++;
            if ((pastouche == 3)&&(valscore>0)){
                valscore--;
                pastouche=0;
            }
        }
    }
    myGamePiece.newPos();
    myGamePiece.update();
    invader.update();
    bubble.update();
    invaderBubble.update();
}
/*function degreeToRadians(value){
	return (value/360)*2*Math.PI;
}
particle=
{
	velocity :null,
	position : null,

	/// dummy constructor

	create : function(x,y,speed,angle)
	{
		console.log(x,y,speed,angle)
		var obj=Object.create(this);
		obj.velocity=vector.create(0,0);
		
		obj.velocity.setLength(speed);
		obj.velocity.setAngle(angle);
		obj.position=vector.create(x,y);
		console.log("object")
		console.log(obj);
		return obj;
	},

	update: function(){
		this.position.addTo(this.velocity);
	}

}
vector=
{
	_x:0,
	_y:0,

	// dummy constructor
	create : function(x,y){var obj= Object.create(this);obj._y=y; obj._x=x; return obj;},

	// member functions
	getX : function(){ return this._x},
	getY : function(){ return this._y},
	setX : function(value){  this._x=value;},
	setY : function(value){  this._y=value;},
	getLength : function(){ return Math.sqrt(this._x*this._x + this._y*this._y)},
	getAngle : function(){ return Math.atan2(this._y,this._x) },
	setAngle : function(angle){ length=this.getLength(); this._y =Math.cos(angle)*length; this._x= Math.sin(angle)*length; },
	setLength: function(length){ angle=this.getAngle(); this._y=Math.cos(angle)*length; this._x=Math.sin(angle)*length; },
	add : function(v2){		vect = this.create(this._x+v2._x, this._y+v2._y);	return vect;	 },
	subtract : function(v2){	vect = this.create(this._x-v2._x, this._y-v2._y); 	return vect;	 },
	multiply: function(value){ return vector.create(this._x*value,this._y*value)},
	divide: function(value){ return vector.create(this._x/value,this._y/value)},
	scale: function(value){ this._x=this._x*value; this._y=this._y*value;},
	addTo: function(v2){ this._x=this._x+v2._x; this._y=this._y+v2._y },
	subtractFrom: function(v2){ this._x=this._x-v2._x; this._y=this._y-v2._y }
}*/