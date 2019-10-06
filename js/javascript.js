const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  if(seconds==0){
secondHand.style.transitionDuration = '0s';
minsHand.style.transitionDuration = '0s';
hourHand.style.transitionDuration = '0s';
} else {
secondHand.style.transitionDuration = '0.07s';
minsHand.style.transitionDuration = '0.07s';
hourHand.style.transitionDuration = '0.07s';

}
}

setInterval(setDate, 1000);
setDate();

function showTime(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";


  if(h > 12){

      session = "PM";
  }

  if(h < 10){
    h = "0" + h;
  }

 if(m < 10){
    m = "0" + m;
  }

 if(s < 10){
    s = "0" + s;
  }


  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);

}

showTime();
