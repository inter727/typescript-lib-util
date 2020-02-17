/**
 * Pick
 * @description 获取T中的K属性
 * @example
 * // Expect: {name: string}
 * Pick<{name: string, age: number}, 'name'>
 */
export type Pick<T, K extends keyof T> = {[P in K]: T[P]}