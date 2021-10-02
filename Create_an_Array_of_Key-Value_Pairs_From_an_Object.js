const keyValuepairArray=(obj)=>{
    let arr=[];
let keys=Object.keys(obj)
keys.forEach(key=>{
    arr.push([key,obj[key]]);
})
return arr;
}

console.log(keyValuepairArray({x:1,y:2}))