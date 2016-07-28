'use strict'

const trim = (str, char) => {
<<<<<<< HEAD
  let output = ''
  for(var i in str){
    let check = 0
    for(var j in char){
      if (str[i] !== char[j]) {
        check++
        if (check === 2) {
          output += str[i]
        }
      }
    }
  }
  return output
}


=======
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
>>>>>>> 334f27e0b0c5e24815460fa3db2513c3da6ec6e3

export { trim }
