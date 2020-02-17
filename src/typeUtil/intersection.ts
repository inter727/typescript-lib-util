import { Pick } from "./pick";
import { Extract } from "./extract";

/**
 * Intersection
 * @description 取出存在于U中的T的属性
 * @example
 * type UserA = {name: string, age: number}
 * type UserB = {age: number, sex: string}
 *
 * // Expect: {age: number}
 * Intersection<UserA, UserB>
 */
export type Intersection<T extends object, U extends object> = Pick<T, Extract<keyof T, keyof U>>