let students = [
    { name: "John", age: 25 },
    { name: "Mary", age: 30 },
    { name: "Peter", age: 20 }
];

function sortObjectByProperty(array,property)
{
    return array.slice().sort((a,b)=>   //making sallow copy
    {
        if (a[property]<b[property])
        {
            return -1;
        }
        if(a[property]>b[property])
        {
            return 1;
        }
        return 0;
    });
}
console.log(sortObjectByProperty(students,"age"));
console.log(sortObjectByProperty(students,"name"));