class Node{
    constructor(val){
        this.val=val
        this.next=null
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
            prev.next=newNode
            this.size++
        }
    }
    removeDuplicate(){
        if (this.isEmpty()) {
            console.log("no data");
        }
        let current=this.head
        while(current){
            if (current.next) {
                if(current.next.val==current.val)
                    current.next=current.next.next
            }
            current=current.next
            }
    }

    remove(index){
        if (index<0||index>this.size) {
            console.log("wrong index")
            return 
        }
        if (index==0) {
            this.head=this.head.next
        }else{
            let prev=this.head
            let i=0
            while(i<index-1){
                prev=prev.next
                i++
            }
            prev.next=prev.next.next
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
list.append(1)
list.append(2)
list.append(2)
list.append(3)
list.append(3)
list.append(4)
list.removeDuplicate()
list.print()