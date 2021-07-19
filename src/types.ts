/**
 * Unions (|)
 * Intersection (&)
 * Primitive types: string, number, boolean, symbol, void, any, null
 * Shorthand functions
 * Advanced Type Functions
 */

type InputOnChange = (value: string) => void;

type InputValue = string;

type InputPropsType = "text" | "email";

type InputProps = {
  type: InputPropsType;
  value: InputValue;
  onChange: InputOnChange;
};
