import { Pick } from "./pick";
import { Extract } from "./extract";

export type Intersection<T extends object, U extends object> = Pick<T, Extract<keyof T, keyof U>>

type Props = { name: string; age: number; visible: boolean };
type DefaultProps = { age: number };

// Expect: { age: number; }
type DuplicatedProps = Intersection<Props, DefaultProps>;

let a: DuplicatedProps = {
  age: 111
}