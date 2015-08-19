var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var count = 0;
  someInstance.enqueue = function(value){
    storage[count] = value;
    count++;
    return storage;
  };

  someInstance.dequeue = function(){
    var temp = storage['0'];
    delete storage['0'];
    count--;

    for(var key in storage){
      for(var i=0; i<count; i++) {     
        storage[i] = storage[key];
        delete storage[key];
      }
    }
    return temp;
  };

  someInstance.size = function(){
    var size = Object.keys(storage);
    return size.length;
  };

  return someInstance;
};
