function BinarySearch(arr,num){
    let start=0
    let end=(arr.length)-1
    while (start<=end) {
        let mid=Math.floor((start+end)/2)
        if (num==arr[mid]) {
            return mid
        }
        if (num<arr[mid]) {
            end=mid-1
        }else if (num>arr[mid]) {
            start=mid+1
        }
    }
    return -1
}

console.log(BinarySearch([1,2,3,4,5],8));