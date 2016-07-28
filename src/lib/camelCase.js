'use strict'

const camelCase = word => {
  let output = ''
  let first = true
  let second = false
  for (let element of word) {
    let num = element.charCodeAt()
    switch (true) {
      case ((num > 64 && num < 91) && first): // A -- Z
        output += String.fromCharCode(num + 32) // toLowerCase
        first = false
        second = false
        break
      case ((num > 96 && num < 122) && first): // a -- z
        output += element
        first = false
        second = false
        break
      case ((num > 96 && num < 122) && second): // a -- z
        output += String.fromCharCode(num - 32) // toUpperCase
        second = false
        break
      case ((num > 64 && num < 91) && second): // A -- Z
        output += element
        second = false
        break
      case (num > 64 && num < 91): // A -- Z
        output += String.fromCharCode(num + 32) // toLowerCase
        break
      case (num > 96 && num < 122): // a -- z
        output += element
        break
      default:
        second = true
        break
    }
  }
  return output
}


export { camelCase }
