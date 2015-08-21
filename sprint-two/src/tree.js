var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var child = Tree(value);

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


/*
 * Complexity: What is the time complexity of the above functions?
 * addChild is O(1) because we are pushing into an array 
 * contains is O(n) because we have to traverse through the whole tree to find the target
 */
