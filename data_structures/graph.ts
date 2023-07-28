export class Graph {
  adjacencyList: Record<string, string[]>;

  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex: string): boolean {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  }

  addEdge(vertex1: string, vertex2: string): boolean {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
      return true;
    }
    return false;
  }

  removeEdge(vertex1: string, vertex2: string): boolean {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v !== vertex2,
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v !== vertex1,
      );
      return true;
    }
    return false;
  }

  removeVertex(vertex: string): this | null {
    if (!this.adjacencyList[vertex]) return null;
    while (this.adjacencyList[vertex].length) {
      let temp = this.adjacencyList[vertex].pop() as string;
      this.removeEdge(vertex, temp);
    }
    delete this.adjacencyList[vertex];
    return this;
  }

  // O(n)
  getVertices(): string[] {
    return Object.keys(this.adjacencyList);
  }

  // O(n)
  getEdges(vertex: string): string[] {
    if (!this.adjacencyList[vertex]) return [];
    return this.adjacencyList[vertex];
  }

  // O(1)
  size(): number {
    return Object.keys(this.adjacencyList).length;
  }

  // O(1)
  isEmpty(): boolean {
    return this.size() === 0;
  }

  // O(1)
  isVertex(vertex: string): boolean {
    return !!this.adjacencyList[vertex];
  }
}
