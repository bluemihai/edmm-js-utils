'use strict'

const trim = (str, char) => {
 let arr = str.split('')
 let charArr = char.split('')
 arr.map((x) => {
   charArr.map((y) => {
      if(x === y){
        arr.shift( x )
        arr.pop( x )
      }
   })
 })
 return arr.join('')
}

export { trim }
