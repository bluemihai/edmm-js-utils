'use strict'

const pick = (obj, arr) => {
  const newObj = {}
  arr.map((x) => newObj[x] = obj[x] )
  return newObj
}

export { pick }
