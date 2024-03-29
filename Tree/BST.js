class Node {
    constructor(value) {
        this.val = value
        this.right = null
        this.left = null
    }

}

class BinarySearchTree {

    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root == null;
    }


    insert(value) {
        let newNode = new Node(value)
        if (this.isEmpty()) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }


    insertNode(root, node) {
        if (node.val <= root.val) {
            if (root.left == null) {
                root.left = node
            } else {
                this.insertNode(root.left, node)
            }
        } else {
            if (root.right == null) {
                root.right = node
            } else {
                this.insertNode(root.right, node)
            }
        }
    }
    search(root, val) {
        if (this.isEmpty() || !root) {
            return false
        }
        if (root.val == val) {
            return true
        } else {
            if (val < root.val) {
                return this.search(root.left, val)
            } else {
                return this.search(root.right, val)
            }
        }


    }

    bfs() {
        let queue = []
        queue.push(this.root)
        while (queue.length>0) {
            let cur = queue.shift()
            console.log(cur.val);
            if (cur.left) {
                queue.push(cur.left)
            }
            if (cur.right) {
                queue.push(cur.right)
            }
        }
    }

    min(root) {
        if (!root.left) {
            return root.val
        } else {
            return min(root.left)
        }
    }

    max(root) {
        if (!root.right) {
            return root.val
        } else {
            return min(root.right)
        }
    }



    deleteNode(value) {
        this.root=this.deleteOne(this.root,value)
    }

    deleteOne(root, val) {
        if (root == null) {
            return root
        }
        if (val < root.val) {
            root.left = this.deleteOne(root.left, val)
        }
        else if (val > root.val) {
            root.right = this.deleteOne(root.right, val)
        } else {
            if (!root.left && !root.right) {
                return null
            }
            if (!root.left) {
                return root.right
            }
            if (!root.right) {
                return root.left
            }
            root.val = this.min(root.right)
            root.right = this.deleteOne(root.right, root.val)
        }
        return root
    }


    inorderTraversal(root) {
        let result=[]
        function inorder(root){
            if(root){
                inorder(root.left)
              result.push(root.val)
                inorder(root.right)
            }
        }
        inorder(root)
        return result
        
    }

    preorderTraversal(root=this.root) {
        let result=[]
        function preorder(root){
            if(root){
                result.push(root.val)
                preorder(root.left)
                preorder(root.right)
            }
        }
    
        preorder(root)
        console.log(result);
    }

    postorderTraversal(root) {
        let result=[]
        function postorder(root){
            if(root){
                postorder(root.left)
                postorder(root.right)
                result.push(root.val)
            }
        }
    
        postorder(root)
        console.log(result);
    }

    closestElement(k){
        let elements=this.inorderTraversal(this.root)
        let result=Math.abs(elements[0]-k) 
        let ele=elements[0]
        for (let i = 1; i < elements.length; i++) {
            if(result>Math.abs(elements[i]-k)){
                result=Math.abs(elements[i]-k)
                ele=elements[i]
            }
            
        }
        return ele
    }
}


const bst = new BinarySearchTree()
console.log(bst.isEmpty());
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
bst.preorderTraversal()
