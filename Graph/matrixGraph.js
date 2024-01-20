class Graph{
    constructor(num){
        this.matrix=[]
        for (let i = 0; i < num; i++) {
            this.matrix.push(new Array(num).fill(0))
        }
    } 
    addEdge(first,second){
        
        this.matrix[first][second]=1
        this.matrix[second][first]=1
    }
    removeEdge(first,second){
        
        this.matrix[first][second]=0
        this.matrix[second][first]=0
    }
    hasEdge(first,second){
        return this.matrix[first][second]===1
    }
    print(){
        console.log(this.matrix);
    }
}

let graph=new Graph(3)
graph.addEdge(1,1)
console.log(graph.hasEdge(0,1));

graph.print()
