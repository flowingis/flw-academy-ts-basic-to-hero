class Queue<T> {
  private queue: T[] = [];

  push(item: T) {
    this.queue.push(item);
  }

  pop() {
    return this.queue.shift();
  }
}

const queue = new Queue<number>();
queue.push(1);
queue.push(2);
console.log("queue pop", queue.pop());

type Catalog<TProduct> = { products: TProduct[] };
type Bike = { name: string; price: number };

type BikesCatalog = Catalog<Bike>;

const bikesCatalog: Catalog<Bike> = {
  products: [
    {
      name: "A",
      price: 100,
    },
    {
      name: "B",
      price: 200,
    },
  ],
};

console.log("bikes", bikesCatalog.products);

// bikesCatalog.products.push({
//   name: "prova",
// });
// Property 'price' is missing in type '{ name: string; }' but required in type 'Bike'.
