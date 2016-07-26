'use strict'

const random = (upper) => {
  let fraction = Math.random() * (upper + 1)
  return Math.floor(fraction)
}

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
  }
  return output
}

export { random, reverseArray, sumArray, sumByArray }
