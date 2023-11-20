var maximumUnits = function(boxTypes, truckSize) {
    let result=0
    let sorted=boxTypes.sort((a, b)=> {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] > b[1]) ? -1 : 1;
    }
})

  for(let i=0;i<boxTypes.length;i++){
      if(truckSize==0){
          continue;
      }
      if(sorted[i][0]<=truckSize){
          result=result+sorted[i][1]*sorted[i][0]
          truckSize-=sorted[i][0]
          continue;
      }

      result=result+truckSize*sorted[i][1]
      truckSize=0
  }
  return result
};
console.log(maximumUnits([[1,3],[2,2],[3,1]],4));