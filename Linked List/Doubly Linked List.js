class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  display() {
    let curr = this.head;
    let itr = 0;
    let str = '';
    while (curr) {
      str += curr.element + ' ';
      curr = curr.next;
    }
    console.log(str);
  }

  append(element) {
    let node = new Node(element);
    if (this.size == 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }
    this.size++;
  }

  //O(1)
  pop() {
    if (this.tail) {
      let removed = this.tail;
      this.tail = this.tail.previous;
      if (this.tail) {
        this.tail.next = null;
        removed.previous = null;
      } else this.head = null;
      this.size--;
    } else console.log('The List Is Empty');
  }

  insetAt(element, idx) {
    let node = new Node(element);
    let curr;
    let itr = 0;
    // out of bound
    if (idx >= this.size) {
      throw new Error('Insert index out of bounds');
    }

    if (idx === 0) {
      if (this.head) {
        node.next = this.head;
        this.head.previous = node;
        this.head = node;
      } else this.head = this.tail = node; // inserting first element
    } else if (idx >= Math.round(this.size / 2)) {
      // starting from the nearest pointer
      itr = this.size - 1;
      curr = this.tail;
      console.log('started from the tail');
      while (itr > idx) {
        curr = curr.previous;
        itr--;
      }
      let prev = curr.previous;
      curr.previous = node;
      node.next = curr;
      prev.next = node;
      node.previous = prev;
    } else {
      itr = 0;
      curr = this.head;
      console.log('started from the head');
      while (itr < idx) {
        curr = curr.next;
        itr++;
      }
      let previousNode = curr.previous;
      curr.previous = node;
      node.previous = previousNode;
      node.next = curr;
      previousNode.next = node;
    }
    this.size++;
  }
  removeFrom() {}
}

const dLinkedList = new DoublyLL();

dLinkedList.append(7);
dLinkedList.append(8);
dLinkedList.append(9);
dLinkedList.append(2);
dLinkedList.append(3);
dLinkedList.append(5);
dLinkedList.insetAt('hhh', 0);
dLinkedList.pop();
dLinkedList.display();
