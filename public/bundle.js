(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
const ball = document.getElementById('ball')
const field = document.getElementById('field')
const timer = document.getElementById('timer')
const touches = document.getElementById('touches')

const handleRotation = require('./rotation')
const handleVelocity = require('./velocity')

////
//SETTINGS
////
ball.style.width = "50px";
ball.style.height = "50px";
ball.style.left = "50%"
ball.style.top = "50%"
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

},{"./rotation":2,"./velocity":3}],2:[function(require,module,exports){
module.exports = {
  rotate: (xVelocity, yVelocity, rotation) =>  {
    if (xVelocity == 0 && yVelocity == 0) {
  		return rotation += 0
  	}
  	else if (xVelocity < 0) {
  		return rotation -= 10
  	}
  	else {
  		return rotation += 10
  	}
  }
}

},{}],3:[function(require,module,exports){
module.exports = {

  X: (xTilt, xVelocity) => {
    let xIncrement = (.05 + (Math.abs(xTilt) / 10000))

    if (xTilt >= 10) {
      return xVelocity += xIncrement
    }

    else if (xTilt <= 0) {
      return xVelocity -= xIncrement
    }

    else {
      return xVelocity
    }
  },

  Y: (yTilt, yVelocity) => {
    let yIncrement = (.05 + (Math.abs(yTilt) / 10000))

    if (yTilt >= 45) {
      return yVelocity += yIncrement
    }

    else if (yTilt <= 35) {
      return yVelocity -= yIncrement
    }

    else {
      return yVelocity
    }
  }
}

},{}]},{},[1]);
