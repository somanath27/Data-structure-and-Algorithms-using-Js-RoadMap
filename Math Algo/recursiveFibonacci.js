// Finding nth fibonacci number
function recursiveFibonnaci(n)
{
    if(n<2)
    {
        return n
    }
    return recursiveFibonnaci(n-1) + recursiveFibonnaci(n-2)
}
console.log(recursiveFibonnaci(2))

// Big-O - O(n^2)