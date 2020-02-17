/**
 * Overwrite
 * @description U的属性覆盖T的相同属性
 * @example
 * type UserA = {name: string, age: number}
 * type UserB = {age: string, sex: string}
 *
 * // Expect: {name: string, age: string}
 * Overwrite<UserA, UserB>
 */
export type Overwrite<T extends object, U extends object> = {
  [K in keyof T]: K extends keyof U ? U[K]: T[K]
}