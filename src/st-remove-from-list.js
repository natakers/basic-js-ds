const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

module.exports = function removeKFromList(l, k) {

let cur = l
  if (l.value === k) {
    cur = cur.next
    l = l.next
  }
    let prev = null
    while(cur.next != null) {
      
      prev = cur
      cur = cur.next
      if (cur.value === k) {
        prev.next = cur.next
        cur = cur.next

      }

  }
 return l
 
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
