/**
 * Required
 * @description T的属性都改为必选
 * @example
 * // Expect {name: string, age: number}
 * Required<{name:string, age?: number}>
 */
export type Required<T> = {[K in keyof T]-?: T[K]}

/**
 * DeepRequired
 * @description T的属性都改为必选，包括属性的属性
 * @example
 * interface IProject {
 *  name: string,
 *  member?: {name: string, age?: number}
 * }
 *
 * // Expect: {
 *   name: string,
 *   member: {name: string, age: number}
 * }
 * DeepRequired<IProject>
 */
export type DeepRequired<T> = {
  [K in keyof T]-?: T[K] extends object
    ? DeepRequired<T[K]>
    : T[K]
}