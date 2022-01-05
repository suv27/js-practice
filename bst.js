/* BINARY SEARCH TREE*/

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    findMin() {
        let current = this.root;
        while(current.left !== null) current = current.right;
        return current.data + ': is the minimun';
    }

    findMax() {
        let current = this.root;
        while(current.right !== null) current = current.right;
        return current.data + ': is the maximun';
    }

    find(data) {
        let current = this.root;
        while(current.data !== data) {
            if(data < current.data) {
                current = current.left
            } else if(data > current.data) {
                current = current.right
            } else {
                return data + ': couldn\'t be found';
            }
        }
        return current + ': is the found node with the data ' + data;
    }

    isPresent(data) {
        let current = this.root;
        while(current) {
            if(data === current.data) return true  + ': data exist on the tree';;
            if(data < current.data) current = current.left;
            else current = current.right;
        }
        return false + ': data doen\'t exist on the tree';
    }

    add(data) {
        let node = this.root;
        if(node === null) node = new Node(data);
        else {
            const searchTree = (node) => {
                if(data < node.data) {
                    if(node.left === null) {
                        node.left = new Node(data);
                    } else if(node.left !== null) return searchTree(node.left);
                } else if(data > node.data) {
                    if(node.right === null) {
                        node.right = new Node(data);
                    } else if(node.right !== null) return searchTree(node.right);
                } else return null;
            }
        };

        return searchTree(node);
    }

    remove(data) {
        const removeNode = (node, data) => {
            if(node.data === null) return null + ': Tree is empty.';
            if(data == node.data) {
                if(node.left == null && node.right == null) return null;
                if(node.left == null) return node.right;
                if(node.right == null) return node.left;

                let tempNode = node.right;
                while(tempNode.left !== null) tempNode = tempNode.left;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if(data < node.data) node.left = removeNode(node.left, data);
            else node.right = removeNode(node.right, data);
        }

        this.root = removeNode(this.root, data);
    }

    isBalanced() {

    }

    findMinHeight() {

    }

    findMaxHeight() {

    }

    inOrder() {

    }

    preOrder() {

    }

    postOrder() {

    }

    levelOrder() {
        
    }
}
