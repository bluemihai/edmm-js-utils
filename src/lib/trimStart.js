'use strict'

export default (str, char) => {
  let output = ''
  for(var i in str){
    let check = 0
    for(var j in char){
      if (str[i] !== char[j]) {
        check++
        if (check === 2) {
          while (str.length > i) {
            output += str[i]
            i++
          }
          return output
        }
      }
    }
  }
  return output
}
