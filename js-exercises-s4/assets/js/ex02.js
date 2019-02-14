let y = document.querySelectorAll("a");
let p = document.getElementById("texte");
let vp = p.innerHTML;
for (let i=0 ; i<y.length; i++){
    y[i].addEventListener("click", changeImage);
    function changeImage() {
        if (i==1){
            p.innerHTML="";
        } else {
            p.innerHTML=vp;
        }
    }
}