const arr=[-6,20,8,-2,4]
function insertionSort(arr)
{
    for(let i=1;i<arr.length;i++)
    {
        let numberToInsert=arr[i]; //for first case no to insert=20
        let j=i-1;  //this value =-6 
        while(j>=0 && arr[j]>numberToInsert)
        {
            arr[j+1] =arr[j]
            j=j-1
        }
        arr[j+1]=numberToInsert //for first case arr[0+1] =20
    }
}
insertionSort(arr)
console.log(arr)