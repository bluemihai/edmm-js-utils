'use strict'

const size = object => {
  let counter = 0
  if (typeof object === 'string') {
    object = object.split("")
  }else if (object.constructor == Object) {
    object = Object.keys(object)
  }

  object.forEach( x => counter++)
  return counter
}

export { size }
