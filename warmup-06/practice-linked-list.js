'use strict';

//Define LinkedList and Node classes
class Node {

  constructor(data, next){
    this.data = data;
    this.next = null;
  }
}

class LinkedList {

  constructor(){
    this.head = null;
    this.length = 0;
  }

  insert(data){
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  print(){
    let current = this.head;
    const values = [];
    while(current != null){
      values.push(current.data);
      current = current.next;
    }
    console.log(values.join('=>'));
    return values;
  }
}

let list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.print();