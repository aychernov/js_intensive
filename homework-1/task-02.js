// task 01

function calc() {
  // Отдельные проверки для завершения в случае ошибки
  const firstNum = +prompt('Введите первое число')
  if (isNaN(firstNum)) {
    console.log("Некорректный ввод!")
    return
  }
  const secNum = +prompt('Введите второе число')
  if (isNaN(secNum)) {
    console.log("Некорректный ввод!");
    return
  }
  console.log(`Ответ: сумма чисел = [${firstNum + secNum}], частное = [${firstNum / secNum}].`);
}
calc() 