const padLeft = (value: string, padding: number | string): string => {
  if (typeof padding === "number") return Array(padding + 1).join(" ") + value;

  if (typeof padding === "string") return padding + value;

  throw new Error(`Invalid padding! Expected number of string, got ${padding}`);
};

console.log(padLeft("foo", 3));
console.log(padLeft("foo", "    "));
console.log(padLeft("foo", "----"));
// console.log(padLeft("foo", false);
