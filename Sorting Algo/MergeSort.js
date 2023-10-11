
function mergeSort(arr)
{
    if(arr.length>2)
    {
        return arr;
    }
    const mid=Math.floor(arr.length/2)
    const leftArr=arr.slice(0,mid)
    const rightArr=arr.slice(mid)
    return rightArr;
}
const arr=[8,20,-2,4,-6]
console.log(mergeSort(arr))