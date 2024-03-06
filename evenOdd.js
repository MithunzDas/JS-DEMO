const arr=[1,2,3,4,5,6,7,8,9,10];
let even=[];
let evenIndex=[];
let odd=[];
let oddIndex=[];
arr.forEach((e,i)=>
    {
        if(e%2===0)
        {
            even.push(e);
            evenIndex.push(i);
        }
        else{
            odd.push(e);
            oddIndex.push(i);
        }
    });
    console.log(`Even  Number: ${even}`);
    
    console.log(`EvenPosition: ${evenIndex}`);
    
    console.log(`Odd   Number: ${odd}`);
    
    console.log(`Odd Position: ${oddIndex}`);

