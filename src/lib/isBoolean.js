'use strict'

const isBoolean = (arg) => {

  if (arg === (true || false)) {return true}
  else {return false}
}

export { isBoolean }
