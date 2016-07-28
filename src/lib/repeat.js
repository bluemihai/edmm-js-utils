'use strict'

export default (str, n) => {
  // let arr = str.split('')
  // console.log("whaaats up");
  let newStr = ""
  let x = [...Array(n).keys()]
  x.map(index => {
    newStr += str
  })
  // console.log(x);
  return newStr
}
