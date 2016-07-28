'use strict'

const fs = require('fs')

const getFiles = (dir) => {
  let output = {}
  var files = fs.readdirSync(dir)
  files.forEach(fileName => {
    let funcName = fileName.replace('.js', '')
    let exports = require('./lib/' + funcName)
    output[funcName] = exports.__esModule ? exports.default : exports
  })
  return output
}

export default getFiles(__dirname + '/lib')
