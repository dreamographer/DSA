class Queue{
    constructor(){
        this.items={}
        this.rear=0
        this.front=0
    }
    enqueue(value){
        this.items[this.rear]=value
        this.rear++
    }
    dequeue(){
        let item=this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }
    print(){

        console.log(this.items);
    }
}

const queue=new Queue
queue.enqueue(5)
queue.dequeue()
queue.print()
