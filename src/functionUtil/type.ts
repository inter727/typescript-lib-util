export const isString = function (param: any): param is string {
  return typeof param === 'string'
}

export const isNumber = function (param: any): param is number {
  return typeof param === 'number'
}

export const isArray = function (param: any): param is [] {
  return Array.isArray(param)
}