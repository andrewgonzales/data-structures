var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var count = 0;
  someInstance.push = function(value){
    storage[count] = value;
    count++;
    return storage;
  };

  someInstance.pop = function(){
    count--;
    var temp = storage[count];
    delete storage[count];
    return temp;
  };
  someInstance.size = function(){
    var size = Object.keys(storage);
    return size.length;
  };
  return someInstance;
};
