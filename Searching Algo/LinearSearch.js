function linearSearch(arr,target)
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]===target)
        {
            return i
        }
    }
    return -1
}
console.log(linearSearch([-5,2,10,4,6],11))
console.log(linearSearch([-5,2,10,4,6],4))
console.log(linearSearch([-5,2,10,4,6],6))

// Big-O-- O(n)