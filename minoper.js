var minOperations = function(nums) {
    let i=0
    let result=0
    if(nums.length==1){
        return 0
    }
    while(i<nums.length){
        if(nums[i]>=nums[i+1]){
            nums[i+1]+=1
            result+=1
         
        }
        if(nums[i]<nums[i+1]||i==nums.length-1){
            ++i
        }
    }
    return result
};
console.log(minOperations([1,1,1]));