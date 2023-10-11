function fibbonacci(n)
{
   let fib=[0,1];
   for(let i=2;i<n;i++)
   {
    fib[i]=fib[i-1]+fib[i-2]
   }
   return fib;
}
console.log(fibbonacci(2)) // [0,1]
console.log(fibbonacci(3)) // [0,1,1]
console.log(fibbonacci(7)) // [0,1,1,2,3,5,8]
// Big-O = O(n)