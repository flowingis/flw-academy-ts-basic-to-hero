class Cat {
  meow() {
    return "Meow!";
  }
}

class Dog {
  bark() {
    return "Woof!";
  }
}

type Animal = Cat | Dog;

const speak = (animal: Animal): void => {
  if (animal instanceof Cat) {
    return console.log(animal.meow());
  }

  if (animal instanceof Dog) {
    return console.log(animal.bark());
  }

  throw new Error("Unknown animal");
};

speak(new Cat());
speak(new Dog());

type Square = {
  size: number;
};

type Rectangle = {
  width: number;
  height: number;
};

type Shape = Square | Rectangle;

const area = (shape: Shape): number => {
  if ("size" in shape) {
    return shape.size * shape.size;
  }

  if ("width" in shape) {
    return shape.width * shape.height;
  }

  throw new Error("Unknown shape");
};

console.log("square", area({ size: 2 }));
console.log("rectangle", area({ width: 2, height: 3 }));
