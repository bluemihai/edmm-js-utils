'use strict'

export default (arr, n) => {

  const newArr = []
  for (let i = n; i < arr.length; ++i) {
    newArr.push(arr[i])
  }
  return newArr
}
