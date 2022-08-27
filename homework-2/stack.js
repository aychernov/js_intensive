// Таска по стеку, сложность: О(1).  
class Stack {
  constructor() {
    this.stack = [];
  }
  push(item) {
    this.stack.push(item);
  }
  pop() {
    this.stack.pop();
  }
}
const stack = new Stack()

stack.push('Почистить зубы')
stack.push('Позавтракать')
stack.push('Выйти на улицу')
//------------\\
stack.pop()
stack.pop()
stack.pop()

console.log(stack)