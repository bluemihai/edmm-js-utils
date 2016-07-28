'use strict'

export default (arr) => {
  let output = 0
  for (let i = 0; i < (arr.length); ++i ) {
    output += arr[i]
  }
  return output
}
