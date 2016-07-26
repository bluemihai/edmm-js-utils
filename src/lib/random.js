'use strict'

const random = (upper) => {
  let fraction = Math.random() * (upper + 1)
  return Math.floor(fraction)
}

export { random }
