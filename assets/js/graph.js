/** 
 Author : Build Rise Shine 

Created : 2023 

Script : Graph DS

Description : Implementation of Graph Data Structure

 (c) Copyright by BRS Studio. 
**/

// Graph class
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // check for duplicates and add vertex
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  }

  // check for vertex exist or not and push the edges to the array
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
      return true;
    }
    return false;
  }

  // based on vertex exist or not, we remove the edges - else return false
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v !== vertex1
      );
      return true;
    }
    return false;
  }

// before removing the vertex, we need to remove the edges first
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined;
    while (this.adjacencyList[vertex].length) {
      let temp = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, temp);
    }
    delete this.adjacencyList[vertex];
    return this;
  }
}

let myGraph = new Graph();

myGraph.addVertex("A");

myGraph.addVertex("B");
myGraph.addVertex("C");
myGraph.addVertex("D");

myGraph.addEdge("A", "B");
myGraph.addEdge("A", "C");
myGraph.addEdge("A", "D");
myGraph.addEdge("B", "D");
myGraph.addEdge("C", "D");


// myGraph.removeEdge("A", "D")

myGraph.removeVertex("A")

console.log(myGraph);



// Adjacency Matrix
//  A-----------B
//  | \         |
//  |   \       |
//  |     \     |
//  |       \   |
//  |         \ |
//  C-----------D


// Adjacency List
// {
//   A: ["B", "C", "D"]
//   B: ["A", "D"]
//   C: ["A", "D"]
//   D: ["A", "B", "C"]
// }