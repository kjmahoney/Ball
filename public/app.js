const ball = document.getElementById('ball')
const field = document.getElementById('field')
ball.style.width = "25px"
ball.style.height = "25px"
ball.style.left = "50%"
ball.style.top = "50%"

handleOrientation = (event) => {
	let yTilt = event.beta
	let xTilt = event.gamma

	let yIncrement = (yTilt / 10)
	let xIncrement = (xTilt / 10)

	if ((parseInt(ball.style.left) + parseInt(ball.style.width)) >= screen.width) {
		xIncrement = -xIncrement
	}

	if (parseInt(ball.style.left) <= 0) {
		console.log("COLLIDE");
		ball.style.left = 0.1;
	}

	if ((parseInt(ball.style.top) + parseInt(ball.style.height)) >= screen.height) {
		yIncrement = -yIncrement
	}

	ball.style.top = parseInt(ball.style.top) + yIncrement + "px"
	ball.style.left = parseInt(ball.style.left) + xIncrement + "px"

	console.log(ball.style.left);
	console.log(screen.height);
}


window.addEventListener("deviceorientation", handleOrientation, true);
