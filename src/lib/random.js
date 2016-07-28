'use strict'

export default (upper) => {
  let fraction = Math.random() * (upper + 1)
  return Math.floor(fraction)
}
