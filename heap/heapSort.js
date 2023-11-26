function heapify(arr,length,i){
    let largest=i //setting the parent node as the largest
    let left=i*2+1 //left child of the array 
    let right=i*2+2 //right child of the array 
    if(left<length&&arr[left]>arr[largest]){ //cheching if the the parent node is the largest
        largest=left
    }
    if(right<length&&arr[right]>arr[largest]){
        largest=right
    }
    if(largest!=i){
        [arr[largest],arr[i]]=[arr[i],arr[largest]]
        heapify(arr,length,largest) //recursivly calling the functin to chek the sub tree
    }
    
}

function heapSort(arr){
    let length=arr.length

    // making minheap
    for (let i =  Math.floor(length/2)-1; i >=0; i--) {
        heapify(arr,length,i)  
    }
    // heapSort
    for (let  i= arr.length-1;  i>0; i--) {
        [arr[i],arr[0]]=[arr[0],arr[i]] //making the last element sorted
        heapify(arr,i,0) //heapifying with length reduced
    }
    return arr
}


let arr=[1,2,8,5,2,8,2]
console.log(heapSort(arr));