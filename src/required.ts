export type Required<T> = {[K in keyof T]-?: T[K]}

export type DeepRequired<T> = {
  [K in keyof T]-?: T[K] extends object
    ? DeepRequired<T[K]>
    : T[K]
}