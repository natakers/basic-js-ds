const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor() {
    this.arr = [];
  }

  getUnderlyingList() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let q = new ListNode(this.arr[0]);
    console.log(this.arr);
    for(let i=1; i<this.arr.length; i++) {
      let c = q;
      while (c.next) {
        c = c.next
      }
      c.next = new ListNode(this.arr[i]);


    }
    return q;
  }

  enqueue(value) {
    // throw new NotImplementedError('Not implemented');
    return this.arr.push(value);
    // remove line with error and write your code here
  }

  dequeue() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.arr.shift();
  }

}
