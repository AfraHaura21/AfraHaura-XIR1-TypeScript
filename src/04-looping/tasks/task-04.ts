/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */

const sales = [125000, 350000, 78000, 910000, 150000, 420000, 275000, 99000, 640000,  18000];

let totalSales = 0;
let highestTransaction = sales[0]; 
let lowestTransaction = sales[0];  
let highValueCount = 0;

for (let i = 0; i < sales.length; i++) {
    let current = sales[i];

    totalSales += current;

    if (current > highestTransaction) {
        highestTransaction = current;
    }
    if (current < lowestTransaction) {
        lowestTransaction = current;
    }
    if (current >= 300000) {
        highValueCount++;
    }
}
let averageTransaction = totalSales / sales.length;

console.log("1. Total Sales Revenue: Rp " + totalSales);
console.log("2. Highest Transaction: Rp " + highestTransaction);
console.log("3. Lowest Transaction: Rp " + lowestTransaction);
console.log("4. Number of Transactions >= Rp300.000: " + highValueCount);
console.log("5. Average Transaction Value: Rp " + averageTransaction);

