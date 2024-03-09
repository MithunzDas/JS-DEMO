numbers=[1,2,3,4,5,6,7,8];
//method-1
const newArray1=numbers.filter(e=>e%2===0);
console.log(newArray1);

//method-2
let newArray2=[];
numbers.forEach(e=>
    {
        if(e%2===0)
        {
            newArray2.push(e);
        }
    });
    console.log(newArray2);