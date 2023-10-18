function test(x)
{
    if(x>0)
    {
        test(x-1)
    }
    console.log(x)
}
test(5)