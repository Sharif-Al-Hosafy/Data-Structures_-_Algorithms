// functions to be implemented
// add(element)
// insertAt(element, location)
// removeFrom(location)
// removeElement(element)

// Helper Methods
//indexOf
// isEmpty
// size_Of_List
// PrintList

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LL {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    let node = new Node(element);
    let current;

    // if list is Empty add the
    // element and make it head
    if (this.head == null) this.head = node;
    else {
      current = this.head;
      while (current.next) current = current.next;
      current.next = node; // add node
    }
    this.size++;
  }

  // insert element at the position index
  insertAt(element, index) {
    if (index < 0 || index > this.size)
      return console.log("Please enter a valid index.");
    else {
      let node = new Node(element);
      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        let curr, prev;
        let itr = 0;

        curr = this.head;
        while (itr < index) {
          itr++;
          prev = curr;
          curr = curr.next;
        }
        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }

  // removes an element from the
  // specified location
  removeFrom(index) {
    if (index < 0 || index > this.size)
      return console.log("Please enter a valid index.");
    else {
      let itr = 0;
      let curr, prev;
      curr = this.head;
      if (index == 0) this.head = curr.next;
      else {
        while (itr < index) {
          itr++;
          prev = curr;
          curr = curr.next;
        }
        prev.next = curr.next;
        curr.next = null;
      }
      this.size--;

      // return the remove element
      return curr.element;
    }
  }

  removeElement(element) {
    let curr = this.head;
    let prev = null;

    // iterate over the list
    while (curr != null) {
      if (curr.element == element) {
        if (prev == null)
          //then curr is first element
          this.head = curr.next;
        else prev.next = curr.next;
        this.size--;
        return curr.element;
      }
      prev = curr;
      curr = curr.next;
    }
    return -1;
  }
}

let list = new LL();
list.add(4);
list.add(7);
list.add(2);
list.add(3);
list.add(5);
console.log(list);
list.removeFrom(0);
console.log(list);
// list.removeElement(4);
// console.log(list);
// list.removeElement(7);
// console.log(list);
