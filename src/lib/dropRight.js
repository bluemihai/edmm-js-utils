'use strict'

export default (arr, n) => {
  arr.splice(-n, n)
  return arr
}
