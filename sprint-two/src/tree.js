var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  newTree.parent = null;
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){

  var child = Tree(value);
  child.parent = this;
  this.children.push(child);
};

treeMethods.contains = function(target){
  var found;
  
  if(this.value === target){
    return true;
  } else {
      found = false;
      for(var i = 0; i<this.children.length; i++){
        found = this.children[i].contains(target);

        if (found) {
          break;
        }
      }
    }
  
  return found;
};

treeMethods.removeFromParent = function(){
  debugger;
  for(var i = 0; i < this.parent.children.length; i++){
    if(this.parent.children[i].value === this.value){
      this.parent.children.splice(i, 1);
    }
  }
  this.parent = null;
  debugger;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addChild is O(1) because we are pushing into an array 
 * contains is O(n) because we have to traverse through the whole tree to find the target
 */
