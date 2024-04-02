//  Write Javascript code to sort an array.

function sortarray(arr,type){
    if(arr.lenght===0) return null;
    if(type==='ascending'){
       return arr.sort(function(a,b){
            return a-b
        })
    }
    else if(type==='decending'){
      return  arr.sort(function(a,b){
            return b-a
        })
    }
    else{
        return Error('valid arrguments required')
    }

}

console.log(sortarray([1,18,7,3],'ascending'))
console.log(sortarray([1,18,7,3],'decending'))



