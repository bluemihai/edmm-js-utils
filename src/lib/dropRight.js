'use strict'

const dropRight = (arr, n) => {
  arr.splice(-n, n)
  return arr
}


export { dropRight }
