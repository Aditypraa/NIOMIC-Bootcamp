const delayColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    });
  }, delay);
};

async function changeColor() {
  await delayColorChange("red", 1000);
  await delayColorChange("yellow", 1000);
  await delayColorChange("green", 1000);
  await delayColorChange("blue", 1000);
  return "All done";
}
changeColor().then((res) => {
  alert(res);
});
