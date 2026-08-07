/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */

const RoomPrice: number = 650000;
const NightStayed: number = 4;
const ServiseCharge: number = 120000;
const Tax: number = 0.11;
const isVIP : boolean = true;

const subtotalROOM =  RoomPrice * NightStayed;
 
//// Discount
let discount = 0;

if (isVIP) {
  discount = subtotalROOM * 0.12;
}

// Tax (after discount)
const tax = (subtotalROOM- discount) * Tax;

// Final payment
const finalPayment = (subtotalROOM - discount) + tax + ServiseCharge;

// Free breakfast
const freeBreakfast = NightStayed >= 3 || isVIP;

console.log("Room Subtotal:", subtotalROOM);
console.log("Discount:", discount);
console.log("Tax:", tax);
console.log("Final Payment:", finalPayment);
console.log("Free Breakfast:", freeBreakfast);




