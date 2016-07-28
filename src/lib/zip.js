'use strict'

export default function () {
  let values = Object.keys(arguments).map(key => arguments[key])
  let valueLengths = values.map(value => value.length)

  Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };

  let maxLength = valueLengths.max()
  let rangeToMax = [...Array(maxLength).keys()]
  let uncompact = rangeToMax.map(idx => {
    return values.map(valuesArray => valuesArray[idx])
  })
  return uncompact.map(array => {
    return array.filter(item => item != null)
  })
}
