// numbers=[100,200,300,400,500];
// console.log(`maximum number: ${Math.max(...numbers)}`);

const numArray=[[2,3],[34,35],[96,97],[100,99]];
const isGreater=(a,b)=>a>b?`${a} is greater than ${b}`:`${b} is greater than ${a}`;
//numArray.forEach(elem=>console.log(isGreater(elem[0],elem[1])));
numArray.forEach(elem=>console.log(isGreater(...elem)));