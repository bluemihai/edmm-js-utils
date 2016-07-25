'use strict'

const reverseArray = arr => {
  let output = []
    // for(let index = -1; index === -(arr.length); index--){
    //   output += arr[index]
    // }

    for ( const arrValue of arr ) {
      output += arrValue
    }
  return output
}

export { reverseArray }
