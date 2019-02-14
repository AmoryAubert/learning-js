let y = document.querySelectorAll("input");
let btn = document.getElementsByName("button");
btn[0].addEventListener("click", check);

function check(){
    let a = y[0].value;
    let b = y[1].value;
    for (let i=0 ; i<y.length; i++){
        if (a==b){
            y[i].style.border = "1px solid green";
        } else {
            y[i].style.border = "1px solid red";
        }
    }
}
