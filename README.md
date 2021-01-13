# Javascript Useful Functions
## Useful javascript functions  where not included in the javascript standard.

### Github : https://github.com/Abdullah-V/javascript-useful-functions
### NPM : https://www.npmjs.com/package/useful-js-functions

# Installation
`npm i -g useful-js-functions `

`npm i --save useful-js-functions`

# Usage

## _findKeyByValue(value)_
#### Find object keys by value.
### Example:
```js
var obj = {
    name: "john",
    surname: "doe",
    sample: "value"
}

console.log(obj.findKeyByValue("john"))

// output: 'name'
``` 
## _sleep(ms)_
#### Hold code for <_ms_> milliseconds.
#### NOTE: Only work inside async function!!! 
### Example:
```js
async function sleepTest(){
    await sleep(2000)
    console.log("work after 2000ms sleep")
}

sleepTest()

// 2000ms after output: 'work after 2000ms sleep'
```
## _objSize()_
#### Return the object size.
### Example:
```js
var obj = {
    name: "john",
    surname: "doe",
    sample: "value"
}

console.log(obj.objSize())

// output: 3
```
## _randomNumber(a,b)_
#### generate random number between <_a_> and <_b_>.
### Example:
```js
console.log(randomNumber(4,9))

// possible outputs: 4,5,6,7,8
```
## _shuffle()_
#### Shuffle the array.
### Example:
```js
var a = ["one","two","three","four","five"]
console.log(arr1.shuffle())

// example output:  ["four","two","five","one","three"]
```
## _zip(arr2)_
#### Zip the array and <_arr2_>.
### Example:
```js
var arr1 = ["one","two","three","four","five"]
var arr2 = [1,2,3,4,5]

console.log(arr1.zip(arr2))

// output: [["one",1],["two",2],["three",3],["four",4],["five",5]]
``` 
## _genCh(start,end)_
#### Generate chars between <_start_> char and <_end_> char.
#### NOTE: Must same case(e.g.:(d,m) or (D,M)) 
### Example:
```js
console.log(genCh("j","s"))
console.log(genCh("J","S"))

// output 1: jklmnopqrs
// output 2: JKLMNOPQRS
```
## _range(start,end)_
#### Create an array with numbers from <_a_> to <_b_>.
### Example:
```js
console.log(range(5,11))

// output: [ 5, 6, 7, 8, 9, 10 ]
```
## _choice()_
#### Select random item from array.
### Example:
```js
var arr1 = ["one","two","three","four","five"]
console.log(arr1.choice())

// example output: five
```
## _sortChars(ascending)_
#### Sort the strings with my algorithm.
#### NOTE: Chars must be array format
#### TIP: Use spread operator([...array]) for array format.
### Example:
```js
console.log(["v","z","a",2,"w","t","r","R",3].sortChars(false))

console.log(["v","z","a",2,"w","t","r","R",3].sortChars(true))
// output 1: ["z", "w", "v", "t", "r", "R", "a", 2, 3]
// output 2: ["a", "R", "r", "t", "v", "w", "z", 2, 3]
```
## sortByKeys(keysArray,ascending)
#### Sort the raw array by custom keys where: <_keysArray_>
#### NOTE: I did not change <_rawArray_>.Reassign for change.
### Example:
```js
var keyArr = ["new","basic","member","regular","leader"]
var rawArr = ["member","basic","new","kjfghjkgl","regular","leader","regular","asdasd","leader","member"]

console.log(rawArr.sortByKeys(keyArr,true))
console.log(rawArr.sortByKeys(keyArr,false))
)

// outputs:
// ["new", "basic", "member", "member", "regular", "regular", "leader", "leader", "kjfghjkgl", "asdasd"]
// ["leader", "leader", "regular", "regular", "member", "member", "basic", "new", "kjfghjkgl", "asdasd"]
```



## _replaceAt(index,str)_
#### Change <_index_> index of string with <_str_>
### Example:
```js
var str = "stringg"

console.log(str.replaceAt((str.length - 1),""))

// output: string
```

## _flat(deep)_
#### Flat the array.
#### NOTE: Because offical flat() function not working in all browsers 
### Example:
```js
console.log([1,2,[3,4,5,[6,[7,8],9],10]].flat(Infinity))

// output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
```

# LICENSE
### MIT License

Copyright (c) 2021 Abdullah Veliyev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


# Contact with me

## Telegram: https://t.me/Abdullah_V_2005

## Email: abdullahveliyev2005@gmail.com



