let currentTemp = Math.floor(Math.random() * 100 + 1)
const desiredTemp = 69 //nice
console.log(`The current temperature is ${currentTemp}F`)

while(currentTemp !== desiredTemp) {
    if(currentTemp < desiredTemp) {
        currentTemp++
    } else {
        currentTemp--
    }
    console.log(`The current temperature is now ${currentTemp}F`)
}