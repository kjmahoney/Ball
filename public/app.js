console.log('hello');

const Physics = require('physicsjs');

const world = Physics();

var ball = Physics.body('circle', {
    x: 50, // x-coordinate
    y: 30, // y-coordinate
    vx: 0.0, // velocity in x-direction
    vy: 0.0, // velocity in y-direction
    radius: 20
});
console.log(ball);
const handleOrientation = (event) => {
  //
}

window.addEventListener("deviceorientation", handleOrientation, true);
