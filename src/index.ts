type Person = {
  name: string;
  email: string;
  phone?: string; // string | undefined
};

const person1: Person = {
  name: "John Stack",
  email: "john@stack.com",
};

const person2: Person = {
  name: "John Stack",
  email: "john@stack.com",
  phone: "123456789",
};

console.log("Person 1", person1);
console.log("Person 2", person2);
