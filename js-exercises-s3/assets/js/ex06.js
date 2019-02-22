let y = document.querySelectorAll("img");
let x=0;
for (let i=0 ; i<y.length; i++){
    y[i].addEventListener("click", changeImage);
    function changeImage() {
        if (x===0){
            y[i].setAttribute("src", `assets/img/image${i+1}_2.jpg`);
            x=1;
        } else {
            y[i].setAttribute("src", `assets/img/image${i+1}.jpg`);
            x=0;
        }
    }
}