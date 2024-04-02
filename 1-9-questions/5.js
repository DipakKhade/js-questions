//Write Javascript code to find the sum of elements in an array

function sum(arr){
    if(arr.length===0){
        return null
    }

    let sum=0
    for (i of arr){
        sum=sum+i
    }

    return sum;
}


console.log(sum([1,23,2]))