import {PropertyName} from "./typeUtil/propertyName";

interface Action<T> {
  payload?: T
  type: string
}

class EffectModule {
  count = 1;
  message = "hello!";

  delay(input: Promise<number>) {
    return input.then(i => ({
      payload: `hello ${i}!`,
      type: 'delay'
    }))
  }

  setMessage(action: Action<Date>) {
    return {
      payload: action.payload!.getMilliseconds(),
      type: "set-message"
    };
  }
}

type Connected = {
  delay(input: number): Action<string>
  setMessage(action: Date): Action<number>
}

type asyncMethod<T, U> = (input: Promise<T>) => Promise<Action<U>>
type asyncMethodConnect<T, U> = (input: T) => Action<U>
type syncMethod<T, U> = (action: Action<T>) => Action<U>
type syncMethodConnect<T, U> = (action: T) => Action<U>

type Connect = (module: EffectModule) => {
  [K in PropertyName<EffectModule, Function>]: EffectModule[K] extends asyncMethod<infer T, infer U>
    ? asyncMethodConnect<T, U>
    : EffectModule[K] extends syncMethod<infer T, infer U>
      ? syncMethodConnect<T, U>
      : never
}

const effectModule = new EffectModule()
const connect: Connect = (module: EffectModule) => ({
  delay(input: number) {
    return {
      payload: `hello ${input}!`,
      type: 'delay'
    }
  },
  setMessage(action: Date) {
    return {
      payload: action.getMilliseconds(),
      type: "set-message"
    }
  }
})
const connected: Connected = connect(effectModule)