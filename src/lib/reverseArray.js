'use strict'

const reverseArray = arr => {
  let output = []
  for (let i = 0; i < (arr.length); ++i ) {
    output.push(arr[(arr.length - i - 1)])
  }
  return output
}

export { reverseArray }