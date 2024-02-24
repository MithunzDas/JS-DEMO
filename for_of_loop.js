// const users=[
//     {
//         id:1 ,
//         name:'Mithun Das',
//         age:27,
//         proffession:'Software Engineer',
//     },
//     {
//         id:1 ,
//         name:'Mou Roy',
//         age:22,
//         proffession:'Lawer',
//     },
// ];
// const introduceUser=(user)=>`${user.name} is ${user.age} years old and works as a ${user.proffession} `;
// for(const user of users)
// {
//     console.log(introduceUser(user));
// }

// const averageOfNums=function()
// {
//     let sum=0;
//     for(const argument of arguments)
//     {
//         sum+=argument;
//     }
//     return sum/arguments.length;
// };
// console.log(averageOfNums(1,2,3,4,5,6,7,8,9,10));

// const colors=['Red','Blue','Green','White'];
// for(const index in colors)
// {
//     console.log(index);
// }
// for(const index in colors)
// {
//     console.log(colors[index]);
// }



'use strict';

const products = [
  {
    id: 1,
    name: 'Oranges',
    quantity: 2,
    cost: 1.2,
  },
  {
    id: 2,
    name: 'Chocolate Cake',
    quantity: 2,
    cost: 65,
  },
  {
    id: 3,
    name: 'Coke Zero',
    quantity: 12,
    cost: 1.45,
  },
];

const totalCost = (item) => {
  return `Total Cost: $${item.quantity * item.cost}
------------------------------`;
};

for (const product of products) {
    for (const prop in product) {
      console.log(`${prop}: ${product[prop]}`);
    }
    console.log(totalCost(product));
  }
