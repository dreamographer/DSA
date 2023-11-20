class Queue {
    constructor() {
        this.items = [];
        this.size = 0;
    }

    push(value) {
        this.items.push(value);
        this.size++;
    }

    pop() {
        while (this.size > 1) {
            const item = this.items.shift();
            this.items.push(item);
            this.size--;
        }
        this.size=this.items.length
        return this.items.shift();
    }

    print() {
        console.log(this.items);
    }
}

const stack = new Queue();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.pop());
stack.push(30);
stack.print();