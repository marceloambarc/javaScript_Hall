class Animal{
    constructor(name, weight, price){
        this.name = name;
        this.weight = weight;
        this.price = price;
    }
    MethodTodo(){
        console.log("TODO Method");
    }
}

class Cow extends Animal{
    constructor(name, weight, price, race, age){
        super(name, weight, price);
        this.race = race;
        this.age = age;
    }

    AntoherMethod(){
        console.log("Cow classe");
        super.MethodTodo();
    }
}

var holand = new Cow("Kili",2000,"26mil","Holand",5);
holand.AntoherMethod();
console.log(holand);