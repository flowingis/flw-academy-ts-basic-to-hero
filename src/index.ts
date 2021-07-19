type NameFields = { firstName: string; lastName: string };

function addFullName<T extends NameFields>(obj: T): T & { fullName: string } {
  return {
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`,
  };
}

const person = { firstName: "Jane", lastName: "Doe" };
const personWithFullName = addFullName(person);

console.log("Person", person.firstName, person.lastName);
console.log(
  "Person with full name",
  personWithFullName.firstName,
  personWithFullName.lastName,
  personWithFullName.fullName
);
