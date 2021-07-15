const isBoolean: boolean = true;
const isString: string = "string";
const isNumber: number = 1;

const notDefined: undefined = undefined;
const notPresent: null = null;

const isSymbol: symbol = Symbol("isSymbol");
const isBigInt: bigint = 24n; // from ES2020

console.log("boolean", isBoolean, typeof isBoolean, isBoolean === true);
console.log("string", isString, typeof isString, isString === "string");
console.log("number", isNumber, typeof isNumber, isNumber === 1);

console.log(
  "undefined",
  notDefined,
  typeof notDefined,
  notDefined === undefined
);
console.log("null", notPresent, typeof notPresent, notPresent === null); // take care of this

console.log(
  "symbol",
  isSymbol,
  typeof isSymbol,
  Symbol.for("isSymbol") === isSymbol
);
console.log("bigint", isBigInt, typeof isBigInt, isBigInt === 24n);
