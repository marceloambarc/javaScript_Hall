class Shipping{
    constructor(){
        this.product = '';
        this.weight = 0;
        this.tax = 0;
        this.distance = 0;
    }
    Company(){
        console.log("Companies that make this route");
    }
    Time(){
        console.log("Company time", + this.distance);
    }
    Load(){
        console.log("Calculation of box and Load the TRUCK");
    }
    Delivery(){
        console.log("In seconds we will be delivering your order");
    }
}