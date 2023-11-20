class HashTable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    hash(key){
        let total=0
        for (let i = 0; i < key.length; i++) {
            total+=key.charCodeAt(key[i])            
        }
        return total%this.size
    }
    set(key,value){
        const index=this.hash(key)
        const bucket=this.table[index]
        if (!bucket) {
            this.table[index]=[[key,value]]
        }
        else{
            const sameKeyValue=bucket.find(item=>item[0]==key)
            if (sameKeyValue) {
                sameKeyValue[1]=value
            }else{
                bucket.push([key,value])
            }
        }
    }
    get(key){
        const index=this.hash(key)
        const bucket=this.table[index]
        if (bucket) {
            const sameKeyValue=bucket.find(item=>item[0]==key)
            if (sameKeyValue) {
                return sameKeyValue[1]
            }
        }
        return undefined
    }
    remove(key){
        const index=this.hash(key)
        const bucket=this.table[index]
        if (bucket) {
            const sameKeyValue=bucket.find(item=>item[0]==key)
            if (sameKeyValue) {
                bucket.splice(bucket.indexOf(sameKeyValue),1)
            }
        }
    }
    display(){
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i,this.table[i]);
            }
            
        }
    }

}

const hashTable=new HashTable(3)
hashTable.set("ab","ashwin")
hashTable.set("ba","new anem")
hashTable.set("baca","new anem")
console.log(hashTable.get("ab"));

// console.log(hashTable.get("name"));
hashTable.display()
hashTable.remove("baca")