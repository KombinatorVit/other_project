"use strict"


const INTERVAL = 500
let counter = 0
const MAX_VALUE = 10
let timer = null

const event = () => {

    if (counter === MAX_VALUE) {
        console.log('THE END')
        clearTimeout(timer)
        return
    }
    console.dir({counter, date: Date.now()})
    counter++
}

console.log('Begin')
timer = setInterval(event, INTERVAL)



let num = 4;
