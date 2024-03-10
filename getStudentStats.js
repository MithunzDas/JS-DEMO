function getStudentstats(students)
{
    let totalAge=0;
    let oldestAge=-Infinity;
    let youngestAge=Infinity;
    let oldestName="";
    let youngestName="";

    students.forEach(student=>
        {
            totalAge+=student.age;
            if(student.age>oldestAge)
            {
                oldestAge=student.age;
                oldestName=student.name;
            }
            if(student.age<youngestAge)
            {
                youngestAge=student.age;
                youngestName=student.name;
            }
        });
        const avgAge=totalAge/students.length;
        return {
            avgAge: avgAge.toFixed(2), // Calculates the average age and formats it to 2 decimal places
            oldest: oldestName, // Returns the name of the oldest student
            youngest: youngestName // Returns the name of the youngest student
        };
        
}

// Sample data
const students = [
    { name: "John", age: 25 },
    { name: "Mary", age: 30 },
    { name: "Peter", age: 20 },
    { name: "Sarah", age: 28 }
];

console.log(getStudentstats(students));