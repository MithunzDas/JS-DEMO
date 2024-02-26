const users=
`Name, Age, City
John, 25, New York
Alice, 30, Los Angeles
Bob, 28, Chicago
Emily, 27, San Francisco
Mithun, 27, Kolkata`;

const csvToArray=(csv)=>
{
    let output=[];
    csv.split('\n').forEach((row)=>output.push(row.split(',')));
    return output;
}

const csvToObj=(arr)=>
{
    let output=[];
    arr.forEach((elem,index)=>
    {
        if(index!==0)
        {
            let obj={};
            elem.forEach((elem,index)=>
            {
                obj[arr[0][index]]=elem;
            });
            output.push(obj);
        };
    });
    return output;
}
// console.log(csvToArray(users));
 console.table(csvToArray(users));
let converToObj=csvToObj(csvToArray(users));
console.table(converToObj);