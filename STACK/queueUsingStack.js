class Stack{
    constructor(){
        this.items=[]
        this.size=0
    } 

    enqueue(value){
        this.items.push(value)
        this.size++
    }
    dequeue(){
        if (this.size<1) {
            console.log("queue wmpty");
        }
        let stack2=new Stack
        for (let i = 0; i < this.size; i++) {
            stack2.enqueue(this.items.pop())
        } 
        let item = stack2.items.pop()
        for (let i = 0; i < stack2.size; i++) {
            this.items.push(stack2.items.pop())
            stack2.size--
        } 
        this.size--
        return item
    }
    print(){
        if (this.size<1) {
           return console.log("queue empty");
        }
        console.log(this.items);
    }
}
 
const queue=new Stack()
queue.enqueue(5)
queue.enqueue(3)
queue.enqueue(2)
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.print()