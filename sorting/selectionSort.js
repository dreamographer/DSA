function selectionSort(arr){
    for (let i = 0; i < arr.length-1; i++) {
        let min=i
        for (let j = i+1; j < arr.length; j++) {
            if (arr[min]>arr[j]) {
                min=j
            }
        }
        if (min!=i) {
            let temp=arr[i]
            arr[i]=arr[min]
            arr[min]=temp
        }
        
    }
    return arr

}

// sample 1
let arr1 = [64, 34, 25, 12, 22, 11, 90];
console.log(selectionSort(arr1));

// Sample  2
let arr2 = [5, 1, 4, 2, 8];
console.log(selectionSort(arr2));

// Sample  3
let arr3 = [38, 27, 43, 3, 9, 82, 10];
console.log(selectionSort(arr3));