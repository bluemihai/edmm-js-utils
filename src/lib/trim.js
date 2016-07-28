'use strict'

const trim = (str, char) => {
 let arr = str.split('')
 let charArr = char.split('')
 let newArr = []

 let m = charArr.map((x, i, newArr) => arr.filter((y) => y !== x ) )

 console.log('Whats happening: ' + newArr);

 // arr.map( x => {
 //   console.log('x : ', x);
 //   charArr.map( y => {
 //      if(y === x){
 //        const index = arr.indexOf(x)
 //        arr.splice(index, 1)
 //      }
 //   })
 // })

 return m.join('')
}

export { trim }
