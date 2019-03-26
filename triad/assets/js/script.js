class Character {
    constructor(name, level, life, nameWeapon, damageWeapon) {
        this.name = name;
        this.level = level;
        this.life = life;
        this.damage = level * damageWeapon;
        weapon : {
                this.nameWeapon = nameWeapon;
                this.damageWeapon = damageWeapon;
        }
        this.attack = function(name){
            console.log(this.name + " attaque " + name + " avec " + this.nameWeapon);
        }
        this.status = function(name){
            this.life = this.life - name.damage;
            //this.life = this.life - this.receiveDamage();
            console.log(this.name +" a maintenant "+this.life+" point(s) de vie.");
        }
        this.receiveDamage = function(name){
            console.log(this.name + " inflige " + this.damage + " de dégats");
            return this.damage;
        }
    }
}
let mainCharacter = new Character("Arthour",20,500,"Kwuillère",10);
let opponentCharacter = new Character("Burgonde",15,375,"Assiette Pour Fromage",15);
mainCharacter.attack(opponentCharacter.name);
mainCharacter.receiveDamage(opponentCharacter);
opponentCharacter.status(mainCharacter);
//let shop = [
//    {
//        title : "Ragnarok",
//        type: "Marteau",
//        physic: 10,
//        magic: 5,
//        minLevel: 10,
//        available: 0
//    },
//    {
//        title : "Excalibur",
//        type: "Épée",
//        physic: 15,
//        magic: 0,
//        minLevel: 10,
//        available: 1
//    },
//    {
//        title : "Épée en bois",
//        type: "Épée",
//        physic: 2,
//        magic: 0,
//        minLevel: 1,
//        available: 1
//    },
//    {
//        title : "Baguette d'apprenti",
//        type: "Baguette",
//        physic: 0,
//        magic: 2,
//        minLevel: 1,
//        available: 1
//    },
//];
//function allItem(){
//    for(let i in shop){
//          console.log(shop[i]);  
//    }
//}
//function availableItem(){
//    for(let i in shop){
//        if (shop[i].available == 1){
//          console.log(shop[i]);  
//        }
//    }
//}
//function availableItemAtLv10(){
//    for(let i in shop){
//        if ((shop[i].minLevel >= 10)&&(shop[i].available == 1)){
//          console.log(shop[i]);  
//        }
//    }
//}