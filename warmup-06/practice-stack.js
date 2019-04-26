'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.length = 0;
  }

  push(value){
    if(this.top === null){
      this.top = new Node(value);
    } else {
      let newTop = new Node(value);
      newTop.next = this.top;
      this.top = newTop;
    }
    this.length++;
  }

  pop(){
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  peek(){
    return this.top;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);