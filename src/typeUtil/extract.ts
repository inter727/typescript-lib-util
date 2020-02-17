/**
 * Extract
 * @description T类型中U包含的类型
 * @example
 * // Expect: 'a'
 * Extract<'a' | 'b' | 'c', 'a' | 'd'>
 */
export type Extract<T, U> = T extends U ? T : never

/**
 * Exclude
 * @description T类型中U不包含的类型
 * @example
 * // Expect: 'b' | 'c'
 * Exclude<'a' | 'b' | 'c', 'a' | 'd'>
 */
export type Exclude<T, U> = T extends U ? never : T