'use strict'

export default (arr, val) => {
  let newArr = []
  // let dupe = false
  // for (let i = 0; i < arr.length; ++i) {
  //   for (let j = 0; (j < newArr.length && dupe === false); ++j) {
  //     if (arr[i] === newArr[j]) {dupe = true}
  //   }
  //   if (dupe === false) {newArr.push(arr[i])}
  //   dupe = false
  // }
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] !== val) { newArr.push(arr[i]) }
  }
  return newArr
}
