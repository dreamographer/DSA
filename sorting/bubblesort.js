

function bubbleSort(arr) {
    let swapped
    do {
        swapped = false
        let temp

        for (let i = 0; i < arr.length-1; i++) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped=true
            }
        }
    } while (swapped);
    return arr
}

// sample 1
let arr1 = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(arr1));

// Sample  2
let arr2 = [5, 1, 4, 2, 8];
console.log(bubbleSort(arr2));

// Sample  3
let arr3 = [38, 27, 43, 3, 9, 82, 10];
console.log(bubbleSort(arr3));