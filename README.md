# Data Structures and Algorithms in TypeScript

Welcome to the **Data Structures and Algorithms in TypeScript** repository! This project aims to provide a comprehensive collection of common data structures and algorithms implemented using TypeScript. The repository is structured in a way that makes it easy to understand, learn, and utilize these fundamental concepts.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Data Structures](#data-structures)
- [Algorithms](#algorithms)
- [Usage](#usage)
- [Contributing](#contributing)

## Introduction

Understanding data structures and algorithms is crucial for writing efficient and optimized code. This repository serves as a learning resource and reference for anyone interested in brushing up on these fundamental concepts. The codebase is written in TypeScript, which provides the benefits of static typing and readability.

## Installation

To use the code from this repository, you can follow these steps:

1. Clone the repository using the following command: `git clone https://github.com/anicmarko9/algorithms.git`
2. Navigate to the repository directory: `cd algorithms`
3. Install the necessary dependencies: `npm install`


## Data Structures

The repository currently includes implementations of the following data structures:

- Singly Linked Lists
- Doubly Linked Lists
- Stacks
- Queues
- Binary Trees
- Hash Tables
- Graphs
- and more...

Each data structure is implemented in its own TypeScript class and comes with detailed explanations of its properties, methods, and use cases.

## Algorithms

A variety of common algorithms are also provided, including:

- Sorting algorithms (Bubble Sort, Merge Sort, Quick Sort)
- Searching algorithms (Binary Search)
- Graph algorithms (Breadth-First Search, Depth-First Search)
- and more...

All algorithms are thoroughly documented and tested with sample inputs and expected outputs.

## Usage

The data structures and algorithms can be imported and used in your projects seamlessly. Here's an example of how to import a linked list:

```tsx
import React from 'react';
import { SinglyLinkedList } from 'src/structures/singlyLinkedList';

function App() {
const list = new SinglyLinkedList();
list.push(10);
list.unshift(20);
list.push(30);

return (
 <div>
   <h1>Singly Linked List Example</h1>
   <p>{list.toString}</p>
 </div>
);
}

export default App;
```

## Contributing

Contributions to this repository are highly encouraged! If you find a bug, want to add a new data structure or algorithm, or simply want to improve the documentation, feel free to open a pull request. Please make sure to follow the existing coding style and add relevant tests for new implementations.
