/*

class Product{
    constructor(productId, basePrice, highlighted){ 
        this.productId    = productId;
        this.basePrice    = price;
        this.highlighted  = highlighted;}
    }

Product1 ("Zapatilla Topper", 5000, "highlighted")
Product2 ("Remera Puma", 3000, "nothighlighted")
Product3 ("Remera Adidas", 4000, "highlighted")

*/
const Product1 = {
    productId    : "remera roja",
    basePrice    : 2000,
    barato       : false,
    highlighted  : true
}

let amount = 2 // parseFloat(prompt("Ingrese la cantidad del producto"));
let totalPurchase = parseInt(amount) * parseInt(Product1.basePrice);
let discount = totalPurchase * 0.15;
let checkOut = totalPurchase - discount;
let prueba = discountProduct(Product1.highlighted)

function discountProduct(highlighted) {
    if (highlighted === true){ 
        return console.log ("Tu precio con descuentos es de:"+ checkOut)
}
}


