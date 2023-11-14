// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

function pattern5(n)
{
    let string=""
    for(let row=1;row<=(2*n-1);row++)
    {
        let collimit=row>n? 2*n-row:row
        for(let col=1;col<=collimit;col++)
        {
            string+="*"
        }
        string+="\n"
    }
    return string
}
console.log(pattern5(5))