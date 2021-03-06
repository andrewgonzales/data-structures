var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.count] = value;
  this.count++;
  return this.storage;
};

Queue.prototype.dequeue = function(){
  var temp = this.storage['0'];
  delete this.storage['0'];
  this.count--;

  if (this.count < 0) {
    this.count = 0;
  }

  for (var key in this.storage){
    for (var i = 0; i < this.count; i++) {
      this.storage[i] = this.storage[key];
      delete this.storage[key];
    }
  }
  return temp;
};

Queue.prototype.size = function(){
  return this.count;
};

var Methods = new Queue;



