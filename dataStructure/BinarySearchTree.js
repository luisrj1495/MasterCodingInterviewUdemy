class BinarySearchTreeNode {
    constructor (value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor () {
        this.root = null
    }

    traverseByLoop (value, currentNode) {
        while (true) {
            if (value > currentNode.value && currentNode.right) {
                currentNode = currentNode.right
            } else if (value > currentNode.value && !currentNode.right) {
                return currentNode
            } else if (value < currentNode.value && currentNode.left) {
                currentNode = currentNode.left
            } else if (value < currentNode.value && !currentNode.left) {
                return currentNode
            }
        }
       
    }

    traverseByLoop2 (value, currentNode) {
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

    traverseByLoopLookup (value, currentNode) {
        while (true) {
            if (value == currentNode.value) return currentNode
            if (value > currentNode.value) {
                // Right
                if (!currentNode.right) {
                    return null
                }
                currentNode = currentNode.right
            } else {
                // Left
                if (!currentNode.left) {
                    return null
                }
                currentNode = currentNode.left
            } 
        }
       
    }

    traverseLoopRemove (value, currentNode) {
        let parentNode = null;
        while (currentNode) {
            if (value == currentNode.value) {
                if (!currentNode.right) {
                    if (parentNode == null) {
                        this.root = currentNode.left
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left
                        }
                    }
                } else {
                   
                }
                
            } else if (value > currentNode.value) {
                parentNode = currentNode
                currentNode = currentNode.right
            } else if (value < currentNode.value) {
                parentNode = currentNode
                currentNode = currentNode.left
            }
        }
    }

    traverseByLoopLookup2 (value, currentNode) {
        while (currentNode) {
            if (value > currentNode.value) {
                // Right
                currentNode = currentNode.right
            } else if (value < currentNode.value) {
                // Left
                currentNode = currentNode.left
            } else if (value == currentNode.value) return currentNode
        }
        return false
    }




    insert (value) {
        const newNode = new BinarySearchTreeNode(value)
        if (this.root) {
            const nodeToInsert = this.traverseByLoop2(value, this.root)
            if (value > nodeToInsert.value) {
                nodeToInsert.right = newNode
            } else {
                nodeToInsert.left = newNode
            }
        } else {
            this.root = newNode
        }
        console.log(this.root)
    }

    lookup (value) {
        if (!this.root) return false
        let foundNode = this.traverseByLoopLookup2(value, this.root)
        return foundNode
    }

    remove(value) {
        if (!this.root) {
          return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while(currentNode){
          if(value < currentNode.value){
            parentNode = currentNode;
            currentNode = currentNode.left;
          } else if(value > currentNode.value){
            parentNode = currentNode;
            currentNode = currentNode.right;
          } else if (currentNode.value === value) {
            //We have a match, get to work!
            
            //Option 1: No right child: 
            if (currentNode.right === null) {
              if (parentNode === null) {
                this.root = currentNode.left;
              } else {
                
                //if parent > current value, make current left child a child of parent
                if(currentNode.value < parentNode.value) {
                  parentNode.left = currentNode.left;
                
                //if parent < current value, make left child a right child of parent
                } else if(currentNode.value > parentNode.value) {
                  parentNode.right = currentNode.left;
                }
              }
            
            //Option 2: Right child which doesnt have a left child
            } else if (currentNode.right.left === null) {
              currentNode.right.left = currentNode.left;
              if(parentNode === null) {
                this.root = currentNode.right;
              } else {
                
                //if parent > current, make right child of the left the parent
                if(currentNode.value < parentNode.value) {
                  parentNode.left = currentNode.right;
                
                //if parent < current, make right child a right child of the parent
                } else if (currentNode.value > parentNode.value) {
                  parentNode.right = currentNode.right;
                }
              }
            
            //Option 3: Right child that has a left child
            } else {
    
              //find the Right child's left most child
              let leftmost = currentNode.right.left;
              let leftmostParent = currentNode.right;
              while(leftmost.left !== null) {
                leftmostParent = leftmost;
                leftmost = leftmost.left;
              }
              
              //Parent's left subtree is now leftmost's right subtree
              leftmostParent.left = leftmost.right;
              leftmost.left = currentNode.left;
              leftmost.right = currentNode.right;
    
              if(parentNode === null) {
                this.root = leftmost;
              } else {
                if(currentNode.value < parentNode.value) {
                  parentNode.left = leftmost;
                } else if(currentNode.value > parentNode.value) {
                  parentNode.right = leftmost;
                }
              }
            }
          return true;
          }
        }
      }

    breadthFirstSearch () {
      let currentNode = this.root;
      let list = []
      let queue = []
      queue.push(currentNode)
      while(queue.length > 0) {
        currentNode = queue.shift()
        list.push(currentNode.value)
        if (currentNode.left) {
          queue.push(currentNode.left)
        }
        if (currentNode.right) {
          queue.push(currentNode.right)
        }
      }
      return list
    }

    breadthFirstSearchRecursive (queue, list) {
      if (!queue.length) return list
      let currentNode = queue.shift()
      list.push(currentNode.value)
      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
     return this.breadthFirstSearchRecursive(queue, list)
    }

 

    DFSInOrder () {
      return traverseInOrder(this.root, [])
    }
    DFSPreOrder () {
      return traversePreOrder(this.root, [])
    }

    DFSPostOrder () {
      return traversePostOrder(this.root, [])
    }




}

function traverseInOrder (node, list) {
      console.log(node.value)
      debugger
      if (node.left) {
        traverseInOrder(node.left, list)
      }
      list.push(node.value)
      if (node.right) {
        traverseInOrder(node.right, list)
      }
      return list
}

function traversePreOrder (node, list) {
  console.log(node.value)
  list.push(node.value)
  if (node.left) {
    traverseInOrder(node.left, list)
  }
  if (node.right) {
    traverseInOrder(node.right, list)
  }
  return list
}

function traversePostOrder (node, list) {
  console.log(node.value)
  if (node.left) {
    traverseInOrder(node.left, list)
  }
  if (node.right) {
    traverseInOrder(node.right, list)
  }
  list.push(node.value)
  return list
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

function traverseRecursion (node) {
  if (!node.left) return null
  if (!node.right) return null

  
}

const newBTF = new BinarySearchTree()

newBTF.insert(9)
newBTF.insert(4)
newBTF.insert(20)
newBTF.insert(1)
newBTF.insert(6)
newBTF.insert(15)
newBTF.insert(170)

console.log(newBTF.lookup(170))
console.log(newBTF.lookup(3099))
console.log(newBTF.lookup(1))
console.log(newBTF.breadthFirstSearch())
console.log(newBTF.breadthFirstSearchRecursive([newBTF.root],[]))
console.log(newBTF.DFSInOrder())





//      9
//  4       20
// 1  6    15  170

// bfs [9,4,20,1,6,15,170]
// dfs [9,4,1,6,20,15,170]
// InOrderDFS[1,4,6,9,15,20,170] - 
// PreOrderDFS[9,4,1,6,20,15,170] - If we want to recreate the three is easy
// PostOrderDFS [1,6,4,15,170,20,9]