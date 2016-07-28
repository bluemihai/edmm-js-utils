'use strict'

export default function(arr){
  const args = [...arguments]

  args.map((x) => {
    arr.push(x)
  })

  console.log('New Arr: ' + arr);

  return arr
}
