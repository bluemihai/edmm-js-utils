'use strict'

export default (arr) => {
  let check = arr[0]
  if (arr === [] || arr === false) {
    return undefined
  }
  for (let element of arr) {
    if (element > check) {
      check = element
    }
  }
  return check
}
