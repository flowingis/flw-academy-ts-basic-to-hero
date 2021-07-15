type Point = { x: number; y: number };

const pointValid = { x: 0, y: 0 };
const pointInvalid = { z: 1, y: 1 };

const assignPointValid: Point = pointValid;
// const assignPointInvalid: Point = pointInvalid;
// const assignPointInvalid: Point = pointInvalid as unknown as Point;

console.log("pointValid", pointValid);
console.log("pointInvalid", pointInvalid);
console.log("assignPointValid", assignPointValid);
// console.log("assignPointInvalid", assignPointInvalid);

type Point2D = { x: number; y: number };
type Point3D = { x: number; y: number; z: number };

let point2D: Point2D = { x: 1, y: 2 };
let point3D: Point3D = { x: 1, y: 2, z: 3 };
point2D = point3D;
// point3D = point2D;
// Property 'z' is missing in type 'Point2D' but required in type 'Point3D'
