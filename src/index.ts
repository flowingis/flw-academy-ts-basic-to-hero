/**
 * Functions
 */
function sum(a: number, b: number): number {
  return a + b;
}

function log(message: string): void {
  console.log(message);
}

console.log("sum", sum(1, 2));
log("Hello from Flowing Academy");

/**
 * Lambda
 */

type Sum = (a: number, b: number) => number;

const sumLambda: Sum = (a: number, b: number) => a + b;
let sumFn: Sum;

sumFn = function (a: number, b: number): number {
  // return value type can be inferred
  return a + b;
};

console.log("sumLambda", sumLambda(1, 2));
console.log("sumFn", sumFn(1, 2));
