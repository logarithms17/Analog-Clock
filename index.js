
const secondHand = document.querySelector(".seconds")
const minuteHand = document.querySelector(".minute")
const hourHand = document.querySelector(".hour")

const setClock = () => {
    const currentDate = new Date();
    console.log(currentDate)
    const secondsRatio = currentDate.getSeconds() / 60 // example 30 seconds, 30/60 = 0.5. which means half minute has passed
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60 // 10minutes and 30 secs, ((30/60) + 10)/60 = 0.175, which means 17.5% of 60 minutes has passed
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12 // 2:10:30, (0.175 + 2) / 12 = 0.18125, which means 18.125% of an hour has passed

    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

const setRotation = (element, rotationRatio) => {
    element.style.setProperty('--rotation', rotationRatio * 360) //changing the css value of rotation
}


setClock()
setInterval(setClock, 1000)
