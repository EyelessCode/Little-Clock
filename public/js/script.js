const hand_hour=document.querySelector(".hand-hour")
const hand_minute=document.querySelector(".hand-minute")
const hand_second=document.querySelector(".hand-second")
const span=document.querySelector(".dinamic-digital")

const getDegreesCalculation=(value)=>{
  const degree=((value/60)*360)+90
  return degree
}

const getTimeOnClock=()=>{
  const today=new Date()
  const hour=today.getHours()
  const hourDegrees=getDegreesCalculation(hour)
  hand_hour.style.transform=`rotate(${
    hourDegrees}deg)`
  
  const minute=today.getMinutes()
  const minuteDegrees=getDegreesCalculation(minute)
  hand_minute.style.transform=`rotate(${
    minuteDegrees}deg)`
  
  const second=today.getSeconds()
  const secondDegrees=getDegreesCalculation(second)
  hand_second.style.transform=`rotate(${
    secondDegrees}deg)`
  span.style.display="flex"
  span.innerHTML=
  `
    <span>${hour}h:<span style="color:cyan;">${minute}m</span>:<span style="color:rgba(255,255,0);">${second}s</span></span>
  `
}

setInterval(getTimeOnClock,1000)
