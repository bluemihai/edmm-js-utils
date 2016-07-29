'use strict'

export default (arr, size) => {
  let newArr = []
  let innerArr = []

  for (let i = 0; i < arr.length; ) {
    innerArr = []
    for (let j = 0; j < size; ++j) {
      if (arr[i]) {innerArr.push(arr[i])}
      ++i
    }
    newArr.push(innerArr)
  }
  return newArr
}
