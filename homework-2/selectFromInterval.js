//task 01
// const array = [1, 2, 3, 4, 5, 6]

function selectFromInterval(arr, start, end) {
  const result = [];
  // Проверка на массив
  if (!Array.isArray(arr)) {
    throw new Error(`${arr} это не массив.`);
  }
  for (let i = 0; i < arr.length; i++) {
    // Проверка массива на элементы
    if (!Number.isInteger(arr[i])) {
      throw new Error(`${arr[i]} массив должен быть только из чисел!`);
    }
  }
  //Проверка параметров на валидность
  if (!Number.isInteger(start) || !Number.isInteger(end)) {
    throw new Error('Параметры должны быть числами!');
  }
  // Проверка какой параметр больше и с какого начинаем 
  let startIteration = start > end ? [end, start] : [start, end]
  arr.forEach(num => num >= startIteration[0] && num <= startIteration[1] && result.push(num))

  return result;
}

// console.log(selectFromInterval([1,3,5], 5, 2)) // 1,2,3
// console.log(selectFromInterval(array, 3, 1)) // 1,2,3
