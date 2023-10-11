class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}
const stack = new Stack();
console.log(stack.isEmpty());

stack.push(3);
stack.push(4)
stack.push(5)

console.log(stack.size())
stack.print()

console.log(stack.pop()) //removes the last element of stack
console.log(stack.peek()) //get the value of the top of the stack
