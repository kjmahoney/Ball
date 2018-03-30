const ball = document.getElementById('ball')
const field = document.getElementById('field')

ball.style.width = "25px"
ball.style.height = "25px"
ball.style.left = "50%"
ball.style.top = "50%"

handleOrientation = (event) => {
	let yTilt = event.beta
	let xTilt = event.gamma

	let yIncrement = (1 + (Math.abs(yTilt) / 10))
	let xIncrement = (1 + (Math.abs(xTilt) / 10))

	let xVelocity = 0
	let yVelocity = 0

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
		xVelocity -= xIncrement
	}

	if ( parseInt(ball.style.left) <= 0) {
		xVelocity += xIncrement
	}

	if ((parseInt(ball.style.top) + parseInt(ball.style.height)) >= window.innerHeight) {
		yVelocity -= yIncrement
	}

	if ( parseInt(ball.style.top) <= 0) {
		yVelocity += yIncrement
	}


	ball.style.top = parseInt(ball.style.top) + yVelocity + "px"
	ball.style.left = parseInt(ball.style.left) + xVelocity + "px"
}

window.addEventListener("deviceorientation", handleOrientation, true);
