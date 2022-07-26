const {readFileSync, promises: fsPromises} = require('fs');


function cleanData(fileName) {
  let data = readFileSync(fileName, 'utf-8').split("\n");
  for(row in data){
    data[row] = data[row].split(" ");
  }
  return data;
}

pyramid = cleanData('18_example.txt')

function findMaximumPath(pyramid){
  if(pyramid === 1){
    // Last step, just choose bigger
  } else {
    // Keep condensing
  }
  console.log(pyramid[.length])
}

findMaximumPath(pyramid)


// Node class
class Node
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


// Binary Search tree class
class BinaryTree
{
    constructor()
    {
        // root of a binary search tree
        this.root = null;
    }
 
    // function to be implemented
    // insert(data)
    // remove(data)
                 
 
    // Helper function
    // findMinNode()
    // getRootNode()
    // inorder(node)
    // preorder(node)              
    // postorder(node)
    // search(node, data)
}

let tree = new BinaryTree();
tree