/**
 * ReturnType
 * @description 取出T的返回类型
 * @example
 * // Expect: number
 * ReturnType<(param: string) => number>
 */
export type ReturnType<T> = T extends (...args: any[]) => infer P ? P : T