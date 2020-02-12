export default function pick <T, K extends keyof T> (o: T, arr: K[]): T[K][] {
  return arr.map(n => o[n])
}


