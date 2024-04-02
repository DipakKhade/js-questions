
//Write Javascript code to find the average value of an array.
function average(arr){
    if(arr.length===0) return null;

    let sum=0
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    return sum/arr.length
}

console.log(average([5,10,15]))
