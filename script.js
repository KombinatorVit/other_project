

const dep = 12000
const persent = 0.07;
const mount = 24;


const result =( dep * (1 + persent/12)  **mount).toFixed(1)
let purchaseRemainder;
console.log(result)
if(result > 13500){
    console.log('Больше 13500')
    purchaseRemainder = (result - 13500).toFixed(1)
    console.log(purchaseRemainder)
}else{
    console.log('Меньше 13500')
}

