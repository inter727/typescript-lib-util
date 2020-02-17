import { NonNullable } from "./nonNullable";

/**
 * PropertyName
 * @description 获取T的属性值为U的属性名
 * @example
 * // Expect: 'name' | 'sex'
 * PropertyName<{name: string, age: number, sex: string}, string>
 */
export type PropertyName<T, U> = {[K in keyof T]: T[K] extends U ? K : never}[keyof T]

/**
 * NullablePropertyName
 * @description 获取T的可选属性名
 * @example
 * // Expect: 'age' | 'sex'
 * PropertyName<{name: string, age?: number, sex?: string}>
 */
export type NullablePropertyName<T> = NonNullable<
  {[K in keyof T]: undefined extends T[K] ? K : never}[keyof T]
  >