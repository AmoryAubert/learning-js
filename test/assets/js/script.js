//let canvas = document.getElementById("canvas");
//let ctx = canvas.getContext("2d");
//ctx.shadowColor ="rgba(0,0,0,0)";
//ctx.strokeStyle ="rgba(0,0,0,1)";
//ctx.lineWidth = 1;
//ctx.lineCap = "butt";
//ctx.lineJoin = "miter";
//ctx.beginPath();
//ctx.arc(200,200,180,0,2*Math.PI);
//ctx.closePath();
//ctx.stroke();
//ctx.shadowOffsetX = 30;
//ctx.shadowOffsetY = 30;
//ctx.shadowBlur = 30;
//ctx.shadowColor = "rgba(0,0,0,0)";
//grad = ctx.createRadialGradient(210,190,140,200,200,200);
//grad.addColorStop(0,"rgba(155,103,66,1)");
//grad.addColorStop(1,"rgba(104,79,63,1)");
//ctx.fillStyle = grad;
//ctx.fill();

let main_character = {
    name: "Gaspard",
    level: 1,
    life: 100,
    weapon: sword = {
        name: "sword",
        damage: 5,
    },
    attack: function attack() {
        let ennemis = ["Roger", "un mur", "une tasse de café", "Satan", "Philibert", "son docteur", "une paire de chaussette", "René", "une pantoufle", "un SDF", "la police"];
        ennemis_random = ennemis[Math.floor(Math.random() * (ennemis.length))];
        //la fonction doit retourner : (le nom du personnage) 
        //attaque avec l'arme (nom de l'arme) les dégâts sont 
        //(niveau du personnage multiplié par le damage de l'arme)
        degat = main_character.level * sword.damage;
        document.querySelector('#attack').innerHTML = main_character.name + " attaque avec " + main_character.weapon.name + " et inflige " + degat + " points de dégats à " + ennemis_random + " !";
        console.log(main_character.name + " attaque avec " + main_character.weapon.name + " et inflige " + degat + " points de dégats à" + ennemis_random + " !");
        return
    },

};

document.getElementById('attack').addEventListener('click', main_character.attack);