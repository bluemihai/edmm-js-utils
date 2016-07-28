'use strict'

const trimEnd = (str, char) => {
 let arr = str.split('')
 let charArr = char.split('')
 let newArr = []

 arr.map( x => {
   charArr.map( y => {
      if(y === x){
        arr.pop(x)
      }
   })
 })
 return arr.join('')
}

export { trimEnd }
