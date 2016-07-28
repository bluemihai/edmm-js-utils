'use strict'

export default function(arr){
  const args = [...arguments]
  args.map((x) => {
    let i = args.indexOf(x)
    if(i > 0){
      arr.push(x)
    }
  })
  return arr
}
