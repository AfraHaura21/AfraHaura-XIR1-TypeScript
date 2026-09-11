/**
 * An online store has customer orders.
 * Tasks:
 * 1. Get only completed orders.
 * 2. Calculate the total value of each order.
 * 3. Find the customer who spent the most.
 * 4. Calculate the total revenue from completed orders.
 * 5. Find all products that have been purchased.
 */
const orders = [
    {
        id: 101,
        customer: "Andi",
        status: "completed",
        items: [
            { product: "Keyboard", price: 350000, quantity: 1 },
            { product: "Mouse", price: 150000, quantity: 2 },
        ],
    },
    {
        id: 102,
        customer: "Budi",
        status: "cancelled",
        items: [
            { product: "Monitor", price: 2500000, quantity: 1 },
        ],
    },
    {
        id: 103,
        customer: "Citra",
        status: "completed",
        items: [
            { product: "Monitor", price: 2500000, quantity: 2 },
            { product: "Keyboard", price: 350000, quantity: 1 },
        ],
    },
];
//  Get only completed orders.
const completedOrders = orders.filter((order) => order.status === "completed");
console.log("1. Complete Orders:", JSON.stringify(completedOrders, null, 2));

// Calculate the total value of each order.
const orderTotals = orders.map((order) => {
    const total = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return { id: order.id, customer: order.customer, total: total };
});
console.log("2. Total Value Each Order:", orderTotals);

// Find the customer who spent the most.
const completedTotals = orderTotals.filter(o => {
    const matchedOrder = orders.find(ord => ord.id === o.id);
    return matchedOrder ? matchedOrder.status === "completed" : false;
});
const highestSpender = completedTotals.reduce((highest, order) => order.total > highest.total ? order : highest);
console.log("3. Customer Who Spent the Most:", { customer: highestSpender.customer, totalSpent: highestSpender.total });

// Calculate the total revenue from completed orders.

const totalRevenue = completedTotals.reduce((sum, order) => sum + order.total, 0);
console.log("4. Total Revenue:", totalRevenue);

// Find all products that have been purchased.
const purchasedProducts = [...new Set(completedOrders.flatMap((order) => order.items.map((item) => item.product)))];
console.log("5. Purchased Products:", purchasedProducts);