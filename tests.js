const f = require('./index')
const { range,randomNumber,sleep,genCh } = require('./index')



var obj = {
    name: "john",
    surname: "doe",
    sample: "value"
}

var str = "stringg"

var arr1 = ["one","two","three","four","five"]

var arr2 = [1,2,3,4,5]

var keyArr = ["new","basic","member","regular","leader"]

var rawArr = ["member","basic","new","kjfghjkgl","regular","leader","regular","asdasd","leader","member"]



console.log([1,2,[3,4,5,[6,[7,8],9],10]].flat(Infinity))

console.log(str.replaceAt((str.length - 1),""))

console.log(arr1.choice())

console.log(genCh("j","s"))

console.log(genCh("J","S"))

console.log(arr1.zip(arr2))

console.log(arr1.shuffle())

console.log(range(5,11))

console.log(["v","z","a",2,"w","t","r","R",3].sortChars(false))

console.log(["v","z","a",2,"w","t","r","R",3].sortChars(true))

console.log(rawArr.sortByKeys(keyArr,true))

console.log(rawArr.sortByKeys(keyArr,false))

console.log(obj.findKeyByValue("john"))

console.log(obj.objSize())

console.log(randomNumber(4,9))

async function sleepTest(){
    await sleep(2000)
    console.log("work after 2000ms sleep")
}

sleepTest()