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
}

function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

function showGraph() {
    for (var i = 0; i < this.vertices; i++) {
        print(i + " -> ");
        for (var j = 0; j < this.vertices; j++) {
            if(this.adj[i][j] != undefined){
                print(this.adj[i][j]);
            }
        }
        print("<br />");
    }
}

//Test Program
var graph = new Graph(5);
graph.addEdge(0,1);
graph.addEdge(0,2);
graph.addEdge(1,3);
graph.addEdge(2,4);
graph.showGraph();
