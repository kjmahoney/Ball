module.exports = {
  rotate: (xVelocity, yVelocity, rotation) =>  {
    console.log(xVelocity);
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
