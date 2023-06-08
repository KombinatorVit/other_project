"use strict"


let arr = [7, 3, 5, 134,  8 , 1]

arr.sort((a, b) =>{
    if (a < b) return -1;
    if (a > b) return 1;
    return 0
})




let obj = {x: 1, y: 2, z: 3};


console.log(Object.keys(obj));