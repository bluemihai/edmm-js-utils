'use strict'

const trim = (str, char) => {
  let arr = str.split('')
  let charArr = char.split('')
  let newArr = []
  let flag = false
  arr.map((x) => {
    charArr.map((y) => {
      console.log(`Y is: ${y}`);
      if (x === y) {
        flag = true
      }
    })
    if (!flag) {
      newArr.push(x)
      flag = false
    }
    // console.log(`X is: ${typeof x}`);
  })
  console.log(`New Array: ${newArr.join('')}`);
  // if(number > 90){
  //   arr[0] = String.fromCharCode(number - 32)
  // }
  return arr.join('')
}

export { trim }
