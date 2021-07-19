type Square = {
  kind: "square";
  size: number;
};

type Rectangle = {
  kind: "rectangle";
  width: number;
  height: number;
};

type Circle = {
  kind: "circle";
  radius: number;
};

type Shape = Square | Rectangle | Circle;

function area(shape: Shape): number {
  switch (shape.kind) {
    case "square":
      return shape.size * shape.size;
    case "rectangle":
      return shape.width * shape.height;
    case "circle":
      return Math.PI * shape.radius * shape.radius;
  }
  const _ensureAllCasesAreHandled: never = shape;
  return _ensureAllCasesAreHandled;
}

function areaOrThrowError(shape: Shape): number | never {
  switch (shape.kind) {
    case "square":
      return shape.size * shape.size;
    case "rectangle":
      return shape.width * shape.height;
  }
  throw new Error("Unknown shape");
}

console.log("Square", area({ kind: "square", size: 2 }));
console.log("Square", areaOrThrowError({ kind: "square", size: 2 }));
console.log("Rectangle", area({ kind: "rectangle", width: 2, height: 3 }));
console.log(
  "Rectangle",
  areaOrThrowError({ kind: "rectangle", width: 2, height: 3 })
);
console.log("Circle", area({ kind: "circle", radius: 2 }));
console.log("Circle", areaOrThrowError({ kind: "circle", radius: 2 }));
