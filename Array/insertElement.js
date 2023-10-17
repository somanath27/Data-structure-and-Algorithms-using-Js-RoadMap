let arr = [60, 30, 10, 67, 39];
let newElement = 87;
let position = 2;

let insertElement = (arrElement) => {
  for (let i = arrElement.length - 1; i >= 0; i--) {
    if (i >= position) {
      arrElement[i + 1] = arrElement[i];
      if (i == position) {
        arrElement[i] = newElement;
      }
    }
  }
  return arrElement;
};

console.log(insertElement(arr));

// By using Built In function //

// arr.splice(position,0,newElement)
// console.log(arr)
