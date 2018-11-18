const hourHand = document.getElementById("hour-hand");
const minuteHand = document.getElementById("min-hand");
const secondHand = document.getElementById("second-hand");
const container = document.querySelector(".clock-container");

const change_container = () => {
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
  if (hour > 12) {
    hour -= 12;
  }
  const minute = date.getMinutes();
  const second = date.getSeconds();
  minuteHand.style.transform = `rotate(${90 + 360/60*minute}deg)`;
  hourHand.style.transform = `rotate(${90 + 360/12*hour}deg)`;
  secondHand.style.transform = `rotate(${90 + 360/60*second}deg)`;
  change_container();
};

setInterval(time, 1000);

// //TODO:
// 1. user can set alert for whatever
// 2. time to sleep
// 3. time for dinner
// 4. time for lunch
// 5. alert pops up at that time
