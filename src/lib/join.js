'use strict'

const join = (arr, sep) => {
  let newArr = []
  for (let i = 0; i < arr.length; ++i) {
    newArr.push(arr[i])
    if (i < (arr.length - 1)) {
      newArr.push(sep)
    }
  }

  return newArr.join('')
}

export { join }
