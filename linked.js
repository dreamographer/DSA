class Node{
    constructor(value){
        this.val=value
        this.next=null
    }

}

class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
    append(value){
        const newNode=new Node(value)
        if (this.size==0) {
            this.head=newNode 
            this.tail=newNode
        }else{
            this.tail.next=newNode
            this.tail=newNode
        }
        this.size++
        return
    }
    prepend(value){
        const newNode=new Node(value)
        if (this.size==0) {
            this.head=newNode
            this.tail=newNode
        }else{
            newNode.next=this.head
            this.head=newNode
        }
        this.size++
        return
    }   
    insertatPos(value,pos){
        if (pos<0||pos>=this.size) {
            console.log("invalid position");
            return 
        }
        if (pos==0) {
            this.prepend(value)
            return
        }
        if (pos==this.size-1) {
            this.append(value)
            return
        }   
        const newNode=new Node(value)
        let prev=this.head
        let i=0
        while(i<pos-1){
            prev=prev.next
            i++
        }

        newNode.next=prev.next
        prev.next=newNode
        this.size
    }
    remove(index){
        if (index<0||index>this.size) {
            console.log("invalid index");
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
            if (index==this.size-1) {
                this.tail=prev
            }
            this.size--
        }

    }
    print(){
        let cur=this.head
        while(cur){
            console.log(cur.val)
            cur=cur.next
        }
    }
}


let list=new LinkedList()
list.append(2)
list.append(2)
list.prepend(5)
list.insertatPos(10,1)
list.remove(3)
list.print()
