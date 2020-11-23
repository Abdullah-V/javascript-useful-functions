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

export {
    findKeyByValue,
    sleep,
    objSize,
    randomNumber,
    shuffle,
    genCh,
    range,
    choice,
    zip
}

