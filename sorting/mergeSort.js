function mergeSort(arr){
    if (arr.length<2) {
        return arr
    }
    const mid=Math.floor(arr.length/2)
    let left=arr.slice(0,mid)
    let right=arr.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
    let sorted=[]
    while(left.length&&right.length){
        if (left[0]<right[0]) {
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }
    return [...sorted,...left,...right]
}


// sample 1
let arr1 = [64, 34, 25, 12, 22, 11, 90];
console.log(mergeSort(arr1));

// Sample  2
let arr2 = [5, 1, 4, 2, 8];
console.log(mergeSort(arr2));

// Sample  3
let arr3 = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr3));