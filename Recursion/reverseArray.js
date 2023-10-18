let arr = [4, 6, 7, 8, 0, 3, 9];

let reverseArray = (arr, start, end) => {
  if (start <= end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    reverseArray(arr, start + 1, end - 1);
  }
};
reverseArray(arr, 0, arr.length - 1);

console.log(arr);

// By Using Inbuilt method

// arr.reverse()
// console.log(arr)
