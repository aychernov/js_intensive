// Queue
// В среднем сложность: О(n)
class Queue {
  constructor(...items) {
    this.items = []
    this.enqueue(...items)
  }
  enqueue(...items) {
    //Пушим в итемс
    items.forEach(item => this.items.push(item))
    return this.items;
  }
  dequeue(count = 1) {
    // Сначала 1ый, потом по кол-во
    this.items.splice(0, count);
    return this.items;
  }
  peek() {
    //Узнать кто первый
    return this.items[0]
  }
  size() {
    //Длина очереди
    return this.items.length
  }
  isEmpty() {
    //Пустая ли?
    return this.items.length === 0
  }
}

const queue = new Queue();
queue.enqueue(1, 2, 3, 4)
queue.dequeue(2)
queue.isEmpty()
// false
queue.size();

console.log(queue)