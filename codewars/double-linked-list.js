  class DoublyLinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null,
        prev: null
      }
      this.tail = this.head;
      this.length = 1;
    }
  
    append(value) {
      const newNode = {
        value: value,
        next: null,
        prev: null
      };
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
  
    prepend(value) {
      const newNode = {
        value: value,
        next: null,
        prev: null
      }
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
  
    printList() {
      const array = [];
      let currentNode = this.head;
      while(currentNode !== null) {
        array.push(currentNode.value);
        currentNode = currentNode.next;
      }
      return array; 
    }
  
    insert(index, value) {
      if (index >= this.length) {
        return this.append(value);
      }
      const newNode = {
        value: value,
        next: null,
        prev: null
      }
     const leader = this.traverseToIndex(index - 1);
     const follower = leader.next;
     leader.next = newNode;
     newNode.prev = leader;
     newNode.next = follower;
     follower.prev = newNode;
     this.length++;
      return this.printList();
    }
  
    traverseToIndex(index) {
      let counter = 0;
      let currentNode = this.head;
      while(counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
  
    remove(index) {
      const leader = this.traverseToIndex(index-1);
      const unwantedNode = leader.next;
      const follower = unwantedNode.next;
      leader.next = unwantedNode.next;
      follower.prev = leader;
      this.length--;
      return this.printList();
    }
    reverse() {
        let actualTail = this.tail;
        let iter = this.tail;
        while (iter != this.head) {
          const iterPrev = iter.prev;
          // const temp = iter.next;
          // iter.next = iter.prev;
          // iter.prev = temp;
          [iter.next, iter.prev] = [iter.prev, iter.next]
          iter = iterPrev;
        }
        this.head.next = null;
        this.tail = iter;
        this.head = actualTail;
        return this;
      }


    // reverse() {
    //   if (!this.head.next) {
    //     return this.head;
    //   }
    //   let first = this.head;
    //   this.tail = this.head;
    //   let second = first.next;
    //   while(second) {
    //     const temp =  second.next;
    //     first = second;
    //     second = temp;
    //   }
    //   this.head.next = null;
    //   this.head = first;
    //   return this;
    // }
  }

  const myLinkedList = new DoublyLinkedList(5);
  
  myLinkedList.append(1);
  myLinkedList.append(3);
  myLinkedList.append(4);
  myLinkedList.append(9);
  
  console.log(myLinkedList.reverse());
  console.log(myLinkedList.printList());