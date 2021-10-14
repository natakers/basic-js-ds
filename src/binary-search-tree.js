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
    if (this.treeroot) {
      return this.treeroot = this.treeroot;
    }
    else return this.treeroot = null 
    // remove line with error and write your code here
  }

  add(data) {
    const newNode = new Node(data);
    console.log(newNode);
    if (!this.treeroot) {
      this.treeroot = newNode;
      return;
    }
    let currentNode = this.treeroot
    while(currentNode) {
      if (newNode.data < currentNode.data) {
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

  has(data) {
    return search(this.treeroot, data)
    function search(node, data) {
      if (!node) {
        return false
      }
      if (node.data === data) {
        return true
      }
      if (data < node.data) {
        return search(node.left, data)
      }
      else return search(node.right, data)

    }
     
    // remove line with error and write your code here
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');

    return search(this.treeroot, data)
    function search(node, data) {
      if (!node) {
        return null
      }
      if (node.data === data) {
        return node
      }
      if (data < node.data) {
        return search(node.left, data)
      }
      else return search(node.right, data)

    }
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