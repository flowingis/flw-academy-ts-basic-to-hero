type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends bigint
  ? "bigint"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undefined"
  : T extends symbol
  ? "symbol"
  : T extends Function
  ? "function"
  : T extends null
  ? "null"
  : "object";

const typeName = <T>(obj: T): TypeName<T> => {
  if (obj === null) return "null" as TypeName<T>;
  return typeof obj as TypeName<T>;
};

const stringType = typeName("string"); // "string"
const numberType = typeName(10); // "number"
const bigIntType = typeName(10n); // "bigint"
const booleanType = typeName(true); // "boolean"
const undefinedType = typeName(undefined); // "undefined"
const symbolType = typeName(Symbol()); // "symbol"
const functionType = typeName(() => "result"); // "function"
const nullType = typeName(null); // "null"
const objectType = typeName({ name: "name" }); // "object"
