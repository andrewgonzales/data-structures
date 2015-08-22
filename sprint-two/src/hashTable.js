var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function(key, value){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var combined = key + ' ' + value;
  var tuple = [combined];
  
 
  if(this._storage.get(i) === undefined){
    this._storage.set(i, tuple);
  } else {
    var bucket = this._storage.get(i);
    var temp = bucket.slice(0);
    if(bucket.length === 0) {
      this._storage.set(i, tuple);
    } else {
      for (var j = 0; j < temp.length; j++) {
         var tupleSplit = bucket[j].split(' ');
         if(tupleSplit[0] === key) {
            this._storage.set(i, tuple);
         } else {
            bucket.push(combined);
            this._storage.set(i, bucket);
         }
      }
    }
  }  

  

};

HashTable.prototype.retrieve = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(i);


  for(var j = 0; j < bucket.length; j++) {
    if(bucket[j] === null) {
      return null;
    }
    var tupleSplit = bucket[j].split(' ');
    if(tupleSplit[0] === key) {
      return tupleSplit[1];
    }
  };

};

HashTable.prototype.remove = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(i);

  for(var j = 0; j < bucket.length; j++) {
    var tupleSplit = bucket[j].split(' ');
    if(tupleSplit[0] === key) {
       bucket[j] = null;
    }
  };
  this._storage.set(i,bucket);
};



/*
 * Complexity: What is the time complexity of the above functions?
 * Insert is O(1) for most cases until the same key is inserted.
 * Retrieve is O(n) *should be constant time
 * remove is O(n)  
 */
