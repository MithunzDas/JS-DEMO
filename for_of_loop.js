const users=[
    {
        id:1 ,
        name:'Mithun Das',
        age:27,
        proffession:'Software Engineer',
    },
    {
        id:1 ,
        name:'Mou Roy',
        age:22,
        proffession:'Lawer',
    },
];
const introduceUser=(user)=>`${user.name} is ${user.age} years old and works as a ${user.proffession} `;
for(const user of users)
{
    console.log(introduceUser(user));
}

const averageOfNums=function()
{
    let sum=0;
    for(const argument of arguments)
    {
        sum+=argument;
    }
    return sum/arguments.length;
};
console.log(averageOfNums(1,2,3,4,5,6,7,8,9,10));