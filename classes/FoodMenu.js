class Food{
    constructor(){
        this.name = '';
        this.ingredients = [];
        this.nutriInfo = [];
        this.prepareTime = 0;
        this.price;
    }
    Request(){
        console.log("Request the food");
    }
    Prepare(){
        console.log("Preparation time: ",this.prepareTime);
    }
    Pay(){
        console.log("Pay for your food");
    }
    CleanTheDishes(){
        console.log("Cleaning Sector on work...",this.prepareTime/2);
    }
}