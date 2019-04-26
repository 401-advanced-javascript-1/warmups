'use strict';

class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
}

class Queue {
    constructor(){
      this.front = null;
      this.length = 0;
    }
  
    enqueue(value){
      let newNode = new Node(value);
      if(this.length === 0){
        this.front = newNode;
      } else {
        let temp = this.front;
        while(temp.next){
          temp = temp.next;
        }
        temp.next = newNode;
      }
      this.length++;
    }
  
    dequeue(){
      let temp = this.front;
      this.front = this.front.next;
      temp.next = null;
      this.length--;
      return temp;
    }
  
    peek(){
      return this.front.value;
    }
  }

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);