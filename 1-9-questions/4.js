//Write Javascript code to find the lowest element(min) in an array.

function minValue(arr){
    if(arr.length===0) return null;

    let min=arr[0]
    for(let i=0;i<arr.length;i++){
        if(min-arr[i]>0){
            min=arr[i]
        }
    }

    return min;
}

console.log(minValue([2,4,5,100]))