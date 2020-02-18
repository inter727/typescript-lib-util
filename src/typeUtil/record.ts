/**
 * Record
 * @description 联合类型中的值用作新类型的属性
 * @example
 * type Car = 'Audi' | 'BMW' | 'MercedesBenz'
 *
 * // Expect: {
 *   Audi: {age: number},
 *   BMW: {age: number},
 *   MercedesBenz: {age: number}
 * }
 * Record<Car, {age: number}>
 */
export type Record<K extends keyof any, U> = {[P in K]: U}