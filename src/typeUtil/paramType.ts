/**
 * ParamType
 * @description 取出T的参数类型
 * @example
 * // Expect: string
 * ParamType<(param: string) => string>
 */
export type ParamType<T> = T extends (...args: Array<infer P>) => any ? P : T