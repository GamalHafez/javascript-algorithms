class Graph {
  constructor() {
    this.AdjacencyList = {};
  }

  addVertex(vertex) {
    if (this.AdjacencyList[vertex]) return;
    this.AdjacencyList[vertex] = new Set();
  }

  addEdge(v1, v2) {
    if (!this.AdjacencyList[v1]) this.addVertex(v1);
    if (!this.AdjacencyList[v2]) this.addVertex(v2);

    this.AdjacencyList[v1].add(v2);
    this.AdjacencyList[v2].add(v1);
  }

  hasEdge(v1, v2) {
    if (!this.AdjacencyList[v1] || !this.AdjacencyList[v2]) return false;

    return this.AdjacencyList[v1].has(v2) && this.AdjacencyList[v2].has(v1);
  }

  removeEdge(v1, v2) {
    if (!this.AdjacencyList[v1] || !this.AdjacencyList[v2]) return;

    this.AdjacencyList[v1].delete(v2);
    this.AdjacencyList[v2].delete(v1);
  }

  removeVertex(vertex) {
    if (!this.AdjacencyList[vertex]) return;

    for (let v of [...this.AdjacencyList[vertex]]) {
      this.removeEdge(vertex, v);
    }

    delete this.AdjacencyList[vertex];
  }

  display() {
    for (let vertex in this.AdjacencyList) {
      console.log(`${vertex} --> ${[...this.AdjacencyList[vertex]]}`);
    }
  }
}
