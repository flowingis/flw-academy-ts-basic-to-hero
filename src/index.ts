// add optional modifier
{
  type Point = {
    x: number;
    y: number;
  };

  type WithPartial<T> = {
    [K in keyof T]?: T[K];
  };

  type PointWithOptional = WithPartial<Point>; // { x?: number | undefined; y?: number | undefined; }
  // out of the box Type
  type PartialPoint = Partial<Point>; // { x?: number | undefined; y?: number | undefined; }
}

// add required modifier
{
  type Point = {
    x?: number;
    y?: number;
  };

  type WithRequired<T> = {
    [K in keyof T]-?: T[K];
  };

  type PointWithRequired = WithRequired<Point>; // { x: number; y: number; }
  // out of the box Type
  type RequiredPoint = Required<Point>; // { x?: number | undefined; y?: number | undefined; }
}

// add readonly modifiers
{
  type Point = {
    x: number;
    y: number;
  };

  type WithReadonly<T> = {
    readonly [K in keyof T]-?: T[K];
  };

  type PointWithReadonly = WithReadonly<Point>; // { readonly x: number; readonly y: number; }
  // out of the box Type
  type ReadonlyPoint = Readonly<Point>; // { readonly x: number; readonly y: number; }
}

// remove readonly modifiers
{
  type Point = {
    readonly x: number;
    readonly y: number;
  };

  type WithoutReadonly<T> = {
    -readonly [K in keyof T]-?: T[K];
  };

  type PointWithoutReadonly = WithoutReadonly<Point>; // { x: number; y: number; }
}
