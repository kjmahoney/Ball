const ball = document.getElementById('ball')
const field = document.getElementById('field')

ball.style.width = "50px"
ball.style.height = "50px"
ball.style.left = "50%"
ball.style.top = "50%"

let rotation = 1


handleOrientation = (event) => {
	let yTilt = event.beta
	let xTilt = event.gamma

	let xVelocity = 0
	let yVelocity = 0

	let yIncrement = (1 + (Math.abs(yTilt) / 10))
	let xIncrement = (1 + (Math.abs(xTilt) / 10))

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

	if (xVelocity == 0 && yVelocity == 0) {
		rotation += 0
	}
	else {
		rotation += 10
	}

	ball.style.top = parseInt(ball.style.top) + yVelocity + "px"
	ball.style.left = parseInt(ball.style.left) + xVelocity + "px"
	// ball.style.webkitTransform = "rotate(2deg)";
	ball.style.webkitTransform = `rotate(${rotation}deg)`;

	console.log(ball.style.transform);
}

window.addEventListener("deviceorientation", handleOrientation, true);
