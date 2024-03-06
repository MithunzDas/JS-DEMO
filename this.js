function person(name,age)
{
    this.name=name;
    this.age=age;
}
const person1=new person('Mithun Das',26);
const person2=new person('Mou Roy',23);
console.log(`Candidate name: ${person1.name} & Candidate age: ${person1.age}`);
console.log(`Candidate name: ${person2.name} & Candidate age: ${person2.age}`);
