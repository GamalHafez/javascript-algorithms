class Graph<T extends string | number> {
  adjacencyList: Record<string, Set<T>> = {};

  addVertex(vertex: T) {
    if (this.adjacencyList[String(vertex)]) return;
    this.adjacencyList[String(vertex)] = new Set();
  }

  addEdge(v1: T, v2: T) {
    if (!this.adjacencyList[String(v1)]) this.addVertex(v1);
    if (!this.adjacencyList[String(v2)]) this.addVertex(v2);

    this.adjacencyList[String(v1)].add(v2);
    this.adjacencyList[String(v2)].add(v1);
  }

  hasEdge(v1: T, v2: T) {
    if (!this.adjacencyList[String(v1)] || !this.adjacencyList[String(v2)])
      return false;

    return (
      this.adjacencyList[String(v1)].has(v2) &&
      this.adjacencyList[String(v2)].has(v1)
    );
  }

  removeEdge(v1: T, v2: T) {
    if (!this.adjacencyList[String(v1)] || !this.adjacencyList[String(v2)])
      return;

    this.adjacencyList[String(v1)].delete(v2);
    this.adjacencyList[String(v2)].delete(v1);
  }

  removeVertex(vertex: T) {
    if (!this.adjacencyList[String(vertex)]) return;

    for (let v of [...this.adjacencyList[String(vertex)]]) {
      this.removeEdge(vertex, v);
    }

    delete this.adjacencyList[String(vertex)];
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(`${vertex} --> ${[...this.adjacencyList[vertex]]}`);
    }
  }
}
