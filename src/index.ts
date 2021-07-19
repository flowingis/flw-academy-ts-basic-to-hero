type Person = {
  name: string;
  birthDate?: Date;
};

function loadPerson(): Person | undefined {
  if (Math.random() >= 0.5) return undefined;

  return {
    name: "John Doe",
    birthDate: Math.random() >= 0.5 ? new Date(1940, 10, 10) : undefined,
  };
}

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

function assertDate(value: unknown): asserts value is Date {
  if (value instanceof Date) return;
  throw new Error("Expected a date");
}

const person = loadPerson();

assert(person, "person should be defined");
console.log("Person name", person.name);

assertDate(person.birthDate);
console.log("Person BirthDate", person.birthDate.toISOString());
