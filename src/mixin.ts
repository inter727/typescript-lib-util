import { Compute } from "./compute";
import { Omit } from "./omit";

export type Merge<T extends object, U extends object> = Compute<T & Omit<U, keyof T>>

interface IObject {
  [key: string]: any
}

export default function mixin <T extends IObject, U extends IObject> (f: T, s: U): T & U {
  let result = <T & U>{}
  for (let k in f) {
    (<T>result)[k] = f[k]
  }
  for (let k in s) {
    if (k in f) { continue }
    (<U>result)[k] = s[k]
  }
  return result
}