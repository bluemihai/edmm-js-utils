'use strict'

export default (word) => {
  let output = ''
  for (let element of word) {
    let number = element.charCodeAt()
    if( (number > 96) && (number < 122) ){
      output += String.fromCharCode(number - 32)
    }else {
      output += element
    }
  }
  return output
}
