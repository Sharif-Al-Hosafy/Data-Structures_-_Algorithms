class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null; // starting pointer of the tree
  }

  /////////////////// inserting /////////////////////////////
  insert(data) {
    const NewNode = new Node(data);
    if (this.root == null) this.root = node;
    else this.traversAndInsert(this.root, NewNode);
  }

  traversAndInsert(node, NewNode) {
    if (NewNode.data < node.data) {
      if (node.left != null) this.traversAndInsert(node.left, NewNode);
      else node.left = NewNode;
    } else {
      if (node.right != null) this.traversAndInsert(node.right, NewNode);
      else node.right = NewNode;
    }
  }

  ////////////////////////////////////////////////////////////////

  /////////////////////// removing ///////////////////////////////

  remove(data) {
    this.traversAndDelete(this.root, data);
  }

  traversAndDelete(node, key) {
    if (node == null) return null;
    if (key > node.data) {
      node = this.traversAndDelete(node.right, key);
      return node;
    } else if (key < node.data) {
      node = this.traversAndDelete(node.left, key);
      return node;
    } else {
      if (node.left == null && node.right == null) {
        node = null;
        return node;
      }

      if (node.left == null) {
        node = node.right;
        return node;
      } else if (node.right == null) {
        node = node.left;
        return node;
      }

      const temp = this.findMinNode(node, key);
      node = temp;
      return node;
    }
  }

  findMinNode(node, key) {}

  ////////////////////////////////////////////////////////////////
}
