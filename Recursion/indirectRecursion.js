let money=100;
let apple=0;

let buyApple=(x)=>
{
    if(x>0)
    {
        console.log(`I have ${x} Rs and ${apple} apple`)
        buyMoreApple(x)
    }
    else{
        console.log(`You don't have amount
please recharge to get more..              
You bought ${apple} apple`)
    }
}

let buyMoreApple=(x)=>
{
    apple++
    x=x-10
    buyApple(x)
}

buyApple(money)