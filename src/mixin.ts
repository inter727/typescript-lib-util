import { Compute } from "./compute";
import { Omit } from "./omit";
import {Overwrite} from "./overwrite";

export type Mixin<T extends object, U extends object> = T & Omit<U, keyof T>
export type Merge<T extends object, U extends object> = Overwrite<T, U> & Omit<U, keyof T>

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

interface A {
  a: string,
  b: number
}

interface B {
  b: string,
  c: boolean
}

type C = Merge<A, B>

let c: C = {
  a: '111',
  b: 'string',
  c: true
}