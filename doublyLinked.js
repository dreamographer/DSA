class Node{
    constructor(val){
        this.val=val
        this.next=null
        this.prev=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
    isEmpty(){
        return this.size==0
    }
    prepend(value){
        const newNode =new Node(value);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode
        }else{
            newNode.next=this.head
            this.head.prev=newNode
            this.head=newNode
        }
        this.size++
    }

    append(value){
        const newNode =new Node(value);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode
        }else{
            this.tail.next=newNode
            newNode.prev=this.tail
            this.tail=newNode
        }
        this.size++
    }

    addOnIndex(index,value){
        if (index<0||index>this.size) {
            console.log("wrong index")
            return 
        }
        if (index==0) {
            this.prepend(value)
        }else if(index==this.size){
            this.append(val)
        }else{
            const newNode =new Node(value);
            let prev=this.head
            let i=0
            while(i<index-1){
               prev=prev.next
            }
            newNode.next=prev.next
            prev.next.prev=newNode
            newNode.prev=prev
            prev.next=newNode
            this.size++
        }
    }

    remove(index){
        if (index<0||index>this.size) {
            console.log("wrong index")
            return 
        }
        if (index==0) {
            this.head=this.head.next
            this.head.prev=null
        }else{
            let prev=this.head
            let i=0
            while(i<index-1){
                prev=prev.next
                i++
            }
            prev.next=prev.next.next
            if(!prev.next){
                this.tail=prev
            }else{
                prev.next.prev=prev
            }

        }
        this.size--
    }
    print(){
        let current=this.head
        while(current){
            console.log(current.val)
            current=current.next
            }
    }
}

let list=new LinkedList
list.append('a')
list.append('b')
list.append('ac')
list.prepend('hell')
list.addOnIndex(1,29)
list.remove(4)
list.print()