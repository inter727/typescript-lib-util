import { Pick } from "./pick";
import { Exclude } from "./extract";

/**
 * Omit
 * @description 过滤T中的K属性
 * @example
 * // Expect: {name: string}
 * Omit<{name: string, age: number}, 'age'>
 */
export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>