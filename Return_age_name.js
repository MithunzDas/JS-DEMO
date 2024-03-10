 // get year
 function getYear(birthYear)
 {
    let currYear=new Date().getFullYear();
    return currYear-birthYear;
 }

 function getAgeArray(people)
 {
    return people.map(person=>
        {
            let age=getYear(person.birthYear);
            return{
                name: person.name,
                age: age
            };
        });
 }

// Sample data
const people = [
    { name: "John", birthYear: 1990 },
    { name: "Mary", birthYear: 1988 },
    { name: "Peter", birthYear: 1995 },
    { name: "Mithun",birthYear:1997}
];

console.log(getAgeArray(people));