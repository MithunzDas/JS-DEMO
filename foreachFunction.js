const names=['Mithun','Mou','Athena','Sourav','Sukanta'];
const flipName=function (elem,index)
{
    console.log(elem.split('').reverse().join(''));
};
names.forEach(flipName);
console.log("\n\n");

const flip=function(elem,index)
{
    console.log(names[names.length-1-index]);
}
names.forEach(flip);

console.log("\n\n");

const flipEachName=function(e,i)
{
    console.log(names[names.length-1-i].split('').reverse().join(''));
}
names.forEach(flipEachName);