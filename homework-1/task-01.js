// task 01

function notation() {
  let firstNum = prompt()
  let secNum = prompt()

  // Проверка на число 
  if (firstNum && secNum && !isNaN(firstNum) && !isNaN(secNum)) {
    let resultNotation = Number(firstNum).toString(Number(secNum))
    console.log(resultNotation)
    return
  } else {
    console.log("Некорректный ввод!")
  }
}

notation()