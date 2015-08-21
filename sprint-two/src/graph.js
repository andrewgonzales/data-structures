

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.nodeStorage = [];

};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  var graphNode = {};
  graphNode.value = node;
  graphNode.edges = [];

  this.nodeStorage.push(graphNode);

};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value){
  var found = false;
  for (var i = 0; i < this.nodeStorage.length; i++) {
    if (this.nodeStorage[i].value === value) {
      found = true;
      break;
    }
    else {
      found = false;
    }
  }

  return found;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(value){

  for(var i = 0; i < this.nodeStorage.length; i++) {
    if(this.nodeStorage[i].value === value) {
      this.nodeStorage.splice(i,1);
    }
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  var found = false;

  for(var i = 0; i < this.nodeStorage.length; i++){
    if(this.nodeStorage[i].value === fromNode){
      var from = i;
    }
  }

  for(var i = 0; i < this.nodeStorage[from].edges.length; i++){
    found = this.nodeStorage[this.nodeStorage[from].edges[i]].value === toNode;
    if(found){
      break;
    }
  }

  return found;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){

  for(var i = 0; i < this.nodeStorage.length; i++){

    if(this.nodeStorage[i].value === fromNode){
      var from = i;
    }
    if(this.nodeStorage[i].value === toNode){
      var to = i;
    }
  }  

  if(from !== undefined && to !== undefined){

    this.nodeStorage[from].edges.push(to);
    this.nodeStorage[to].edges.push(from);
  }
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  for(var i = 0; i < this.nodeStorage.length; i++){
    if(this.nodeStorage[i].value === fromNode){
      var from = i;
    }
    if(this.nodeStorage[i].value === toNode){
      var to = i;
    }
  }

  for(var i = 0; i < this.nodeStorage[from].edges.length; i++){
    var foundToIndex = this.nodeStorage[this.nodeStorage[from].edges[i]].value === toNode;
    if(foundToIndex){
      this.nodeStorage[from].edges.splice(i,1);
      var foundFromIndex = this.nodeStorage[to].edges.indexOf(from);
      this.nodeStorage[to].edges.splice(foundFromIndex,1);
    }
  }
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  for(var i = 0; i < this.nodeStorage.length; i++) {
    cb(this.nodeStorage[i].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode is O(1)
 * contains is O(n)
 * removeNode is O(n)
 * hasEdge is O(n)
 * addEdge is O(n)
 * removeEdge is O(n)
 * forEachNode is O(n)
 */



