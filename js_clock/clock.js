const hourHand = document.getElementById("hour-hand");
const minuteHand = document.getElementById("min-hand");
const secondHand = document.getElementById("second-hand");

const time = () => {
  const date = new Date;
  let hour = date.getHours();
  if (hour > 12) {
    hour -= 12;
  }
  const minute = date.getMinutes();
  const second = date.getSeconds();
  minuteHand.style.transform = `rotate(${90 + 360/60*minute}deg)`;
  hourHand.style.transform = `rotate(${90 + 360/12*hour}deg)`;
  secondHand.style.transform = `rotate(${90 + 360/60*second}deg)`;
};

setInterval(time, 1000);
