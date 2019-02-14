let myImg = document.getElementById("image1");
myImg.addEventListener("mouseenter", changeImage);
myImg.addEventListener("mouseout", changeImage);

let x=0;
function changeImage(){
    if (x===0){
            myImg.style.border = "3px red solid";
            myImg.style.margin = "3px";
            x=1;
        } else {
            myImg.style.border="0px transparent";
            myImg.style.margin = "0px";
            x=0;
        }
    
}