/**
 * Declarations Merging
 * Familiarity (extends)
 */

interface IInputProps {
  type: "text" | "email";
  value: string;
  onChange: (value: string) => void;
}
