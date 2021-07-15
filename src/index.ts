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

type Shape = Square | Rectangle;

const area = (shape: Shape): number => {
  switch (shape.kind) {
    case "square":
      return shape.size * shape.size;
    case "rectangle":
      return shape.width * shape.height;
    // case "circle":
    //   return Math.PI * shape.radius * shape.radius;
  }
};

const square: Square = { kind: "square", size: 2 };
const rectangle: Rectangle = { kind: "rectangle", width: 2, height: 3 };
const circle: Circle = { kind: "circle", radius: 2 };
console.log("square", area(square));
console.log("rectangle", area(rectangle));
// console.log("circle", area(circle));
