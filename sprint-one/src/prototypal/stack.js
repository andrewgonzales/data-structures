var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  

  var total = Object.create(stackMethods);
  total.storage = storage;
  total.count = 0;
  
  
  return total;
};

var stackMethods = {};


stackMethods.push = function(value) {
  
  this.storage[this.count] = value;
  this.count++;
  
  return this.storage;
};

stackMethods.pop = function() {
  var temp;
  this.count--;
  if (this.count === -1) {
    this.count = 0;
  }
  temp = this.storage[this.count];
  delete this.storage[this.count];

  return temp;
};

stackMethods.size = function() {
  return this.count;
};