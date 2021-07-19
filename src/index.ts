function reverseAndSort(input: number[]): number[] {
  return input.sort().reverse();
}

function reverseAndSortReadOnly(input: readonly number[]): number[] {
  return input.slice().sort().reverse();
}

console.log("reverseAndSort --> start");
{
  const array = [1, 2, 3, 4, 5];
  console.log("Array", array);
  const array1Result = reverseAndSort(array);
  console.log("reverseAndSort", array1Result);
  console.log("Array Result", array);
}
console.log("reverseAndSort --> end");

console.log("reverseAndSortReadOnly --> start");
{
  const array = [1, 2, 3, 4, 5];
  console.log("Array", array);
  const array1Result = reverseAndSortReadOnly(array);
  console.log("reverseAndSortReadOnly", array1Result);
  console.log("Array Result", array);
}
console.log("reverseAndSortReadOnly --> end");

console.log("Tuple --> start");
{
  type Point = [number, number];
  let p: Point = [1, 2];

  const move = (point: Point, x: number, y: number): Point => {
    point[0] += x;
    point[1] += y;

    return point;
  };

  console.log("move", move(p, 1, 2));
  console.log("move", move(p, 1, 2));
  console.log("point", p);
}
console.log("Tuple --> end");

console.log("Tuple Readonly --> start");
{
  type Point = readonly [number, number];
  let p: Point = [1, 2];

  const move = (point: Point, x: number, y: number): Point => {
    // Cannot assign to '0' because it is a read-only property.
    // point[0] += x;
    // Cannot assign to '1' because it is a read-only property.
    // point[1] += y;
    return [point[0] + x, point[1] + y];
  };

  console.log("move", move(p, 1, 2));
  console.log("move", move(p, 1, 2));
  console.log("point", p);
}
console.log("Tuple Readonly --> end");
