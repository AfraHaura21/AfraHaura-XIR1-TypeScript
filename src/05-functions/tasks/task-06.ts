/**
 * An online store wants to generate a daily sales dashboard. All transaction amounts are stored in an array.
 * Instead of writing one long program, the development team decides to split the calculations into reusable functions.
 * The dashboard should display:
 * - Total sales
 * - Highest transaction
 * - Lowest transaction
 * - Average transaction
 * - Number of transactions above Rp500,000
 *
 * Student Tasks
 * Create the following functions:
 */

const sales = [
  125000, 
  780000,
  250000, 
  99000, 
  540000, 
  670000, 
  180000, 
  450000, 
  310000, 
  820000,
];

function calculateTotalSales(sales: number[]): number {
  let total = 0;
  for (let i = 0; i < sales.length; i++) {
    total += sales[i];
  }

  return total;
}

function findHighestTransaction(sales: number[]): number {
  let highest = sales[0];
  for (let i = 1; i < sales.length; i++) {
    if (sales[i] > highest) {
      highest = sales[i];
    }
  }
  return highest;
}

function findLowestTransaction(sales: number[]): number {
  let lowest = sales[0];
  for (let i = 1; i < sales.length; i++) {
    if (sales[i] < lowest) {
      lowest = sales[i];
    }
  }
  return lowest;
}

function calculateAverageSale(sales: number[]): number {
  let total = 0;
  for (let i = 0; i < sales.length; i++) {
    total += sales[i];
  }
  return total / sales.length;
}

function countLargeTransactions(sales: number[], minimumAmount: number,): number {
  let count = 0;
  for (let i = 0; i < sales.length; i++) {
    if (sales[i] > minimumAmount) {
      count++;
    }
  }

  return count;
}

function displayReport(sales: number[]) {
  console.log("Laporan Penjualan Harian");
  console.log("Total Penjualan       : Rp. " + calculateTotalSales(sales));
  console.log("Transaksi Tertinggi   : Rp. " + findHighestTransaction(sales));
  console.log("Transaksi Terendah    : Rp. " + findLowestTransaction(sales));
  console.log("Rata-rata Transaksi   : Rp. " + calculateAverageSale(sales).toFixed(2),);
  console.log("Transaksi di atas Rp500.000 : " +countLargeTransactions(sales, 500000) + " transaksi");
}
displayReport(sales);
