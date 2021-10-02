class Node {
    constructor(root) {
        this.root = root;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insertBST(val) {
        if (this.root == null) {
            const node = new Node(val);
            this.root = node.root;
        }
    }

}