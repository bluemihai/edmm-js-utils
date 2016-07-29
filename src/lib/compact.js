'use strict'

export default (arr, val) => {
  let newArr = []

  for (let i = 0; i < arr.length; ++i) {
    if ((arr[i] !== false ) &&
    (arr[i] !== null ) &&
    (arr[i] !== 0 ) &&
    (arr[i] !== "" ) &&
    (arr[i] !== undefined ) &&
    (arr[i] !== NaN ))
     { newArr.push(arr[i]) }
  }
  return newArr
}
