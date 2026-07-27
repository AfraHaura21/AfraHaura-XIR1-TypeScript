/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */
type Product ={
productCode: string;
productName: string;
sellingPrice: number;
stockQuantity: number;
productWeight: number;
averageCustomerRating: number;
isDiscounted: boolean;    
}

const product1: Product = {
    productCode: "SNI-12345",
    productName: "Nabati Strawberry",
    sellingPrice: 10000,
    stockQuantity: 200,
    productWeight: 10,
    averageCustomerRating: 5.0,
    isDiscounted: false,
}
const product2: Product = {
    productCode: "STNK-23456",
    productName: "Nabati Vanilla",
    sellingPrice: 10000,
    stockQuantity: 203,
    productWeight: 10,
    averageCustomerRating: 4.3,
    isDiscounted: true,
}
const product3: Product = {
    productCode: "KTP-11111",
    productName: "Nabati Chocolate",
    sellingPrice: 10000,
    stockQuantity: 100,
    productWeight: 10,
    averageCustomerRating: 4.8,
    isDiscounted: false,
}
console.log("Data Product");
console.log({product1,product2,product3});

