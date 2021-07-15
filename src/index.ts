function add(a, b) {
  return a + b;
}

console.log(add(1, 2));
console.log(add("Hello", "World"));

class Point {
  x: number;
  y: number;

  move(x: number, y: number): void {
    this.x += p.x;
    this.y += p.y;
    console.log(`Point move to x: ${this.x} y: ${this.y}`);
  }
}

const p = new Point();

p.move(1, 2);

type User = { name: string; age: number };

const users: Array<User> = [
  { name: "John", age: 30 },
  { name: "Mary", age: 40 },
];

function getUserAge(name: string): number {
  return users.find(u => u.name === name).age;
}

console.log(`User 'Bro' has ${getUserAge("Bro")}`);
