const hand_hour=document.querySelector(".hand-hour")
const hand_minute=document.querySelector(".hand-minute")
const hand_second=document.querySelector(".hand-second")
const span=document.querySelector(".dinamic-digital")

const getTimeOnClock=()=>{
  const today=new Date()
  const hour=today.getHours()
  const hourDegrees=((hour/60)*360)+90
  console.log(`Hora: ${hour}`);
  hand_hour.style.transform=`rotate(${hourDegrees}deg)`
  
  const minute=today.getMinutes()
  const minuteDegrees=((minute/60)*360)+90
  console.log(`Minutos: ${minute}`);
  hand_minute.style.transform=`rotate(${minuteDegrees}deg)`
  
  const second=today.getSeconds()
  const secondDegrees=((second/60)*360)+90
  console.log(`Segundos: ${second}`);
  hand_second.style.transform=`rotate(${secondDegrees}deg)`
  span.style.display="flex"
  span.innerHTML=
  `
    <span>${hour}h:<span style="color:cyan;">${minute}m</span>:<span style="color:rgba(255,255,0);">${second}s</span></span>
  `
}

setInterval(getTimeOnClock,1000)
