// *****
// *****
// *****
// *****
// *****
function pattern2(n)
{
    let string="";
    for(let row=1;row<=n;row++)
    {
        for(let col=1;col<=n;col++)
        {
            string+="*"
        }
        string+="\n"
    }
    return string;
}
console.log(pattern2(5))