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