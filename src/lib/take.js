'use strict'

export default (arr, num = 1) => {
  let output = []
  arr.forEach(ArrayFunc)
  function ArrayFunc(element, index, array) {
    if (index < num){
      output.push(element)
    }
  }

  return output
}
