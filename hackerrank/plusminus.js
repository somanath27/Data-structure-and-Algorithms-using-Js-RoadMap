function plusMinus(arr)
{
let length=arr.length;
let positive=0;
let negetive=0;
let zero=0;
for(let i=0;i<length;i++)
{
    if(arr[i]>0)
    {
        positive++;
    }
    else if(arr[i]<0)
    {
        negetive++;
    }
    else{
        zero++;
    }
   
}
console.log(positive/length);
console.log(negetive/length);
console.log(zero/length);
}
console.log(plusMinus([-4, 3, -9, 0, 4, 1]))