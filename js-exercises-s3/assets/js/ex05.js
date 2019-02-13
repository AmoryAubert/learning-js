y = document.querySelectorAll("img");
x=0;
for (let i=0 ; i<y.length; i++){
    y[i].addEventListener("mouseover", changeImage);
    function changeImage() {
        if (x===0){
            y[i].setAttribute("src", `assets/img/image${i+1}_2.jpg`);
        }
    }
}

