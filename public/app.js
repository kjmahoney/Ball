const ball = document.getElementById('ball')
const field = document.getElementById('field')

ball.style.left = "50%"
ball.style.top = "50%"

handleOrientation = (event) => {
	let yTilt = event.beta
	let xTilt = event.gamma

	let yIncrement = (yTilt / 10)
	let xIncrement = (xTilt / 10)

	ball.style.top = parseInt(ball.style.top) + yIncrement + "px"
	ball.style.left = parseInt(ball.style.left) + xIncrement + "px"
}


window.addEventListener("deviceorientation", handleOrientation, true);
