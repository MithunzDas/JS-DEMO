// const str='Mithun is a good boy. Mithun gf is Mou.';
// const t=str.replaceAll('Mithun','Liton');
// console.log(t);

const message='Hoogly is 200 miles from Habra and about 150  miles from kolkata';
const messagekms=message.replace(/\d+(?!miles)/g, (miles)=>miles*1.609).replace(/miles/g,'kms');
console.log(messagekms);