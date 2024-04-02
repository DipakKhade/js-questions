function getmax(arr) {
  
  // Write Javascript code to find the highest element(max) in an array
    if (arr.length == 0) return null
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(getmax([2, 3, 45]));
