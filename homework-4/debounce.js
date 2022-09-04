function createDebounceFunction(fn, ms) {
  // переменная для сброса таймера
  let timeOut
  // Функция обертка для задержки
  return function (...args) {
    const fnCall = () => { fn.apply(this, args) }
    // Сброс таймера, если новый вызов в пределах задержки 
    clearTimeout(timeOut)
    // Обновляем таймер
    timeOut = setTimeout(fnCall, ms)
  }
}

// const log100 = () => console.log(100);
// const debounceLog100 = createDebounceFunction(log100, 1000);
// debounceLog100();
// setTimeout(debounceLog100, 200); // так как задержка в 1000мс и новый вызов этой же функции происходит через 200 миллисекунд, то таймер запускается заново
// setTimeout(debounceLog100, 400); // снова сбрасываем таймер ещё через 200 миллисекунд