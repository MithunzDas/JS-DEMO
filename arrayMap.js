const users=[
    {   
        first_name: 'Mithun',
        last_name: 'Das',
        email: 'mithun.here01@gmail.com',
    },
    {
        first_name: 'Sourav',
        last_name: 'Roy',
        email: 'sourav.here01@gmail.com',
    },
    {
        first_name: 'Mou',
        last_name: 'Roy',
        email: 'Mou.here01@gmail.com',
    }
];

function genId()
{
    const x=(parseInt(Math.random()*1000000));
    return (x);
}
const withId=users.map((user)=>
{
    user.id=genId();
    return user;
});
console.log(users);

// const withId=users.map((user)=>
// {
//     return{
//         id:genId().toString(),
//         ...user,
//     }
// });
// console.log(withId);