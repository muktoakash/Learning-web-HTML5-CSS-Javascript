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
    add(data) {
        const node = this.root;
        if (node == null) {
            this.root = new Node(data);
            return;
        }
        else {
            const searchTree = function (node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                }
                else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    }
                    else if (node.right !== null) {
                        return searchTree(node.right);
                    }
                }
                else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }
}
