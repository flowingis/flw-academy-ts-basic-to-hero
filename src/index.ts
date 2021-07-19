// no mapped types
{
  type Point = {
    x: number;
    y: number;
  };

  type ReadOnlyPoint = {
    readonly x: number;
    readonly y: number;
  };

  const p: Point = { x: 1, y: 2 };
  p.x = 3;
  p.y = 4;
  const rp: ReadOnlyPoint = { x: 1, y: 2 };
  rp.x = 3;
  rp.y = 4;
}

// with mapped types
{
  type Point = {
    x: number;
    y: number;
  };

  type ReadOnly<T> = {
    readonly [K in keyof T]: T[K];
  };

  const p: Point = { x: 1, y: 2 };
  p.x = 3;
  p.y = 4;
  const rp: ReadOnly<Point> = { x: 1, y: 2 };
  rp.x = 3;
  rp.y = 4;
}
