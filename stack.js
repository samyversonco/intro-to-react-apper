class Stack {
    constructor() {
      this.lifo = [];
    }
    push(input) {
      this.lifo.push(input);
    }
    pop() {
      if(this.lifo.length == 0) {
        console.log('Queue is currently empty.');
      }
        this.lifo.pop();
    }
    check() {
       console.log(this.lifo);
    }
}

const my_stack = new Stack();
my_stack.push('Milk');
my_stack.push('Eggs');
my_stack.push('Strawberry');
my_stack.check();
my_stack.pop();
my_stack.check();
my_stack.pop();
my_stack.check();
my_stack.pop();
my_stack.check();
my_stack.pop();