function findKeyByValue(obj,value){
    for(var k in obj){
        if(obj[k] === value){
            return obj[k]
        }
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}

function objSize(obj){
    var size = 0
    for(var i in obj){
        size++
    }
    return size
}

function randomNumber(a,b){
    return Math.floor(Math.random() * b-a) + b
}

function shuffle(array){
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}

function zip(arr1,arr2){
    var res = []
    for(a = 0;a<arr1.length;a++){
        res.push([arr1[a],arr2[a]])
    }
    return res
}

function genCh(start,end){
    String.fromCharCode(...[...Array(end.charCodeAt(0) - start.charCodeAt(0) + 1).keys()].map(i => i + start.charCodeAt(0)))
}

function range(start,end){
    return [...Array(end).keys()].slice(start)
}

function choice(arr){
    return arr[Math.floor(Math.random() * arr.length)]
}

function sortChars(arr,asc){
    var keys = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"
    keys = asc ? [...keys] : [...keys].reverse()
    var result = []
    var deneme = keys.reverse().forEach((item,index) => {
        arr.forEach(item2 => {
            if(keys.includes(item2) && item === item2){
                result.unshift(item2)
            }
            if(!keys.includes(item2) && index === keys.length - 1){
                result.push(item2)
            }
        })
    })
    return result
}

function sortByKeys(keys,arr,asc){
    var res = []
    var arr = [...arr]
    keys.forEach((item,index) => {
        arr.forEach((item2,index2) => {
            if(item === item2){
                res.push(item2)
                arr.splice(index2,1)
            }
        })
    })
    res = asc ? res : res.reverse()
    res.push(...arr)
    return res
}

export {
    findKeyByValue,
    sleep,
    objSize,
    randomNumber,
    shuffle,
    genCh,
    range,
    choice,
    zip,
    sortChars,
    sortByKeys
}

