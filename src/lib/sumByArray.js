'use strict'


const sumByArray = (arr, key) => {
  let output = 0
  for (let arrValue of arr) {
    output += arrValue[key]
  }
  return output
}


export { sumByArray }
