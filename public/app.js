const ball = document.getElementById('ball');
const field = document.getElementById('field');
const timer = document.getElementById('timer');
const touches = document.getElementById('touches');

// const settings = require('./settings');

const {ballSize, horizontalAlign, verticalAlign} = require('./settings');

const handleRotation = require('./rotation');
const handleVelocity = require('./velocity');

////
//SETTINGS
////
ball.style.width = ballSize;
ball.style.height = ballSize;
ball.style.left = horizontalAlign;
ball.style.top = verticalAlign;

//turn these values into init object
let rotation = 1
let xVelocity = 0
let yVelocity = 0

let touchesCounter = 0
let timeCounter = 0

const handleTimer = () => {
	timeCounter	+=1
	timer.innerHTML = timeCounter;
}
setInterval(handleTimer, 1000);

const endCondition = (touchesCounter, timeCounter) => {
	let finalScore = timer.innerHTML/touches.innerHTML
	alert(`Your final score is ${finalScore}`)
}

handleOrientation = (event) => {
	let yTilt = event.beta
	let xTilt = event.gamma

	//velocity changes in response to tilting device
	////
	xVelocity = handleVelocity.X(xTilt, xVelocity)
	yVelocity = handleVelocity.Y(yTilt, yVelocity)

	//changes in response to boundary collision
	////
	if ((parseInt(ball.style.left) + parseInt(ball.style.width)) >= screen.width) {
		xVelocity = -xVelocity
		touchesCounter += 1
	}

	if (parseInt(ball.style.left) <= 0) {
		xVelocity = Math.abs(xVelocity)
		touchesCounter += 1
	}

	if ((parseInt(ball.style.top) + parseInt(ball.style.height)) >= window.innerHeight) {
		yVelocity = -yVelocity
		touchesCounter += 1
	}

	if (parseInt(ball.style.top) <= 0) {
		yVelocity = Math.abs(yVelocity)
		touchesCounter += 1
	}

	//animate the ball rotation
	////
	rotation = handleRotation.rotate(xVelocity, yVelocity, rotation);

	//applies calculated changes
	////
	ball.style.top = parseInt(ball.style.top) + yVelocity + "px"
	ball.style.left = parseInt(ball.style.left) + xVelocity + "px"
	ball.style.webkitTransform = `rotate(${rotation}deg)`;
	touches.innerHTML = touchesCounter
}

window.addEventListener('touchstart', endCondition, false);
window.addEventListener("deviceorientation", handleOrientation, true);
