export type Partial<T> = {[K in keyof T]?: T[K]}

export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object
    ? DeepPartial<T[K]>
    : T[K]
}