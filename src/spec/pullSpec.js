import _ from 'lodash'
import { default as edmm } from '../edmm.js'

const pull = edmm.pull

describe("pull", () => {
 const dev = ['D', 'e', 'v', 'l', 'o', 'p']
 const L = 'l'
 const P = 'p'
 it("Removes all given values from array.", () => {
   expect( pull( dev, L, P) ).toEqual( ['D', 'e', 'v', 'o'] )
 })
 it("checks that our pull is the same as lodash's pull", () => {
   const lodashPull = _.pull( dev, L )
   expect( pull( dev, L ) ).toEqual( lodashPull )
 })
})
