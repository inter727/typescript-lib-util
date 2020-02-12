import { Pick } from "./pick";
import { Exclude } from "./filter";

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>