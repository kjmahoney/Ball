const ball = document.getElementById('ball')
const field = document.getElementById('field')
const timer = document.getElementById('timer');
const touches = document.getElementById('touches');

ball.style.width = "50px"
ball.style.height = "50px"
ball.style.left = "50%"
ball.style.top = "50%"

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

handleOrientation = (event) => {
	let yTilt = event.beta
	let xTilt = event.gamma

	let yIncrement = (.05 + (Math.abs(yTilt) / 10000))
	let xIncrement = (.05 + (Math.abs(xTilt) / 10000))

	if (xTilt >= 10) {
		xVelocity += xIncrement
	}

	else if (xTilt <= 0) {
		xVelocity -= xIncrement
	}

	if (yTilt >= 45) {
		yVelocity += yIncrement
	}

	if (yTilt <= 35) {
		yVelocity -= yIncrement
	}

	if ((parseInt(ball.style.left) + parseInt(ball.style.width)) >= screen.width) {
		xVelocity = -xVelocity
		touchesCounter += 1
	}

	if ( parseInt(ball.style.left) <= 0) {
		xVelocity = Math.abs(xVelocity)
		touchesCounter += 1
	}

	if ((parseInt(ball.style.top) + parseInt(ball.style.height)) >= window.innerHeight) {
		yVelocity = -yVelocity
		touchesCounter += 1
	}

	if ( parseInt(ball.style.top) <= 0) {
		yVelocity = Math.abs(yVelocity)
		touchesCounter += 1
	}

	if (xVelocity == 0 && yVelocity == 0) {
		rotation += 0
	}
	else {
		rotation += 10
	}

	ball.style.top = parseInt(ball.style.top) + yVelocity + "px"
	ball.style.left = parseInt(ball.style.left) + xVelocity + "px"
	ball.style.webkitTransform = `rotate(${rotation}deg)`;
	touches.innerHTML = touchesCounter
}

window.addEventListener("deviceorientation", handleOrientation, true);
