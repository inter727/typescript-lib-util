import { Exclude } from "./extract";

/**
 * NonNullable
 * @description 过滤掉T类型中undefined和null类型
 * @example
 * // Expect: string
 * NonNullable<string | undefined | null>
 */
export type NonNullable<T> = Exclude<T, undefined | null>