import { NonNullable } from "./nonNullable";

export type PropertyName<T, U> = {[K in keyof T]: T[K] extends U ? K : never}[keyof T]

type NullableKey<T> = {[K in keyof T]: undefined extends T[K] ? K : never}[keyof T]
export type NullablePropertyName<T> = NonNullable<NullableKey<T>>

interface Part {
  id: string;
  name?: string;
  subParts?: Part[];
  updatePart(newName: string): void;
}

type T = PropertyName<Part, Function>
type R = NullablePropertyName<Part>

let a: T = "updatePart"
let b: R = "name"