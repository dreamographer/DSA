function mergeSort(arr){
  if(arr.length<2){
    return arr
  }
  let mid=Math.floor(arr.length/2)
  let left=arr.slice(0,mid)
  let right=arr.slice(mid)
  return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
  let final=[]
  while(left.length&&right.length){
    if(left[0]>right[0]){
      final.push(right.shift())
    }else{
      final.push(left.shift())
    }
  }

  return [...final,...left,...right]

}

console.log(mergeSort([5,4,3,2,1]));
 console.log('this is to update teh git');


//  log this msh