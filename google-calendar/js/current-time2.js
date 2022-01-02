function setCurrentTimePosition() {
  const currentDate = new Date();
  const currentDay = currentDate.getDay()
  const currentHour = currentDate.getHours()
  const currentMin = currentDate.getMinutes()

  // console.log({ currentDay }, { currentHour })
  const $currentTime = document.querySelector('.currentTime2')

  const $calendar = document.querySelector('.calendar-byDay')
  let calendarBlockSize = $calendar.clientHeight
  let calendarInlineSize = $calendar.clientWidth

  const calendarTimezoneCellInlineSize = document.querySelector('.timezoneCell2').clientWidth;

  calendarInlineSize = calendarInlineSize - calendarTimezoneCellInlineSize

  const cellInlineSize = calendarInlineSize / 2


  // console.log({ calendarBlockSize }, { calendarInlineSize })
  const calendarDayBlockSize = document.querySelector('.calendarDay2').clientHeight
  // document.querySelector('.calendarDay2').style.border = "10px solid red"
  calendarBlockSize = calendarBlockSize - calendarDayBlockSize
  // console.log({ calendarBlockSize })
  const cellBlockSize = calendarBlockSize / 24
  // console.log({ cellBlockSize }, { cellInlineSize })

  $currentTime.style.top = `${cellBlockSize * (currentHour) + calendarDayBlockSize + (cellBlockSize / 60) * currentMin}px`
  // $currentTime.style.left = `${cellInlineSize * (currentDay) + calendarTimezoneCellInlineSize + 24}px`
  // $currentTime.style.left = `0px`
}

window.intervalCurrentTimePosition = null


function intervalCurrentTimePosition(interval = 1000) {
  clearInterval(window.intervalCurrentTimePosition)
  setCurrentTimePosition()
  window.intervalCurrentTimePosition = setInterval(setCurrentTimePosition, interval)
}

export {
  setCurrentTimePosition,
  intervalCurrentTimePosition
}

const $modo = document.querySelector("#select-view");
$modo.addEventListener("change", ()=>{
  console.log($modo.value);
  ($modo.value === 'Sem') ? location.href="https://ijcode1.github.io/google-calendar/google-calendar/index.html" : "";
})