'use strict'

export default (o) => {
  let newArr = []

  for (let key in o) {
    console.log('Is this a key: ',  key);

    if (o.hasOwnProperty(key)) {
      newArr.push(key)
    }
  }

  return newArr
}
