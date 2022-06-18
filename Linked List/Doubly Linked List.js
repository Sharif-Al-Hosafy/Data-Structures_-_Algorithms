class Node {
    constructor(element) {
      this.element = element
      this.next = null
      this.previous = null
    }
  }
  
  class DoublyLL {
    constructor() {
      this.head = null
      this.tail = null
      this.size = 0
    }
  
    display() {
      let curr = this.head
      let itr = 0
      let str = ''
      while (curr) {
        str += curr.element + ' '
        curr = curr.next
      }
      console.log(str)
    }
  
    append(element) {
      let node = new Node(element)
      if (size == 0) {
        this.head = node
        this.tail = node
      } else {
        this.tail.next = node
        node.previous = this.tail
        this.tail = node
      }
      this.size++
    }
  
    //O(1)
    pop() {
      if (this.tail) {
        let removed = this.tail
        this.tail = this.tail.previous
        if (this.tail) {
          this.tail.next = null
          removed.previous = null
        } else this.head = null
        this.size--
      } else console.log('The List Is Empty')
    }
  
    insetAt(element, idx) {
      let node = new Node(element)
      let itr = 0
      if(idx > Math.round(this.size/2)){
          console.log('started from the tail');
          while () {
          
          }
      }
    }
    removeFrom() {}
  }
  