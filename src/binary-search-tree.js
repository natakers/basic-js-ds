const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this.treeroot = null
  }
  // this.root = null;

  root() {
    // throw new NotImplementedError('Not implemented');
    // this.treeroot = null;
    // console.log('ss');
    // return this.treeroot;
    return this.treeroot ? this.treeroot : null

    // if (!this.treeroot) {
    //   this.treeroot = null;
    //   return;
    // }
    // else this.treeroot = this.treeroot
    // remove line with error and write your code here
  }

  add(data) {
    // const r = BinarySearchTree.root();
    console.log('dd');

    const newNode = new Node(data);
    console.log(newNode);
    if (!this.treeroot) {
      this.treeroot = newNode;
      return;
    }
    let currentNode = this.root
    while(currentNode) {
      if (newNode.value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode
          return
        }
        currentNode = currentNode.left
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode
          return
        }
        currentNode = currentNode.right

      }
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

}