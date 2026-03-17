import {test,expect} from 'playwright/test';

//Samsle transaction data

 const amountValues = [10.00, 1000000.00, 0]

//purchases
test('process purchase',async ({request}) =>{

    console.log("purchase")

});

//refund
test('process refund',async ({request}) =>{
 console.log("refund")
});

//pre_auths
test('process preauthorization',async ({request}) =>{
 console.log("purchase")
});

//pre_auth correction
test('process preauthorization completion $0',async ({request}) =>{
 console.log("preauthorization 0 ")
});

test('process preauthorization completion $10.00',async ({request}) =>{
 console.log("purchase  10")
});

test('process preauthorization completion $100.00',async ({request}) =>{
 console.log("purchase 100")
});

//purchase correction
test('process purchase correction',async ({request}) =>{
 console.log("purchase correction")
});

//refund corrections
test('process refund correction',async ({request}) =>{
 console.log("refund correction")
});
//purchase reversal
test('process purchase reversal',async ({request}) =>{
 console.log("purchase reversal")
});