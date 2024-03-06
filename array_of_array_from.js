let arr1=Array.of(1,2,3,4,5,6,7,8);  // making array with 1 to 8
console.log(arr1);

let arr2=Array.from(arr1,e=>e*2);   // Array.from use
let arr3=arr1.map(e=>e*3);
console.log(arr2);
console.log(arr3);

const numArray=[[1,2],[3,4],[5,6],[7,8],[9,10]];
let arr4=Array.from(numArray,e=>e[0]+e[1]);
console.log(arr4);
let arr5=numArray.map(e=>e[0]+e[1]);
console.log(arr5);
