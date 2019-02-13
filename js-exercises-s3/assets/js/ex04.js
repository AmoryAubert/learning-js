y = document.getElementsByName("button");
y[0].addEventListener("click", raz);

function raz(){
    x = document.querySelectorAll("input");
    for (i=0 ; i<x.length; i++){
        x[i].setAttribute("value", "");
    }
}