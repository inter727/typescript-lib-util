/**
 * Partial
 * @description T的属性都改为可选
 * @example
 * // Expect {name?: string, age?: number}
 * Partial<{name:string, age: number}>
 */
export type Partial<T> = {[K in keyof T]?: T[K]}

/**
 * DeepPartial
 * @description T的属性都改为可选，包括属性的属性
 * @example
 * interface IProject {
 *  name: string,
 *  member: {name: string, age: number}
 * }
 *
 * // Expect: {
 *   name?: string,
 *   member?: {name?: string, age?: number}
 * }
 * DeepPartial<IProject>
 */
export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object
    ? DeepPartial<T[K]>
    : T[K]
}