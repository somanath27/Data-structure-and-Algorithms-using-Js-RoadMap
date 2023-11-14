// *
// **
// ***
// ****
// *****

function pattern1(n)
{
    let string=''
    for(let row=1;row<=n;row++)
    {
        // for every row run the col

        for(let col=1;col<=row;col++)
        {
            string+="*"
        }
        string+='\n'
    }
    return string;
}
console.log(pattern1(5))