import { Exclude } from "./filter";

export type NonNullable<T> = Exclude<T, undefined | null>