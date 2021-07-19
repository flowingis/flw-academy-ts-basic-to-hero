function reverse(value: string): string;
function reverse<T>(array: Array<T>): Array<T>;
function reverse<T = any>(arg: string | Array<T>): string | Array<T> {
  if (typeof arg === "string") {
    return arg.split("").reverse().join("");
  }
  return arg.slice().reverse();
}

console.log("Reverse string", reverse("Hello world"));
console.log("Reverse array", reverse(["Hello", "Word"]));
