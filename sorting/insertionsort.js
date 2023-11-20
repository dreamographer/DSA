//[3,6,7,2,12,1,47,2]

function insertionSort(arr){
    for (let i = 1; i < arr.length; i++) {
        let temp=arr[i]
        let j=i-1
       while (j>=0 && arr[j]>temp) {
        arr[j+1]=arr[j]
        j--
       }
       arr[j+1]=temp
        
    }
    return arr

}

// sample 1
let arr1 = [64, 34, 25, 12, 22, 11, 90];
console.log(insertionSort(arr1));

// Sample  2
let arr2 = [5, 1, 4, 2, 8];
console.log(insertionSort(arr2));

// Sample  3
let arr3 = [38, 27, 43, 3, 9, 82, 10];
console.log(insertionSort(arr3));