// task 00
const makeObjectDeepCopy = obj => {
  const clone = {}
  for (const i in obj) {
    // Если i вложенный (объект)
    if (obj[i] != null && typeof (obj[i]) == "object") {
      clone[i] = makeObjectDeepCopy(obj[i])
      // Если i НЕ вложенный
    } else {
      clone[i] = obj[i]
    }
  }
  return clone;
}

const obj = {
  color: 'red',
  fontSize: {
    bold: 600,
    span: {
      css: 'include'
    }
  }
}

const newObj = makeObjectDeepCopy(obj)
obj.fontSize.bold = 200

console.log(obj)
// { color: 'red', fontSize: { bold: 200, span: { css: 'include' } } }

console.log(newObj)
// { color: 'red', fontSize: { bold: 600, span: { css: 'include' } } }
