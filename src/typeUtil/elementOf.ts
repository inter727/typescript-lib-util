/**
 * ElementOf
 * @description 元祖转联合类型
 * @example
 * // Expect: string | number | boolean
 * ElementOf<[string, number, string, boolean]>
 */
export type ElementOf<T> = T extends Array<infer P> ? P : T