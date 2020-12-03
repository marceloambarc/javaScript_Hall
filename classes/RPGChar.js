class Char{
    constructor(){
        this.name = '';
        this.class = '';
        this.gender = '';
        this.life = 0;
        this.mana = 0;
        this.stamina = 0;
        this.inventory = [];
        this.inventorySize = 0;
        this.xp = 0;
    }
    Walk(){
        console.log("Walk along...",this.stamina - 1);
    }
    Search(item,callback){
        return new Promise((resolve, reject) => {
            console.log("Search for food and Items");
            var empty = false;
            if(!empty){
                callback({item : "nameOFitem", amount : 5});
                function CatchItem(){
                    console.log("Catch Item",this.inventorySize++,this.inventory.callback);
                }
            }else{
                callback("Nothing Found.");
            }
        });
    }
    Run(){
        console.log("Run along...",this.stamina - 3);
    }
    Battle(){
        console.log("Battle against the enemy");
    }
    Evade(){
        console.log("Evade the combat",this.stamina - 2);
    }
}

var warrior = new Char();

warrior.Search();