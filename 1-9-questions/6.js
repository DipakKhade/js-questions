//Write a code in javascript to do all the above operations in a single code


function getallResults(arr){
    if(arr.length===0) return null

    //max value
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
   //average
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    const average=sum/arr.length

    //sorting in ascending
   const sorted= arr.sort(function(a,b){
        return a-b
    })

    //sum
    let sumofValues=0
    for (i of arr){
        sumofValues=sumofValues+i
    }

return{
    max,
    average,
    sorted,
    sumofValues
}
}

console.log(getallResults([1,2,4,6]))