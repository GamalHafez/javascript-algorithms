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
}
