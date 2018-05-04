const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
console.log(hours + ":" + minutes + ":" + seconds);

let hrPosition = (hours * 360 / 12) + (minutes * (360 / 60) / 12);
let minPosition = (minutes * 360 / 60) + (seconds * (360 / 60) / 60);
let secPosition = seconds * 360 /  60;


setInterval(function runClock() {
  hrPosition += (3/360);
  minPosition += (6/60);
  secPosition += 6;

  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}, 1000)();
