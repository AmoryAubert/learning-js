//document.getElementById("image1").onmouseenter = function() {changeImage()};
document.getElementById("image1").addEventListener("mouseenter", changeImage);

function changeImage(){
    document.getElementById("image1").src = "assets/img/image1_2.jpg";
}