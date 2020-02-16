export type Overwrite<T extends object, U extends object> = {
  [K in keyof T]: K extends keyof U ? U[K]: T[K]
}