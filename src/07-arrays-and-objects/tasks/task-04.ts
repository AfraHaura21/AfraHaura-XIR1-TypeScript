/**
 * A customer has a shopping cart below.
 * Tasks:
 * 1. Count subtotal of all products (expected result: 3.350.000)
 * 2. Calculate discount with this rules.
 *  - subtotal >= 3,000,000 → 10% discount
 *  - subtotal >= 2,000,000 → 5% discount
 *  - otherwise             → 0%
 * 
 * 3. Calculate final subtotal after given discount
 * 4. Find expensive product ( > 1.000.000)
 */

const cart = [
    {
        product: "Keyboard",
        price: 350000,
        quantity: 2,
    },
    {
        product: "Mouse",
        price: 150000,
        quantity: 1,
    },
    {
        product: "Monitor",
        price: 2500000,
        quantity: 1,
    },
];
// Subtotal all products
const subtotal = cart.reduce((total, item) => {return total + item.price * item.quantity}, 0);

// Calculate Discount
let discount = 0;
if (subtotal >= 300000) {
    discount = subtotal * 0.10;
}else if (subtotal >= 200000) {
    discount = subtotal * 0.05;
}else {
    discount = 0;
}

// Calculate Final subTotal after Discount
const finalSubTotal = subtotal - discount;

// Find Product > 1.000.000
const expensiveProducts = cart.filter((item) => item.price > 1000000);

console.log ("SubTotal : Rp. ", subtotal);
console.log ("Discount : Rp. ", discount);
console.log ("Final SubTotal : Rp. ", finalSubTotal);
console.log ("Expensive  Products : ", expensiveProducts);
