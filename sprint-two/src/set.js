var Set = function(){
  var set = Object.create(setPrototype);
  set.storage = {};
  set.count = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){

  this.storage[item] = this.count;
  this.count++;
};

setPrototype.contains = function(item){
  return (item in this.storage);    
};

setPrototype.remove = function(item){
  delete this.storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 * all functions have a time complexity of O(1).
 */
