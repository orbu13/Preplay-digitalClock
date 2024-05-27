const clock = document.querySelector(".clock")
const hoursElement = document.querySelector("#hours")
const minutesElement = document.querySelector("#minutes")
const secondElement = document.querySelector("#second")

function updateTime(){
    const currentTime = new Date()
    let hours = currentTime.getHours()
    let minutes = currentTime.getMinutes()
    let seconds = currentTime.getSeconds()
    const data = currentTime.getDate()
    
    if(hours < 10){
        hours = "0" + hours
    }
    if(minutes < 10){
        minutes = "0" + minutes
    }
    if(seconds < 10){
        seconds = "0" + seconds
    }

    hoursElement.innerText = hours
    minutesElement.innerText = minutes
    secondElement.innerText = seconds

}

setInterval(updateTime,1000)
