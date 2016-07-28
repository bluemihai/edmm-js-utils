'use strict'

export default (str, char) => {
  let output = ''
  for(var i in str){
    let check = 0
    for(var j in char){
      if (str[i] !== char[j]) {
        check++
        if (check === char.length) {
          output += str[i]
        }
      }
    }
  }
  return output
}
