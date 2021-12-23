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

}

