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

  // O(1)
  isEdge(vertex1: string, vertex2: string): boolean {
    return this.isVertex(vertex1) && this.isVertex(vertex2)
      ? this.adjacencyList[vertex1].includes(vertex2)
      : false;
  }

  // O(n)
  clone(): Graph {
    const newGraph = new Graph();
    for (const vertex in this.adjacencyList) {
      newGraph.addVertex(vertex);
      for (const neighbor of this.adjacencyList[vertex]) {
        newGraph.addEdge(vertex, neighbor);
      }
    }
    return newGraph;
  }

  // O(1)
  clear(): void {
    this.adjacencyList = {};
  }

  // O(n)
  forEachVertex(callback: (vertex: string) => void): void {
    for (const vertex in this.adjacencyList) {
      callback(vertex);
    }
  }

  // O(n)
  forEachEdge(callback: (vertex1: string, vertex2: string) => void): void {
    for (const vertex in this.adjacencyList) {
      for (const neighbor of this.adjacencyList[vertex]) {
        if (vertex < neighbor) {
          callback(vertex, neighbor);
        }
      }
    }
  }

  // O(n)
  mapVertices(callback: (vertex: string) => unknown): unknown[] {
    const result: unknown[] = [];
    for (const vertex in this.adjacencyList) {
      result.push(callback(vertex));
    }
    return result;
  }

  // O(n)
  mapEdges(callback: (vertex1: string, vertex2: string) => unknown): unknown[] {
    const result: unknown[] = [];
    for (const vertex in this.adjacencyList) {
      for (const neighbor of this.adjacencyList[vertex]) {
        if (vertex < neighbor) {
          result.push(callback(vertex, neighbor));
        }
      }
    }
    return result;
  }

  // O(n)
  filterVertices(callback: (vertex: string) => boolean): string[] {
    const result: string[] = [];
    for (const vertex in this.adjacencyList) {
      if (callback(vertex)) {
        result.push(vertex);
      }
    }
    return result;
  }
}
