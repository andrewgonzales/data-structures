var LinkedList = function(){


  var list = {};
  list.head = null;
  list.tail = null;

  

  list.addToTail = function(value){

    if (this.head === null) {
      var temp = new Node(value);
      temp.next = this.head;
      this.head = temp;
      this.tail = temp;
    }
    else {
      var temp = new Node(value);
      this.tail.next = temp;
      this.tail = temp;
    }
  };

  list.removeHead = function(){
    var tempValue = this.head.value;
    var tempNext = this.head.next;
    delete this.head;
    this.head = tempNext;
  
    return tempValue;
  };

  list.contains = function(target){
    var node = this.head;
    var found = this.tail.value === target;
    while(node.next !== null){
      if(node.value === target){
        found = true;
      } 
      node = node.next;
    }
    return found; 
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 *addToTail and removeHead are O(1), but contains is O(n)
 */
