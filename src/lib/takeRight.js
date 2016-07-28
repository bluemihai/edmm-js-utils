'use strict'

export default (arr, num = 1) => {
  let output = []
  let counter = [...Array(num).keys()]
  counter.map(idx => {
    output[counter.length - idx -1] = arr.pop()
  })  
  return output
}
