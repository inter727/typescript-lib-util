import { Pick } from "./pick";
import { Exclude } from "./extract";

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

interface A {
  a: string,
  b: number
}

interface B {
  b: string,
  c: boolean
}

type C = Omit<A, keyof B>

let c: C = {
  a: '111'
}