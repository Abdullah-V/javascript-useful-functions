# Javascript Useful Functions
### Useful javascript functions  where not included in the javascript standard.


# Usage

## _findKeyByValue(object,value)_
#### Find object keys by value.
### Example:
```js
 var obj = {
    "name":"abdullah",
    "surname":"veliyev",
    "age":16
}

console.log(findKeyByValue(obj,"abdullah"))

// output: 'name'
``` 
## _sleep(ms)_
#### Hold code for <_ms_> milliseconds.
#### NOTE: Only work inside async function!!! 
### Example:
```js
async function trial(){
    await sleep(2000)
    console.log("work after 2000ms")
}

trial()

// 2000ms after output: 'work after 2000ms'
```
## _objSize(object)_
#### Return the object size.
### Example:
```js
 var obj = {
    "name":"abdullah",
    "surname":"veliyev",
    "age":16
}

console.log(objSize(obj))

// output: 3
```
## _randomNumber(a,b)_
#### generate random number between <_a_> and <_b_>
### Example:
```js
console.log(randomNumber(4,9))

// possible outputs: 4,5,6,7,8
```
## _shuffle(array)_
#### Shuffle the <_array_>.
### Example:
```js
var a = ["one","two","three","four","five"]
console.log(shuffle(a))

// example output:  ["four","two","five","one","three"]
```
## _zip(arr1,arr2)_
#### Zip the <_arr1_> and <_arr2_>.
### Example:
```js
var a = ["one","two","three","four","five"]
var b = [1,2,3,4,5]
console.log(zip(a, b))

// output: [["one",1],["two",2],["three",3],["four",4],["five",5]]
``` 
## _genCh(start,end)_
#### Generate chars between <_start_> char and <_end_> char.
#### NOTE: Must same case(e.g.:(d,m) or (D,M)) 
### Example:
```js
console.log(genCh("d","m"))
console.log(genCh("D","M"))

// output 1: defghijklm
// output 2: DEFGHIJKLM
```
## _range(start,end)_
#### Create an array with numbers from <_a_> to <_b_>.
### Example:
```js
console.log(range(5,11))

// output: [ 5, 6, 7, 8, 9, 10 ]
```
## _choice(arr)_
#### Select random item from array.
### Example:
```js
var a = ["one","two","three","four","five"]
console.log(choice(a))

// example output: five
```
## _sortChars(array,ascending)_
#### Sort the strings with my algorithm.
#### NOTE: Chars must be array format
#### TIP: Use spread operator([...array]) for array format.
### Example:
```js
console.log(sortChars(["v","z","a",2,"w","t","r","R",3],false))
console.log(sortChars(["v","z","a",2,"w","t","r","R",3],true))

// output 1: ["z", "w", "v", "t", "r", "R", "a", 2, 3]
// output 2: ["a", "R", "r", "t", "v", "w", "z", 2, 3]
```
## sortByKeys(keysArray,rawArray,ascending)
#### Sort the <_rawArray_> by custom keys where: <_keysArray_>
#### NOTE: I did not change <_rawArray_>.Reassign for change.
### Example:
```js
var keyArr = ["new","basic","member","regular","leader"]
var rawArr = ["member","basic","new","kjfghjkgl","regular","leader","regular","asdasd","leader","member"]

console.log(sortByKeys(keyArr,rawArr,true))
console.log(sortByKeys(keyArr,rawArr,false))

// outputs:
// ["new", "basic", "member", "member", "regular", "regular", "leader", "leader", "kjfghjkgl", "asdasd"]
// ["leader", "leader", "regular", "regular", "member", "member", "basic", "new", "kjfghjkgl", "asdasd"]
```











