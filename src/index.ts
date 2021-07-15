type Point2D = {
  readonly x: number;
  readonly y: number;
};

const point2D: Point2D = { x: 1, y: 2 };
// point2D.x = 2;
// Cannot assign to 'x' because it is a read-only property.

// but you could do this
(point2D as any).x = 2;

console.log("point2D", point2D);

// so i suggestion to do this
const point2DFreeze: Point2D = Object.freeze({ x: 1, y: 2 });
// (point2DFreeze as any).x = 2;
// throw TypeError: Cannot assign to read only property 'x' of object '#<Object>'

class Point3D {
  public readonly z: number;

  constructor(public readonly x: number, public readonly y: number, z: number) {
    this.z = z;
  }
}

const point3D = new Point3D(1, 2, 3);
// point3D.x = 2;
// Cannot assign to 'x' because it is a read-only property.

// it's possible do this
// but the fields in this case can be modify by an internal method
class Point3DGetter {
  constructor(private _x: number, private _y: number, private _z: number) {}

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  get z() {
    return this._z;
  }
}

const point3DGetter = new Point3DGetter(1, 2, 3);
// point3DGetter.x = 2;
// Cannot assign to 'x' because it is a read-only property.

/**
 * Advanced type
 */
type Point4D = Readonly<{
  x: number;
  y: number;
  z: number;
  w: number;
}>;
