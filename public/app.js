console.log('hello');

const handleOrientation = (event) => {
  console.log(event.alpha);
}

window.addEventListener("deviceorientation", handleOrientation, true);
