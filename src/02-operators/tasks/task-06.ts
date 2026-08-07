/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */
const pricePerHour: number = 8000;
const hours: number = 7;
const minutes: number = 35;

// Total playing time in minutes
const totalMinutes = (hours * 60) + minutes;

// Remaining minutes after full hours
const remainingMinutes = totalMinutes % 60;

// Total billed hours (every started hour)
const billedHours = Math.ceil(totalMinutes / 60);
const totalPayment = billedHours * pricePerHour;
let discount = 0;
let getDiscount = billedHours > 5; // true

if (getDiscount) {
  discount = totalPayment * 0.15;
}


const finalPayment = totalPayment - discount;

console.log("Total Minutes:", totalMinutes);
console.log("Remaining Minutes:", remainingMinutes);
console.log("Billed Hours:", billedHours);
console.log("Total Payment:", totalPayment);
console.log("Discount:", discount);
console.log("Final Payment:", finalPayment);
