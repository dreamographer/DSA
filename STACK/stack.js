class Stack{
    constructor(){
        this.items=[]
        this.size=0
    }
    push(value){
        this.items.push(value)
        this.size++
    }
    pop(){
        if (this.size<1) {
            return console.log("STACK empty");
        }
        this.size--
        return this.items.pop()
    }
    display(){
        if (this.size<1) {
            return console.log("STACK empty");
        }
       return console.log(this.items)
    }
}
const stack=new Stack
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
const stack2=new Stack
const half=Math.floor(stack.size/2)
stack.display()
