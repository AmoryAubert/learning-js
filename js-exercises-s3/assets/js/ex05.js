y = document.querySelectorAll("img");
for (i=0 ; i<y.length; i++){
    y[i].addEventListener("mouseenter", changeImage);
    y[i].addEventListener("mouseout", changeImage);
    
    x=0;
    function changeImage() {
        if (x===1){
            y[i].setAttribute("src", "assets/img/image"+$[i+1]+"_2.jpg");
            x=1;
        } else {
            y[i].setAttribute("src", "assets/img/image"+$[i+1]+".jpg");
            x=0;
        }
    }
}

