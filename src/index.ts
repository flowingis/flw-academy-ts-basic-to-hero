function add(a: number, b: number) {
  return a + b;
}

console.log(add(1, 2));

class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  move(x: number, y: number): void {
    this.x += p.x;
    this.y += p.y;
    console.log(`Point move to x: ${this.x} y: ${this.y}`);
  }
}

const p = new Point(0, 0);

p.move(1, 2);

type User = { name: string; age: number };

const users: Array<User> = [
  { name: "John", age: 30 },
  { name: "Mary", age: 40 },
];

function getUserAge(name: string): number {
  const user = users.find(u => u.name === name);
  if (!user) throw new Error(`User ${name} not found`);
  return user.age;
}

console.log(`User 'Bro' has ${getUserAge("Bro")}`);
