// const numbers=[1,2,3,4,5];
// const [first,second,...rest]=numbers;
// console.log(first);
// console.log(rest);



const person={
    firstName : 'Mithun',
    lastName : 'Das',
    age : 27
};
 // const{firstName,lastName,age}=person;

personInfo(person);

function personInfo({firstName,lastName,age})
{
    console.log(`${firstName} ${lastName} is a ${age} years old man`);
}

// console.log(firstName);




