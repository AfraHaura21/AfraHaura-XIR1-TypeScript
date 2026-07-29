/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.
 */

const KeyboardPrice = 850000
const KeyboardQty = 1
const WirelessMousePrice = 275000
const WirelessMouseQty = 2
const MousePadPrice =  120000
const MousePadQty = 1
const isPremium = true;

const subtotal = ( KeyboardPrice * KeyboardQty + WirelessMousePrice * WirelessMouseQty + MousePadPrice * MousePadQty);

let totalItems = 0;
totalItems++;
totalItems++;
totalItems++;
totalItems++;

let discount = 0;
if (subtotal > 1000000) {
  discount = subtotal * 0.1;
}

const finalPayment = subtotal - discount;

console.log ("Subtotal = Rp." + subtotal );
console.log ("Total Items = " +totalItems);
console.log ("Discount = Rp."+ discount);
console.log ("Final Payment = Rp."+ finalPayment);