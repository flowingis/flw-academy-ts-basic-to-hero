type SnackBars = {
  name: "Short Chocolate Bars";
  amount: 4;
  candy: true;
};

type Gumballs = {
  name: "Gooey Gumballs";
  color: "green" | "purples";
  candy: true;
};

type Apples = {
  name: "Apples";
  candy: true;
};

type Cookies = {
  name: "Cookies";
  candy: true;
  peanuts: true;
};

type SnickersBar = {
  name: "Snickers Bar";
  candy: true;
  peanuts: true;
};

type Toothpaste = {
  name: "Toothpaste";
  minty: true;
  trick: true;
};

type Pencil = {
  name: "Pencil";
  trick: true;
};

type HalloweenTricksAndSweets =
  | SnackBars
  | Gumballs
  | Apples
  | SnickersBar
  | Cookies
  | Toothpaste
  | Pencil;

type AllCandies<T> = T extends { candy: true } ? T : never;
type AllTricks<T> = T extends { trick: true } ? T : never;
type AllCandiesWithoutPeanuts<T> = T extends { candy: true }
  ? T extends { peanuts: true }
    ? never
    : T
  : never;

type Candies = AllCandies<HalloweenTricksAndSweets>; // SnackBars | Gumballs | Apples | SnickersBar | Cookies
type Tricks = AllTricks<HalloweenTricksAndSweets>; // Toothpaste | Pencil
type CandiesWithoutPeanuts = AllCandiesWithoutPeanuts<HalloweenTricksAndSweets>; // SnackBars | Gumballs | Apples

function isCandy(
  tricksAndSweets: HalloweenTricksAndSweets
): tricksAndSweets is Candies {
  return "candy" in tricksAndSweets && tricksAndSweets.candy;
}

function isTrick(
  tricksAndSweets: HalloweenTricksAndSweets
): tricksAndSweets is Tricks {
  return "trick" in tricksAndSweets && tricksAndSweets.trick;
}

function isCandyWithoutPeanuts(
  tricksAndSweets: HalloweenTricksAndSweets
): tricksAndSweets is CandiesWithoutPeanuts {
  return isCandy(tricksAndSweets) && !("peanuts" in tricksAndSweets);
}
