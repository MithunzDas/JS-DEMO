arr=[23,34,5,6,77,8,9];
arr.splice(1,2,99);    //splice changes the existance array and added new element
console.log(arr); //23,99,6,77,8,9
 let arr2=arr.slice(1);   //slice need another array to store value
console.log(arr2); //99
