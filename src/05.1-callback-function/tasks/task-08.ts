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

const names = prosessData(transactions, (trs) => trs.customer);

const results = prosessData(transactions, (trs) => {
    let category = "LOW VALUE";
    if (trs.amount >= 2000000) category = "HIGH VALUE";
    else if (trs.amount >= 1000000) category = "MEDIUM VALUE";

    let rate = 0;
    if (trs.status === "paid") rate = 0.02;
    else if (trs.status === "pending") rate = 0.01;

    return {
    ...trs,
    category: category,
    platformFee: trs.amount * rate
    };

})

console.log("NAMA:", names);
console.log("HASIL ANALISIS:", results);