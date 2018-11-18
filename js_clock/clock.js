const hourHand = document.getElementById("hour-hand");
const minuteHand = document.getElementById("min-hand");
const secondHand = document.getElementById("second-hand");
const container = document.querySelector(".clock-container");
const alertButton = document.querySelector(".set-alert");
const alertForm = document.querySelector(".alert-form");
const formArea = document.querySelector(".form-area");
const setAlertButton = document.getElementById("btn-alert");
const setAlertName = document.getElementById("alert-name");
const setAlertTime = document.getElementById("alert-time");
let alertName = "";
let alertHours = 25;
let alertMinutes = 61;
const alertSound = new Audio('assets/alert.mp3');

const changeContainer = () => {
  const date = new Date;
  const hour = date.getHours();
  if (hour < 6 || hour > 20) {
    container.style.backgroundColor = "#130a35";
  } else if (hour < 12) {
    container.style.backgroundColor = "#f6efff";
  } else {
    container.style.backgroundColor = "#3c008c";
  }
};

const time = () => {
  const date = new Date;
  let hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  if (hour == alertHours && minute == alertMinutes) {
    alertSound.play();
    alert(alertName);
    alertHours = 25;
    alertMinutes = 61;
  }
  console.log(minute);
  console.log(alertMinutes);
  console.log(hour);
  console.log(alertHours);
  if (hour > 12) {
    hour -= 12;
  }
  minuteHand.style.transform = `rotate(${90 + 360/60*minute}deg)`;
  hourHand.style.transform = `rotate(${90 + 360/12*hour}deg)`;
  secondHand.style.transform = `rotate(${90 + 360/60*second}deg)`;
  changeContainer();
};

alertButton.addEventListener('mouseover', (event) => {
  alertForm.style.display = "flex";
});

formArea.addEventListener('mouseleave', (event) => {
  alertForm.style.display = "none";
});

setAlertButton.addEventListener('click', (event) => {
  alertName = setAlertName.value;
  const alertTime = setAlertTime.value;
  alertHours = Number(alertTime.substring(0,2));
  alertMinutes = Number(alertTime.substring(3,5));
  alertForm.style.display = "none";
});

setInterval(time, 1000);
