var BinarySearchTree = function(value){
  var newBinaryTree = {};
  newBinaryTree.value = value;
  newBinaryTree.left = null;
  newBinaryTree.right = null;

  _.extend(newBinaryTree, BinarySearchTreeMethods);

  return newBinaryTree;

};

var BinarySearchTreeMethods = {};

BinarySearchTreeMethods.insert = function(value){
    
  if(value < this.value){

    if(this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else { //for when value > this.value

    if(this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTreeMethods.contains = function(value){

  var found;


  if(value < this.value){
    if(this.left === null) {
      found = false;
    } else {
      found = this.left.contains(value);
    }
  } else { //for when value > this.value
    if(this.right === null) {
      found = false;
    } else {
      found = this.right.contains(value);
    }
  }

  if(value === this.value){
    found = true;
  }
  return found;
};

BinarySearchTreeMethods.depthFirstLog = function(cb){
  cb(this.value);

    if(this.left !== null) {
      this.left.depthFirstLog(cb);
    } else if(this.right !== null){
      this.right.depthFirstLog(cb);
    } 

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
