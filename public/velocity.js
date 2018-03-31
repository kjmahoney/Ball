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
