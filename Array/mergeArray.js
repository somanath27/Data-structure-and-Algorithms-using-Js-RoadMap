let data1 = [1, 2, 3];
let data2 = [9, 8, 7];

let data3 = [];
let x;

data1.length > data2.length?  x = data1.length: x = data2.length;

for (let i = 0; i < x; i++) {
  if (i < data1.length) {
    data3[i] = data1[i];
  }
  if (i < data2.length) {
    data3[data1.length + i] = data2[i];
  }
}

console.log(data3);
