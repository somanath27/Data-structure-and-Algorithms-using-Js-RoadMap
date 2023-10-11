function climbingstairCase(n)
{
    const noOfWays=[1,2]
    {
        for(let i=2;i<=n;i++)
        {
            noOfWays[i]=noOfWays[i-1] + noOfWays[i-2]
        }
    }
    return noOfWays[n-1]
}
console.log(climbingstairCase(2))
console.log(climbingstairCase(3))
console.log(climbingstairCase(4))
console.log(climbingstairCase(5))