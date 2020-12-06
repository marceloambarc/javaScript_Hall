class Dice{
    constructor(faces){
        this.faces = faces;
    }
    Roll(){
        console.log(`Result of ${this.faces} Dice: ` + this.GetRamdomIntInclusive(1,this.faces));
        this.GetRamdomIntInclusive(1,this.faces);
    }
    GetRamdomIntInclusive(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

var d6 = new Dice(6);
var d12 = new Dice(12);
var d20 = new Dice(20);

d6.Roll();
d12.Roll();
d20.Roll();