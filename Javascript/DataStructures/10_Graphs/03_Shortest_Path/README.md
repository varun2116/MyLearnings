## Finding the Shortest Path

One of the most common operations performed on graphs is finding the shortest path from one vertex to another.

Consider the following example: for vacation, you are going to travel to 10 major-league cities to watch baseball games over a two-week period. You want to minimize the number of miles you have to drive to visit all 10 cities using a shortest-path algorithm. Another shortest-path problem involves creating a network of computers, where the cost could be the time to transmit data between two computers or the cost of establishing and maintaining the connection. A shortest-path algorithm can determine the most effective way to build the network.

### BREADTH-FIRST SEARCH LEADS TO SHORTEST PATHS

When we perform a breadth-first search, we are automatically finding the shortest paths from one vertex to another connected vertex. For example, when we want to find the shortest path from vertex A to vertex D, we first look for any one-edge paths from A to D, then two-edge paths from A to D, and so on. This is exactly the way breadth-first search works, so we can easily modify the breadth-first search algorithm to find shortest paths.

### DETERMINING PATHS

To find the shortest path, we need to modify the breadth-first search algorithm so that it records the paths that lead from one vertex to another vertex. This requires a few modifications to the **Graph class**.

First, we need an array that keeps track of edges from one vertex to the next. We’ll name this array *edgeTo*. As we work through the breadth-first search function, every time we come across a vertex that is not marked, besides marking it, we will add an edge to that vertex from the vertex that we are exploring in the adjacency list. Here is the new **bfs()** function, along with the code you need to add to the **Graph class**:
```
    //add this to Graph class
    this.edgeTo = [];

    //bfs function
    function bfs(s) {
        var queue = [];
        this.marked[s] = true;
        queue.push(s); // add to back of queue
        while(queue.length > 0){
            var v = queue.shift(); //remove from front of the queue;
            if(v != undefined){
                print("<br /> Visited Vertex: " + v);
            }
            for (var i = 0; i < this.adj[v].length; i++) {
                var w = this.adj[v][i];
                if(!this.marked[w]){
                    this.edgeTo[w] = v;
                    this.marked[w] = true;
                    queue.push(w);
                }
            }
        }
    }
```

Now we need a function that can show us the paths that connect the different vertices of a graph. This function, **pathTo()**, creates a stack that stores all the vertices that have edges in common with a specified vertex. Here is the code for the function, along with a simple helper function:
```
    function pathTo(source, v) {
        if(!this.hasPathTo(v)){
            return undefined;
        }
        var path = [];
        for (var i = v; i != source;  i = this.edgeTo[i]) {
            path.push(i);
        }
        path.push(source);
        retun path;
    }

    function hasPathTo(v) {
        return this.marked[v];
    }
```

Lastly, we add a function that prints out the path:
```   
    function showPath(paths) {
        while(paths.length > 0){
            if(paths.length > 1){
                print(paths.pop()+'-');
            }
            else{
                print(paths.pop());
            }
        }
    }
```

Be sure to add the appropriate declarations to the **Graph class**:
```
    this.pathTo = pathTo;
    this.hasPathTo = hasPathTo;
    this.showPath = showPath;
```

With this function, all we have to do is write some client code to show the shortest path from the source to a particular vertex.

A test program that creates a graph and shows the shortest path for a specified vertex.
```
    var g = new Graph(5);
    g.addEdge(0,1);
    g.addEdge(0,2);
    g.addEdge(1,3);
    g.addEdge(2,4);
    g.bfs(0);
    var vertex = 4;
    var source = 0;
    var paths = g.pathTo(source, vertex);
    g.showPath(paths);
```
The output from **showPath()** is:
```
    0- 2- 4
```
which is the shortest path from the source vertex 0 to vertex 4.
