type Point = { x: number; y: number };

class Animal {
  #position: Point = { x: 0, y: 0 };

  constructor(private _name: string) {}

  protected get name(): string {
    return this._name;
  }

  get position(): Point {
    return this.#position;
  }

  protected set position(value: Point) {
    this.#position = value;
  }

  public move(step: Point) {
    const oldPosition = this.#position;
    this.position = {
      x: this.#position.x + step.x,
      y: this.#position.y + step.y,
    };
    console.log(`${this.name} moved from `, oldPosition, "to", this.#position);
  }
}

let dog = new Animal("Dog");
dog.move({ x: 1, y: 2 });
// dog.position = { x: 1, y: 2 };
// Property 'position' is protected and only accessible within class 'Animal' and its subclasses.
console.log("Dog position", dog.position);

/**
 * Inheritance
 */
class Bird extends Animal {
  constructor() {
    super("Bird");
  }

  public override move(step: Point) {
    const oldPosition = this.position;
    this.position = {
      x: this.position.x + step.x,
      y: this.position.y + step.y,
    };
    console.log(`${this.name} fly from `, oldPosition, "to", this.position);
  }
}

let bird = new Bird();
bird.move({ x: 1, y: 2 });

/**
 * Difference from private field and private modifier
 */
(bird as any)._name = "Cat";
bird.move({ x: 1, y: 2 });
