const notifier = require("node-notifier");
const moment = require("moment");
const argTime = process.argv.slice(2);

const POMODORO_DURATION = argTime[0];
const BREAK_DURATION = argTime[1];

let isWork = false;
let remainingTime = 0;

const formatingTime = (totalSecond) => {
  const duration = moment.duration(totalSecond, "seconds");
  const hours = duration.hours().toString().padStart(2, "0");
  const minutes = duration.minutes().toString().padStart(2, "0");
  const seconds = duration.seconds().toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
};

const startTimer = (duration) => {
  isWork = !isWork;
  remainingTime = duration * 60;

  const timer = setInterval(() => {
    remainingTime--;

    const formattedTime = formatingTime(remainingTime);
    console.log(`${isWork ? "work" : "Break"} : ${formattedTime}`);

    if (remainingTime === 0) {
      clearInterval(timer);
      notifier.notify({
        title: isWork ? "Break Time!" : "Working Time",
        message: isWork ? "Good Break" : "Good Work",
        sound: true,
        wait: true,
      });
      startTimer(isWork ? BREAK_DURATION : POMODORO_DURATION);
    }
  }, 1000);
};

startTimer(POMODORO_DURATION);
