'use strict'

export default (word) => {
  let arr = word.split('')
  let number = arr[0].charCodeAt()
  if(number > 90){
    arr[0] = String.fromCharCode(number - 32)
  }
  return arr.join('')
}
