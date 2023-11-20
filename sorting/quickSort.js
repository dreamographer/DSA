function quickSort(arr){
    if (arr.length<2) {
        return arr
    }
    let pivot=arr[0]
    let left=[]
    let right=[]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i]<pivot) {
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}


console.log("1 : "+quickSort([5,2,3,1]));
console.log("2 : "+quickSort([17,4,2]));
console.log("3 : "+quickSort([6,2,8,2,2,0,5]));