function Vertex(label) {
    this.label = label;
}

function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (var i = 0; i < this.vertices; i++) {
        this.adj[i] = [];
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.marked = [];
    for (var i = 0; i < this.vertices; i++) {
        this.marked[i] = false;
    }
    this.dfs = dfs;
    this.bfs = bfs;
    this.edgeTo = [];
    this.pathTo = pathTo;
    this.hasPathTo = hasPathTo;
    this.showPath = showPath;
    this.vertexList = [];
    this.topSort = topSort;
    this.topSortHelper = topSortHelper;
}

function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

function showGraph() {
    for (var i = 0; i < this.vertices; i++) {
        print(this.vertexList[i] + " -> ");
        for (var j = 0; j < this.vertices; j++) {
            if(this.adj[i][j] != undefined){
                var w = this.adj[i][j];
                print(this.vertexList[w]);
            }
        }
        print("<br />");
    }
}

function dfs(v) {
    this.marked[v] = true;
    if (this.adj[v] != undefined) {
        print("<br /> Visited Vertex : " + v);
    }
    for (var i = 0; i < this.adj[v].length; i++) {
        var w = this.adj[v][i];
        if(!this.marked[w]){
            this.dfs(w);
        }
    }
}

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

function pathTo(source, v) {
    if(!this.hasPathTo(v)){
        return undefined;
    }
    var path = [];
    for (var i = v; i != source;  i = this.edgeTo[i]) {
        path.push(i);
    }
    path.push(source);
    return path;
}

function hasPathTo(v) {
    return this.marked[v];
}

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

function topSort() {
    var stack = [];
    var visited = [];
    for (var i = 0; i < this.vertices; i++) {
        visited[i] = false;
    }
    for (var i = 0; i < this.vertices; i++) {
        if(visited[i] == false){
            this.topSortHelper(i, visited, stack);
        }
    }
    for (var i = 0; i < stack.length; i++) {
        if(stack[i] !== undefined && stack[i] !== false){
            print(this.vertexList[stack[i]] + "<br />");
        }
    }
}

function topSortHelper(v, visited, stack) {
    visited[v] = true;
    for (var i = 0; i < this.adj[v]; i++) {
        w = this.adj[v][i];
        if(!visited[w]){
            this.topSortHelper(visited[w], visited, stack);
        }
    }
    stack.push(v);
}

//Test Program
var g = new Graph(6);
g.addEdge(1,2);
g.addEdge(2,5);
g.addEdge(1,3);
g.addEdge(1,4);
g.addEdge(0,1);
g.vertexList = ["CS1", "CS2", "Data Structures",
                "Assembly Language", "Operating Systems",
                "Algorithms"];
g.showGraph();
g.topSort();
