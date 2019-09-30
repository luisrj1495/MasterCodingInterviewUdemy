/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */


const traverseByLoop2 =  (value, currentNode) => {
    while (true) {
        if (value > currentNode.value) {
            // Right
            if (!currentNode.right) {
                return currentNode
            }
            currentNode = currentNode.right
        } else {
            // Left
            if (!currentNode.left) {
                return currentNode
            }
            currentNode = currentNode.left
        } 
    }
   
}

var insertIntoBST = function (root, value) {
    const newNode = new TreeNode(val)



    if (root) {
        const nodeToInsert = traverseByLoop2(value, root)
        if (value > nodeToInsert.value) {
            nodeToInsert.right = newNode
        } else {
            nodeToInsert.left = newNode
        }
    } else {
        root = newNode
    }
    return root


};
