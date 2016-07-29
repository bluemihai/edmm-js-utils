'use strict'

export default (str, char1, char2) => {
  let output = ''
  let arr = str.split(" ")
  for(var el of arr){
    if (el === char1) {
      output += char2
    }else {
      output += el + ' '
    }
  }
  return output
}
