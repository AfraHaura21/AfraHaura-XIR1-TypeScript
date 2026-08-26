/**
 * A warehouse stores the stock quantity of each product in following array.
 * Warehouse Rules:
 * - Out of Stock → quantity = 0
 * - Low Stock → quantity < 10
 * - Safe Stock → quantity ≥ 10
 * 
 * Students have to Calculate:
 * - Number of Out of Stock products
 * - Number of Low Stock products
 * - Number of Safe Stock products
 * - Total inventory
 * - Average stock quantity
 */

const stocks = [
    25, 0, 18, 6, 42,
    9, 0, 55, 13, 2,
    30, 8, 41, 0, 16
];
let OutofStock = 0;
let LowStock = 0;
let SafeStock = 0;
let TotalInventory = 0;
let AverageStock = 0;


for (let i = 0; i < stocks.length; i++) {
    const quantity = stocks[i]; 
    TotalInventory += quantity;     

    if (quantity === 0) {
        OutofStock++;
    } else if (quantity < 10) {
        LowStock++;
    } else {
        SafeStock++; 
    }
}

const averageStock = stocks.length > 0 ? TotalInventory / stocks.length : 0;

console.log("Number of Out of Stock products : " + OutofStock);
console.log("Number of Low Stock products    : " + LowStock);
console.log("Number of Safe Stock products   : " + SafeStock);
console.log("Total inventory                 : " + TotalInventory);
console.log("Average stock quantity          : " + averageStock);

