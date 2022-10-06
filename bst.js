// BST implementation

class BST {
  constructor() {
    this.root = null;
  };

  create(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    };

    let current = this.root;

    const addSide = side => {
      if (!current[side]) {
        current[side] = newNode;
        return this;
      };
      current = current[side];
    };

    while (true) {
      if (val === current.val) return this;
      if (val < current.val) addSide('left');
      else addSide('right');
    };
  };

  inOrder() {
    let visited = [],
        current = this.root;

    function traverse(node) {
      if (node === null) return; // base case

      traverse(node.left); // call Fn with node's LEFT child
      visited.push(node.val); // visitation operation
      traverse(node.right); // call Fn with node's RIGHT child
    };

    traverse(current);
    return visited;
  }

  postOrder() {
    let visited = [],
        current = this.root;

    function traverse(node) {
      if (node === null) return;
      traverse(node.left);
      traverse(node.right);
      visited.push(node.val);
    };

    traverse(current);
    return visited;
  }

  preOrder() {
    let visited = [],
        current = this.root;

    function traverse(node) {
      if (node === null) return;

      visited.push(node.val);
      traverse(node.left);
      traverse(node.right);
    };

    traverse(current);
    return visited;
  }
};

class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  };
};

const tree = new BST();

tree.create(20);
tree.create(14);
tree.create(57);
tree.create(9);
tree.create(19);
tree.create(31);
tree.create(62);
tree.create(3);
tree.create(11);
tree.create(72);

const usingInOrder = tree.inOrder();
console.log(usingInOrder) // > [ 3, 9, 11, 14, 19, 20, 31, 57, 62, 72 ]

// const usingPostOrder = tree.postOrder();
// console.log(usingPostOrder) // > [ 3, 11,  9, 19, 14, 31, 72, 62, 57, 20]

// const usingPreOrder = tree.preOrder();
// console.log(usingPreOrder) // > [20, 14,  9,  3, 11, 19, 57, 31, 62, 72]


/*
tree.inOrder()
    (variable and function declarations)

    traverse(current)
        (node.value: 20)
        NODE IS NOT NULL

        traverse(node.left)
            (node.value: 14)
            NODE IS NOT NULL

            traverse(node.left)
                (node.value: 9)
                NODE IS NOT NULL

                traverse(node.left)
                    (node.value: 3)
                    NODE IS NOT NULL

                    traverse(node.left)
                        (node.value: null)        <- REACHED A LEAF
                        NODE IS NULL
                        >>RETURN and POP<<

                    visited.push(node.val) ... visited: [3]

                    traverse(node.right)
                        (node.value: null)
                        NODE IS NULL
                        >>RETURN and POP<<

                    visited.push(node.val) ... visited: [3, 9]

                    traverse(node.right)
                        (node.value: 11)
                        NODE IS NOT NULL

                        traverse(node.left)
                            (node.value: null)
                            NODE IS NULL

                            visited.push(node.val); ... visited: [3, 9, 11]

                            traverse(node.right)
                                (node.value: null)
                                NODE IS NULL

                        >>RETURN and POP<<

                    >>RETURN and POP<<

                    visited.push(node.val); ... visited: [3, 9, 11, 14]

                    traverse(node.right)
                        (node.value: 19)
                        NODE IS NOT NULL
...
*/
