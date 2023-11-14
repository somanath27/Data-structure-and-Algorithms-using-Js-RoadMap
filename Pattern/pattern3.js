// *****
// ****
// ***
// **
// *

function pattern3(n)
{
    let string=""
    for(let row=1;row<=n;row++)
    {
        for(let col=1;col<=(n-row+1);col++)
        {
            string+="*"
        }
        string+="\n"
    }
    return string;
}
console.log(pattern3(5))