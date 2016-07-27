'use strict'

const repeat = (str, n) => {
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

export { repeat }
