'use strict'

export default (arr, num) => {
    for ( let i=0; i < arr.length; i++ ) {
      if (arr[i] > num) {
        //arr.splice(i, 0 , num)
        return i
      }
    }
    return (arr.length -1)
}
