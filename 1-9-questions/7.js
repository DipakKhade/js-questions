//Write a code in javascript to check whether a num is fibonacci number or not

//reference : https://www.tutorialspoint.com/checking-for-fibonacci-numbers-in-javascript
// https://www.youtube.com/watch?v=EEb6JP3NXBI


function Fibonacci(n){
    if (n===0) return 0;
    else if (n===1) return 1;
    else{
        return Fibonacci(n-1) + Fibonacci(n-2)
    }

}

console.log(Fibonacci(3))



