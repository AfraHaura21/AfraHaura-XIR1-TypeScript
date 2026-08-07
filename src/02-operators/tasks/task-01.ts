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

const friedricePrice:number = 18000;
const friedriceQty:number = 3;
const MineralWaterPrice:number = 5000;
const MineralWaterQty:number = 2;
const discount:number = 10000;
const StudentOSIS: boolean = true;
const DiscountOsis = StudentOSIS ? 10000 : 0;


const TotalFoodPrice = friedricePrice * friedriceQty;
const TotalDrinkPrice = MineralWaterPrice * MineralWaterQty;
const Total = TotalFoodPrice + TotalDrinkPrice   
const Final= Total - DiscountOsis ;

console.log ("Cafeteria Receipt");
console.log("Total Food Price: Rp" + TotalFoodPrice);
console.log("Total Drink Price: Rp" + TotalDrinkPrice);
console.log("Total: Rp"+ Total)
console.log("Discount: Rp" + discount);
console.log("Final Payment: Rp" + Final);
  