// task 01
Array.prototype.myFilter = function (filterFn, obj = {}) {

  const filteredArr = []

  for (let i = 0; i < this.length; i++) {
    const result = filterFn(this[i], i, this)
    if (result) { filteredArr.push(this[i]) }
  }

  return filteredArr
}

const arr = [1, 2, 3, 4]

// console.log(arr.myFilter(item => item % 2 === 0)) // 2, 4
// console.log(arr.myFilter(item => item % 2)) // 1, 3
// console.log(arr.myFilter(item => item > 5)) // []
// console.log(arr.myFilter(item => item < 3)) // [1, 2]