// task 00 Iterable object
const myIterable = { from: 1, to: 5 }

myIterable[Symbol.iterator] = function () {

  // Проверка на валидность obj
  let validNumbers = [myIterable.from, myIterable.to].every(el => Object.prototype.toString.call(el) === '[object Number]' && !isNaN(el))

  // Если не валидно, кидаем ошибку
  if (!validNumbers || myIterable.from > myIterable.to) {
    throw new Error('Ошибка! Стартовое значение должно быть больше или значения должны быть числами')
  }

  return {
    current: this.from,
    last: this.to,
    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ }
      } else {
        return { done: true }
      }
    }
  }
}

for (let item of myIterable) { console.log(item) } // 1, 2, 3, 4, 5
