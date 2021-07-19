type Person = {
  name: string;
  age: number;
};

function logGet<Obj, Key extends keyof Obj>(obj: Obj, key: Key): Obj[Key] {
  const value = obj[key];
  console.log(`Getting`, key, value);
  return value;
}

function logSet<Obj, Key extends keyof Obj>(
  obj: Obj,
  key: Key,
  value: Obj[Key]
): void {
  console.log(`Setting`, key, value);
  obj[key] = value;
}

const person: Person = {
  name: "John",
  age: 30,
};

logGet(person, "name");
logGet(person, "age");
logGet(person, "foo");

logSet(person, "name", "Jane");
logSet(person, "age", 40);
logSet(person, "age", "40");
logSet(person, "foo", "bar");
