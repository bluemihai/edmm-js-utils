'use strict'

const isObject = val => {
  if(typeof val === 'object'){
    return true
  } else {
    return false
  }
}

export { isObject }
