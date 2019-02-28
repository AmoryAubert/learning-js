//author: "Zadie Smith"
//gender: "f"
//id: "528"
//permalink: "https://thatsthespir.it/quote/view/528"
//photo: ""
//quote: "The past is always tense, the future perfect."
//slug: "zadie-smith"
async function getData() 
    {
      let response = await fetch('https://thatsthespir.it/api');
      let blockquote = await response.json();
      return blockquote;
    }
getData().then(blockquote => {
  let main = document.getElementById("main");
  let quote = document.createElement("p");
  let divimg = document.createElement("div");
  let img = document.createElement("img");
  let name = document.createElement("p");
  let gender, hauteur, largeur;
  main.appendChild(quote);
  main.appendChild(divimg);
  divimg.setAttribute("id", "divimg");
  divimg = document.getElementById("divimg");
  divimg.appendChild(img);
  main.appendChild(name);
  quote.innerHTML = blockquote.quote;
  img.src = blockquote.photo;
  name.innerHTML = blockquote.author;
  name.setAttribute("id", "author");
  gender = blockquote.gender;
  if (gender=="f"){
    divimg.style.border = "8px #f69 solid";
    if (blockquote.photo==""){
      img.src = "assets/img/woman.png";
    }
  } else {
    divimg.style.border = "8px #69f solid";
    if (blockquote.photo==""){
      img.src = "assets/img/man.png";
    }
  }
  image = document.querySelector('img');
  img.onload = function() {
    largeur = this.width;
    hauteur = this.height;
    if (largeur >= hauteur){
      this.height = 260;
      this.marginLeft = -Math.abs((this.width-260)/2);
      image.style.marginLeft = img.marginLeft+"px";
      console.log(this.width+" largeur");
      console.log(this.marginLeft);
    } else {
      this.width = 260;
      this.marginTop = -Math.abs((this.height-260)/2);
      image.style.marginTop = img.marginTop+"px";
      console.log(this.height+" hauteur");
      console.log(this.marginTop);
    }
  }
})

