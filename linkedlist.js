class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head =  newNode;
      return;
    }

    let current = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  } 

  prepend(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    const current = this.head;
    newNode.nextNode = current;
    this.head = newNode;
    // this.nextNode = current;
  }

  size() {
    let count = 0;
    let current = this.head;
    if (current === null) return undefined;
    while (current !== null){
      count++;
      current = current.nextNode;
    }
    return count;
  }

  tail() {
    let current = this.head;
    if (!current) return undefined;

    let tail = null;
    while (current !== null) {
      if (current.nextNode === null){
        tail = current;
      } 
      current = current.nextNode;
    }
    return tail.value;
  }

  at(index) {
    let current = this.head;
    let i = 0;
    
    while (current !== null & i < index) {
      current = current.nextNode;
      i++;
    }
    return current === null ? undefined : current.value;
  }

  pop() {
    const current = this.head;
    this.head = current.nextNode;

    return current.value;
  }

  contains(value) {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  findIndex(value) {
    let current = this.head;
    let i = 0;

    while (current !== null) {
      if (current.value === value) {
          return i;
      }
      current = current.nextNode;
      i++;
    }
    return -1;
  }

  toString() {
    let current = this.head;
    let nodes = [];
    while (current !== null) {
      nodes.push(`( ${current.value} )`);
      current = current.nextNode;
    }
    nodes.push("null");
    return nodes.join(" -> ");
  }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");

list.prepend("gucci");

console.log(list.head.value);
console.log(list.head.nextNode.nextNode.value); // "parrot"
console.log(list.tail());
console.log(list.pop());
console.log(list.size());
console.log(list.head.value);
console.log(list.contains("cat"));
console.log(list.contains("catt"));
console.log(list.findIndex("parrot"));
console.log(list.toString());
