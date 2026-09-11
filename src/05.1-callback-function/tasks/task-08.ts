/**
 * A company has a simple data-processing engine used to analyze transaction records.
 */

type Transaction = {
    id: string;
    customer: string;
    amount: number;
    status: "paid" | "pending" | "cancelled";
}
const transactions: Transaction[] = [
    {
        id: "TRX001",
        customer: "Alya",
        amount: 850000,
        status: "paid"
    },
    {
        id: "TRX002",
        customer: "Budi",
        amount: 1250000,
        status: "pending"
    },
    {
        id: "TRX003",
        customer: "Citra",
        amount: 450000,
        status: "paid"
    },
    {
        id: "TRX004",
        customer: "Dimas",
        amount: 2100000,
        status: "paid"
    },
    {
        id: "TRX005",
        customer: "Eka",
        amount: 780000,
        status: "cancelled"
    }
];

/** TASKS:
 * - Extract customer's name only in array
 * - Determine Transaction Category with rules below:
 *   - ≥ Rp2,000,000 → HIGH VALUE
 *   - ≥ Rp1,000,000 → MEDIUM VALUE
 *   - < Rp1,000,000 → LOW VALUE
 * - Calculate platform fee:
 *   - Paid transactions → 2%
 *   - Pending transactions → 1%
 *   - Cancelled transactions → 0%
 */

function prosessData<T>(arr: Transaction[], callback: (item: Transaction) => T): T[] {
    return arr.map(callback);
}

const names = prosessData(transactions, (trx) => trx.customer);

const results = prosessData(transactions, (trx) => {
    let category = "LOW VALUE";
    if (trx.amount >= 2000000) category = "HIGH VALUE";
    else if (trx.amount >= 1000000) category = "MEDIUM VALUE";

    let rate = 0;
    if (trx.status === "paid") rate = 0.02;
    else if (trx.status === "pending") rate = 0.01;

    return {
    ...trx,
    category: category,
    platformFee: trx.amount * rate
    };

})

console.log("NAMA:", names);
console.log("HASIL ANALISIS:", results);