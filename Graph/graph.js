class Graph {
  // adjacent list
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }

  // add vertex to the graph
  addVertex(v) {
    // initialize the adjacent list with a
    // null array
    this.AdjList.set(v, []);
  }

  // add edge to the graph
  addEdge(v, w) {
    // get the list for vertex v and put the
    // vertex w denoting edge between v and w
    this.AdjList.get(v).push(w);

    // undirected graph
    // add an edge from w to v also
    this.AdjList.get(w).push(v);
  }

  // Prints the vertex and adjacency list
  printGraph() {
    // get all the vertices
    var get_keys = this.AdjList.keys();

    // iterate over the vertices
    for (var i of get_keys) {
      // great the corresponding adjacency list
      // for the vertex
      var get_values = this.AdjList.get(i);
      var conc = "";
      for (var j of get_values) conc += j + " ";
      console.log(i + " -> " + conc);
    }
  }

  // bfs(v)
  bfs(start) {
    // create a visited object
    let visited = {};
    let conc = "BFS";

    // Create a queue
    var q = [];

    visited[start] = true;
    q.push(start);

    while (q.length !== 0) {
      let getQueueElement = q.shift();
      let adjacentNodes = this.AdjList.get(getQueueElement);
      conc += " -> " + getQueueElement;
      for (let node of adjacentNodes) {
        if (!visited[node]) {
          visited[node] = true;
          q.push(node);
        }
      }
    }
    console.log(conc);
  }

  // dfs(v)
  dfs(start) {
    let visited = {};
    visited[start] = true;
    let conc = "DFS";
    let dfsRec = (node) => {
      visited[node] = true;
      conc = conc.concat(" -> " + node);
      let nodesList = this.AdjList.get(node);
      for (let key of nodesList) {
        if (!visited[key]) dfsRec(key);
      }
    };

    dfsRec(start);
    console.log(conc);
  }
}

// Using the above implemented graph class
var g = new Graph(6);
var vertices = ["A", "B", "C", "D", "E", "F"];

// adding vertices
for (var i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}

// adding edges
g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("A", "E");
g.addEdge("B", "C");
g.addEdge("D", "E");
g.addEdge("E", "F");
g.addEdge("E", "C");
g.addEdge("C", "F");

// prints all vertex

// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C
//g.printGraph();

g.dfs("A");
