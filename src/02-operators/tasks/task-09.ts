/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */

const Keyboardprice: number = 850000;
const KeyboardQty: number = 1;
const MousePrice: number = 275000;
const MouseQty: number = 2;
const MonitorPrice: number = 420000;
const MonitorQty: number = 1;

const Voucher: number = 100000;
const isPremium: boolean = true;
const RewardRate: number = 50000;
const VatRate: number = 0.11;

const KeyboardTotal = Keyboardprice * KeyboardQty;
const MouseTotal = MousePrice * MouseQty;
const MonitorTotal = MonitorPrice * MonitorQty;

const Subtotal = KeyboardTotal + MouseTotal + MonitorTotal;

const memberDiscount = isPremium ? Subtotal * 0.10 : 0;

const payBeforeVoucher = Subtotal - memberDiscount;

const payBeforeTax = payBeforeVoucher - Voucher;

const PPN = payBeforeTax * VatRate;

const finalPayment = payBeforeTax + PPN;

const rewardPoints = Math.floor(payBeforeTax / RewardRate);

const freeShipping =
  isPremium || payBeforeTax > 1500000;

console.log("Subtotal:", Subtotal);
console.log("Member Discount:", memberDiscount);
console.log("Voucher:", Voucher);
console.log("Payment Before Tax:", payBeforeTax);
console.log("PPN:", PPN);
console.log("Final Payment:", finalPayment);
console.log("Reward Points:", rewardPoints);
console.log("Free Shipping:", freeShipping);