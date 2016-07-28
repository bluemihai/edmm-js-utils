'use strict'

const allLowerCase = word => {
  let output = ''
  for (let element of word) {
    let number = element.charCodeAt()
    if( (number > 64) && (number < 91) ){
      output += String.fromCharCode(number + 32)
    }else {
      output += element
    }
  }
  return output
}


export { allLowerCase }
