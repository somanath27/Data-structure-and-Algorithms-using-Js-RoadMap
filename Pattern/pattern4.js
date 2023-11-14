// 1
// 12
// 123
// 1234
// 12345
function pattern4(n)
{
    let string=""
    for(let row=1;row<=n;row++)
    {
        for(let col=1;col<=row;col++)
        {
            string+=col
        }
        string+="\n"
    }
    return string;
}
console.log(pattern4(5))