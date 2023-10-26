// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// For example, the square matrix arr is shown below:

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];



function diagonalDifference(arr) {
 let primaryDiagonal=0;
 let secondaryDiagonal=0;
 for(let i=0;i<arr.length;i++)
 {
    for(let j=0;j<arr.length;j++)
    {
        if(i==j)
        {
            primaryDiagonal+=arr[i][j]
        }
        if((i+j==(arr.length-1)))
        {
            secondaryDiagonal+=arr[i][j]
        }
    }
 }
//  console.log(primaryDiagonal)
//  console.log(secondaryDiagonal)
 return Math.abs(primaryDiagonal-secondaryDiagonal);
}
console.log(diagonalDifference(arr))
