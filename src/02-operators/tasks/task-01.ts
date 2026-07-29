/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */

const friedricePrice = 18000;
const friedriceQty = 3;
const MineralWaterPrice = 5000;
const MineralWaterQty = 2;

const discount = 10000;

const TotalFoodPrice = friedricePrice * friedriceQty;
const TotalDrinkPrice = MineralWaterPrice * MineralWaterQty;
const Total = TotalFoodPrice + TotalDrinkPrice   
const Final= Total - discount ;

console.log ("Cafeteria Receipt");
console.log("Total Food Price: Rp" + TotalFoodPrice);
console.log("Total Drink Price: Rp" + TotalDrinkPrice);
console.log("Total: Rp"+ Total)
console.log("Discount: Rp" + discount);
console.log("Final Payment: Rp" + Final);