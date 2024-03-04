let a=3000;
let d=5;
let t=50;

a>=5000?d=10:a>=3500?d=7:d=5;

let totalamount=a+t-(a*d)/100;
console.log(totalamount);