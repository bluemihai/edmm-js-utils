'use strict'

const reverseArray = arr => {
  let output = []
  for (let i = 0; i < (arr.length); ++i ) {
    output.push(arr[(arr.length - i - 1)])
  }
  return output
}

const sumArray = arr => {
  let output = 0
  for (let i = 0; i < (arr.length); ++i ) {
    output += arr[i]
  }
  return output
}

const sumByArray = (arr, key) => {
  let output = 0
  for (let arrValue of arr) {
    output += arrValue[key]
    console.log(arrValue[key])
  }
  // console.log(output)
  return output
}

export { reverseArray }
export { sumArray }
export { sumByArray }
