class Calculator {
  constructor(x, y) {
    if (x && y && Number.isFinite(x) && Number.isFinite(y)) {
      this.x = x
      this.y = y
    } else { throw new Error('Невалидные числа') }

  }

  setX = (num) => {
    if (num && Number.isFinite(num)) {
      this.x = num
    } else { throw new Error('Невалидное число') }
  }

  setY = (num) => {
    if (num && Number.isFinite(num)) {
      this.y = num
    } else { throw new Error('Невалидное число') }
  }

  logSum = () => {
    console.log(this.x + this.y)
  }

  logMul = () => {
    console.log(this.x * this.y)
  }

  logSub = () => {
    console.log(this.x - this.y)
  }

  logDiv = () => {
    if (this.y === 0) {
      throw new Error('На 0 делить нельзя!)')
    }
    console.log(this.x / this.y)
  }
}
