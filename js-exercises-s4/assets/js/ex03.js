//let y = document.querySelectorAll("div");
let y = document.getElementsByClassName("color");
let p = document.getElementById("texte");
//vp = p.innerHTML;
for (let i=0 ; i<y.length; i++){
    y[i].addEventListener("click", changeImage);
    function changeImage() {
        if (i==0){
            p.style.color = "green";
        }else if (i==1){
            p.style.color = "red";
        } else {
            p.style.color = "blue";
        }
    }
}