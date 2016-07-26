'use strict'

const random = (upper) => {
  let fraction = Math.random() * (upper + 1)
  return Math.floor(fraction)
}

// arrays
const reverseArray = arr => {
  let output = []
  for (let i = 0; i < (arr.length); ++i ) {
    output.push(arr[(arr.length - i - 1)])
  }
  return output
}

// math
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

// strings
const firstLetterCapital = (word) => {
  let arr = word.split('')
  let number = arr[0].charCodeAt()
  if(number > 90){
    arr[0] = String.fromCharCode(number - 32)
  }
  return arr.join('')
}

export {
  reverseArray,
  sumArray,
  sumByArray,
  firstLetterCapital,
  random
}
