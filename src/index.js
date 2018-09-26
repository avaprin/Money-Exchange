// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if(currency>10000)
        return{error: "You are rich, my friend! We don't have so much coins for exchange"};
    if(currency<=0)
        return{};
    var input = { H : 50, Q : 25, D : 10, N : 5, P : 1};
    var output = { H : 0, Q : 0, D : 0, N : 0, P : 0};
    for(key in input)
    {
        while((currency/input[key])>=1)
        {
            currency-=input[key];
            output[key]+=1;
        }
    }
    for(key in output){

        if(!output[key])delete output[key];

    }
    return output;
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}
