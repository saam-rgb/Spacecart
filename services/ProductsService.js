//https://www.engineeringchoice.com/car-parts/
const PRODUCTS = [
  {
    id: 100,
    name: "Chetta belt Lube",
    price: 3050,
    image: require("../assets/products/lube-102.jpg"),
    description: "chain lube used to increase perfomance of car",
  },
  {
    id: 101,
    name: "SMX Sprocket",
    price: 6000,
    image: require("../assets/products/sprocket-101.jpg"),
    description: "Sprockets are useful",
  },
  {
    id: 102,
    name: "2jz engine",
    price: 2,
    image: require("../assets/products/lube-102.jpg"),
    description:
      "A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.",
  },
  {
    id: 103,
    name: "2JZ Engine",
    price: 69000,
    image: require("../assets/products/2jz-103.jpg"),
    description: "Toyota 2JZ ",
  },
];

export function getProducts() {
  return PRODUCTS;
}

export function getProduct(id) {
  return PRODUCTS.find((product) => product.id == id);
}
