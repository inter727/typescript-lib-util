export type Extract<T, U> = T extends U ? T : never

export type Exclude<T, U> = T extends U ? never : T