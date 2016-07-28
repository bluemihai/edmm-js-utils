'use strict'

export default function (arr) {
  const args = [...arguments]

  arr.map((x) => {
    args.map((s) => {
      if(x === s){
        let i = arr.indexOf(x)
        if (i > -1) {
          arr.splice(i, 1);
        }
      }
    })
  })

  return arr
}
