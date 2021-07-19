type Dictionary<T> = {
  [key: string]: T;
};

type Person = {
  name: string;
  age: number;
};

type Animal = {
  name: string;
};

const people: Dictionary<Person> = {};

people["john"] = { name: "john", age: 30 };
people["mary"] = { name: "mary", age: 40 };
people["peter"] = { name: "peter", age: 20 };

console.log("People", people);

const animals: Dictionary<Animal> = {};

animals["cat"] = { name: "cat" };
animals["dog"] = { name: "dog" };
animals["bird"] = { name: "bird" };

console.log("Animals", animals);
