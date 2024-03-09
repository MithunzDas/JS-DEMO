
const oldStr=['apple', 'banana', 'orange', 'apple', 'pear', 'banana', 'kiwi', 'kiwi','Mithun'];

function uniqueString(arr)
{
    const uniqueArray=[];
    arr.forEach((e,i)=>
    {
        if (arr.indexOf(e)===i)
        {
            uniqueArray.push(e);
        }
    });
    return uniqueArray;
};
console.log(uniqueString(oldStr));