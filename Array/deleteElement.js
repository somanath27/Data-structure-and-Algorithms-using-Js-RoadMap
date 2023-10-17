let arr = [60, 30, 10, 67, 39];
let position = 2;

let deleteElement = (arrElement) => {
  for (let i = position; i < arrElement.length - 1; i++) {
    arrElement[i] = arrElement[i + 1];
  }
  arrElement.length = arrElement.length - 1;
  return arrElement;
};

console.log(deleteElement(arr));


// By Using Inbuilt method

// arr.splice(position,1)
// console.log(arr)
