## Description

Select a set of 35 lodash functions and rewrite them in JavaScript ES2015, using test-driven development, and publish the code as a package to NPM.

## Installation
- npm install edmm-js-utils --save
- In index.js,
 ```
var edmm = require('edmm-js-utils').default;
```
```
console.log(edmm.uniq(['a', 'b', 'c', 'a', 'b'])); //tests uniq function
```

[Link to published NPM.](https://www.npmjs.com/package/edmm-js-utils)

## Context

Completing this goal will deepen our understanding of JavaScript and ES2015 and provide practice with the principles of Test Driven Development and NPM.

## Specifications

_List of specifications (specs) for the completed goal. These are declarative sentences (statements) describing some quality or behavior of the final product._

### Required

- [x] Rewrite 35 lodash functions in ES2015.
- [x] Publish package to NPM.
- [x] Write tests for the methods described.
- [x] The artifact produced is properly licensed, preferably with the [MIT license][mit-license].


### List of the 35 functions

 - [x] [allLowerCase](./src/spec/allLowerCaseSpec.js)
 - [x] [allUpperCase](./src/spec/allUpperCaseSpec.js)
 - [x] [camelCase](./src/spec/camelCaseSpec.js)
 - [x] [chunk](./src/spec/chunkSpec.js)
 - [x] [compact](./src/spec/compactSpec.js)
 - [x] [concat](./src/spec/concatSpec.js)
 - [x] [drop](./src/spec/dropSpec.js)
 - [x] [dropRight](./src/spec/dropRightSpec.js)
 - [x] [firstLetterCapital](./src/spec/firstLetterCapitalSpec.js)
 - [x] [isBoolean](./src/spec/isBooleanSpec.js)
 - [x] [isObject](./src/spec/isObjectSpec.js)
 - [x] [join](./src/spec/joinSpec.js)
 - [x] [keys](./src/spec/keysSpec.js)
 - [x] [last](./src/spec/lastSpec.js)
 - [x] [lessThan](./src/spec/lessThanSpec.js)
 - [x] [max](./src/spec/maxSpec.js)
 - [x] [multiply](./src/spec/multiplySpec.js)
 - [x] [pick](./src/spec/pickSpec.js)
 - [x] [pull](./src/spec/pullSpec.js)
 - [x] [random](./src/spec/randomSpec.js)
 - [x] [repeat](./src/spec/repeatSpec.js)
 - [x] [replace](./src/spec/replaceSpec.js)
 - [x] [reverseArray](./src/spec/reverseArraySpec.js)
 - [x] [size](./src/spec/sizeSpec.js)
 - [x] [sortedIndex](./src/spec/sortedIndexSpec.js)
 - [x] [sumArray](./src/spec/sumArraySpec.js)
 - [x] [sumByArray](./src/spec/sumByArraySpec.js)
 - [x] [take](./src/spec/takeSpec.js)
 - [x] [takeRight](./src/spec/takeRightSpec.js)
 - [x] [trim](./src/spec/trimSpec.js)
 - [x] [trimEnd](./src/spec/trimEndSpec.js)
 - [x] [trimStart](./src/spec/trimStartSpec.js)
 - [x] [uniq](./src/spec/uniqSpec.js)
 - [x] [without](./src/spec/withoutSpec.js)
 - [x] [zip](./src/spec/zipSpec.js)

<!-- LICENSE -->

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a>
<br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

[mit-license]: https://opensource.org/licenses/MIT
