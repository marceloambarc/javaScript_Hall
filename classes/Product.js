class Product{
    constructor(){
        this.product = '';
        this.description = '';
        this.manufacturer = ''
        this.department = '';
        this.weight = 0;
        this.price = 0;
        this.stock = 0;
    }
    Overview(){
        console.log("See about this product");
    }
    Compare(){
        console.log("Compare with similar products");
    }
    AddCart(){
        console.log("Add to Cart");
    }
    Checkout(){
        console.log("Buy your product");
    }
}