var totalMoney = function(n) {
    let result=0
    let start=1
    let i=0
    let j=0
    while(j<n){
        result=result+start+i
        i++
        j++
        if(j%7==0){
            start++
            i=0
        }
    }
    return result
};
console.log(totalMoney(10));