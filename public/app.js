const ball = document.getElementById('ball')
const field = document.getElementById('field')

ball.style.width = "50px"
ball.style.height = "50px"
ball.style.left = "50%"
ball.style.top = "50%"

let rotation = 1

let xVelocity = 0
let yVelocity = 0

//add a touch listen that slows down velocity?
//add a number that tracks score in background. Each touch is a point. (over a time limit?)

handleOrientation = (event) => {
	let yTilt = event.beta
	let xTilt = event.gamma

	let yIncrement = (.05 + (Math.abs(yTilt) / 10000))
	let xIncrement = (.05 + (Math.abs(xTilt) / 10000))
	//
	// let yIncrement = .1
	// let xIncrement = .1

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
	}

	if ( parseInt(ball.style.left) <= 0) {
		xVelocity +=5
	}

	if ((parseInt(ball.style.top) + parseInt(ball.style.height)) >= window.innerHeight) {
		yVelocity = -yVelocity
	}

	if ( parseInt(ball.style.top) <= 0) {
		yVelocity += 5
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
