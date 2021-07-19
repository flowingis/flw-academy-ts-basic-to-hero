// const value
{
  const value = "woooow";
  // Cannot assign to 'value' because it is a constant.
  value = "whooow";
}

// const object
{
  const me = {
    firstName: "Ned",
    lastName: "Flanders",
    age: 40,
  };
  me = {
    firstName: "Homer",
    lastName: "Simpson",
    age: 45,
  };
  me.firstName = "Homer";
  me.lastName = "Simpson";
  me.age = 45;
}

// const object with assertion
{
  const me = {
    firstName: "Ned",
    lastName: "Flanders",
    age: 40,
  } as const; // like type Person = { readonly firstName: string; readonly lastName: string; readonly age: number; };
  me = {
    firstName: "Homer",
    lastName: "Simpson",
    age: 45,
  };
  me.firstName = "Homer";
  me.lastName = "Simpson";
  me.age = 45;
}
