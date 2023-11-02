function birthdayCake(candles)
{
    const sortedArray=candles.sort((a,b)=>
    {
        return a-b
    })

    let maxNum=sortedArray[sortedArray.length-1]
    let count=0;

    for(let i=0;i<sortedArray.length;i++)
    {
        if(sortedArray[i]===maxNum)
        {
            count++
        }
    }
    return count

}
console.log(birthdayCake([3,9,7,9,0,9]))