import {
    findKeyByValue,
    sleep,
    objSize,
    randomNumber,
    shuffle,
    genCh,
    range,
    choice,
    zip
} from "../functions";

var a = ["one","two","three","four","five"]

var b = [1,2,3,4,5,6,7,0]

console.log(choice(a))

console.log(genCh("D","M"))

console.log(zip(a,b))

console.log(shuffle(a))

console.log(range(5,11))

var o = {
    "name":"abdullah",
    "surname":"veliyev",
    "age":16
}

console.log(objSize(o))

console.log(randomNumber(4,9))

async function trial(){
    await sleep(2000)
    console.log(findKeyByValue(o,"abdullah"))
}

trial()