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

  display() {
    if (this.size == 0) console.log("The List Is Empty");
    else {
      let curr = this.head;
      let str = "";
      while (curr != null) {
        str += curr.element + " ";
        curr = curr.next;
      }
      console.log(str);
    }
  }
  indexOf(element) {
    let idx = 0;
    let curr = this.head;

    while (curr != null) {
      if (curr.element == element) return idx;
      curr = curr.next;
      idx++;
    }
    return -1;
  }

  isEmpty() {
    return this.size == 0;
  }

  size_of_list() {
    return this.size;
  }
}

/////////////////////////////////// Test Cases ////////////////////////////////////////////////////////////

// creating an object for the
// Linkedlist class
var ll = new LL();

// testing isEmpty on an empty list
// returns true
console.log(ll.isEmpty());

// adding element to the list
ll.add(10);

// prints 10
ll.display();

// returns 1
console.log(ll.size_of_list());

// adding more elements to the list
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);

// returns 10 20 30 40 50
ll.display();

// prints 50 from the list
console.log("is element removed ? " + ll.removeElement(50));

// prints 10 20 30 40
ll.display();

// returns 3
console.log("Index of 40 is ---> " + ll.indexOf(40));

// insert 60 at second position
// ll contains 10 20 60 30 40
ll.insertAt(60, 2);

ll.display();

// returns false
console.log("is List Empty ? " + ll.isEmpty());

// remove 3rd element from the list
console.log(ll.removeFrom(3));

// prints 10 20 60 40
ll.display();
