class Graph{
    constructor(){
        this.list=new Map()
    }

    addVertex(val){
        if(!this.list.has(val)){
            this.list.set(val,new Set())
        }
    }

    addEdge(s,d){
        if (!this.list.has(s)) {
            this.addVertex(s)
        }
        if (!this.list.has(d)) {
            this.addVertex(d)
        }
        this.list.get(s).add(d)
        this.list.get(d).add(s)
    }

    removeEdge(s,d){
        this.list.get(s).delete(d)
        this.list.get(d).delete(s)
    }
    print(){
        console.log(this.list);
    }
    bfs(root){
        let visited=new Set()
        let queue=[root]
        visited.add(root)
        while(queue.length>0){
            let cur=queue.shift()
            
            this.list.get(cur).forEach(ele => {
                if(!visited.has(ele)){
                    visited.add(ele)
                    queue.push(ele)
                }
            });
        }
    }

    dfs(root,visited=new Set()){
        visited.add(root)
        console.log(root);
        this.list.get(root).forEach(node => {
            if(!visited.has(node)){
                visited.add(node)
                this.dfs(node,visited)
            }
        });
    }
}

let graph=new Graph()

graph.addVertex(10)
graph.addVertex(20)
graph.addVertex(30)
graph.addVertex(40)
graph.addVertex(50)
graph.addVertex(60)
graph.addEdge(10,20)
graph.addEdge(10,30)
graph.addEdge(10,40)
graph.addEdge(10,30)
graph.addEdge(20,40)
graph.addEdge(40,60)
graph.addEdge(40,50)
console.log("DFS Traversal");
graph.dfs(10)
console.log("BFS Traversal");
graph.bfs(10)