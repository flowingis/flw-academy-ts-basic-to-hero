class Person {
  constructor(private age: number) {}

  growOlder(): void {
    this.age++;
  }

  //   growOlder: () => void = () => {
  //     this.age++;
  //   };

  getAge(): number {
    return this.age;
  }
}

const p = new Person(0);
p.growOlder();
console.log("Age 1", p.getAge());

const growOlder = p.growOlder;
growOlder();
console.log("Age 2", p.getAge());
