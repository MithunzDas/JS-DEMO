const users=
`Name, Age, City
John, 25, New York
Alice, 30, Los Angeles
Bob, 28, Chicago
Emily, 27, San Francisco
Mithun, 27, Kolkata`;

const csvToArray=(csv)=>{
    let output=[];
    for(const row of csv.split('\n'))
    {
        output.push(row.split(','));
    }
    return output;
};

console.table(csvToArray(users));