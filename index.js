Object.prototype.findKeyByValue = function(value){
    for(var k in this){
        if(this[k] === value){
            return k
        }
    }
}




String.prototype.replaceAt = function(index,str){
    if(arguments.length === 2){
        if((typeof index === 'number' && isFinite(index)) && (typeof str === 'string' || str instanceof String)){
            var result = this.split("")
            result[index] = str
            return result.join("")   
        }
        throw new Error("Invalid parameter type(s)")
    }
    throw new Error("Must be 2 parameter")
}




Object.defineProperty(Array.prototype, 'flat', {
    value: function(depth = 1) {
      return this.reduce(function (flat, toFlatten) {
        return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
      }, []);
    }
});

// Because offical flat() function not working in all browsers




Object.prototype.objSize = function(){
    return Object.keys(this).length
}




Array.prototype.shuffle = function(){
    var array = this
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}




Array.prototype.zip = function(arr){
    if(!Array.isArray(arr)){
        throw new Error("Parameter must be array")
    }
    var res = []
    for(a = 0;a<this.length;a++){
        res.push([this[a],arr[a]])
    }
    return res
}




Array.prototype.choice = function(){
    return this[Math.floor(Math.random() * this.length)]
}




Array.prototype.sortChars = function(asc){
    if(!(typeof asc === "boolean")){
        throw new Error("Parameter must be boolean")
    }
    var arr = this
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




Array.prototype.sortByKeys = function(keys,asc){
    if(!(Array.isArray(keys)) || !(typeof asc === "boolean")){
        throw new Error("Invalid parameter type(s)")
    }
    var arr = this
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



Array.prototype.count = function(el){
    return this.filter(e => e === el).length
}


String.prototype.count = function(el){
    return this.split("").filter(e => e === el).length
}




module.exports = {
    range(start,end){
        if((typeof start === 'number' && isFinite(start)) && (typeof end === 'number' && isFinite(end))){
            return [...Array(end).keys()].slice(start)
        }
        throw new Error("Invalid parameter type(s)")
    },

    genCh(start,end){
        if((typeof start === 'string' || start instanceof String) && (typeof end === 'string' || end instanceof String)){
            return String.fromCharCode(...[...Array(end.charCodeAt(0) - start.charCodeAt(0) + 1).keys()].map(i => i + start.charCodeAt(0)))
        }
        throw new Error("Invalid parameter type(s)")
    },

    randomNumber(min,max){
        if((typeof min === 'number' && isFinite(min)) && (typeof max === 'number' && isFinite(max))){
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        throw new Error("Invalid parameter type(s)")
    },

    sleep(ms){
        if(typeof ms === 'number' && isFinite(ms)){
            return new Promise(resolve => setTimeout(resolve,ms))
        }
        throw new Error("Invalid parameter type")
    }
}

