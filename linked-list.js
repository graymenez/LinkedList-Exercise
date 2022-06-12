/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length + 1;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    let currentNode = this.head;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length + 1;
    }

    this.head = newNode;
    this.head.next = currentNode;
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    let currentNode = this.head;
    let tailNode = this.tail;
    let deleted = false;
    if (currentNode && tailNode) {
      while (currentNode) {
        if (this.length === 2) {
          let oldValue = this.tail.val;
          currentNode.next = null;
          this.head = this.head;
          this.tail = this.head;
          deleted = true;
          if (deleted) {
            this.length -= 1;
            deleted = false;
          }
          return oldValue;
        } else if (this.length === 1) {
          let oldValue = this.tail.val;
          currentNode.next = null;
          this.head = null;
          this.tail = null;
          deleted = true;
          if (deleted) {
            this.length -= 1;
            deleted = false;
          }
          return oldValue;
        }
        currentNode = currentNode.next;

        if (currentNode.next === this.tail) {
          let oldValue = this.tail.val;
          currentNode.next = null;
          this.tail = currentNode;
          deleted = true;
          if (deleted) {
            this.length -= 1;
            deleted = false;
          }
          return oldValue;
        }
      }
    } else {
      throw Error("Sorry, array is empty");
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    let currentNode = this.head;
    let shifted = false;
    while (currentNode && !shifted) {
      if (this.length === 1) {
        let oldValue = this.head.val;
        this.head = null;
        this.tail = null;
        this.length -= 1;
        return oldValue;
      }
      let oldValue = this.head.val;
      this.head = currentNode.next;
      shifted = true;
      this.length -= 1;
      return oldValue;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentNode = this.head;
    this.idx = 0;
    let index = this.idx - 1;
    while (currentNode) {
      index += 1;
      if (idx === index) {
        return currentNode.val;
      }
      currentNode = currentNode.next;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  //**************************************************************************************** */
  //******************************** Need More Time for these ******************************************* */
  //**************************************************************************************** */

  setAt(idx, val) {
    let currentNode = this.head;
    this.idx = 0;
    let index = this.idx - 1;
    while (currentNode) {
      let startingVal = currentNode;
      index += 1;
      console.log(index);
      console.log("Starting");

      console.log(startingVal);
      console.log("Starting");
      if (idx - 1 === index) {
        let newNode = new Node(val);
        currentNode.next = currentNode;
        currentNode = newNode;

        console.log("Current");
        console.log(currentNode);
        console.log("Current");
      }
      currentNode = currentNode.next;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {}

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {}

  /** average(): return an average of all values in the list */

  average() {}
}

module.exports = LinkedList;
