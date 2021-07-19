type UnboxingArray<T> = T extends Array<infer Member> ? Member : T;

type UnboxingArrayString = UnboxingArray<string[]>; // string
type UnboxingArrayNumber = UnboxingArray<number[]>; // number
type UnboxingString = UnboxingArray<string>; // string

function f() {
  return {
    a: [1, 2, 3],
  };
}

type ReturnTypeExample<T> = T extends (...args: unknown[]) => infer R ? R : any;

type FResultTypeExample = ReturnTypeExample<typeof f>; // { a: number[]; }
type FResultTypeStringExample = ReturnTypeExample<string>; // any
// ReturnType is out of the box
type FResultType = ReturnType<typeof f>; // { a: number[]; }
