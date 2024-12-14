// BST/BST.js

class Node {
    // A node is
    //      data
    //      /   \
    //  left    right
    constructor(data, left = null, right = null) {
        var this.data = data;
        var this.left = left;
        var this.right = right;
    }
}

class BST {
    // A BST is a root node with nodes as children
    constructor(root = null) {
        var this.root = root;
    }
}
