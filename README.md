# Javascript Useful Functions
### Useful javascript functions  where not included in the javascript standard


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











