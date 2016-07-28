'use strict'

export default (arr) => {
  let newArr = []
  let value = ""
  let dupe = false
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; (i < newArr.length && dupe === false); ++i) {
      if (arr[i] === newArr[j]) {dupe = true; console.log("true");}
    }
    if (dupe === false) {newArr.push(arr[i])}
    dupe = false
  }
  return newArr
}
