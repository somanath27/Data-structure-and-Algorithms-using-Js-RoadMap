class Stack {
  constructor() {
    this.items = [];
  }

  // Push method used to add new Element at the end of an array
  push(newElement) {
    this.items.push(newElement);
  }

    // Pop method used to remove Element at the end of an array
  pop() {
    return this.items.pop();
  }

  // to get the value of the top of the stack
  peek() {
    return this.items[this.items.length - 1];
  }

  // to check the stack is either empty or not
  isEmpty() {
    return this.items.length === 0;
  }

  // to get the size of the stack
  size() {
    return this.items.length;
  }

  // to get all data from stack
  print() {
    console.log(this.items.toString());
  }
}
const stack = new Stack();
console.log(stack.isEmpty()); //true

stack.push(3);
stack.push(4)
stack.push(5)

console.log(stack.size())
stack.print() 

console.log(stack.pop()) //removes the last element of stack
console.log(stack.peek()) //get the value of the top of the stack
