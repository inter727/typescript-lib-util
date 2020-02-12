export type Compute<T extends any> = T extends Function ? T : {[K in keyof T]: T[K]}