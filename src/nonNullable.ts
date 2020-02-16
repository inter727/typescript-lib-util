import { Exclude } from "./extract";

export type NonNullable<T> = Exclude<T, undefined | null>