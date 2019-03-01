
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
/* Start button */
//start.addEventListener("click", timer);

(function() {
    let lastTime = 0;
    let vendors = ['ms', 'moz', 'webkit', 'o'];
    for(let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            let currTime = new Date().getTime();
            let timeToCall = Math.max(0, 16 - (currTime - lastTime));
            let id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

(function () {
			
	let fighter,
		fighterImage,
        monster,
		canvas;					   
    
	function gameLoop () {
        window.requestAnimationFrame(gameLoop);
        fighter.update();
        fighter.render();
        monster.update();
	}
	function sprite (options) {
	
		let that = {},
			frameIndex = 19,
			tickCount = 0,
			ticksPerFrame = options.ticksPerFrame || 0,
			numberOfFrames = options.numberOfFrames || 1;
		
		that.context = options.context;
		that.width = options.width;
		that.height = options.height;
		that.image = options.image;
		
		that.update = function () {
            tickCount += 1;
            if (tickCount > ticksPerFrame) {
				tickCount = 0;
                // If the current frame index is in range
                if (frameIndex < numberOfFrames - 1) {	
                    // Go to the next frame
                    frameIndex += 1;
                } else {
                    //frameIndex = 0;
                    let lastClick = 0;
                    let delay = 10;
                    window.addEventListener("mousedown", function(){
                        if (lastClick >= (Date.now() - delay))
                            return;
                        lastClick = Date.now();
                        frameIndex = 0;
                        tickCount = 0;
                    });
                }
            }
        };
		that.render = function () {
		
		  // Clear the canvas
		  that.context.clearRect(0, 0, that.width, that.height);
		  
		  // Draw the animation
		  that.context.drawImage(
		    that.image,
		    frameIndex * that.width / numberOfFrames,
		    0,
		    that.width / numberOfFrames,
		    that.height,
		    0,
		    0,
		    that.width / numberOfFrames,
		    that.height);
		};
		
		return that;
	}
	
	// Get canvas
	canvas = document.getElementById("fighterAnimation");
	canvas.width = 600;
	canvas.height = 600;
	
	// Create sprite sheet
	fighterImage = new Image();	
	
	// Create sprite
	fighter = sprite({
		context: canvas.getContext("2d"),
		width: 7960,//398
		height: 278,
		image: fighterImage,
		numberOfFrames: 20,
		ticksPerFrame: 1
	});
    function component(r, color, x, y) {
        this.r = r;
        this.x = x;
        this.y = y; 
        let ctx = canvas.getContext("2d");
        this.update = function() {
            ctx.save();
            ctx.fillStyle = color;
            ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
            ctx.fill();       
            ctx.restore();    
            }
        }
    monster = new component(50, "green", 400, 200);
    //monster = ({
    //    ctx.beginPath(),
    //    ctx.arc(400,200,50,0,2*Math.PI),
    //    ctx.closePath(),
    //    ctx.fillStyle = "green",
    //    ctx.fill();
    //});
    
	
	// Load sprite sheet
	fighterImage.addEventListener("load", gameLoop);
	fighterImage.src = "assets/img/fighter-medium.png?" + (new Date()).getTime();

} ());

