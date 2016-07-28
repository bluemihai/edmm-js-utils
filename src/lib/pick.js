'use strict'

export default (obj, arr) => {
  const newObj = {}
  arr.map((x) => newObj[x] = obj[x] )
  return newObj
}
