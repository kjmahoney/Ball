(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
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

},{}]},{},[1]);
