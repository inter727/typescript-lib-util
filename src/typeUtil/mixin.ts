import { Omit } from "./omit";

/**
 * Mixin
 * @description 将U中的属性混入T中，不改变T中相同属性的值
 * @example
 * type UserA = {name: string, age: number}
 * type UserB = {age: string, sex: string}
 *
 * // Expect: {name: string, age: number, sex: string}
 * Mixin<UserA, UserB>
 */
export type Mixin<T extends object, U extends object> = T & Omit<U, keyof T>

/**
 * Merge
 * @description 将U中的属性合入T中，相同属性的值会覆盖
 * @example
 * type UserA = {name: string, age: number}
 * type UserB = {age: string, sex: string}
 *
 * // Expect: {name: string, age: string, sex: string}
 * Merge<UserA, UserB>
 */
export type Merge<T extends object, U extends object> = U & Omit<T, keyof U>