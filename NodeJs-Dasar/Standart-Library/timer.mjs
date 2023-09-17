// Callback
/* 
setInterval(() => {
  console.info(`Start Time at ${new Date()}`);
}, 1000);
*/

// Promise
import timers from "timers/promises";

// console.log(new Date());
// const name = await timers.setTimeout(5000, "Aditya");
// console.log(new Date());
// console.info(name);

for await (const startTime of timers.setInterval(1000, "Ignored")) {
  console.info(`Start Time at ${new Date()}`);
}
