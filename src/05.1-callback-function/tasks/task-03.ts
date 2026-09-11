/**
 * An online store has the following products:
 */
type Produk = {
  name: string;
  price: number;
};
const products: Produk[] = [
    { name: "Keyboard", price: 850000 },
    { name: "Mouse", price: 275000 },
    { name: "Monitor", price: 2200000 },
    { name: "Headset", price: 650000 }
];

/**
 * The warehouse system needs to perform different operations on the same product list.
 * 1. Operation for display product
 * Keyboard - Rp850000
 * Mouse - Rp275000
 * Monitor - Rp2200000
 * Headset - Rp650000
 * 
 * 2. Display expensive products - Only products with a price above Rp1,000,000 should be displayed.
 * 3. Display products that cost more than Rp500,000 and show a 10% discount price.
 * 
 * Instead of creating a separate loop for every operation, the developer creates a reusable processing function.
 */
function prosesProduk(listProduk: Produk[], aksi: (p: Produk) => void): void {
  for (const produk of listProduk) {
    aksi(produk);
  }
}

console.log("Semua Produk");
prosesProduk(products, (p) => {
  console.log(`${p.name} - Rp${p.price}`);
});

console.log("2. Produk Mahal");
prosesProduk(products, (p) => {
  if (p.price > 1000000) {
    console.log(`${p.name} - Rp${p.price}`);
  }
});     

console.log("Produk Diskon 10%");
prosesProduk(products, (p) => {
  if (p.price > 500000) {
    const hargaDiskon = p.price * 0.9;
    console.log(`${p.name} - Rp${hargaDiskon}`);
  }
});