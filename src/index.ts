type Direction = "left" | "right" | "up" | "down";

let direction: Direction = "left";
// direction = "Left";
// Type '"Left"' is not assignable to type 'Direction'.
direction = "right";

type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;

const rollDice = () => Math.floor(Math.random() * 6 + 1) as DiceValue;

// This condition will always return 'false' since the types 'DiceValue' and '7' have no overlap.ts(2367)
// if (rollDice() === 7) {
//   throw new Error("Not Possible");
// }
