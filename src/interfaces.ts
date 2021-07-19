/**
 * Interface
 */
interface IPoint2D {
  x: number;
  y: number;
}

interface IPoint3D extends IPoint2D {
  z: number;
}

/**
 * Interface Declaration Merging
 */
interface IRequest {
  body: any;
}

interface IRequest {
  json: any;
}

function handle(req: IRequest) {
  return {
    body: req.body,
    json: req.json,
  };
}
