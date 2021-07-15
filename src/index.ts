const numberArray1: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numberArray2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const tuple1: [string, number] = ["foo", 42];
const tuple2: [number, number] = [41, 42];

console.log("tuple1 index 0", tuple1[0]);
console.log("tuple2 index 1", tuple2[1]);
// console.log("tuple2 index 2", tuple2[2]);
// Tuple type '[number, number]' of length '2' has no element at index '2'

/**
 * A tips with tuple
 */
let a = 1;
let b = 2;

console.log("Before", a, b);

[a, b] = [b, a];

console.log("After", a, b);
