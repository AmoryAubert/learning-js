function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  document.getElementById(data).removeAttribute("draggable");
}
let dropZone=document.querySelectorAll('.zoneCarte');
for (let i=0; i<dropZone.length;i++){
    dropZone[i].addEventListener('dragover', function(event){allowDrop(event)});
    dropZone[i].addEventListener('drop', function(event){drop(event)});
}
let cartes=document.querySelectorAll('.img-container');
for (let i=0; i<cartes.length;i++){
    cartes[i].addEventListener('dragstart', function(event){drag(event)});
}
for (let i=0; i<cartes.length;i++){
    cartes[i].addEventListener('drop', function(e) {
        e.stopPropagation();
    });
}
